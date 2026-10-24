import "./globals.css";

export const metadata = {
  title: "CineNova — A New World of Entertainment",
  description: "Discover your next favourite story on CineNova.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
