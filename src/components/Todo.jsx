import React, {useState} from 'react';
import {
  Checkbox, IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

export default function Todo(props) {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;
// ******************************************
  const deleteEventHandler = () => {
    deleteItem(item);
  }

  // 아이템 수정
  const turnOffReadOnly = () => {
    setReadOnly(false);
  }
  const turnOnReadOnly = (e) => {
    if(e.key === "Enter"){
      setReadOnly(true);
    }
  }

  // 내용 수정
  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  }

  // 체크박스 변경
  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  }


// ******************************************
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
      <ListItemText>
        <InputBase
          inputProps={{
            "aria-label" : "naked",
            readOnly:readOnly
          }}
          onClick={turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multline={true}
          fullWidth={true}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete Todo"
          onClick={deleteEventHandler} >
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
  );
};