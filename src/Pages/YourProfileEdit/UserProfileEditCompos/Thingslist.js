import React, { useState } from 'react';
import ThingsForm from './ThingsForm';
import Things from './Things';

function ThingsList() {
    const [things, setThings] = useState([]);

    const addThing = thing => {
       if(!thing.text || /^\s*$/.test(thing.text)) {
         return;
       }

       const newThings =[thing, ...things]

       setThings(newThings);
    //    console.log(...things);
    };

    //     const updateThing = (thingId, newValue) => {
    //     if(!newValue.text || /^\s*$/.test(newValue.text)) {
    //         return;
    //       }

    //       setThings(prev => prev.map(item => (item.id === thingId ? newValue : item)));
    // };

    const removeThing = id => {
        const removeArr = [...things].filter(thing => thing.id !== id)

        setThings(removeArr);
    };

    

    return (
        <div>
            Things I like (from the Thingslist)
            <ThingsForm onSubmit={addThing} />
            <Things things={things} removeThing={removeThing} />
        </div>
    )
}

export default ThingsList
