import React from 'react'
import Link from "next/link";
import Image from "next/image";
import BankCards from "@/components/BankCards";


const RightSideBar = ({user, transactions, banks} : RightSidebarProps) => {
    return (
        <aside className={"no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important"}>
            <section className={"flex flex-col pb-8"}>
                <div className={"h-[120px] w-full gradient-background bg-cover bg-no-repeat"} />
                <div className={"relative flex px-6 max-xl:justify-center"}>
                    <div className={"flex-center absolute -top-8 size-24 rounded-full text-center bg-gray-100 border-8 border-white p-2 shadow-profile"}>
                        <span className={"text-6xl font-bold text-blue-500"}>
                            {user?.name[0]}
                        </span>
                    </div>
                    <div className={"flex flex-col pt-24"}>
                        <h1 className={"text-[24px] leading-[30px] font-semibold text-gray-900"}>
                            {user?.name}
                        </h1>
                        <p className={"text-[16px] leading-[24px] font-normal text-gray-600"}>
                            {user?.email}
                        </p>
                    </div>
                </div>
            </section>
            <section className={"flex flex-col justify-between gap-8 px-6 py-8"}>
                <div className={"flex w-full justify-between"}>
                    <h2 className={"font-semibold text-gray-900 text-[18px] leading-[22px]"}>
                        My Banks
                    </h2>
                    <Link href={"/"} className={"flex gap-2"}>
                        <Image
                            src={"/icons/plus.svg"}
                            width={20}
                            height={20}
                            alt={"plus"}
                        />
                        <h2 className={"text-[14px] leading-[20px] font-semibold text-gray-600"}>
                            Add Bank
                        </h2>
                    </Link>
                </div>
                {banks?.length > 0 && (
                    <div className={"relative flex flex-1 flex-col justify-center items-center gap-5"}>
                        <div className={"relative z-10"}>
                            <BankCards
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={user?.name}
                                showBalance={false}
                            />
                        </div>
                        {banks[1] && (
                            <div className={"absolute right-0 top-8 z-0 w-[90%]"}>
                                <BankCards
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={user?.name}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    )
}
export default RightSideBar
