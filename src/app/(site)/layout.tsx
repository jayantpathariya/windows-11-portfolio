const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[url('/wallpaper.jpg')] bg-cover bg-center h-screen">
      {children}
    </div>
  );
};

export default SiteLayout;
