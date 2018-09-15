/** 세션 생성 express-session
 * $ npm install express-session
 */

// 모듈 추출
var express = require('express');
var session = require('express-session');

// 서버 생성
var app = express();

// 미들 웨어 설정
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));
// session 속성
app.use(function (request, response) {
  // 세션 저장(현재시간)
  request.session.now = (new Date()).toUTCString();
  // 응답
  response.send(request.session);
});

//서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});


