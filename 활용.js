
// 모듈을 추출합니다.
const express = require('express');
const bodyParser = require('body-parser');


// 서버를 생성/실행합니다.
const app = express();
app.listen(52273, () => {
  console.log('app Running at http://127.0.0.1:52273');
});

// 미들웨어를 추가합니다.
app.use(bodyParser.urlencoded({
  extended: false
}));

// 변수를 선언합니다.
const users = {};

// 라우트합니다.
app.get('/user', (request, response) => {
  response.send(users);
});
app.post('/user', (request, response) => {
  // 변수를 선언합니다.
  const body = request.body;

  // 예외를 처리합니다.
  if (!body.id) { return response.send('id를 보내주세요'); }
  if (!body.name) { return response.send('name을 보내주세요'); }
  if (!body.region) { return response.send('region을 보내주세요'); }

  // 변수를 추출합니다.
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

app.get('/user/:id', (request, response) => {
  // 변수를 선언합니다.
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
app.delete('/user/:id', (request, response) => {
  // 변수를 선언합니다.
  const id = request.params.id;

  // 데이터를 제거합니다.
  delete users[id]

  // 응답합니다.
  response.send('제거되었습니다');
});