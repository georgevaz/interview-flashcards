import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import ReactQuestions from '../questions';

const questionsKeys = Object.keys(ReactQuestions);
const cards = [];
const maxOffset = 8;

questionsKeys.forEach((x, i) => {
    cards.push(
            <Card 
            key={i}
            id={i}
            frontText={x}
            backText={ReactQuestions[x]}
            offset={Math.floor(Math.random() * maxOffset)}
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