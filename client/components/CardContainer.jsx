import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import * as Questions from '../questions';

const maxOffset = 8;

let questionsKeys = Object.keys(Questions.ReactQuestions);
let cards = [];

questionsKeys.forEach((x, i) => {
    cards.push(
            <Card 
            key={x}
            id={i}
            frontText={x}
            backText={Questions.ReactQuestions[x]}
            offset={Math.floor(Math.random() * maxOffset)}
            />
        );
});

export const CardContainer = () => {
    const {
        atThreshold,
        setThreshold,
        questionBatch,
        changeBatch,
        setChangeBatch
    } = useStore(useCardStore);

    const populateCards = tech => {
        questionsKeys = Object.keys(Questions[tech]);
        cards = [];
        questionsKeys.forEach((x, i) => {
            cards.push(
                    <Card 
                    key={i}
                    id={i}
                    frontText={x}
                    backText={Questions[tech][x]}
                    offset={Math.floor(Math.random() * maxOffset)}
                    />
                );
        });
    };

    useEffect(() => {
        if(atThreshold) {
            setThreshold(false);
            cards.unshift(cards.pop());
        };
        if(changeBatch){
            populateCards(questionBatch);
            setChangeBatch(false);
        };
    }, [atThreshold, changeBatch]);
    
    return (
        <>
            <div className='card-container'>
                { cards }
            </div>
        </>
    );
};