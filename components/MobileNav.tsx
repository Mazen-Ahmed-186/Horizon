'use client'

import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import React from "react";
import {usePathname} from "next/navigation";

const MobileNav = ({user} : MobileNavProps)  => {
    const pathName = usePathname();

    return (
        <section className={"w-full max-w-[264px]"}>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={"/icons/hamburger.svg"}
                        width={30}
                        height={30}
                        alt={"menu"}
                        className={"cursor-pointer"}
                    />
                </SheetTrigger>
                <SheetContent side={"right"} className={"border-none w-72 bg-white"}>
                        <nav className={"flex flex-col gap-4"}>
                            <Link href={"/"} className={"flex justify-center cursor-pointer items-center gap-1 px-4"}>
                                <Image
                                    src={"/icons/logo.svg"}
                                    width={"54"}
                                    height={"54"}
                                    alt={"Horizon Logo"}
                                />
                                <h1 className={"2xl:text-[26px] 2xl:leading-[32px] font-ibm-plex-serif text-[26px] font-bold text-black-1"}>
                                    Horizon
                                </h1>
                            </Link>

                            <div className={" flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto"}>
                                <SheetClose asChild>
                                    <nav className={"flex h-full flex-col items-center gap-6 pt-16 text-white"}>
                                        {sidebarLinks.map((item) =>
                                        {
                                            const isActive = pathName === item.route || pathName.startsWith (`${item.route} /`)
                                            return (
                                                <SheetClose asChild key={item.route}>
                                                    <Link href={item.route} key={item.label}
                                                          className={cn('flex gap-3 items-center p-4 rounded-lg w-full max-w-60', {'bg-bank-gradient' : isActive})}>
                                                            <Image src={item.imgURL} width={20} height={20} alt={item.label}
                                                                   className={cn({
                                                                       "brightness-[3] invert-0" : isActive
                                                                   })} />
                                                        <p className={cn(
                                                            "font-semibold text-black-2 text-[16px] leading-[24px]", {"!text-white" : isActive}
                                                        )}>
                                                            {item.label}
                                                        </p>
                                                    </Link>
                                                </SheetClose>
                                            )
                                        })}
                                    </nav>
                                </SheetClose>
                            </div>
                        </nav>
                </SheetContent>
            </Sheet>
        </section>
    )
}
export default MobileNav
