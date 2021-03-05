import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friends = (props) => {
    const{id,email,name}=props.friend;
    return (
        <div className="friend-contrner">
            <h1>Friend Name:{name}</h1>
            <h3>Email:{email}</h3>
            <Link to={"/id/"+id}> <p>sho detels {id}</p></Link>
           

        

        </div>
    );
};

export default Friends;