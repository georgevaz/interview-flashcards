import React from 'react';
import { CardContainer } from './CardContainer'
import { HeaderContainer } from './HeaderContainer'

export const MainContainer = () => {
    return (
        <div className='main-container'>
            <HeaderContainer />
            <CardContainer />
        </div>
    )
};