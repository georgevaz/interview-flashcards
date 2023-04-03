import React from 'react';
import { Card } from './Card'
import Draggable from 'react-draggable';

export const CardContainer = () => {
    return (
        <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Draggable
            // axis='x'
            bounds={{left: -100, top: -100, right: 100, bottom: 100}}
            >
                <div style={{backgroundColor: 'green', height: '50px'}}>
                    <p>POOP</p>
                </div>
            </Draggable>
        </div>
    )
}