import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";
import { Modal,show,Button} from 'react-bootstrap';
import View from '../page/View';
import '../page/Card.css'
const Home = () => {

    useEffect( () => {
        window.scrollTo(0, 0);
        alluser();
      }, []); 
      // http://localhost/bor/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/apicrud/users.php
      const [isuser, setuser] = useState([]);
      const alluser = async (ids) => {
        try {
          axios.get(`http://localhost/apicrud/users.php`)
          .then(res => {
            // console.log(res.data.userlist.userdata)
            setuser(res.data.userlist.userdata);
          })
        } catch (error) { throw error;}    
      }
    
     
    


    const {user, logout} = useContext(UserContext);
    return (
        
        <div className="home">
            <div className="img"><Link to="/insert" className='btn'> Create User </Link></div>
            <h1>{user.name}<br/><span>{user.email}</span></h1>
            <h1>{user.user_role} </h1>
            {isuser.map((item)=>
               <View key={item.id} {...item}/>)}
               
            <button onClick={logout} className="logout">Logout</button>
        </div>
    )
}

export default Home;
