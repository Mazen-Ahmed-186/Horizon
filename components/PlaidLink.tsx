import React, {useCallback, useEffect, useState} from 'react'
import {Button} from "@/components/ui/button";
import {PlaidLinkOptions, usePlaidLink} from "react-plaid-link";
import {useRouter} from "next/navigation";
import {createLinkToken, exchangePublicToken} from "@/lib/actions/user.actions";
import Image from "next/image";

const PlaidLink = ({user, variant} : PlaidLinkProps) => {
    const router = useRouter();

    const [token, setToken] = useState("");
    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken (user);
             setToken(data?.linkToken);
        }
        getLinkToken();
    }, [user]);

    const onSuccess = useCallback(async (public_token : string) => {
        await exchangePublicToken({
            publicToken: public_token,
            user,
        });
        router.push("/");
    }, [user])
      

    const config : PlaidLinkOptions = {
        token,
        onSuccess,
    }

    const {open, ready} = usePlaidLink(config);

    return (
        <div>
            {variant === "primary" ? (
                <Button
                    onClick={() => open()}
                    disabled={!ready}
                    className={"text-[16px] leading-[24px] rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-white shadow-form "}
                >
                    Connect bank
                </Button>
            ) : variant === "ghost" ? (
                <Button variant={"ghost"} onClick={() => open()} className={"flex cursor-pointer items-center justify-center gap-3 rounded-lg px-3 py-7 hover:bg-white lg:justify-start"}>
                    <Image src={"/icons/connect-bank.svg"} alt={"connect-bank"} width={24} height={24} />
                    <p className={"hidden text-[16px] text-black-2 font-semibold xl:block"}>
                        Connect bank
                    </p>
                </Button>
            ) : (
                <Button onClick={() => open()} className={"flex !justify-start cursor-pointer gap-3 rounded-lg !bg-transparent flex-row"}>
                    <Image src={"/icons/connect-bank.svg"} alt={"connect-bank"} width={24} height={24} />
                    <p className={"text-[16px] font-semibold text-black-2"}>
                        Connect bank
                    </p>
                </Button>
            )}
        </div>
    )
}
export default PlaidLink
