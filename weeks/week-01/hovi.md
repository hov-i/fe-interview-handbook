# 1주차 - hovi

## 클로저란 무엇인가요?
- **카테고리**: JavaScript

### 답변
클로저는 함수가 선언된 렉시컬 환경을 기억하여, 함수가 해당 스코프 밖에서 실행되더라도 그 환경에 접근할 수 있는 기능입니다.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

외부 함수의 변수 `count`가 내부 함수 `inner`의 클로저에 의해 유지됩니다.

### 꼬리질문
- 클로저가 메모리 누수를 일으킬 수 있나요?
- 클로저를 활용한 모듈 패턴은 어떻게 구현하나요?

---

## 이벤트 루프가 어떻게 동작하나요?
- **카테고리**: JavaScript

### 답변
이벤트 루프는 콜 스택, 태스크 큐(매크로태스크 큐), 마이크로태스크 큐로 구성됩니다.

1. 콜 스택이 비면 마이크로태스크 큐를 먼저 확인합니다.
2. 마이크로태스크 큐가 비면 매크로태스크 큐에서 하나를 꺼내 실행합니다.
3. 이 과정을 반복합니다.

`Promise.then`은 마이크로태스크, `setTimeout`은 매크로태스크에 등록됩니다.

### 꼬리질문
- 마이크로태스크와 매크로태스크의 차이는?
- requestAnimationFrame은 어디에 속하나요?

---

## CSS에서 BEM 방법론이란 무엇인가요?
- **카테고리**: CSS

### 답변
BEM은 Block, Element, Modifier의 약자로, CSS 클래스 네이밍 규칙입니다.

- **Block**: 독립적인 컴포넌트 (`.card`)
- **Element**: Block의 구성 요소 (`.card__title`)
- **Modifier**: 상태나 변형 (`.card--highlighted`)

코드의 재사용성과 가독성을 높여주는 방법론입니다.

### 꼬리질문
- BEM 외에 다른 CSS 네이밍 방법론은?
- CSS Modules과 BEM을 함께 사용할 수 있나요?
