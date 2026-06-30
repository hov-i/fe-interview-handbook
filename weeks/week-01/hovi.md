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

---

## var, let, const의 차이는 무엇인가요?
- **카테고리**: JavaScript

### 답변
세 키워드는 스코프, 호이스팅, 재할당 가능 여부에서 차이가 있습니다.

- **var**: 함수 스코프, 호이스팅 시 `undefined`로 초기화, 재선언·재할당 가능
- **let**: 블록 스코프, TDZ(일시적 사각지대) 존재, 재할당 가능·재선언 불가
- **const**: 블록 스코프, TDZ 존재, 재할당·재선언 불가 (단, 객체 내부 값은 변경 가능)

```javascript
console.log(x); // undefined (var 호이스팅)
var x = 1;

console.log(y); // ReferenceError (TDZ)
let y = 2;
```

### 꼬리질문
- TDZ(Temporal Dead Zone)란 무엇인가요?
- `const`로 선언한 객체의 프로퍼티를 변경할 수 있는 이유는?

---

## TypeScript의 제네릭(Generic)은 왜 사용하나요?
- **카테고리**: TypeScript

### 답변
제네릭은 타입을 매개변수처럼 받아서, 재사용 가능하면서도 타입 안정성을 유지하는 기능입니다.

```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10); // number
const str = identity('hello');     // string (타입 추론)
```

`any`를 쓰면 타입 정보가 사라지지만, 제네릭은 호출 시점의 타입을 그대로 보존합니다.

### 꼬리질문
- 제네릭에 `extends`로 제약을 거는 이유는?
- `keyof`와 제네릭을 함께 쓰는 예시는?

---

## React에서 가상 DOM(Virtual DOM)이란 무엇인가요?
- **카테고리**: React

### 답변
가상 DOM은 실제 DOM의 가벼운 자바스크립트 객체 복사본입니다. 상태가 변경되면 새 가상 DOM을 만들고, 이전 가상 DOM과 비교(diffing)하여 실제로 바뀐 부분만 실제 DOM에 반영(reconciliation)합니다.

이를 통해 직접적인 DOM 조작을 최소화하여 렌더링 성능을 최적화합니다.

### 꼬리질문
- React의 재조정(Reconciliation) 과정에서 `key`가 중요한 이유는?
- 가상 DOM이 항상 실제 DOM 조작보다 빠른가요?

---

## useMemo와 useCallback의 차이는 무엇인가요?
- **카테고리**: React

### 답변
둘 다 메모이제이션을 통해 불필요한 재계산·재생성을 막는 훅입니다.

- **useMemo**: 계산된 **값**을 메모이제이션 (`() => 값`의 결과를 캐싱)
- **useCallback**: **함수** 자체를 메모이제이션 (`useMemo(() => fn, deps)`와 동일)

```javascript
const memoValue = useMemo(() => heavyCalc(a, b), [a, b]);
const memoFn = useCallback(() => doSomething(a), [a]);
```

의존성 배열의 값이 바뀔 때만 새로 계산·생성됩니다.

### 꼬리질문
- 모든 함수에 useCallback을 쓰는 게 좋은가요?
- 자식 컴포넌트의 `React.memo`와 함께 쓰면 어떤 효과가 있나요?

---

## 브라우저에 URL을 입력하면 화면이 그려지기까지 어떤 과정을 거치나요?
- **카테고리**: Browser

### 답변
크게 네트워크 단계와 렌더링 단계로 나뉩니다.

1. **DNS 조회**: 도메인을 IP 주소로 변환
2. **TCP 연결 / TLS 핸드셰이크**: 서버와 연결 수립
3. **HTTP 요청·응답**: HTML 문서 수신
4. **렌더링**: HTML 파싱 → DOM 생성, CSS 파싱 → CSSOM 생성 → 두 트리를 합쳐 Render Tree 생성 → Layout(위치·크기 계산) → Paint(픽셀 그리기) → Composite

### 꼬리질문
- Reflow와 Repaint의 차이는 무엇인가요?
- CSS와 JS가 렌더링을 차단(blocking)하는 경우는?

---

## HTTP 캐싱은 어떻게 동작하나요?
- **카테고리**: Network

### 답변
HTTP 캐싱은 응답을 재사용해 불필요한 네트워크 요청을 줄이는 메커니즘입니다.

- **강한 캐시(Strong Cache)**: `Cache-Control: max-age`, `Expires`로 만료 전까지 서버에 요청하지 않고 캐시 사용
- **약한 캐시(Validation)**: 만료 후 `ETag`/`If-None-Match`, `Last-Modified`/`If-Modified-Since`로 변경 여부 확인, 변경 없으면 `304 Not Modified` 응답

### 꼬리질문
- `no-cache`와 `no-store`의 차이는?
- `ETag`는 어떻게 생성되나요?

---

## 시맨틱 마크업(Semantic Markup)이란 무엇이고 왜 중요한가요?
- **카테고리**: HTML

### 답변
시맨틱 마크업은 `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` 등 의미를 담은 태그로 문서 구조를 작성하는 것입니다.

- **접근성**: 스크린 리더가 구조를 올바르게 해석
- **SEO**: 검색 엔진이 콘텐츠의 의미를 이해하기 쉬움
- **유지보수**: `<div>` 남발보다 코드 가독성이 높음

### 꼬리질문
- `<section>`과 `<article>`의 차이는?
- `<b>`와 `<strong>`, `<i>`와 `<em>`의 차이는?

---

## 프로세스와 스레드의 차이는 무엇인가요?
- **카테고리**: CS

### 답변
- **프로세스**: 실행 중인 프로그램의 단위로, 독립된 메모리 공간(Code, Data, Heap, Stack)을 가집니다.
- **스레드**: 프로세스 내 실행 흐름의 단위로, Code·Data·Heap 영역을 공유하고 Stack만 독립적으로 가집니다.

스레드는 메모리를 공유하기 때문에 통신 비용이 적지만, 동기화 문제가 발생할 수 있습니다.

### 꼬리질문
- 멀티프로세스와 멀티스레드의 장단점은?
- 자바스크립트는 싱글 스레드인데 어떻게 비동기를 처리하나요?
