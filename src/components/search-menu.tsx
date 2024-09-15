import { pinnedApps } from "@/assets/data";
import { useMenu } from "@/hooks/use-menu-store";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const SearchMenu = () => {
  const { isOpen, type, onClose } = useMenu();

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 z-[5] hidden",
          type === "search" && "block"
        )}
      />
      <div
        className={cn(
          "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-lg text-white rounded-xl w-[900px] border border-white border-opacity-10 shadow-lg transition-all ease-in-out z-10 overflow-hidden",
          isOpen && type === "search"
            ? "translate-y-0"
            : "translate-y-full bottom-0"
        )}
      >
        <div className="p-6 mb-20">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <h2 className="text-md font-semibold mb-4">Recent</h2>
              <div className="flex flex-col gap-y-2">
                {pinnedApps.map((app) => (
                  <button
                    key={app.name}
                    className="flex items-center gap-x-4 p-2 hover:bg-gray-600/30 transition-colors cursor-auto rounded-md"
                  >
                    <Image
                      src={app.icon}
                      width={35}
                      height={35}
                      alt={app.name}
                      className="size-8"
                    />
                    <span>{app.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div>
                <h2 className="text-md font-semibold mb-4">Quick Search</h2>
                <div className="bg-gray-500/20 p-4 rounded-md flex flex-wrap gap-4">
                  <button className="bg-gray-500/30 px-4 py-2 rounded-full">
                    Focus settings
                  </button>
                  <button className="bg-gray-500/30 px-4 py-2 rounded-full">
                    Sound settings
                  </button>
                  <button className="bg-gray-500/30 px-4 py-2 rounded-full">
                    Bluetooth & devices
                  </button>
                  <button className="bg-gray-500/30 px-4 py-2 rounded-full">
                    Display settings
                  </button>
                  <button className="bg-gray-500/30 px-4 py-2 rounded-full">
                    Colour settings
                  </button>
                  <button className="bg-gray-500/30 px-4 py-2 rounded-full">
                    Search settings
                  </button>
                </div>
              </div>
              <div className="mt-6 mb-4">
                <h2 className="text-md font-semibold mb-4">Quick Search</h2>
                <div className="grid grid-cols-3 gap-4">
                  {pinnedApps.map((app) => (
                    <button
                      key={app.name}
                      className="flex flex-col items-center gap-y-2 p-3 bg-gray-600/30 transition-colors cursor-auto rounded-md"
                    >
                      <Image
                        src={app.icon}
                        width={38}
                        height={38}
                        alt={app.name}
                        className="size-10"
                      />
                      <span className="text-sm">{app.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
