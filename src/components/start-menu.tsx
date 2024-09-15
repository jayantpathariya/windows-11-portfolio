"use client";

import { ChevronRight, Power } from "lucide-react";
import Image from "next/image";

import { pinnedApps, recommendedApps } from "@/assets/data";
import { Tooltip } from "@/components/tooltip";
import { useMenu } from "@/hooks/use-menu-store";
import { cn } from "@/lib/utils";

export const StartMenu = () => {
  const { isOpen, type, onClose } = useMenu();

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 z-[5] hidden",
          isOpen && type === "start" && "block"
        )}
      />
      <div
        className={cn(
          "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-lg text-white rounded-xl w-[750px] border border-white border-opacity-10 shadow-lg transition-all ease-in-out z-10 overflow-hidden",
          isOpen && type === "start"
            ? "translate-y-0"
            : "translate-y-full bottom-0"
        )}
      >
        <div className="p-6">
          <div className="flex items-center mb-10 relative bg-gray-700 rounded-full w-full">
            <Image
              src="/search.png"
              width={20}
              height={20}
              alt="Search icon"
              className="size-5 absolute top-1.5 left-4"
            />
            <input
              type="text"
              placeholder="Search for apps, settings and documents"
              className="py-1 px-4 focus:outline-none ml-8 bg-transparent w-full"
            />
          </div>

          <div className="flex items-center justify-between mb-4 px-10">
            <h2 className="text-md font-semibold">Pinned</h2>
            <button className="flex items-center gap-x-2 bg-white/10 backdrop-blur-md py-1 px-2 rounded-lg text-sm hover:bg-white/15 transition-all duration-100 ease-in-out cursor-auto">
              All apps <ChevronRight className="size-5 text-white" />
            </button>
          </div>
          <div className="grid grid-cols-6 mb-6">
            {pinnedApps.map((app, index) => (
              <button
                key={index}
                className="flex flex-col gap-y-2 items-center justify-center rounded-lg w-full aspect-square p-2 hover:bg-gray-600/30 transition-colors cursor-auto"
              >
                <Image
                  src={app.icon}
                  width={38}
                  height={38}
                  alt={app.name}
                  className="size-9"
                />
                <span className="text-sm text-center">{app.name}</span>
              </button>
            ))}
          </div>

          <div className="px-10">
            <h2 className="text-md font-semibold mb-6">Recommended</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {recommendedApps.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center rounded-lg p-2 hover:bg-gray-600/30 transition-colors cursor-auto gap-x-3"
                >
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="size-11"
                  />
                  <div className="flex flex-col items-start text-sm">
                    <p>{item.name}</p>
                    <p className="text-gray-400">{item.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex bg-gray-900/60 justify-between items-center py-4 px-10">
          <Tooltip text="Jayant">
            <div className="flex items-center gap-x-2 hover:bg-gray-600/30 transition-colors px-4 py-2 rounded-md">
              <Image
                src="/user.png"
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2"
                width={40}
                height={40}
              />
              <span>Jayant</span>
            </div>
          </Tooltip>
          <Tooltip text="Power">
            <div className="flex space-x-2">
              <button className="p-3 hover:bg-gray-600/30 transition-colors rounded-md">
                <Power size={25} />
              </button>
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
