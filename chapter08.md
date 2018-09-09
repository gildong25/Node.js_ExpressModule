# chapter8 express모듈


## express모듈이란?
웹서버 개발시 http모듈에 기능을 추가하여 쉽게 사용할수 있게함!
## 알아둘 개념
| 분류 | 설명 |
| :-------- | :--------: |
| express모듈 | http모듈처럼 사용가능, 더 많은 기능을 가짐 |
| 미들웨어 | express모듈 use()메서드의 매개변수에 입력하는 함수 |
| router 미들웨어 | 페이지 라우팅 지원 |
| static 미들웨어 | 지정 폴더 내용을 웹서버루트폴더에 업로드 시 사용 |
| morgan 미들웨어 | 웹 요청이 들어왔을때 로그 출력 |
| cookie parser 미들웨어 | 요청 쿠키 추출 |
| body parser 미들웨어 | POST 요청 데이터 추출 |
| connect-multiparty 미들웨어 | multipart/form-data 인코딩 방식을 사용해 POST 요청 데이터 추출 |
| express-session 미들웨어 | 쉬운 세션 생성 |
| RESTful 웹 서비스 | 일관된 웹 서비스 인터페이스 설계 기반 (REST 규정)에 맞춰 만든 웹 서비스 |


## express모듈(=외부모듈) 설치
$ npm install express@4

### 8.1 기본서버
1. 모듈 추출
2. express모듈을 사용한 서버 생성 및 실행
* http모듈 대신 express 모듈을 사용하는 이유
기능이_많아서(라우팅,파싱,로그,use()메서드 등..)

### 8.2 기본 응답 메서드
> request 이벤트 리스너
- request 객체
- response 객체

##### response객체 메서드
| 메서드 | 설명 | 
| :-------- | :--------: | 
| response.send([body]) | 매개변수의 자료형에 따라 적절한 형태로 응답 | 
| response.json([body]) | JSON형태로 응답 | 
| response.jsonp([body]) | JSONP형태로 응답 | 
| response.redirect([status.]path) | 웹페이지 경로 강제이동 | 


##### send() 메서드의 매개변수
| 자료형 | 설명 | 
| :-------- | :--------: | 
| 문자형 | HTML | 
| 배열 | JSON | 
| 객체 | JSON | 

* 앞에 status() 메서드 사용시 상태 코드(status code)를 전달 가능
* 상태 코드만 전달하고자 할 경우 response.sendStatus(404) 형태로 사용

### 8.3 기본 요청 메서드

##### request객체 메서드
| 메서드 | 설명 | 
| :-------- | :--------: | 
| parms | 라우팅 매개변수 추출 | 
| query | 요청 매개변수 추출 | 
| headers | 요청 헤더 추출 | 
| header() | 요청 헤더 속성 지정 or 추출 | 
| accepts(type) | 요청 헤더 Accept 속성 확인 | 
| is(type) | 요청 헤더 Content-Type 속성 확인 | 


##### 8.3.1 요청 헤더의 속성 추출 
* 요청 헤더의 속성을 추출하여 웹 브라우저별 처리 가능
* HTTP 요청시 포함된 User-Agent 속성으로 구분하여 필터기능

#### 8.3.2 요청 매개변수 추출
* query 속성을 사용, 요청 매개변수 추출

### 8.4 미들웨어 개요
> 재사용성!
* use() 메서드 사용
* 매개변수로 function(request, response, next){} 형태로 사용
* 미들웨서 사용시 특정작업 별 모듈을 분리하여 재사용가능

#### express모듈과 함께 사용할 수 있는 미들웨어
| 미들웨어 | 설명 | 
| :-------- | :--------: | 
| router | 페이지 라우트 수행 | 
| static | 특정 폴더를 서버의 루트 폴더에 업로드 | 
| morgan | 로그 정보 출력 | 
| cookie parser | 쿠키분해 | 
| body parser | POST 요청 매개변수 추출 | 
| connect-multiparty | POST 요청 매개변수 추출 | 
| express-session | 세션 처리 수행 | 
| csurf | CSRF 보안 수행 | 
| error handler | 예외 처리 수행 | 
| limit | POST 요청의 데이터를 제한 | 
| vhost | 가상호스트 설정 | 

  * http://expressjs.com/en/resources/middleware.html

### 8.5 router 미들웨어
> 클라이언트 요청에 적절한 페이지 제공( 페이지 라우팅 )

#### app 객체의 메서드
| 메서드 | 설명 | 
| :-------- | :--------: | 
| get(path, callback[, callback]) | GET 요청 발생시 | 
| post(path, callback[, callback]) | POST 요청 발생시 | 
| put(path, callback[, callback]) | PUT 요청 발생시 |
| delete(path, callback[, callback]) | DELET 요청 발생시 |
| all(path, callback[, callback]) | 모든 요청 발생시 |

> 매개변수 사용이 가능하다
> 전체 선택자(*)를 사용할수 있다. 가장 마지막에 위치해야 함을 주의

#### params속성과 query 속성
| 속성 | 설명 | 
| :-------- | :--------: | 
| params | /:id 처럼 ':' 기호로 지정된 라우팅 매개변수 |
| query | ?name=A 와 같은 요청 매개변수 |

### 8.6 static 미들웨어
> express 내장 미들웨어. 웹서버에서 쉬운 파일 제공
* 이미지, 자바스크립트, css 파일 등을 넣을 수 있다
* 전역변수 __dirname을 사용해 폴더위치지정
* 이미지 파일 -> img 태그 생성하여 출력

### 8.7 morgan 미들웨어
> 로그출력 미들웨어, 외부모듈이므로 따로설치
$ npm install morgan

#### margan 미들웨어의 토큰
| 토큰 | 설명 | 
| :-------- | :--------: | 
| :req[header] | 요청헤더 |
| :res[header] | 응답헤더 |
| :http-version | HTTP 버전 |
| :response-time | 응답시간 |
| :remote-addr | 원격주소 |
| :date[format] | 요청시간 |
| :url | 요청 URL |
| :referrer | 이전 URL |
| :User-Agent | 사용자 에이전트 |
| :status | 상태코드 |
* 사용예시
```
app.useCmorganCrmethod + :date'));
```
### 8.8 cookie parser 미들웨어 
> 요청쿠키 추출 미들웨어,
> request객체와 response객체에 cookies 속성과 cookie() 메서드 부여
$ npm install cookie-parser

#### cookie()메서드의 옵션 속성
| 속성 | 설명 | 
| :-------- | :--------: | 
| httpOnly | 클라이언트의 쿠키 접근 권한 지정 |
| secure | secure 속성 지정 |
| expires | expires 속성 지정 |
| maxAge | 상대적 expires 속성 지정 |
| path | path 속성 지정 |

* 사용 예시
```
response.cookie(*string', 'cookie', { maxAge： 6000, secure： true
})
```

### 8.9 body parser 미들웨어 
> POST 데이터 추출, request객체에 body 속성 부여
$ npm install body-parser

### 8.10 connect-multiparty 미들웨어
> multipart/form-data 인코딩 방식 사용가능
$ npm install connect-multiparty
* form 태그의 enctype 속성을 'multipart/form-data'로 지정
* enctype 속성은 폼을 전송할때 사용할 인코딩 방법을 지정
* body-parser 미들웨어는 multipart/form-data 방식을 지원 안함

#### 입력양식의 인코딩방식
| 입력양식 | 설명 | 
| :-------- | :--------: | 
| application/x-www-form-urlencoded | (기본값) 모든 문자를 인코딩 |
| multipart/form-data | 어떠한 문자 인코딩도 하지 않음. 주로 파일 업로드 컨트롤 제공 시 사용 |

* 이름이 같을 경우 덮어쓰기가 되는 점을 주의(rename()메서드 이용)

### 8.11 express-session 미들웨어 
> 서버에 정보를 저장, 식별자 쿠키 부여
$ npm install express-session
* request 객체에 session 속성을 부여
* express 모듈은 웹브라우저가 켜있는 동안만 세션을 유지

#### session()메서드의 옵션 
| 옵션 | 설명 | 
| :-------- | :--------: | 
| name | 쿠키 name 속성 지정 |
| store |  세션 저장소 지정 |
| cookie |  생성 cookie 관련 정보 지정 |
| secret |  비밀키 지정 |
| resave |  세션이 변경되지 않았을 경우에도 저장소에 반영하는지 여부를 지정(true/false) |
| saveUninitialized |  초기화 되지 않은 세션을 저장소에 저장할지 설정(true/false) |

#### session객체의 메서드 
| 메서드 | 설명 | 
| :-------- | :--------: | 
| regenerate() | 세션 재생성 |
| destroy() | 세션 제거 |
| reload() | 세션 재로드 |
| save() | 세션 저장 |

### 8.12 RESTful 웹 서비스
> REST 규정을 맞춰 만든 일관된 웹서비스

#### RESTful 웹 서비스 구조
| 경로 | /collection | /collection/:id |
| :-------- | :--------: | --------: | 
| GET 방식 | 컬렉션조회 | 컬렉션 특정 요소 조회 |
| POST 방식 | 컬렉션 새 데이터 추가 | X |
| PUT 방식 | 컬렉션 전체 변경 | 컬렉션 특정 요소 수정 |
| DELETE 방식 | 컬렉션 전체 삭제 | 컬렉션 특정 요소 삭제 |


#### RESTful 웹 서비스
| 라우트 | 경로 | 설명 |
| :-------- | :--------: | --------: | 
| GET | /user | 모든 사용자 정보 조회 |
| GET | /user/:id | 특정 사용자 정보 조회 |
| POST | /user | 사용자 추가 |
| PUT | /user/:id | 특정 사용자 정보 수정 |
| DELETE | /user/:id | 특정 사용자 정보 삭제 |

* 사용 예시
```
• GET /user - 사용자 전체를 조회합니다. 
• GET /user/273 - 273번 사용자를 조회합니다. 
• POST /user - 사용자를 추가합니다. 
• DELETE /user/273 一 273번 사용자를 삭제합니다.
```

#### 8.12.1 더미 데이터베이스 구현
> 가상 데이터 베이스 구축

#### 8.12.2 GET 요청
#### 8.12.3 POST 요청
#### 8.12.4 PUT 요청
#### 8.12.5 DELETE 요청
