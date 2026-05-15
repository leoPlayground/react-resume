const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mb-16 flex max-w-7xl flex-col gap-20 p-6 md:my-8 md:gap-24 md:p-8">
      {children}
    </div>
  );
};

export default Layout;
