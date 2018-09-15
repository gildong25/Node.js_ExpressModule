/** 요청쿠키추출 cookie paser - $ npm install cookie-parser */

// 모듈 추출
var express = require('express');
var cookieParser = require('cookie-parser');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());

// 라우터 설정
app.get('/getCookie', function (request, response) {
  // 응답(send메서드 이용)
  response.send(request.cookies);
});
app.get('/setCookie', function (request, response) {
  // 쿠키 생성
  response.cookie('string', 'cookie');
  response.cookie('json', {
    name: 'cookie',
    property: 'delicious'
  });
  // 세번째 매개변수에 옵션 객체 설정가능
  response.cookie('string', 'cookie', { 
    maxAge: 6000,
    secure: true
  });
  // 응답
  response.redirect('/getCookie');
});

// 서버실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});

//http://127.0.0.1:52273/setCookie
//http://127.0.0.1:52273/getCookie