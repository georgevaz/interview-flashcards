import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Draggable from 'react-draggable';
import Questions from '../questions'


export const Card = () => {
    const [flipped, setFlip] = useState(false);
    return (
        <> 
            <Draggable
            
            >
                <div className='card'>
                    <ReactCardFlip 
                    isFlipped={flipped} 
                    flipDirection='horizontal' 
                    containerStyle={{height: '100%', width: '100%'}}
                    >
                            <div className='card-front' onClick={() => setFlip(!flipped)}>
                                <div className='card-inner'>
                                    <h1>Tech</h1>
                                </div>
                            </div>
                            <div className='card-back' onClick={() => setFlip(!flipped)}>
                                <div className='card-inner'>
                                    <ul>
                                    <li>Item</li>  
                                    <li>Item</li>  
                                    <li>Item</li>  
                                    <li>Item</li>  
                                    </ul>
                                </div>
                            </div>
                    </ReactCardFlip>
                </div>
            </Draggable>
        </>
    )
}