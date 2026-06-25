# 1주차 - partner

## 클로저란 무엇인가요?
- **카테고리**: JavaScript

### 답변
클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 자바스크립트의 특성입니다.
함수가 생성될 때의 렉시컬 환경을 기억하기 때문에 가능합니다.

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
add5(3); // 8
```

### 꼬리질문
- var와 let에서 클로저 동작이 다른 이유는?
- React Hooks에서 클로저가 어떤 역할을 하나요?

---

## Virtual DOM이란 무엇인가요?
- **카테고리**: React

### 답변
Virtual DOM은 실제 DOM의 가벼운 복사본을 메모리에 유지하는 개념입니다.
상태가 변경되면 새로운 Virtual DOM 트리를 생성하고, 이전 트리와 비교(diffing)하여
변경된 부분만 실제 DOM에 반영(reconciliation)합니다.

이를 통해 불필요한 DOM 조작을 줄여 성능을 최적화합니다.

### 꼬리질문
- React Fiber는 무엇인가요?
- key prop이 reconciliation에서 왜 중요한가요?

---

## HTTP와 HTTPS의 차이점은 무엇인가요?
- **카테고리**: Network

### 답변
HTTPS는 HTTP에 TLS/SSL 암호화 계층을 추가한 프로토콜입니다.

| 구분 | HTTP | HTTPS |
|------|------|-------|
| 포트 | 80 | 443 |
| 암호화 | 없음 | TLS/SSL |
| 인증서 | 불필요 | 필요 |

HTTPS는 데이터를 암호화하여 중간자 공격을 방지하고, 데이터 무결성을 보장합니다.

### 꼬리질문
- TLS 핸드셰이크 과정을 설명해주세요.
- HSTS란 무엇인가요?
