import { useState } from "react";
import "./Profile.css";
import Suspiciuni from "../components/Suspiciuni";
import { getAge } from "../utils/utils";

// Some extra bottom padding is necessary on mobile.
const BOTTOM_PADDING = 100;
// Image can shrink up to 60% of its height.
const MIN_IMG_SCALE = 0.6;

const DetailsCard = ({ profileInfo }) => {
  return (
    <div id="card" className="card">
      <div id="details" className="details">
        <h1 className="name">
          {profileInfo.prenume} {profileInfo.nume}
        </h1>
        <div className="section">
          <div className="subsection">
            <label className="top-line">Funcția actuală</label>
            <label className="bottom-line">{profileInfo.titlu}</label>
          </div>
        </div>
        <div className="section">
          <div className="subsection">
            <label className="top-line">Localitate</label>
            <label className="bottom-line">{profileInfo.localitate}</label>
          </div>

          <div className="subsection">
            <label className="top-line">Vârstă</label>
            <label className="bottom-line">
              {getAge(profileInfo.data_nasterii)}
            </label>
          </div>
        </div>

        <div className="section">
          <div className="subsection">
            <label className="top-line">Suspiciuni</label>
            <Suspiciuni color={profileInfo.partid_politic.culoare} />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * The Profile component.
 */
// TODO: Reset scroll position when the profile page is opened.
export default function Profile({ profileInfo }) {
  let mobileScreenMediaQuery = window.matchMedia("(max-width: 768px)");
  let [isMobile, setIsMobile] = useState(mobileScreenMediaQuery.matches);
  let isScrollingInitialized = false;

  let initialImgHeight = -1;
  let isScrollingCard = false;
  let initialCardScrollY = -1;

  function getImageUrl() {
    const imageUrl = isMobile
      ? profileInfo.avatar_orizontal.url
      : profileInfo.avatar_vertical.url;

    return imageUrl;
  }

  function resetStyling() {
    isScrollingInitialized = false;
    document.getElementById("image").style.height = "";
    document.getElementById("card").style.top = "";
    document.getElementById("details").style.marginTop = "";
    document.getElementById("scrollable").style.height = "";
  }

  // TODO: Remove event listener when component is closed.
  addEventListener("resize", (event) => {
    if (!isMobile && mobileScreenMediaQuery.matches) {
      setIsMobile(true);
      resetStyling();
    }

    if (isMobile && !mobileScreenMediaQuery.matches) {
      setIsMobile(false);
      resetStyling();
      window.scrollTo(0, 0);
    }
  });

  window.addEventListener("scroll", () => {
    if (!mobileScreenMediaQuery.matches) {
      // Allow scrolling only on mobile.
      return;
    }

    if (!isScrollingInitialized) {
      initScrolling();
    }

    const detailsElement = document.getElementById("details");
    const scrollY = window.scrollY;
    const minImgHeight = MIN_IMG_SCALE * initialImgHeight;
    let newImgHeight = initialImgHeight - scrollY;

    // Check if computed image height is below the minimum allowed height.
    if (newImgHeight < minImgHeight) {
      // Cap image height to the minimum allowed height.
      newImgHeight = minImgHeight;
      if (!isScrollingCard) {
        // Save the position of the scroll at this point.
        initialCardScrollY = scrollY;
        isScrollingCard = true;
      }
      detailsElement.style.marginTop = `${initialCardScrollY - scrollY}px`;
    } else {
      // Stop scrolling the card content.
      isScrollingCard = false;
      // Reset the position of the card content.
      detailsElement.style.marginTop = 0;
    }

    document.getElementById("image").style.height = `${newImgHeight}px`;
    document.getElementById("card").style.top = `${newImgHeight}px`;
  });

  function initScrolling() {
    isScrollingInitialized = true;

    const imageElement = document.getElementById("image");
    const cardElement = document.getElementById("card");
    const scrollableElement = document.getElementById("scrollable");
    // Compute initial height of the image and the total scrolling height.
    initialImgHeight = imageElement.offsetHeight;
    const scrollHeight = imageElement.offsetHeight + cardElement.offsetHeight;
    scrollableElement.style.height = `${scrollHeight + BOTTOM_PADDING}px`;
  }

  return (
    <>
      <div
        className="container"
        style={{
          "--image-url": `url(${getImageUrl()})`,
          "--color-value": `${profileInfo.partid_politic.culoare}`,
        }}
      >
        <div id="image" className="image">
          <div className="gradient" />
        </div>
        <DetailsCard profileInfo={profileInfo} />

        {/* Used only on mobile. */}
        <div id="scrollable" className="scrollable"></div>
      </div>
    </>
  );
}
