import React, { useState } from 'react';
import ShapeCross from '../../../Assets/svgs/shape_cross.svg';
// import { TiEdit } from 'react-icons/ti';
import ThingsForm from './ThingsForm';

function Things({ things, completeThing, removeThing, updateThing }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateThing(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <ThingsForm edit={edit} onSubmit={submitUpdate} />
  }
  // console.log();
  return things.map((thing, index) => (
    <div className={thing.isComplete ? 'thing-row complete' : 'thing-row'} 
    key={index}>

    <div key={thing.id} onClick={() => completeThing(thing.id)}>
      {thing.text}
    </div>

    <div className="icons" key={index}>
      <img src={ShapeCross }
      onClick={() => removeThing(thing.id)} 
      className='delete-icon'
      />
      {/* <TiEdit 
      onClick={() => setEdit({ id: thing.id, value: thing.text})} 
      className='edit-icon'
      /> */}
    </div>

    </div>

  ));
}

export default Things
