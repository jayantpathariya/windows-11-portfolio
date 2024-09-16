"use client";

import { format } from "date-fns";
import { BatteryMedium, Bell, ChevronUp, Volume2, Wifi } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { TaskbarButton } from "@/components/taskbar-button";
import { Tooltip } from "@/components/tooltip";
import { useMenu } from "@/hooks/use-menu-store";

export const Taskbar = () => {
  const { isOpen, onOpen, onClose } = useMenu();

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleStartMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isOpen) onClose();
    else onOpen("start");
  };

  const handleSearchMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isOpen) onClose();
    else onOpen("search");
  };

  const handleQuickSettingsMenuClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (isOpen) onClose();
    else onOpen("quick-settings");
  };

  const handleNotificationMenuClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (isOpen) onClose();
    else onOpen("notification");
  };

  return (
    <div
      onClick={onClose}
      className="fixed bottom-0 left-0 right-0 h-16 bg-black bg-opacity-30 backdrop-blur-md border-t border-white border-opacity-10 flex items-center z-50"
    >
      <div className="flex-1" />
      <div className="flex items-center justify-center gap-x-2">
        <TaskbarButton
          tooltipText="Start"
          imageSrc="/applications/start.png"
          imageAlt="Start icon"
          onClick={handleStartMenuClick}
        />
        <Tooltip text="Search">
          <button
            onClick={handleSearchMenuClick}
            className="bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-10 flex items-center justify-center gap-x-3 px-4 py-1 rounded-full hover:bg-opacity-35 cursor-auto"
          >
            <Image src="/search.png" width={22} height={22} alt="Search icon" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-gray-100 placeholder:text-neutral-200 text-lg outline-none"
            />
          </button>
        </Tooltip>

        <TaskbarButton
          tooltipText="Desktop"
          imageSrc="/applications/task-view.png"
          imageAlt="Task view icon"
        />

        <TaskbarButton
          tooltipText="Explorer"
          imageSrc="/applications/explorer.png"
          imageAlt="Explorer icon"
        />

        <TaskbarButton
          tooltipText="Microsoft Store"
          imageSrc="/applications/store.png"
          imageAlt="Store icon"
        />

        <TaskbarButton
          tooltipText="Terminal"
          imageSrc="/applications/terminal.png"
          imageAlt="Terminal icon"
        />

        <TaskbarButton
          tooltipText="VsCode"
          imageSrc="/applications/vscode.png"
          imageAlt="VS Code icon"
        />
      </div>
      <div className="flex-1 flex  items-center justify-end mr-5">
        <Tooltip text="Show hidden icons">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <ChevronUp className="size-6 text-white" />
          </div>
        </Tooltip>
        <button
          className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out flex items-center gap-x-3"
          onClick={handleQuickSettingsMenuClick}
        >
          <Tooltip text="Jayant">
            <Wifi className="size-5 text-white" />
          </Tooltip>
          <Tooltip text="53%">
            <Volume2 className="size-5 text-white" />
          </Tooltip>
          <Tooltip text="Battery status: 53%">
            <BatteryMedium className="size-6 text-white" />
          </Tooltip>
        </button>
        <Tooltip text="14 September 2024">
          <button
            onClick={handleNotificationMenuClick}
            className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out flex items-center gap-x-3"
          >
            <div className="text-gray-100 text-sm flex flex-col items-center justify-normal">
              <p>{format(currentDate, "hh:mm a")}</p>
              <p>{format(currentDate, "dd-MM-yyyy")}</p>
            </div>
            <Bell className="size-6 text-white" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
