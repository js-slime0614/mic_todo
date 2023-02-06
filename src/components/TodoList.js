import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState, useGetSearchItem } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  const searched = useGetSearchItem();
  const filtered = todos.filter((itemList) => {
    return itemList.text.toUpperCase().includes(searched.toUpperCase());
  });

  return (
    <TodoListBlock>
      {filtered.map(todo => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
