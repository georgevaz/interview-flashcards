import React from 'react';
import { CardContainer } from './CardContainer'
import { HeaderContainer } from './HeaderContainer'
import { DropDownContainer } from './DropDownContainer'

export const MainContainer = () => {
    return (
        <>
            <div className='main-container'>
                <DropDownContainer />
                <HeaderContainer />
                <CardContainer />
            </div>
        </>
    );
};