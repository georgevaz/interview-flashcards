import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Draggable from 'react-draggable';
import useCardStore from '../store/store';
import { useStore } from 'zustand';

const RotationSpeed = .1;

export const Card = (props) => {
  const [flipped, setFlip] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [transition, setTransition] = useState(1);
  const [sentBack, setSentBack] = useState(false);

  const {
    setThreshold
  } = useStore(useCardStore);

  const handleFlip = () => {
    setFlip(!flipped);
  };

  const handleRotate = (e, data) => {
    let degrees = data.x < 0 ? Math.max(data.x * RotationSpeed, -25) : Math.min(data.x * RotationSpeed, 25);
    setRotation(degrees);
    setTransition(0);
  };

  const handleStop = (e, data) => {
    if (Math.abs(data.x) > 150) setSentBack(true);
    setRotation(0);
    setTransition(1);
  };


  useEffect(() => {
    if (sentBack) {
      setThreshold(true);
      setSentBack(false);
    }
    setFlip(false);
  }, [sentBack]);

  return (
    <>
      <Draggable
        axis='x'
        position={{ x: 0, y: 0 }}
        positionOffset={{ x: `${props.offset}%`, y: `${props.offset}%` }}
        bounds={{ left: -200, right: 200 }}
        onDrag={handleRotate}
        onStop={handleStop}
      >
        <div
          className='card'
          style={{ transition: `transform ${transition}s` }}
        >
          <ReactCardFlip
            isFlipped={flipped}
            flipDirection='horizontal'
            containerStyle={{
              height: '100%',
              width: '100%',
              transform: `rotate(${rotation}deg)`
            }}
          >
            <div
              className='card-front'
              onClick={handleFlip}
            >
              <div className='card-inner'>
                <h3>{props.frontText}</h3>
              </div>
            </div>
            <div
              className='card-back'
              onClick={handleFlip}
            >
              <div className='card-inner'>
                <p>{props.backText}</p>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </Draggable>
    </>
  );
};