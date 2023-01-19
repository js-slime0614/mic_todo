import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    text-align:center;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    text-align:center;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  text-align:center;
`;

const TodoSearch = styled.div`
  backgroundColor: "white",
  padding: '0 10px',
  borderRadius: '16px',
  width:'40%',
`;

const TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

function TodoHead() {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <TodoHeadBlock>
      <Typography variant='h1' sx={{display:{xs:"none", sm:"block"}}}>{dateString}</Typography>
      <div className="day">{dayName}</div>
      <TodoSearch><TextField label="검색" variant='standard' /></TodoSearch>
      <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
    </TodoHeadBlock>
  );
}

export default TodoHead;
