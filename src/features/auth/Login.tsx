import React, {ChangeEvent, FC, useState} from "react";
import {useLoginMutation} from "../../api/auth-api";
import Flex from "../../styled-components/components/Flex";
import Text from "../../styled-components/components/Text";
import Input from "../../styled-components/components/Input";
import Button from "../../styled-components/components/Button";

interface LoginError {
    status: number
    data: {
        message: string
    }
}

export const Login: FC = () => {
    const [login, loginParams] = useLoginMutation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    if (loginParams.isLoading) return <h1>...Loading</h1>
    if (loginParams.isError) {
        const error = loginParams.error as LoginError
        return <h3>{error.data.message}</h3>
    }

    const buttonHandler = () => login({email, password}).unwrap

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
        <Text size={'28px'} line={'33px'}>Login</Text>
        <Input type='text' value={email} placeholder={'Please enter your email address...'} handler={emailHandler}/>
        <Input type='text' value={password} placeholder={'Please enter your password...'} handler={passwordHandler}/>
        <Button handler={buttonHandler} align={'flex-end'}>Send</Button>
    </Flex>
};