import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    PageActions,
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { siteConfig } from "@/config/site"

export function HeroSection() {

    return (
        <Shell className="max-w-6xl gap-0">
            <PageHeader
                as="section"
                className="mx-auto items-center gap-2 text-center"
                withPadding
            >
                <PageHeaderHeading
                    className="animate-fade-up"
                    style={{ animationDelay: "0.20s", animationFillMode: "both" }}
                >
                    Fast-Track Your Business Launch with Jajan Digital
                </PageHeaderHeading>
                <PageHeaderDescription
                    className="max-w-[46.875rem] animate-fade-up"
                    style={{ animationDelay: "0.30s", animationFillMode: "both" }}
                >
                    Your shortcut to startup success. The ultimate, modern, open-source Next.js template, with everything you need set up and ready to use.
                </PageHeaderDescription>
                <PageActions
                    className="animate-fade-up"
                    style={{ animationDelay: "0.40s", animationFillMode: "both" }}
                >
                    <Link href="/signup" className={cn(buttonVariants())}>
                        Get Started
                    </Link>
                    <Link
                        href={siteConfig.links.github}
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        See on Github
                    </Link>
                </PageActions>
            </PageHeader>
        </Shell>
    )
}