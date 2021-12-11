import React, {FC} from "react";
import {useRegistrationMutation} from "../../api/auth-api";
import Text from "../../styled-components/components/Text";
import Input from "../../styled-components/components/Input";
import Button from "../../styled-components/components/Button";
import Flex from "../../styled-components/components/Flex";
import {useInput} from "../../custom-hooks/useInput";

export const Registration: FC = () => {
    const [registration, registrationParams] = useRegistrationMutation();
    const email = useInput('', 'email')
    const password = useInput('', 'password')

    if(registrationParams.isLoading) return <h1>...Loading</h1>
    if(registrationParams.isError) console.log(registrationParams.error)

    const buttonHandler = () => registration({email: email.value, password: password.value}).unwrap

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
        <Text size={'28px'} line={'33px'}>Registration</Text>
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