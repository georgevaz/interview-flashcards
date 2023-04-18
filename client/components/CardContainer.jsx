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

export const CardContainer = () => {
  const {
    atThreshold,
    setThreshold,
    questionBatch,
    changeBatch,
    setChangeBatch
  } = useStore(useCardStore);

  const [cards, setCards] = useState([]);

  const updateStarredQuestion = (isStarred, questionText, answerText) => {
    if (isStarred) {
      Questions.StarredQuestions[questionText] = answerText;
    } else {
      delete Questions.StarredQuestions[questionText];
    }

    if (questionBatch === 'StarredQuestions') {
      populateCards(questionBatch);
    }
  }

  const populateCards = tech => {
    const questionsKeys = shuffle(Object.keys(Questions[tech]));
    setCards(
      questionsKeys.map((questionText, i) => {
        const answerText = Questions[tech][questionText];

        return (
          <Card
            key={questionText}
            id={i}
            frontText={questionText}
            backText={answerText}
            offset={Math.floor(Math.random() * maxOffset)}
            updateStarredQuestion={(isStarred) => updateStarredQuestion(isStarred, questionText, answerText)}
            isStarred={!!Questions.StarredQuestions[questionText]}
          />
        );
      })
    );
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

  useEffect(() => {
    populateCards(questionBatch);
  }, [questionBatch]);

  return (
    <>
      <div className='card-container'>
        {cards}
      </div>
    </>
  );
};