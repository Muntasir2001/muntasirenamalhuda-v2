const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="px-[100px]">{children}</div>
    </>
  );
};

export default Layout;
