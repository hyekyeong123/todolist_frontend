import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";



function  Copyright(){
  return  (
    <Typography variant="body2" color="textSecondary" align="center">
      {/*Typography 이게 뭔데*/}
    </Typography>
  )
}
export default function AppRouter() {

 // ******************************************
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright/>
      </Box>
    </div>
  );
};