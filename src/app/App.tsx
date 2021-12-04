import React from 'react';
import {Routing} from "../features/Routing";
import AppWrapper from "../styled-components/app/AppWrapper";
import AppContent from "../styled-components/app/AppContent";
import NavBar from "../features/navBar/NavBar";

export const App = () => {
    return <AppWrapper>
        <NavBar/>
        <AppContent>
            <Routing/>
        </AppContent>
    </AppWrapper>
};

