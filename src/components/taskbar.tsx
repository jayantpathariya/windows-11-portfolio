import { BatteryMedium, Bell, ChevronUp, Volume2, Wifi } from "lucide-react";
import Image from "next/image";
import { Tooltip } from "./tooltip";

export const Taskbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-black bg-opacity-30 backdrop-blur-md border-t border-white border-opacity-10 flex items-center">
      <div className="flex-1" />
      <div className="flex items-center justify-center gap-x-2">
        <Tooltip text="Start">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <Image src="/start.png" width={32} height={32} alt="Start icon" />
          </div>
        </Tooltip>
        <Tooltip text="Search">
          <div className="bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-10 flex items-center justify-center gap-x-3 px-4 py-1 rounded-full hover:bg-opacity-35">
            <Image src="/search.png" width={22} height={22} alt="Search icon" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-gray-100 placeholder:text-neutral-200 text-lg outline-none"
            />
          </div>
        </Tooltip>
        <Tooltip text="Desktop">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <Image
              src="/task-view.png"
              width={32}
              height={32}
              alt="Task view icon"
            />
          </div>
        </Tooltip>
        <Tooltip text="Explorer">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <Image
              src="/explorer.png"
              width={32}
              height={32}
              alt="Explorer icon"
            />
          </div>
        </Tooltip>
        <Tooltip text="Microsoft Store">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <Image src="/store.png" width={32} height={32} alt="Store icon" />
          </div>
        </Tooltip>
        <Tooltip text="Terminal">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <Image
              src="/terminal.png"
              width={32}
              height={32}
              alt="Terminal icon"
            />
          </div>
        </Tooltip>
        <Tooltip text="VsCode">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <Image
              src="/vscode.png"
              width={32}
              height={32}
              alt="VS Code icon"
            />
          </div>
        </Tooltip>
      </div>
      <div className="flex-1 flex  items-center justify-end mr-5">
        <Tooltip text="Show hidden icons">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out">
            <ChevronUp className="size-6 text-white" />
          </div>
        </Tooltip>
        <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out flex items-center gap-x-3">
          <Tooltip text="Jayant">
            <Wifi className="size-5 text-white" />
          </Tooltip>
          <Tooltip text="53%">
            <Volume2 className="size-5 text-white" />
          </Tooltip>
          <Tooltip text="Battery status: 53%">
            <BatteryMedium className="size-6 text-white" />
          </Tooltip>
        </div>
        <Tooltip text="14 September 2024">
          <div className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out flex items-center gap-x-3">
            <div className="text-gray-100 text-sm flex flex-col items-center justify-normal">
              <p>09:49 PM</p>
              <p>14-09-2024</p>
            </div>
            <Bell className="size-6 text-white" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
