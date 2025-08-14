import React from 'react'
import HeaderBox from "@/components/HeaderBox";
import {getLoggedInUser} from "@/lib/actions/user.actions";
import {getAccount, getAccounts} from "@/lib/actions/bank.actions";
import {formatAmount} from "@/lib/utils";
import TransactionsTable from "@/components/TransactionsTable";
import {Pagination} from "@/components/Pagination";

const TransactionHistory = async ({searchParams: {id, page}}:SearchParamProps) => {

    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({userId : loggedIn?.$id});

    if (!accounts) return;

    const accountsData = accounts?.data;

    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

    const account = await getAccount({appwriteItemId});

    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);
    const indexOfLastTransaction = currentPage * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
    const currentTransactions = account?.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    return (
        <section className={"flex max-h-screen w-full flex-col gap-8 overflow-y-scroll bg-gray-25 p-8 xl:py-12"}>
            <div className={"flex w-full flex-col items-start justify-between gap-8 md:flex-row"}>
                <HeaderBox title={"Transaction History"} subtext={"See your bank details and transactions history."} />
            </div>
            <div className={"space-y-6"}>
                <div className={"flex flex-col justify-between gap-4 rounded-lg border-y bg-blue-600 px-4 py-5 md:flex-row"}>
                    <div className={"flex flex-col gap-2"}>
                        <h2 className={"text-[18px] leading-[22px] font-bold text-white"}>
                            {account?.data.name}
                        </h2>
                        <p className={"text-[14px] leading-[20px] text-blue-25"}>
                            {account?.data.officialName}
                        </p>
                        <p className={"text-[14px] leading-[20px] font-semibold tracking-[1.1px] text-white"}>
                            ◉◉◉◉ ◉◉◉◉ ◉◉◉◉ <span className={"text-[16px] leading-[24px]"}>
                                {account?.data.mask}
                            </span>
                        </p>
                    </div>
                    <div className={"flex-center flex-col gap-2 rounded-md bg-blue-25/20 px-4 py-2 text-white"}>
                        <p className={"text-[14px] leading-[20px]"}>
                            Current Balance
                        </p>
                        <p className={"text-[24px] leading-[30px] text-center font-bold"}>
                            {formatAmount(account?.data.balance)}
                        </p>
                    </div>
                </div>
                <section className={"flex w-full flex-col gap-6"}>
                    <TransactionsTable transactions={currentTransactions} />
                    {totalPages > 1}
                    <div className={"my-4 w-full"}>
                        <Pagination
                            totalPages={totalPages}
                            page={currentPage}
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}
export default TransactionHistory
