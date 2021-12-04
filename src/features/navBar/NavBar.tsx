import React from 'react';
import Flex from "../../styled-components/components/Flex";
import Text from "../../styled-components/components/Text";
import {Link} from "react-router-dom";
import cl from "../../styles/ExtrnalStyles.module.scss";
import AppNavBar from "../../styled-components/app/AppNavBar";

const NavBar = () => {

    return (
        <AppNavBar>
            <Flex justify='space-between' align='center'>
                <Flex>
                    <Text size='20px' line='23px'>MERN CLOUD</Text>
                </Flex>
                <Flex justify='space-between' align='center'>
                    <Link className={cl.link} to={'/login'}>Login</Link>
                    <Link className={cl.link} to={'/registration'}>Registration</Link>
                </Flex>
            </Flex>
        </AppNavBar>
    )
};

export default NavBar;