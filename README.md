# API_Movie_VanilaJS

# 📽 API를 활용한 영화 검색 사이트 
OMDb API를 활용한 VanilaJS 영화 검색 애플리케이션

## ✔ 기술스택 Vercel Server , javascript -> typescript

이 프로젝트는 [JS버전](https://github.com/kimdayeon37/API_Movie_VanilaJS/tree/master)과 [TS버전](https://github.com/kimdayeon37/API_Movie_VanilaJS/tree/typescript)으로 나누어져있습니다.


[DEMO](https://api-movie-vanila-js.vercel.app/#/)


![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/39c6de5c-4610-4e5e-a707-46741704bdc7)

![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/94a1e54b-0397-4f73-b425-b19fc9f969f2)

![image](https://github.com/kimdayeon37/API_Movie_VanilaJS/assets/93921784/74ee3cce-2b08-4396-a086-ff4cd07a183f)


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
