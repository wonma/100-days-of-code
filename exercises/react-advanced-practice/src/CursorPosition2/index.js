import React, { useEffect, useState } from 'react';


const GetCursorPosition = ({render}) => {
    const [position, setPosition] = useState({x:0, y:0});

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setPosition({x, y})
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
    }, [])

    return render(position)
}

const CursorPositionDisplay1 = () => {
    return (
        <div style={{width:'200px', border:'1px solid red', padding:'20px'}}>
            <h2>Display1</h2>
            <p style={{fontSize: '12px'}}>designed by Cocumochi</p>
            <GetCursorPosition render={(position) => <p>x:{position.x}, y:{position.y}</p>}/>
        </div>
    )
}

const CursorPositionDisplay2 = () => {
    return (
        <div style={{width:'400px', border:'2px dotted green', padding:'50px'}}>
            <h2>Display1</h2>
            <p style={{fontSize: '12px'}}>designed by Kaito</p>
            <GetCursorPosition render={(position) => <p>x:{position.x}, y:{position.y}</p>}/>
        </div>
    )
}

function CursorPosition2() {
    return (
        <div>
            <CursorPositionDisplay1 />
            <CursorPositionDisplay2 />
        </div>
    )
}

export default CursorPosition2;