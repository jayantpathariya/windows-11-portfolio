import { Menus } from "@/components/menus";
import { Taskbar } from "@/components/taskbar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[url('/wallpaper.jpg')] bg-cover bg-center h-screen">
      {children}
      <Taskbar />
      <Menus />
    </main>
  );
};

export default SiteLayout;
