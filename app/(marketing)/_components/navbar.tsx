"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm"> Login </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm"> Get Jotion Free </Button>
                        </SignInButton>
                    </>
                )}
                <ModeToggle></ModeToggle>
            </div>
        </div>
    )
}