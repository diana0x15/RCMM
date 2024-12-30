import { useState, useEffect } from "react";
import "./Profile.css";
import Suspiciuni from "./Suspiciuni";
import { useScroll, useMotionValueEvent } from "motion/react";

// Some extra bottom padding is necessary on mobile.
const BOTTOM_PADDING = 100;
// Image can shrink up to 60% of its height.
const MIN_IMG_SCALE = 0.6;

const DetailsCard = () => {
  return (
    <div id="card" className="card">
      <div id="details" className="details">
        <h1 className="name">Marcel Ciolacu</h1>
        <div className="section">
          <div className="subsection">
            <label className="top-line">Funcția actuală</label>
            <label className="bottom-line">Prim-ministrul României</label>
          </div>
        </div>
        <div className="section">
          <div className="subsection">
            <label className="top-line">Localitate</label>
            <label className="bottom-line">Buzău</label>
          </div>

          <div className="subsection">
            <label className="top-line">Vârstă</label>
            <label className="bottom-line">62</label>
          </div>
        </div>

        <div className="section">
          <div className="subsection">
            <label className="top-line">Suspiciuni</label>
            <Suspiciuni />
          </div>
        </div>
      </div>
    </div>
  );
};

export function Profile() {
  let mobileScreenMediaQuery = window.matchMedia("(max-width: 768px)");
  let isMobile = mobileScreenMediaQuery.matches;
  let isScrollingInitialized = false;

  let initialImgHeight = -1;
  let isScrollingCard = false;
  let initialCardScrollY = -1;

  function resetStyling() {
    isScrollingInitialized = false;
    document.getElementById("image").style.height = "";
    document.getElementById("card").style.top = "";
    document.getElementById("details").style.marginTop = "";
    document.getElementById("scrollable").style.height = "";
  }

  addEventListener("resize", (event) => {
    if (!isMobile && mobileScreenMediaQuery.matches) {
      isMobile = true;
      resetStyling();
    }

    if (isMobile && !mobileScreenMediaQuery.matches) {
      isMobile = false;
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
      <div className="container">
        <div id="image" className="image">
          <div className="gradient" />
        </div>
        <DetailsCard />

        {/* Used only on mobile. */}
        <div id="scrollable" className="scrollable"></div>
      </div>
    </>
  );
}
