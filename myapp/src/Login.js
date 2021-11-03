
import React from 'react'
import './login.css'
import {useHistory} from 'react-router-dom'

function Login() {
  let yourHistory=useHistory()
    function toggle() {
        var p = document.getElementById("pass");
        if (p.type === "password") {
          p.type = "text";
        } else {
          p.type = "password";
        }
      }
      function redirect(){
        let eml=document.getElementById('email')
        let pass=document.getElementById('pass')
        let insert=document.getElementById('insert')
        if ( eml.value==="coders" &&  pass.value==="coders"){
          yourHistory.push("/Main")
        }
        else{
          insert.innerHTML=`Please enter valid email and password`
          setTimeout(() => {
            insert.innerHTML=''
          }, 2000);
        }
      }
    return (<>
        <div className="box">
        <h2 id="head">Welcome to Our Library</h2>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="password" name="password" id="pass" placeholder="Password" />
        <input type="checkbox" id="pos" onClick={toggle}/>
        <input type="button" id="sub" class="btn" onClick={redirect} value="Log In"/>
        <div id="insert"></div>
    </div>
    </>
    );
  }

// export { clicked };
export default Login

