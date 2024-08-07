import { Footer } from "@/components/nav/footer"
import { Header } from "@/components/nav/header"

interface LandingLayoutProps {
    children: React.ReactNode
}

export default function LandingLayout({
    children,
}: LandingLayoutProps): JSX.Element {

    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}