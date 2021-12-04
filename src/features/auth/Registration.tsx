import React, {ChangeEvent, FC, useState} from "react";
import {useRegistrationMutation} from "../../api/auth-api";
import Text from "../../styled-components/components/Text";
import Input from "../../styled-components/components/Input";
import Button from "../../styled-components/components/Button";
import Flex from "../../styled-components/components/Flex";

export const Registration: FC = () => {
    const [registration, registrationParams] = useRegistrationMutation();
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    if(registrationParams.isLoading) return <h1>...Loading</h1>
    if(registrationParams.isError) console.log(registrationParams.error)

    const buttonHandler = () => registration({email, password}).unwrap

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return <Flex
        width='30%'
        justify='center'
        direction='column'
        align='center'
        background={'#ffffff'}
        margin={'0 auto'}
        padding={'10px'}
    >
        <Text size={'28px'} line={'33px'}>Registration</Text>
        <Input type='text' value={email} placeholder={'Please enter your email address...'} handler={emailHandler}/>
        <Input type='text' value={password} placeholder={'Please enter your password...'} handler={passwordHandler}/>
        <Button handler={buttonHandler} align={'flex-end'}>Send</Button>
    </Flex>

    /* <>
        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
        <button onClick={() => registration({email, password})}>Send</button>
    </>*/

};