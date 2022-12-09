import React, { useState, useEffect } from 'react';

const CursorPosition = (props) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(()=>{
        document.addEventListener('mousemove', handleMouseMove)
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const theAnonymousInlineFunction = props.render;
    return theAnonymousInlineFunction(position)
}

const DisplayBox1 = () => {
    return (
        <div>
            <h2>Display Box 1</h2>
            <CursorPosition render={(position)=>{
                return (
                    <div>
                        <p>X:{position.x}</p>
                        <p>Y:{position.y}</p>
                    </div>
                )
            }}/>
        </div>
    )
}

const DisplayBox2 = () => {
    return (
        <div>
            <h2>Display Box 2</h2>
            <CursorPosition render={(position)=>{
                return (
                <table>
                    <td>x:{position.x}</td>
                    <td>y:{position.y}</td>
                </table>
                )
            }}/>
        </div>
    )
}

function CursorTracker2 () {
    return (
        <div>
            <h1>Cursor Position Tracker</h1>
            <DisplayBox1 />
            <DisplayBox2 />
        </div>
    )
}

export default CursorTracker2;