// 모듈추출
var express = require('express');

// 서버생성
var app = express();

// 미들웨어 설정
app.use(function (request, response, next) {
  console.log("first");
  next();
});

// 미들웨어 설정2
app.use(function (request, response, next) {
  console.log("second");
  next();
});

// 미들웨어 설정3
app.use(function (request, response, next) {
  console.log("third");
  // 응답.
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>express Basic</h1>');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});