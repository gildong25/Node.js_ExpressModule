/** 로그정보 morgan 미들웨어! - $ npm install morgan */

// 모듈 추출
var express = require('express');
var morgan = require('morgan');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(morgan('combined'));
app.use((request, response, next) => {
  response.send('Hello morgan..!');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});