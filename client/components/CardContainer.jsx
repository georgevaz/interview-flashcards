import React, { useEffect } from 'react';
import { Card } from './Card';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import Questions from '../questions'

const questions = Object.keys(Questions);

let firstCard = <Card 
frontText={questions[0]}
backText={Questions[questions[0]]}
/>

let secondCard = <Card 
frontText={questions[1]}
backText={Questions[questions[1]]}
/>

export const CardContainer = () => {
    const {
        currentCard,
        nextCard,
        setCards,
        atThreshold,
        setThreshold
    } = useStore(useCardStore);

    useEffect(() => {
        if(atThreshold){
            let randomNum = Math.floor(Math.random() * questions.length);
            firstCard = secondCard;

            secondCard = <Card 
            frontText={questions[randomNum]}
            backText={Questions[questions[randomNum]]}
            />
            console.log('triggered');
            setThreshold(!atThreshold);
        }
        setCards(firstCard, secondCard);
    }, [atThreshold])

    return (
        <>
            <div className='card-container'>
                {nextCard}
                {currentCard}
            </div>
        </>
    )
}