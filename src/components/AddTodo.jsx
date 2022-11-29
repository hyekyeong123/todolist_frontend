import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";

export default function AddTodo(props) {
  // 사용자의 입력을 저정할 오브젝트
  const [item, setItem] = useState({ title: ""});
  const addItem = props.addItem;
// ******************************************
  const onButtonClick = () => {
    addItem(item);
    setItem({title:''});
  }
  const onInputChange = (e) => {
    setItem({title : e.target.value})
  }

  const enterKeyEventHandler = (e) => {
    if(e.key === "Enter"){
      onButtonClick();
    }
  }

// ******************************************
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField placeholder="Add TodoItem here" fullWidth
          onChange={onInputChange}
          value={item.title}
          onKeyPress={enterKeyEventHandler}
        />
      </Grid>
      <Grid xs={1} md={1} item >
        <Button fullWidth style={{ height: '100%' }} color="secondary" variant="outlined"
        onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};