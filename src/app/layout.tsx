import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "seankooner | portfolio",
  description: "A portfolio showcasing my skills, work and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon_32.png" type="image/png" sizes="32x32" />
      <link
        rel="icon"
        href="/favicon_180.png"
        type="image/png"
        sizes="180x180"
      />
      <link rel="icon" href="/favicon_16.png" type="image/png" />
      <body className={inter.className}>
        {children}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
