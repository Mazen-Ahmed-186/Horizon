import React from 'react'
import AuthForm from "@/components/AuthForm";
import {useForm} from "react-hook-form";
/*
import {z} from "zod/index";
*/
import {getLoggedInUser} from "@/lib/actions/user.actions";

const SignUp = async () => {

    return (
        <section className={"flex justify-center items-center max-sm:px-6"}>
            <AuthForm
                type={"sign-up"}
            />
        </section>
    )
}
export default SignUp
