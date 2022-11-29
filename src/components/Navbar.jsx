import React from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";
import {logout} from "../api/ApiService";

export default function Navbar() {

  //
 // ******************************************
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h6">오늘의 할일</Typography>
            </Grid>
            <Grid>
              <Button color="inherit" onClick={logout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};