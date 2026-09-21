import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/esm/Button';
import './Addtodo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [Deesc, setdesc] = useState("");
  const [owner, setowner] = useState("");
  // const [id, setid] = useState("");
  useEffect(() => {
    settitle(props?.Editor?.Title)
    setdesc(props?.Editor?.Describe)
    setowner(props?.Editor?.Creator)
    // setid(props?.Editor?.id)
  }, [props.Editor])
 
  const AdditUp = (event) => {
    let Form = event.target;
    let Objective = Form.Add.value;
    let Desc = Form.desc.value;
    let Creator = Form.owner.value;
    event.preventDefault();

    if (Objective !== '' && Desc !== '') {
      let tmp = { Title: Objective, Describe: Desc, Creator: Creator === '' ? "Tester" : Creator };

      props.WhatToDo(tmp);

      props.setNorecord(true);


    }
    else {
      alert("You have to fill all the fields")
      props.setNorecord(false)
    }

     
  }


  return (
    <>
      <form onSubmit={AdditUp}>

        <input type='text' id='Add' className='motive' placeholder='write✍ your ToDo Title here' value={title} onChange={T => settitle(T.target.value)} /> {/* First of all set the value blank of title and when the value is changed then a function will get an event and set the value of input*/}
        <br />
        <input type='text' id='desc' className='motive' placeholder='Describe✍ your Task here' value={Deesc} onChange={D => setdesc(D.target.value)} /> {/* Same as above */}
        <br />
        <input type='text' id='owner' className='motive' placeholder='Enter your Good name' value={owner} onChange={O => setowner(O.target.value)} /> {/* Same as above */}

        <Button type='submit' className='Add' onClick={() => {
          props.setAddButtonClicked(false);
        }}>Add ➕</Button>
      </form>
    </>
  );
  
}

export default AddTodo
