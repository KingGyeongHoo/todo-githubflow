import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputTodo = styled.div`
  width: 500px;
  height: 250px;
  border-radius: 20px;
  border: 1px #a9bcf5 solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 20px;
  border: 1px #5882fa solid;
  margin: 10px;
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 20px;
  border: 0px;
  background-color: #5882fa;
  color: white;
  margin: 10px;
`;

const ListTodo = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 20px;
  border: 1px #a9bcf5 solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 10px;
`;

const TodoComponent = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px #a9bcf5 solid;
  justify-content: space-between;
  color: ${props => props.complete === 'true' ? 'gray' : 'black'};
  background-color: ${props => props.complete === 'true' ? '#E6E6E6' : ''}

`;

const TodoSpan = styled.span`
  margin: 0px 20px;
`;
const TodoTitleSpan = styled.span`
  margin: 0px 20px;
  font-weight: bold;
`;

export default function Todolist({ list, setList }) {
  const enterList = () => {
    setList()
  }
  return (
    <>
      <Container>
        <InputTodo>
          <Input type="text" placeholder="할일을 입력하세요" />
          <Input type="text" placeholder="기한을 입력하세요" />
          <Button onClick={enterList}>등록</Button>
        </InputTodo>
        <ListTodo>
          {list.map((el) => 
            el.isComplete ? 
            <TodoComponent complete='true'>
              <TodoSpan>{el.id}</TodoSpan>
              <TodoTitleSpan>{el.todo}</TodoTitleSpan>
              <TodoSpan>{el.due}</TodoSpan>
              <TodoSpan>✅</TodoSpan>
              <button>🗑</button>
            </TodoComponent> : 
            <TodoComponent complete='false'>
              <TodoSpan>{el.id}</TodoSpan>
              <TodoTitleSpan>{el.todo}</TodoTitleSpan>
              <TodoSpan>{el.due}</TodoSpan>
              <TodoSpan>❌</TodoSpan>
              <button>🗑</button>
            </TodoComponent>
          )}
        </ListTodo>
      </Container>
    </>
  );
}
