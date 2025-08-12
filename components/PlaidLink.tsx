import React, {useCallback, useEffect, useState} from 'react'
import {Button} from "@/components/ui/button";
import {PlaidLinkOptions, usePlaidLink} from "react-plaid-link";
import {useRouter} from "next/navigation";
import {createLinkToken, exchangePublicToken} from "@/lib/actions/user.actions";

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
                <Button>
                    Connect bank
                </Button>
            ) : (
                <Button>
                    Connect bank
                </Button>
            )}
        </div>
    )
}
export default PlaidLink
