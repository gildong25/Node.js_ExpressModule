/**  send메서드/status메서드 활용하기 */

// 모듈추출
var express = require('express');

// 서버생성
var app = express();

// request 이벤트 리스너 설정
app.use((Request, response)=> {
  response.send({
    name: '교수님',
    job: 'student'
  });
/* // status 메서드 사용법  
  response.status(404).send({
    name: '교수님404',
    job: 'student'
  });
*/
});

// 서버실행
app.listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});