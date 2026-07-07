# N주차 - 이름

## var, let, const의 호이스팅 동작 차이는 무엇인가요?
- **카테고리**: JavaScript

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

---

## React Hooks에서 클로저가 하는 역할
- **카테고리**: React

### 답변
- 리렌더링될 때마다 그 시점의 state와 props 값을 함수 내부에 고정해서 기억하게 해주는 역할
- 매 렌더링마다 함수 컴포넌트가 통째로 다시 실행되면서 그 안의 이벤트 핸들러나 useEffect 콜백이 그 시점의 값을 캡처하는 것
- 그래서 useEffect에서 deps 배열을 빠뜨리면, 콜백 내부의 state가 처음 렌더링 시점 값으로 고정돼버리는 stale closure 문제가 발생할 수 있음

---

## 렉시컬 스코프와 동적 스코프의 차이
- **카테고리**: JavaScript

### 답변
- 렉시컬 스코프는 함수를 어디서 선언했는지에 따라 상위 스코프가 결정됨
- 동적 스코프는 함수를 어디서 호출했는지에 따라 상위 스코프가 결정됨

---

## Promise와 async/await의 차이
- **카테고리**: JavaScript

### 답변
- promise는 .then(), .catch() 체이닝 방식이며 에러는 .catch()에서 처리
- async/await은 promise가 settled 될 때까지 함수 실행을 일시 중단하여 동기 코드처럼 작성 가능하게 해주며 async 함수는 항상 promise를 반환
- try/catch로 에러 처리 가능해 가독성이 좋음

---

## React에서 key prop이 reconciliation과정에서 왜 중요한가
- **카테고리**: React

### 답변
- key를 고유 값으로 주면 어떤 요소가 추가/삭제/이동됐는지 정확히 식별 가능하기 때문에 효율적으로 이전 트리와 비교 가능
- key가 없으면 react는 배열 순서로 엘리먼트를 비교해 불필요한 리렌더링이나 잘못된 DOM 재사용 발생 가능

---

## props drilling 문제를 해결하는 방법
- **카테고리**: React

### 답변
- context api나 zustand 같은 전역 상태 관리 라이브러리 사용

---

## 불필요한 리렌더링 방지 방법
- **카테고리**: React

### 답변
- React.memo, useMemo, useCallback을 사용하여 메모이제이션이나 컴포넌트 쪼개기, key 최적화, state를 필요한 범위로 최소화 및 끌어내리기

---

## flex에서 justify-content와 align-items의 차이
- **카테고리**: CSS

### 답변
- flex-direction이 row면 justify-content는 가로, align-items는 세로 정렬
- justify-content는 주축 방향 정렬
- align-items는 교차축 방향 정렬

---

## Preflight 요청이란?
- **카테고리**: CS

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

---

## HSTS란?
- **카테고리**: Network

### 답변
- 서버가 Strict-Transport-Security 응답 헤더로 HTTPS만 접속하라고 브라우저에 강제하는 정책
- 목적은 SSL 스트리핑(HTTPS > HTTP 다운그레이드) 공격 방지 위함
