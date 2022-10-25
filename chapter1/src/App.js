import React, {useReducer, useMemo} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users:[
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action){
  switch(action.type){
      case 'CREATE_USER':
        return produce(state, draft => {
          draft.users.push(action.user);
        });

      case 'TOGGLE_USER':
        return produce(state, draft =>{
          const user = draft.users.find(user => user.id === action.id);
          user.active = !user.active;
        });

      case 'REMOVE_USER':
        return produce(state, draft=> {
          const index = draft.users.findIndex(user => user.id === action.id);
          draft.users.splice(index, 1);
        });
       
      default:
        return state;
  }
}

export const UserDispatch = React.createContext(null);

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);

  const {users} = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users}/>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  )
}

export default App;


/*
useState 사용

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  },[username,email]);

  const onRemove = useCallback(
    id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  },[]
  );

  const onToggle = useCallback(
    id => {
    setUsers(
      users => users.map(user =>
          user.id === id ? {...user, active: !user.active} : user
        )
    );
  }, []
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}
*/