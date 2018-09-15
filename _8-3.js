/** 미들웨어 - use메서드 / next 이벤트 핸들러활용  */
// 모듈추출
var express = require('express');

// 서버생성
var app = express();

// 미들웨어 설정
app.use(function (request, response, next) {
  request.a = 1; // first에서 값넣기
  console.log("first 이벤트 핸들러");
  next(); 
});

// 미들웨어 설정2
app.use(function (request, response, next) {
  console.log(request.a); // request객체의 값 불러오기
  console.log("second 이벤트 핸들러");
  next();
});

// 미들웨어 설정3
app.use(function (request, response, next) {
  response.a = 2; // response 객체 값 넣기
  console.log("third 이벤트 핸들러");
  next();
});

// 미들웨어 설정4
app.use(function (request, response, next) {
  console.log(response.a); // 값 출력
  console.log("forth 이벤트 핸들러");
  next();
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});