import React from "react"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Card from "../components/Card"
import data from "./data"
export default function App() {
    const cards=data.map(item=>{
        return(
            <Card 
            key={item.id}
            item={item}
            />
        )
        
    })
    return (
        <div>
            <Navbar />
            <Main />
            <div className="cards-list">
                {cards}
            </div>
        </div>
    )
}