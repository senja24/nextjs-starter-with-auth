import { HeroSection } from "@/components/sections/hero-section";

export default function LandingPage(): JSX.Element {
    return (
        <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
            <HeroSection />
        </div>
    )
}