import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = {firstName: "Mazen", lastName: "Ahmed"};

    return (
        <main className={"flex h-screen w-full font-inter"}>
            <Sidebar  user = {loggedIn} />

            <div className={"flex flex-col size-full"}>
                <div className={"flex h-16 items-center justify-between p-5 shadow-[8px_10px_16px_0px_rgba(0,0,0,0.05)] sm:p-8 md:hidden"}>
                    <Image src={"/icons/logo.svg"} width={30} height={30} alt={"menu icon"} />
                    <div>
                        <MobileNav
                            user = {loggedIn}
                        />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
