import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

export default function SegmentedControl({ selectedParty }) {
  if (!selectedParty) {
    return null;
  }
  return (
    <Tabs sx={{ bgcolor: "transparent" }} aria-label="tabs" defaultValue={0}>
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: "xl",
          bgcolor: "background.level1",
          fontFamily: "Inter",
          fontSize: 16,
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "sm",
            bgcolor: "background.surface",
          },
        }}
      >
        <Tab disableIndicator>Activi</Tab>
        <Tab disableIndicator>Numiți Politic</Tab>
        <Tab disableIndicator>Afilieri Politice</Tab>
      </TabList>
    </Tabs>
  );
}
