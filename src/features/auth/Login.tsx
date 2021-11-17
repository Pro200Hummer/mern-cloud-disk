import React, {FC, useState} from "react";
import {useLoginMutation} from "../../api/auth-api";

interface LoginError {
    status: number
    data: {
        message: string
    }
}

export const Login: FC = () => {
    const [login, loginParams] = useLoginMutation();
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')


    if(loginParams.isLoading) return <h1>...Loading</h1>
    if(loginParams.isError){
        const error = loginParams.error as LoginError
        return <h3>{error.data.message}</h3>
    }

    return <>
        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
        <button onClick={() => login({email, password}).unwrap}>Send</button>
    </>

};