import React from 'react';
import { axiosWithAuth } from '../api';

import { Friend } from './Friend';

const FriendsList = props => {
    
    const [friends, setFriends] = React.useState({list: []});

    React.useEffect( () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then( resp => {
            console.log(resp);
            setFriends({list: resp.data});
        })
        .catch( err => {
            console.log(err);
        })
    }, [])
    
    function populateFriends() {
        if(friends) {
            return (
                friends.list.map( friend => {
                    return( <Friend key={friend.id} friend={friend} />)
                })
            )
        }
    }
    

    return (
        <div className='friends-list'>
            {
                populateFriends()
            }
        </div>
    )
}

export default FriendsList;