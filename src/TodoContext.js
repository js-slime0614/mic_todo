import React, { createContext, useReducer, useContext, useRef, useState } from 'react';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);
const GetSearchItemContext = createContext(null);
const SetSearchItemContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const initialTodos = [
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  const [search, setSearch] = useState('');

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>    
          <GetSearchItemContext.Provider value={search}>
            <SetSearchItemContext.Provider value={setSearch}>
              {children}
            </SetSearchItemContext.Provider>
          </GetSearchItemContext.Provider>
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useSetSearchItem() {
  return useContext(SetSearchItemContext);
}

export function useGetSearchItem() {
  return useContext(GetSearchItemContext);
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
