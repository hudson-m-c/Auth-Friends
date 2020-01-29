import React from 'react';

export const Friend = props => {
    return (
        <div className='friend'>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a> 
            <br />
        </div>
    )
}