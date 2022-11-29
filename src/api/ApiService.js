import {API_BASE_YRL} from "./api-config";
import userEvent from "@testing-library/user-event";

export function call(api, method, request) {

  // header 정의하기
  let headers = new Headers({
    "Content-Type": "application/json"
  });

  // 로컬 스토리에서 ACCESS TOKEN 가져와서 매번 요청에 서버에게 보내기
   const accessToken = localStorage.getItem("ACCESS_TOKEN");
   if(accessToken){
     headers.append("Authorization","Bearer "+accessToken);
   }

  let options = {
    headers: headers,
    url: API_BASE_YRL + api,
    method
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 403) {
      window.location.href = "/login";
    } else {
      Promise.reject(response);
      throw Error(response);
    }
  }).catch((error) => {
    console.log(`[JHG] http error : ${error}`);
  })
}

export function login(userDto) {
  return call("/auth/login","POST",userDto)
  .then((response) => {
    if(response.token){

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN",response.token);
      window.location.href="/";
    }
  })
}

export function logout(){
  localStorage.setItem("ACCESS_TOKEN",null);
  window.location.href="/login"
}

export function register(userDto){
  return call("/auth/signup","POST",userDto);
}



