## nestjs 
controller, service, repository 계층 layer

typeorm활용하여 직접 query작성없이 Entity로 테이블매핑하고 CRUD


## 설치
npm i @nestjs/cli 설치하여 nest new 프로젝트명 

    npm i --save @nestjs/core @nestjs/config @nestjs/typeorm typeorm @nestjs/jwt @nestjs/bcrypt mysql2 class-transformer 

필요한 모듈은 package.json 참조
    

## 실행
    npm run start:dev
    

## .env

SERVER_PORT=3000

DB_HOST=localhost

DB_USER=user

DB_PW=1234

DB_DATABASE=test


## 추가예정
accesstoken 생성작업 예정
