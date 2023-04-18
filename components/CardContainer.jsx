import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import useCardStore from '../store/store';
import { useStore } from 'zustand';
import * as Questions from '../questions';

// changed the offset to 1 until I can figure out how to combat a bug with accidentally 
// selecting cards behind the top-most card

const maxOffset = 1;

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  };

  return array;
};

let questionsKeys = shuffle(Object.keys(Questions.ReactQuestions));
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
    questionsKeys = shuffle(Object.keys(Questions[tech]));
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
    if (atThreshold) {
      setThreshold(false);
      cards.unshift(cards.pop());
    };
    if (changeBatch) {
      populateCards(questionBatch);
      setChangeBatch(false);
    };
  }, [atThreshold, changeBatch]);

  return (
    <>
      <div className='card-container'>
        {cards}
      </div>
    </>
  );
};