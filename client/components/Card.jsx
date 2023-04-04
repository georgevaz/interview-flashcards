import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Draggable from 'react-draggable';
import Questions from '../questions'


export const Card = () => {
    const [flipped, setFlip] = useState(false);
    const [rotation, setRotation] = useState(0)

    const handleFlip = (e) => {
        setFlip(!flipped);
    }

    const handleRotate = (e, data) => {
        let degrees = data.x < 0 ? Math.max(data.x * .25, -25) : Math.min(data.x * .25, 25);

        setRotation(degrees);
    }

    const resetRotate = () => {
        setRotation(0);
    }

    return (
        <> 
            <Draggable
            axis='x'
            position={{x: 0, y: 0}}
            onDrag={handleRotate}
            onStop={resetRotate}
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
                                    <h1>What is useRef()?</h1>
                                </div>
                            </div>
                            <div 
                            className='card-back' 
                            onClick={handleFlip}
                            >
                                <div className='card-inner'>
                                    <ul>
                                    <li>I don't know</li>  
                                    </ul>
                                </div>
                            </div>
                    </ReactCardFlip>
                </div>
            </Draggable>
        </>
    )
}