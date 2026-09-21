import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/esm/Button';
import './Addtodo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const EditData = (props) => {
  const [Updatedtitle, setUpdatedtitle] = useState("");
  const [UpdateDeesc, setUpdateddesc] = useState("");
  const [Updatedowner, setUpdatedowner] = useState("");


  useEffect(() => {
    setUpdatedtitle(props?.Editor?.Title)
    setUpdateddesc(props?.Editor?.Describe)
    setUpdatedowner(props?.Editor?.Creator)
    // setid(props?.Editor?.id)
  }, [props.Editor])


  const update = (e) => {
    let Form = e.target;
    let Objective = Form.Add.value;
    let Desc = Form.desc.value;
    let Creator = Form.owner.value;
    // if (Objective !== '' && Desc !== '') {
    let Edited = { Title: Objective, Describe: Desc, Creator: Creator === '' ? "Tester" : Creator };
    // props.UpdateYourTodo(tmp);
    // }
    // else{
    //   alert("You have to update all the field");
    // }
    var allTheCollection = [...props.Useritem];
    allTheCollection.splice(props.whatisindex, 1, Edited);
      props.setUseritem(allTheCollection);
    // props.whattodo(allTheCollection);
    props.setAddButtonClicked(true);
    props.seteditClickedvalue(false);
    // props.setsimilarid(props.whatisindex+1);
    e.preventDefault();
  }



  return (
    <>
      <form onSubmit={update}>

        <input type='text' id='Add' className='motive' placeholder='write✍ your Updated ToDo Title here' value={Updatedtitle} onChange={e => setUpdatedtitle(e.target.value)} /> {/* First of all set the value blank of title and when the value is changed then a function will get an event and set the value of input*/}
        <br />
        <input type='text' id='desc' className='motive' placeholder='Redescribe✍ your Task here' value={UpdateDeesc} onChange={e => setUpdateddesc(e.target.value)} /> {/* Same as above */}
        <br />
        <input type='text' id='owner' className='motive' placeholder='Re-enter your Good name' value={Updatedowner} onChange={e => setUpdatedowner(e.target.value)} /> {/* Same as above */}

        <Button type='submit' className='edit'>Update 📝</Button>
      </form>
    </>
  );

}

export default EditData
