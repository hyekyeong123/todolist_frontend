import './App.css';
import TodoItem from "./components/TodoItem";
import {useEffect, useState} from "react";
import {Container, List, Paper} from "@material-ui/core";
import AddTodo from "./components/AddTodo";
import {call} from "./api/ApiService";
import Navbar from "./components/Navbar";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
// ******************************************
  // 값 불러오기
  useEffect(()=>{
    call("/todo","GET",null)
    .then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  },[])

  // 아이템 추가
  const addItem = (newItem) => {
    newItem.id = "ID-"+items.length;
    newItem.done = false;

    call("/todo","POST", newItem)
    .then((response) => setItems(response.data));
  }

  const deleteItem = (deletedItem) => {
    call("/todo","DELETE", deletedItem)
    .then((response) => setItems(response.data));
  }

  // 아이템 수정
  const editItem = (editedItem) => {
    call("/todo","PUT", editedItem)
    .then((response) => setItems(response.data));
  }

// ********************************************
  let todoItems = items.length !== 0
    &&  (
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item) => (
            <TodoItem
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
  if(loading) return <h1>로딩중</h1>
  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className="TodoList">
          {todoItems}
        </div>
      </Container>
    </div>
  );
}

export default App;
