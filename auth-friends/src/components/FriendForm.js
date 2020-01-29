import React from 'react';
import { axiosWithAuth } from '../api';

export const FriendForm = props => {
    
    const [friend, setFriend] = React.useState({name: '', age: 0, email: '', id: -1});

    function handleChange(evt) {
        setFriend({...friend, [evt.target.name]: evt.target.value})
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
        .then( resp => {
            console.log('success add', friend);
            props.onNewFriend();
        })
    }
    
    return (
        <div className='friend-form'>
            <form onSubmit={ (evt) => handleSubmit(evt) }>
                <label>
                    Name:
                    <input type='text' name='name' value={friend.name} onChange={ (evt) => handleChange(evt) }/>
                </label> 
                <label>
                    Age:
                    <input type='number' name='age' value={friend.age} onChange={ (evt) => handleChange(evt) }/>
                </label>
                <label>
                    Name:
                    <input type='text' name='email' value={friend.email} onChange={ (evt) => handleChange(evt) }/>
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    )
}