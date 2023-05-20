import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../Friends.css'
import { Context } from '../../../Context/StateManage';
import { API } from '../../../Helpers/ConfigAPI';

const AllFriends = () =>
{
    let u = sessionStorage.getItem('user');
    let user = JSON.parse(u);
    const [restPeople, setRestPeople] = useState([]);

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [loading, setLoading] = useState(false)

    const { state, setStates } = useContext(Context)

    useEffect(() =>
    {
        axios.get(API + '/allUser')
            .then(res =>
            {
                setUsers(res.data.friend)
                // setStates(prev=> !prev)
            })

    }, [state])

    useEffect(() =>
    {
        axios.get(API + `/user/${user?.email}`)
            .then(res =>
            {
                setCurrentUser(res.data)
                setIsLoading(false)
                // setStates(prev=> !prev)
            })
    }, [state])

    const otherPeople = users?.filter((u) => u.email !== user?.email);

    const friends = currentUser?.friends;
    const following = currentUser?.following;
    const followers = currentUser?.followers;

    useEffect(() =>
    {
        if (followers?.length && following?.length && friends?.length) {
            const restPeopleByFollowing = otherPeople?.filter(
                ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
            );
            const restPeopleByFollowers = restPeopleByFollowing?.filter(
                ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
            );
            const restPeopleByFriends = restPeopleByFollowers?.filter(
                ({ _id: id1 }) => !friends?.some(({ _id: id2 }) => id2 === id1)
            );
            setRestPeople(restPeopleByFriends);
            // setIsLoading(false)
            console.log(restPeopleByFriends)
        } else if (following?.length && friends?.length) {
            const restPeopleByFollowing = otherPeople?.filter(
                ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
            );
            const restPeopleByFriends = restPeopleByFollowing?.filter(
                ({ _id: id1 }) => !friends?.some(({ _id: id2 }) => id2 === id1)
            );
            setRestPeople(restPeopleByFriends);
            // setIsLoading(false)
            console.log(restPeopleByFriends)
        } else if (followers?.length && friends?.length) {
            const restPeopleByFollowers = otherPeople?.filter(
                ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
            );
            const restPeopleByFriends = restPeopleByFollowers?.filter(
                ({ _id: id1 }) => !friends?.some(({ _id: id2 }) => id2 === id1)
            );
            setRestPeople(restPeopleByFriends);
            // setIsLoading(false)
            console.log(restPeopleByFriends)
        } else if (followers?.length) {
            const restPeopleByFollowers = otherPeople?.filter(
                ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
            );
            setRestPeople(restPeopleByFollowers);
            // setIsLoading(false)
            console.log(restPeopleByFollowers)
        }
        else if (friends?.length) {
            const restPeopleByFriends = otherPeople?.filter(
                ({ _id: id1 }) => !friends?.some(({ _id: id2 }) => id2 === id1)
            );
            setRestPeople(restPeopleByFriends);
            // setIsLoading(false)
            console.log(restPeopleByFriends)
        }
        else if (following?.length) {
            const restPeopleByFollowing = otherPeople?.filter(
                ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
            );
            setRestPeople(restPeopleByFollowing);
            // setIsLoading(false)
            console.log(restPeopleByFollowing)
        } else {
            setRestPeople(otherPeople);
            // setIsLoading(false)
            console.log(otherPeople)
        }
    }, [following, followers, friends, state]);


    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const handleAddFriend = (receiverId) =>
    {
        setLoading(true)

        const sender = {
            first_name: currentUser?.first_name,
            surname: currentUser?.surname,
            email: currentUser?.email,
            id: currentUser?._id,
            profileImg: currentUser?.img,
            receiverId,
            currentDate,
            currentTime,
        };
        axios.put(API + `/addFriend/${receiverId}`,
            sender
        )
            .then(res =>
            {
                console.log(res.data)
                setStates(prev => !prev)
            })
            .catch(err => console.log(err))
            .finally((res) => {
                setLoading(false)
            })
    };

    return (
        <div className=''>
            <div>
                <div>
                    <h2 className='friend-title'>People You May Know</h2>
                </div>
                <div className='friend'>
                        {
                            isLoading ?
                                <div className="profile-loaders"></div>
                                :
                                <>
                                    {restPeople
                                        ?.slice(0)
                                        ?.reverse()
                                        ?.map((friend, i) => (
                                            <div key={i} className='friend-div'>
                                                <div>
                                                    <img className='s-img' src={friend?.img} alt="" />
                                                </div>
                                                <div className='friends-desc'>
                                                    <h3>{friend?.first_name} {friend?.surname}</h3>
                                                    < div >
                                                        <button disabled={loading} onClick={() => handleAddFriend(friend?._id)} className='confirm-btn'> {loading && <div className="loaders"></div>} Add Friend</button>
                                                    </div >
                                                </div>
                                            </div>
                                        ))}
                                </>
                        }
                    </div>
            </div>
        </div >
    );
};

export default AllFriends;