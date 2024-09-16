"use client";

import { QuickSettingsMenu } from "@/components/quick-settings-menu";
import { SearchMenu } from "@/components/search-menu";
import { StartMenu } from "@/components/start-menu";
import { NotificationCenter } from "./notification-center";

export const Menus = () => {
  return (
    <>
      <StartMenu />
      <SearchMenu />
      <QuickSettingsMenu />
      <NotificationCenter />
    </>
  );
};
