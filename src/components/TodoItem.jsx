import React, {useState} from 'react';
import {
  Checkbox, IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

export default function TodoItem(props) {
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


  // 사용자가 엔터를 클릭할때에 서버에 업로드
  const turnOnReadOnly = (e) => {
    if(e.key === "Enter" && readOnly === false){
      setReadOnly(true);
      editItem(item)
    }
  }

  // 내용 수정
  const editEventHandler = (e) => {
    // 프론트엔드만 수정
    setItem({
      ...item,
      title : e.target.value
    })
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
            "aria-label" : "nked",
            readOnly:readOnly
          }}
          onClick={turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}

          multline="true"
          fullWidth={true}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete TodoItem"
          onClick={deleteEventHandler} >
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
  );
};