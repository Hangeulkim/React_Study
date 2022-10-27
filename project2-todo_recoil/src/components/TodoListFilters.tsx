import React from 'react';
import { atom, selector, useRecoilState } from 'recoil';
import { todoListState} from './TodoContext';

const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        
        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.done);
            case 'Show Uncompleted':
                return list.filter((item) => !item.done);
            default:
                return list;
        }
    }
});

function TodoListFilters(){
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = (event: React.FormEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLSelectElement;
        setFilter(target.value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    )
}

export default TodoListFilters;