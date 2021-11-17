import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "./auth/Login";
import {Registration} from "./auth/Registration";

const PATH = {
    login: '/login',
    registration: '/registration'
}

export const Routing: FC = () => {
    return <>
        <Routes>
            <Route path={PATH.login} element={<Login/>}/>
            <Route path={PATH.registration} element={<Registration/>}/>
        </Routes>
    </>
};
