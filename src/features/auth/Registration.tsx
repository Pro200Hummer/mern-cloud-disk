import React, {FC, useState} from "react";
import {useRegistrationMutation} from "../../api/auth-api";

export const Registration: FC = () => {
    const [registration, registrationParams] = useRegistrationMutation();
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    if(registrationParams.isLoading) return <h1>...Loading</h1>
    if(registrationParams.isError) console.log(registrationParams.error)

    return <>
        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
        <button onClick={() => registration({email, password})}>Send</button>
    </>

};