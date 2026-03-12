import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SmoothScrollProvider from "@/components/layouts/SmoothScrollProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function SiteShell({ children }) {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen overflow-x-clip">
        <Header />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
        <GrainOverlay />
      </div>
    </SmoothScrollProvider>
  );
}
