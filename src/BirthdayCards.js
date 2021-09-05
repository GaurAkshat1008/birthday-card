import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './BirthdayCards.css'

function BirthdayCards() {
     
//      if you type in something for name section the text will appear at the bottom left part of the card and the size of the card can be changed from the 'BirthdayCard.css'
     // eslint-disable-next-line
    const [people, setPeople] = useState([
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        },
        {
            name: '',
            url: ""
        }
    ])
    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    return (
        <div className="cards">
            <div className="cards__cardContainer">
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                <div style={{backgroundImage: `url(${person.url})`}} className="card">
                    <h3>{person.name} </h3>
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default BirthdayCards
