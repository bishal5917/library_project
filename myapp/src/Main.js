import React, { useState } from 'react'
import './main.css'
import db from './firebase'
import Navbar from './Navbar.js'

function Main() {
    const [roll, setRoll] = useState("")
    const [name, setName] = useState("")
    const [book1, setBook1] = useState("")
    const [book2, setBook2] = useState("")
    const [book3, setBook3] = useState("")
    const [book4, setBook4] = useState("")
    const [book5, setBook5] = useState("")

    // // //handling the delete button
    // function handledelete({key}){
    //     // console.log(key)
    //     // db.collection("posts").doc(key).delete()
    // }
    //handling the save button
    const handlesave=()=>{
        let msg=document.getElementById('usermessage')
        if (roll && name && book1 && book2 && book3 && book4 && book5){
        //saving into the database
        db.collection("posts").add({
           ioeroll:roll,
           name:name,
           book1:book1,
           book2:book2,
           book3:book3,
           book4:book4,
           book5:book5
        })
        setRoll("")
        setName("")
        setBook1("")
        setBook2("")
        setBook3("")
        setBook4("")
        setBook5("")
        msg.innerHTML=` <div id="done" >Success : Your details were recieved successfully,
        Please click details to see<div> `
        setTimeout(() => {
            msg.innerHTML=''
        }, 5000);
    }
    else{
        msg.innerHTML=`<div id="notdone" >Error : Please fill up all the fields with valid information <div>`
        setTimeout(() => {
            msg.innerHTML=''
        }, 5000);
    }
    }
    return (<>
    <div>
 <Navbar/>
 </div>
        <div className="container">
            <h2 id="heads">Student Checkout</h2>
            <div id="usermessage"></div>
            <input 
            value={roll} 
            onChange={(e)=>{
                setRoll(e.target.value)
            }}
            type="text" className="getvals" placeholder="Enter Unique IOE Symbol Number" />
            <input 
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            type="text" className="getvals" placeholder="Enter Full Name" />
            <input 
            value={book1} 
            onChange={(e)=>{
                setBook1(e.target.value)
            }}
            type="text" className="getvals" placeholder="Book 1" />
            <input 
            value={book2}
            onChange={(e)=>{
                setBook2(e.target.value)
            }}
            type="text" className="getvals" placeholder="Book 2" />
            <input 
            value={book3}
            onChange={(e)=>{
                setBook3(e.target.value)
            }}
            type="text" className="getvals" placeholder="Book 3" />
            <input 
            value={book4}
            onChange={(e)=>{
                setBook4(e.target.value)
            }}
            type="text" className="getvals" placeholder="Book 4" />
            <input 
            value={book5}
            onChange={(e)=>{
                setBook5(e.target.value)
            }}
            type="text" className="getvals" placeholder="Book 5" />
            <input type="button" id="sub" class="btns" onClick={handlesave}value="Save"/>
            {/* <input type="button" id="sub" class="btns" onClick={handledelete}value="Delete"/> */}

        </div>
      
        </>
    )
}

export default Main
