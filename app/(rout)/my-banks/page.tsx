import React from 'react'
import HeaderBox from "@/components/HeaderBox";
import {getLoggedInUser} from "@/lib/actions/user.actions";
import {getAccounts} from "@/lib/actions/bank.actions";
import BankCards from "@/components/BankCards";

const MyBanks = async () => {
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({userId : loggedIn?.$id});
    return (
        <section className={"flex"}>
            <div className={"flex h-screen max-h-screen w-full flex-col gap-8 bg-gray-25 p-8 xl:py-12"}>
                <HeaderBox title={"My Bank Accounts"} subtext={"Effortlessly manage your bank activities."}/>

                <div className={"space-y-4"}>
                    <h2 className={"font-semibold text-gray-900 text-[18px] leading-[22px]"}>
                        Your Cards
                    </h2>
                    <div className={"flex flex-wrap gap-6"}>
                        {accounts && accounts.data.map((a: Account) => (
                            <BankCards key={a.id} account={a} userName={loggedIn?.firstName} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
export default MyBanks