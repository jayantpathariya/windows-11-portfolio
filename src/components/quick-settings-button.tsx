import { cn } from "@/lib/utils";
import { ChevronRight, LucideIcon } from "lucide-react";

type QuickSettingsButtonProps = {
  icon: LucideIcon;
  text: string;
  onClick?: () => void;
  withOption?: boolean;
  enabled?: boolean;
};

export const QuickSettingsButton = ({
  icon: Icon,
  text,
  onClick,
  withOption,
  enabled = false,
}: QuickSettingsButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <button
        onClick={onClick}
        className={cn(
          "w-full flex items-center rounded-md overflow-hidden",
          !withOption &&
            "bg-gray-500/30 hover:bg-gray-500/40 justify-center p-5 transition-colors easing-in-out duration-100",
          !withOption &&
            enabled &&
            "bg-sky-500 hover:bg-sky-400 transition-colors ease-in-out duration-100"
        )}
      >
        <span
          className={cn(
            "w-1/2 p-5 border-r-2 border-white border-opacity-10 bg-gray-500/30 hover:bg-gray-500/40 transition-colors ease-in-out duration-100",
            !withOption &&
              "p-0 border-none bg-transparent hover:bg-transparent w-auto",
            enabled &&
              withOption &&
              "bg-sky-500 hover:bg-sky-400 transition-colors ease-in-out duration-100"
          )}
        >
          <Icon className={cn("text-white", enabled && "text-black")} />
        </span>
        {withOption && (
          <span
            className={cn(
              "w-1/2 p-5 bg-gray-500/30 hover:bg-gray-500/40 transition-colors",
              enabled && "bg-sky-500 hover:bg-sky-400 transition-colors"
            )}
          >
            <ChevronRight
              className={cn("text-white", enabled && "text-black")}
            />
          </span>
        )}
      </button>
      <span>{text}</span>
    </div>
  );
};

{
  /* <div className="flex flex-col items-center gap-y-2 rounded-md">
<button className="bg-gray-500/30 hover:bg-gray-500/40 w-full flex items-center justify-center p-5 rounded-md">
  <Plane />
</button>
<span>Flight Mode</span>
</div> */
}
