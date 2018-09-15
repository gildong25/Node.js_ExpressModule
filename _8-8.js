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
app.post('/', function (request, response) {
  // 변수 선언
  var comment = request.body.comment;
  var imageFile = request.files.image;
  if (imageFile) {
    // 변수 선언
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;
    // 이미지 파일 확인
    if (type.indexOf('image') != -1) {
      // 이미지 파일일 경우 : 파일 이름 변경
      var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
      fs.rename(path, outputPath, function (error) {
        response.redirect('/');
      });
    } else {
      // 이미지 파일이 아닐경우 : 파일 제거
      fs.unlink(path, function (error) {
        response.sendStatus(400);
      });
    }
  } else {
    // 파일이 없을경우
    response.sendStatus(404);
  }
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});