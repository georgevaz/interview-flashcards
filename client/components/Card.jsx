import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Draggable from 'react-draggable';
import useCardStore from '../store/store';
import { useStore } from 'zustand';

const RotationSpeed = .1;

export const Card = (props) => {
    const [flipped, setFlip] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [atEdge, setAtEdge] = useState(false);

    // const {
    //     atThreshold,
    //     setThreshold
    // } = useStore(useCardStore);

    const handleFlip = (e) => {
        setFlip(!flipped);
    }

    const handleRotate = (e, data) => {
        let degrees = data.x < 0 ? Math.max(data.x * RotationSpeed, -25) : Math.min(data.x * RotationSpeed, 25);
        setRotation(degrees);
    }

    const handleStart = () => {
        
    }

    const handleStop = (e, data) => {
        // if(Math.abs(data.x) > 150) setThreshold(true);
        if(Math.abs(data.x) > 150) setAtEdge(true);
        setRotation(0);
    }

    // useEffect(() => {
    //     if(atThreshold) console.log('at threshold')
    // }, [atThreshold]);

    useEffect(() => {
        if(atEdge) {
            setAtEdge(false);
        }
    }, [atEdge]);

    return (
        <> 
            <Draggable
            axis='x'
            position={{x: 0, y: 0}}
            bounds={{left: -200, right: 200}}
            onStart={handleStart}
            onDrag={handleRotate}
            onStop={handleStop}
            >
                <div 
                className='card' 
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
                                    <h1>{props.frontText}</h1>
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
    )
}