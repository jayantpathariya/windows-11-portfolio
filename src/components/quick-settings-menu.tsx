import { useMenu } from "@/hooks/use-menu-store";
import { cn } from "@/lib/utils";
import {
  BatteryCharging,
  Bluetooth,
  Pen,
  PersonStanding,
  Plane,
  SatelliteDish,
  Settings,
  Share,
  SunIcon,
  SunMoon,
  Volume2,
  Wifi,
} from "lucide-react";
import { QuickSettingsButton } from "./quick-settings-button";
import { QuickSettingsSlider } from "./quick-settings-slider";

export const QuickSettingsMenu = () => {
  const { isOpen, type, onClose } = useMenu();

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 z-[5] hidden",
          type === "quick-settings" && "block"
        )}
      />
      <div
        className={cn(
          "fixed bottom-20 right-5 bg-gray-800 bg-opacity-90 backdrop-blur-lg text-white rounded-md w-[520px] border border-white border-opacity-10 shadow-lg transition-all ease-in-out z-10 overflow-hidden",
          isOpen && type === "quick-settings"
            ? "translate-y-0"
            : "translate-y-full bottom-0"
        )}
      >
        <div className="p-8">
          <div className="grid grid-cols-3 gap-x-4 gap-y-8">
            <QuickSettingsButton icon={Wifi} text="WiFi" withOption enabled />
            <QuickSettingsButton icon={Bluetooth} text="Bluetooth" withOption />
            <QuickSettingsButton
              icon={Plane}
              text="Flight Mode"
              onClick={() => {}}
            />
            <QuickSettingsButton icon={BatteryCharging} text="Battery saver" />
            <QuickSettingsButton icon={SunMoon} text="Night light" enabled />
            <QuickSettingsButton icon={SatelliteDish} text="Mobile hotspot" />
            <QuickSettingsButton icon={PersonStanding} text="Accessibility" />
            <QuickSettingsButton icon={Share} text="Nearby sharing" />
          </div>
          <div className="mt-12 space-y-10">
            <QuickSettingsSlider icon={SunIcon} />
            <QuickSettingsSlider icon={Volume2} />
          </div>
        </div>
        <div className="bg-gray-700/50 p-1 flex items-center justify-between">
          <div className="flex items-center gap-x-2 hover:bg-gray-600/40 p-3 rounded-md cursor-auto">
            <BatteryCharging className="text-gray-300 size-8" />
            <span className="text-gray-300 text-lg font-semibold">72%</span>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="hover:bg-gray-600/40 p-4 rounded-md">
              <Pen className="text-gray-300 size-5" />
            </div>
            <div className="hover:bg-gray-600/40 p-4 rounded-md">
              <Settings className="text-gray-300 size-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
