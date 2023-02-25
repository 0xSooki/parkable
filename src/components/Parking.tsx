import React from "react";
import Box from "../components/Box"
import boxes from "../components/Parkingdata"
export default function Parking(){
    const [squares,setSquares]=React.useState(boxes);
    const squareElements=squares.map(square=>(
        <Box 
            key={square.id}
            id={square.id}
            on={square.on}
        />
    ))
    return <div className="grid-container">
        {squareElements}
    </div>
}