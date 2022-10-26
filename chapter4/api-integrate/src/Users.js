import React, {useState} from 'react';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';
import User from './User';

//렌더링시 run -> reload
// deferFn -> promiseFn
function Users(){
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {data: users, loading, error} = state.users;
    const fetchData = () => {
        getUsers(dispatch);
    };

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다</div>;
    if(!users) return <button onClick={fetchData}>불러오기</button>;
    return (
        <>
            <ul>
                {users.map(user => (
                    <li 
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id ={userId}/>}
        </>
        
    );
}

export default Users;

/*
usestate 사용

const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try{
            setError(null);
            setUsers(null);
            setLoading(true);

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
*/