import { LandingBackground } from "@/components/landing/LandingBackground";
import { LandingHeroSection } from "@/components/landing/LandingHeroSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { AuthNavbar } from "@/components/navigation/AuthNavbar";

export function LandingPage() {
  return (
      <div className="dark min-h-svh overflow-hidden bg-background text-foreground">
      <LandingBackground />
      <AuthNavbar />
      <main className="relative z-10">
        <LandingHeroSection />
        <LandingFooter />
      </main>
    </div>
  );
}
