/** 파일전송 connect-multiparty 미들웨어
 * $ npm install connect-multiparty
*/

// 모듈 추출
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(multipart({ uploadDir: __dirname + '/multipart' }));

// 라우터 설정
app.get('/', function (request, response) {
  fs.readFile('_HTMLPage.html', function (error, data) {
    response.send(data.toString());
  });
});
// body 속성과 files 속성
app.post('/', function (request, response) {
  console.log(request.body);
  console.log(request.files);
  response.redirect('/');
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});