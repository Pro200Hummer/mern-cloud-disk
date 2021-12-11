import React, {FC} from "react";
import {useLoginMutation} from "../../api/auth-api";
import Flex from "../../styled-components/components/Flex";
import Text from "../../styled-components/components/Text";
import Input from "../../styled-components/components/Input";
import Button from "../../styled-components/components/Button";
import {useInput} from "../../custom-hooks/useInput";

interface LoginError {
    status: number
    data: {
        message: string
    }
}

export const Login: FC = () => {
    const [login, loginParams] = useLoginMutation();
    const email = useInput('', 'email')
    const password = useInput('', 'password')

    if (loginParams.isLoading) return <h1>...Loading</h1>
    if (loginParams.isError) {
        const error = loginParams.error as LoginError
        return <h3>{error.data.message}</h3>
    }

    const buttonHandler = () => login({email: email.value, password: password.value}).unwrap

    const buttonDisable = (email.errors.length > 0 || password.errors.length > 0)
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
        <Input
            type='text'
            value={email.value}
            placeholder={'Please enter your email address...'}
            handlers={email.handlers}
        />
        {(email.isDirty && email.errors.length > 0) && email.errors.map(error =>
            <div key={error} style={{color: 'red'}}>{error}</div>)}
        <Input
            type='text'
            value={password.value}
            placeholder={'Please enter your password...'}
            handlers={password.handlers}
        />
        {(password.isDirty && password.errors.length > 0) && password.errors.map(error =>
            <div key={error} style={{color: 'red'}}>{error}</div>)}
        <Button disable={buttonDisable} handler={buttonHandler} align={'flex-end'}>Send</Button>
    </Flex>
};