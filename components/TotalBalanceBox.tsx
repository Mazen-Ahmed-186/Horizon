import React from 'react'
import {formatAmount} from "@/lib/utils";
import CountUp from "react-countup";
import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";

const TotalBalanceBox = ({
    accounts=[], totalBanks, totalCurrentBalance
} : TotalBalanceBoxProps)  => {
    return (
        <section className={"flex w-full items-center gap-4 md:p-12 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6"}>
            <div className={"flex size-full max-w-[100px] items-center sm:max-w-[120px]"}>
                <DoughnutChart
                    accounts={accounts}
                />
            </div>
            <div className={"flex flex-col gap-6"}>
                <h2 className={"font-semibold text-gray-900 text-[18px] leading-[22px]"}>
                    Bank Accounts: {totalBanks}
                </h2>
                <div className={"flex flex-col gap-2"}>
                    <p className={"font-medium text-gray-600 text-[14px] leading-[20px]"}>
                        Total Current Balance
                    </p>
                    <div className={"flex-1 font-semibold text-center justify-center gap-2 text-gray-900 text-[24px] leading-[30px] lg:text-[30px] lg:leading-[38px]"}>
                        <AnimatedCounter amount= {totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TotalBalanceBox
