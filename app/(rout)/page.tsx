import React from 'react'
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";
import {getLoggedInUser} from "@/lib/actions/user.actions";

const Home = async () => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className={"no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll"}>
            <div className={"no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll"}>
                <header className={"flex flex-col justify-between gap-8"}>
                    <HeaderBox
                        type= "greeting"
                        title= "Welcome"
                        user= {loggedIn?.name || "Guest"}
                        subtext={"Access and manage your account and transactions with ease."}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                 Recent Transactions
            </div>
            <RightSideBar
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance : 123.50}, {currentBalance : 500}]}
            />
        </section>
    )
}
export default Home
