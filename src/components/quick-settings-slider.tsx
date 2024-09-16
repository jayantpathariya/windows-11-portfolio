import * as Slider from "@radix-ui/react-slider";
import { LucideIcon } from "lucide-react";

type QuickSettingsSliderProps = {
  icon: LucideIcon;
};

export const QuickSettingsSlider = ({
  icon: Icon,
}: QuickSettingsSliderProps) => {
  return (
    <div className="w-full flex items-center gap-x-4">
      <Icon className="text-gray-300" size={24} />
      <Slider.Root
        min={0}
        max={100}
        className="relative w-[80%] flex items-center"
      >
        <Slider.Track className="relative h-1.5 w-full grow rounded-full bg-gray-600">
          <Slider.Range className="absolute h-full bg-sky-500 rounded-full" />
        </Slider.Track>

        <Slider.Thumb className="block size-4 bg-sky-500 rounded-full focus:outline-none transition-all duration-200 ring-4 ring-gray-500 hover:scale-[1.3] hover:ring-2" />
        {/* <Slider.Thumb className="block w-5 h-5 bg-white rounded-full hover:bg-sky-50 focus:outline-none ring-4 ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 shadow-[0_0_0_4px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_6px_rgba(255,255,255,0.2)]" /> */}
      </Slider.Root>
    </div>
  );
};
