import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Shell } from "@/components/shell"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Footer(): JSX.Element {
    return (
        <footer className="w-full border-t bg-background">
            <Shell>
                <section className="flex items-center space-x-4">
                    <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
                        Built by{" "}
                        <Link
                            href="https://x.com/intent/user?screen_name=ikaagussetiawan"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold transition-colors hover:text-foreground"
                        >
                            Ika Agus Setiawan
                            <span className="sr-only">Twitter</span>
                        </Link>
                        .
                    </div>
                    <div className="flex items-center space-x-1">
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })
                            )}
                        >
                            <Icons.gitHub className="size-4" aria-hidden="true" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <ThemeToggle />
                    </div>
                </section>
            </Shell>
        </footer>
    )
}