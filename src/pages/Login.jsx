import React from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import {login} from "../api/ApiService";
import {Link} from "react-router-dom";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password")

    // ApiService의 signin 메서드를 사용해 로그인
    login({username, password})
  }
 // ******************************************
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="이메일 주소"
              name="username"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              로그인
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Link to="/register" variant="body2">
            계정이 없습니까? 여기서 가입하세요.
          </Link>
        </Grid>
      </form>
    </Container>
  );
};