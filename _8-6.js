/** POST요청 데이터 - bodyParser
 *  $ npm install body-parser
 */


// 모듈 추출
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 서버생성
var app = express();

// 미들웨어 설정
// app.use(bodyParser()); 아님을 유의
// www.npmjs.com/package/body-parser
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
  // body-parser 미들웨어를 사용
  console.log(request.body);
  
  //응답합니다.
  response.send('Test'); 
});
// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});

/**
 * chrome => postman 다운
 * // https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
 * // chrome://apps/
 * => GET 주소입력 //http://127.0.0.1:52273 -> send
 * => POST body - key:'ff' -> send
 */