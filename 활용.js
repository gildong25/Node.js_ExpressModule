/**
 * $ npm install express && npm install body-parser
 */
// 모듈을 추출합니다.
const express = require('express');
const bodyParser = require('body-parser');


// 서버를 생성/실행합니다.
const app = express();
app.listen(52273, () => {
  console.log('app Running at http://127.0.0.1:52273');
});

//===>postman으로 실행 확인

// 미들웨어를 추가합니다.
app.use(bodyParser.urlencoded({
  extended: false
}));

// 변수를 선언합니다.
const users = {};

// 라우트합니다.
app.get('/user', (request, response) => {
 // user에 대한 모든정보
  response.send(users);
});
app.post('/user', (request, response) => {
  // 변수를 선언합니다.
  const body = request.body;

  // 예외를 처리합니다.(위에서 아래로 읽는 방식)
  if (!body.id) { return response.send('id를 보내주세요'); }
  if (!body.name) { return response.send('name을 보내주세요'); }
  if (!body.region) { return response.send('region을 보내주세요'); }

  // id,name,region 변수를 추출합니다.
  const id = body.id;
  const name = body.name;
  const region = body.region;

  // 데이터를 저장합니다.
  users[id] = {
    name: name,
    region: region
  };

  // 응답합니다.
  response.send(users[id]);
});

// postman / POST로 id,name,region SEND
// postman / GET으로 모든 정보 가져옴

app.get('/user/:id', (request, response) => {
  // 변수를 선언합니다.
  // params로 id 내용을 가져옴
  const id = request.params.id;
  response.send(users[id]);
});
app.put('/user/:id', (request, response) => {
  // 변수를 선언합니다.
  const id = request.params.id;

  // 데이터를 수정합니다.
  if (request.body.name) {
    users[id].name = request.body.name;
  }
  if (request.body.region) {
    users[id].region = request.body.region;
  }
  // 응답합니다.
  response.send(users[id]);
});

//삭제
app.delete('/user/:id', (request, response) => {
  // 변수를 선언합니다.
  const id = request.params.id;

  // 데이터를 제거합니다.
  delete users[id]

  // 응답합니다.
  response.send('제거되었습니다');
});