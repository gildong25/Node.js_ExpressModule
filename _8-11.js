/** 경로 설정 라우터 미들웨어 */

/**
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

app.get('/a', (request, response)=>{
  response.send('<h1>A 페이지 입니다.</h1>');
});

app.get('/b', (request, response)=>{
  response.send('<h1>B 페이지 입니다.</h1>');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
*/

// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 라우터 생성
var routerA = express.Router();
var routerB = express.Router();

// 라우터 A 설정
routerA.get('/index', function (request, response) {
  response.send('<h1>Index APage</h1>');
});

// 라우터 B 설정
routerB.get('/index', function (request, response) {
  response.send('<h1>Index BPage</h1>');
});

// 라우터 설정
app.use('/a', routerA);
app.use('/b', routerB);

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});