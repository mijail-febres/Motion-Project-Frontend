import React, { useState, useEffect, useRef } from 'react';
import {v4 as uuidv4} from 'uuid';

function ThingsForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handlesubmit = e => {
        e.preventDefault();

        // adding props

        props.onSubmit({
            id: uuidv4(),
            // id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='thing-form' onSubmit={handlesubmit}>
            <input
                type='text'
                placeholder='Type something...'
                value={input}
                name='text'
                className='thing-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <input type="submit" label="ADD" />     
        </form>
    )
}

export default ThingsForm;
