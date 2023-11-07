# API_Movie_VanilaJS

# 📽 API를 활용한 영화 검색 사이트 
OMDb API를 활용한 VanilaJS 영화 검색 애플리케이션
이 프로젝트는 [JS버전](https://github.com/kimdayeon37/API_Movie_VanilaJS/tree/master)과 [TS버전](https://github.com/kimdayeon37/API_Movie_VanilaJS/tree/typescript)으로 나누어져있습니다.

[DEMO](https://api-movie-vanila-js.vercel.app/#/)

## ✔ 기술스택 Vercel Server , javascript -> typescript

![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/a894c712-27ae-4f1a-a807-15de4e5a6407)
![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/8defa3af-1d7a-4535-a5d2-aa8053056cb4)
![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/1ed39cea-c99f-48bc-bee8-d65404964b18)

실행 방법
```
API키 보안을 위해 vercel을 통해 서버를 개발했기 때문에 서버 파일 이름으로 접근 
```

실행 코드
```
$ npm install
$ npm run vercel
```



## 환경변수 구성 및 최종 배포 
로컬의 개발용 서버에서 사용할 환경변수를 .env 파일에 지정했습니다.
/.env
```
APIKEY=<MY_OMDb_API_KEY>
```

애플리케이션 서버(Vercel 서비스)에서 사용할 환경변수를 지정했습니다.
- Vercel 서비스의 프로젝트 'Settings / Environment Variables' 옵션에서 다음과 같이 환경변수를 지정
![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/fe77b3ef-e72b-498c-b51e-b1dc69ec42c9)
