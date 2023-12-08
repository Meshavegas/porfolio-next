import "../globals.css";

export const metadata = {
  title: "Mesha vegas",
  description: "Mesha vegas Developeur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
