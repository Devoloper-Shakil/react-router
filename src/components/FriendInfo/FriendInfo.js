import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const FriendInfo = () => {
    const{id}=useParams();
    const [friends,setFreinds]= useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFreinds(data));
    },[]);
const {name,username,email,zipcode,address,phone,website}=friends;
   
    return (
        <div className="friend-contrner">
            <h1>Friend Name: {name}</h1>
            <h2>username: {username}</h2>
            <h3>Email: {email}</h3>
             
            <h4>website: {website}</h4>
            <h4>Phone Number: {phone}</h4> 

        </div>
    );
};

export default FriendInfo;