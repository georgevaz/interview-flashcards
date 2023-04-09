import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import Questions from '../questions';

const questionsKeys = Object.keys(Questions);
const cards = [];
questionsKeys.forEach((x, i) => {
    cards.push(
            <Card 
            key={i}
            id={i}
            frontText={x}
            backText={Questions[x]}
            offset={Math.floor(Math.random() * 3)}
            />
        )
})

export const CardContainer = () => {
    const {
        atThreshold,
        setThreshold
    } = useStore(useCardStore);


    useEffect(() => {
        if(atThreshold) {
            setThreshold(false);
            cards.unshift(cards.pop());
        }
    }, [atThreshold])

    return (
        <>
            <div className='card-container'>
                { cards }
            </div>
        </>
    )
}