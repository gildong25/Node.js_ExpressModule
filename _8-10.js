/** 폴더별 업로드 static 미들웨어 */

// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(express.static(__dirname + '/public'));
//app.use(express.static(`${__dirname}/public`));

//파일경로지정
//app.use('/files', express.static(`${__dirname}/public`));


// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});

//해당 그림 이름
// 127.0.0.1:52273/node.png

//경로지정
// 127.0.0.1:52273/files/node.png
