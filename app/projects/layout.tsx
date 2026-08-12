import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}