import React, { useEffect } from 'react';
import { Card } from './Card';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import Questions from '../questions'

const questionsKeys = Object.keys(Questions);

export const CardContainer = () => {
    const {
        atThreshold,
        setThreshold
    } = useStore(useCardStore);

    const cards = [];
    questionsKeys.forEach((x, i) => {
        cards.push(<Card 
            key={i}
            id={i}
            frontText={x}
            backText={Questions[x]}
            />)
    })

    useEffect(() => {

    }, [atThreshold])

    return (
        <>
            <div className='card-container'>
                { cards }
            </div>
        </>
    )
}