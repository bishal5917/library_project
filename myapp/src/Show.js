import React from 'react'
import db from './firebase.js'
import './show.css'

function Show({ key, name, ioeroll, booka, bookb, bookc, bookd, booke }){

    function deletefromdb() {
        //if i want to delete that item with a particular key
        // db.collection("posts").doc(key).delete()

        if (window.confirm("This will delete your data permanently from our records . Are you sure ??")){
        //i couldnot get that key so i deleted my particular name
        //it will select the name and it will delete that document
        db.collection("posts").where("name", "==", name).get()
            .then(querySnapshot => {
                querySnapshot.docs[0].ref.delete()
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
    return (<>
        <div className="showingdata">
            <table id="tableid">
                <tr>
                    <td className="tdata">NAME</td>
                    <td className="tdata">IOE ROLL</td>
                    <td className="tdata">BOOK 1</td>
                    <td className="tdata">BOOK 2</td>
                    <td className="tdata">BOOK 3</td>
                    <td className="tdata">BOOK 4</td>
                    <td className="tdata">BOOK 5</td>
                    <td className="data"><button onClick={deletefromdb} id="delbutton">Delete</button></td>

                </tr>
                <tr>
                    {/* <td className="data">{key}</td> I am not getting this key */}
                    <td className="data">{name}</td>
                    <td className="data">{ioeroll}</td>
                    <td className="data">{booka}</td>
                    <td className="data">{bookb}</td>
                    <td className="data">{bookc}</td>
                    <td className="data">{bookd}</td>
                    <td className="data">{booke}</td>
                </tr>
            </table>
        </div>
    </>
    )
}

export default Show
