import React, { useEffect, useState } from 'react';
import FriendInfo from '../FriendInfo/FriendInfo';
import Friends from '../Friends/Friends';

const Home = () => {
    const[friends,setFriend]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>Friends number:{friends.length}</h1>
            {
                friends.map(friend=><Friends key={friend.id} friend={friend}></Friends>)
            }
             
        </div>
    );
};

export default Home;