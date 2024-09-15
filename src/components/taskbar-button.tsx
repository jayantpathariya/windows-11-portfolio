import Image from "next/image";

import { Tooltip } from "@/components/tooltip";

type TaskbarButtonProps = {
  tooltipText: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TaskbarButton = ({
  tooltipText,
  imageSrc,
  imageAlt,
  onClick,
}: TaskbarButtonProps) => {
  return (
    <Tooltip text={tooltipText}>
      <button
        onClick={onClick}
        className="hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm p-3 rounded-md overflow-hidden transition-all duration-100 ease-in-out cursor-auto"
      >
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={imageAlt}
          className="size-8 active:scale-75 transition-all duration-100 ease-in-out"
        />
      </button>
    </Tooltip>
  );
};
