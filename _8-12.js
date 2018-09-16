
/** 요청메소드
 * QUERY - ?a=1&b=2&c=3
 * PARAMS - /:PAGE => {PAGE} 페이지입니다.
*/
// 모듈 추출
var express = require('express');

// 서버 생성
var app = express();

// 쿼리
app.get('/a', (request, response)=>{
  //127.0.0.1:52273/a?a=1&b=2&c=3
  response.send(request.query);
});

// 파람S
app.get('/b/:test-:page', (request, response)=>{
  //http://127.0.0.1:52273/b/test2-1153
  response.send(`<h1>${request.params.test}::${request.params.page}페이지 입니다.</h1>`);
});

// 서버 실행
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
  