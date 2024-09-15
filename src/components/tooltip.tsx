import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="bg-black bg-opacity-30 backdrop-blur-md  rounded-md p-2 text-sm text-white z-50"
            sideOffset={10}
          >
            {text}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
