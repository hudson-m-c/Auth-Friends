import React from 'react';
import { axiosWithAuth } from '../api';

import { Friend } from './Friend';
import { FriendForm } from './FriendForm';

const FriendsList = props => {
    
    const [friends, setFriends] = React.useState({list: []});
    const [toggle, setToggle] = React.useState(false);

    function addNewFriend() {
        setToggle(!toggle);
    }

    React.useEffect( () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then( resp => {
            console.log(resp);
            setFriends({list: resp.data});
        })
        .catch( err => {
            console.log(err);
        })
    }, [toggle])
    
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
            <FriendForm onNewFriend={ () => addNewFriend()} />
            
            {
                populateFriends()
            }
        </div>
    )
}

export default FriendsList;