import './App.css';
import Todo from "./components/Todo";
import {useState} from "react";
import {Container, List, Paper} from "@material-ui/core";
import AddTodo from "./components/AddTodo";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    newItem.id = "ID-"+items.length;
    newItem.done = false;
    setItems([...items, newItem]);
    console.log("[JHG] items : "+items);
  }

  const deleteItem = (deletedItem) => {
    const newItems = items.filter(i => i.id !== deletedItem.id);
    setItems([...newItems])
  }

  // 아이템 수정
  const editItem = () => {
    setItems([...items]); // 상태 업데이트
  }

  const url = "http://localhost:8080/todo"
  const requestOptions = {
    method:"GET",
    header:{"Content-Type":"application/json"}
  };

  fetch(url, requestOptions)
    .then(res => res.json)
    .then(res => {
      setItems(res.data);
    },
    (error) => {
      alert(error);
    }
  );


// ********************************************
  let todoItems = items.length > 0
    &&  (
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item) => (
            <Todo
              item={item}
              key={item.id}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
        </List>
      </Paper>
    )
  // ********************************************
  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
