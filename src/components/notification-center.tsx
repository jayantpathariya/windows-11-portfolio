"use client";

import { format } from "date-fns";
import { Bell, ChevronDown } from "lucide-react";

import { Calendar } from "@/components/calendar";
import { useMenu } from "@/hooks/use-menu-store";
import { cn } from "@/lib/utils";

export const NotificationCenter = () => {
  const { isOpen, type, onClose } = useMenu();

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 z-[5] hidden",
          isOpen && type === "notification" && "block"
        )}
      />
      <div
        className={cn(
          "fixed bottom-20 right-0 z-10 space-y-4 transition-all ease-in-out w-[500px]",
          isOpen && type === "notification"
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg text-white rounded-xl border border-white border-opacity-10 shadow-lg overflow-hidden p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Notifications</h2>
            <div className="bg-sky-400 hover:bg-sky-500 p-2 rounded-md transition-all ease-in-out">
              <Bell className="size-5 text-black" />
            </div>
          </div>
          <div className="flex items-center justify-center p-5">
            <p className="text-gray-300 font-semibold">No new notifications</p>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg text-white rounded-xl border border-white border-opacity-10 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg">{format(new Date(), "EEEE, dd MMMM")}</h2>
            <div className="bg-gray-700/80 backdrop-blur-lg hover:bg-gray-700/70 p-2 rounded-md transition-all ease-in-out border border-white border-opacity-10">
              <ChevronDown className="size-5 text-gray-300" />
            </div>
          </div>
          <div className="bg-gray-700/40 p-4">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};
