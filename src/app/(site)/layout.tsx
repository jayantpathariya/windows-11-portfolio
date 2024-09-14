import { Taskbar } from "@/components/taskbar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[url('/wallpaper.jpg')] bg-cover bg-center h-screen">
      {children}
      <Taskbar />
    </main>
  );
};

export default SiteLayout;
