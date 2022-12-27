import React, { memo, useReducer } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt('어떤 이름으로 바꾸고 싶은가요?');
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt('멘토의 이름을 입력해주세요');
    const title = prompt('멘토의 타이틀을 입력해주세요');
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt('삭제하려는 멘토의 이름을 입력해주세요');
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {' '}
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토의 이름 바꾸기' onClick={handleUpdate}></Button>
      <Button text='멘토 추가하기' onClick={handleAdd}></Button>
      <Button text='멘토 삭제하기' onClick={handleDelete}></Button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};

const Button = memo(({ text, onClick }) => {
  console.log('버튼 컴포넌트', text, '리렌더링');
  const result = useMemo(() => calculateSomething(), []);
  return <button onClick={onClick}>{`${text} ${result}`}</button>;
});

function calculateSomething() {
  for (let i = 0; i < 1000; i++) {
    console.log('done');
  }
  return 10;
}
