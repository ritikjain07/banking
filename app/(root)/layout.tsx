export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  );
}
//use for the main component e.g. home ...