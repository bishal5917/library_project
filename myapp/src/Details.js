import db from './firebase.js'
import Show from './Show.js'
import Navbar from './Navbar.js'
import './details.css'
import React, { useEffect,useState } from 'react'

function Details() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        //making realtime connection to the database and taking 
        // Note: .onSnapshot ( this gives me value whenever entries are entered in database)
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()}
        )))
      })
    }, [])
  
    return (<>
      <Navbar/>
      <div className="todesignlater">
        {posts.map(post => (   
        <Show
          key={post.data.key}  //Note : I am not getting this key  i have to figure out this anyhow later
          name={post.data.name}
          ioeroll={post.data.ioeroll}
          booka={post.data.book1}
          bookb={post.data.book2}
          bookc={post.data.book3}
          bookd={post.data.book4}
          booke={post.data.book5}
        />
        ))}
      </div>
      </>
    );
  }
  
  export default Details;

