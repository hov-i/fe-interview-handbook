# 1주차 - hovi

## 클로저란 무엇인가요?
- **카테고리**: JavaScript

### 답변
함수가 선언된 렉시컬 환경을 기억하여, 해당 스코프 밖에서 실행되더라도 그 환경에 접근할 수 있는 기능입니다.

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

- **핵심**: 외부 함수의 변수 `count`가 내부 함수 `inner`의 클로저에 의해 유지됩니다.

### 꼬리질문
- 클로저가 메모리 누수를 일으킬 수 있나요?
- 클로저를 활용한 모듈 패턴은 어떻게 구현하나요?

---

## 이벤트 루프가 어떻게 동작하나요?
- **카테고리**: JavaScript

### 답변
콜 스택, 매크로태스크 큐, 마이크로태스크 큐로 구성되어 비동기 작업을 처리합니다.

- **1단계**: 콜 스택이 비면 마이크로태스크 큐를 먼저 확인합니다.
- **2단계**: 마이크로태스크 큐가 비면 매크로태스크 큐에서 하나를 꺼내 실행합니다.
- **분류**: `Promise.then`은 마이크로태스크, `setTimeout`은 매크로태스크에 등록됩니다.

### 꼬리질문
- 마이크로태스크와 매크로태스크의 차이는?
- requestAnimationFrame은 어디에 속하나요?

---

## CSS에서 BEM 방법론이란 무엇인가요?
- **카테고리**: CSS

### 답변
Block, Element, Modifier의 약자로, 재사용성과 가독성을 높이는 CSS 클래스 네이밍 규칙입니다.

- **Block**: 독립적인 컴포넌트 (`.card`)
- **Element**: Block의 구성 요소 (`.card__title`)
- **Modifier**: 상태나 변형 (`.card--highlighted`)

### 꼬리질문
- BEM 외에 다른 CSS 네이밍 방법론은?
- CSS Modules과 BEM을 함께 사용할 수 있나요?

---

## var, let, const의 차이는 무엇인가요?
- **카테고리**: JavaScript

### 답변
스코프, 호이스팅, 재할당 가능 여부에서 차이가 있습니다.

- **var**: 함수 스코프, 호이스팅 시 `undefined`로 초기화, 재선언·재할당 가능
- **let**: 블록 스코프, TDZ 존재, 재할당 가능·재선언 불가
- **const**: 블록 스코프, TDZ 존재, 재할당·재선언 불가 (객체 내부 값은 변경 가능)

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
타입을 매개변수처럼 받아서, 재사용성과 타입 안정성을 동시에 유지하는 기능입니다.

```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10); // number
const str = identity('hello');     // string (타입 추론)
```

- **핵심**: `any`는 타입 정보가 사라지지만, 제네릭은 호출 시점의 타입을 그대로 보존합니다.

### 꼬리질문
- 제네릭에 `extends`로 제약을 거는 이유는?
- `keyof`와 제네릭을 함께 쓰는 예시는?

---

## React에서 가상 DOM(Virtual DOM)이란 무엇인가요?
- **카테고리**: React

### 답변
실제 DOM의 가벼운 자바스크립트 객체 복사본으로, 직접적인 DOM 조작을 최소화해 렌더링 성능을 최적화합니다.

- **생성**: 상태가 변경되면 새 가상 DOM을 만듭니다.
- **비교(diffing)**: 이전 가상 DOM과 비교해 바뀐 부분을 찾습니다.
- **반영(reconciliation)**: 실제로 바뀐 부분만 실제 DOM에 반영합니다.

### 꼬리질문
- React의 재조정(Reconciliation) 과정에서 `key`가 중요한 이유는?
- 가상 DOM이 항상 실제 DOM 조작보다 빠른가요?

---

## useMemo와 useCallback의 차이는 무엇인가요?
- **카테고리**: React

### 답변
둘 다 메모이제이션으로 불필요한 재계산·재생성을 막는 훅입니다.

- **useMemo**: 계산된 **값**을 메모이제이션 (`() => 값`의 결과를 캐싱)
- **useCallback**: **함수** 자체를 메모이제이션 (`useMemo(() => fn, deps)`와 동일)

```javascript
const memoValue = useMemo(() => heavyCalc(a, b), [a, b]);
const memoFn = useCallback(() => doSomething(a), [a]);
```

### 꼬리질문
- 모든 함수에 useCallback을 쓰는 게 좋은가요?
- 자식 컴포넌트의 `React.memo`와 함께 쓰면 어떤 효과가 있나요?

---

## 브라우저에 URL을 입력하면 화면이 그려지기까지 어떤 과정을 거치나요?
- **카테고리**: Browser

### 답변
크게 네트워크 단계와 렌더링 단계를 거칩니다.

- **DNS 조회**: 도메인을 IP 주소로 변환합니다.
- **연결 수립**: TCP 연결과 TLS 핸드셰이크로 서버와 연결합니다.
- **요청·응답**: HTTP 요청을 보내고 HTML 문서를 받습니다.
- **렌더링**: DOM·CSSOM 생성 → Render Tree → Layout → Paint → Composite 순으로 화면을 그립니다.

### 꼬리질문
- Reflow와 Repaint의 차이는 무엇인가요?
- CSS와 JS가 렌더링을 차단(blocking)하는 경우는?

---

## HTTP 캐싱은 어떻게 동작하나요?
- **카테고리**: Network

### 답변
응답을 재사용해 불필요한 네트워크 요청을 줄이는 메커니즘입니다.

- **강한 캐시**: `Cache-Control: max-age`, `Expires`로 만료 전까지 서버에 요청하지 않고 캐시를 사용합니다.
- **약한 캐시**: 만료 후 `ETag`, `Last-Modified`로 변경 여부를 확인하고, 변경이 없으면 `304 Not Modified`를 응답합니다.

### 꼬리질문
- `no-cache`와 `no-store`의 차이는?
- `ETag`는 어떻게 생성되나요?

---

## 시맨틱 마크업(Semantic Markup)이란 무엇이고 왜 중요한가요?
- **카테고리**: HTML

### 답변
`<header>`, `<nav>`, `<main>`, `<article>` 등 의미를 담은 태그로 문서 구조를 작성하는 것입니다.

- **접근성**: 스크린 리더가 구조를 올바르게 해석합니다.
- **SEO**: 검색 엔진이 콘텐츠의 의미를 이해하기 쉽습니다.
- **유지보수**: `<div>` 남발보다 코드 가독성이 높습니다.

### 꼬리질문
- `<section>`과 `<article>`의 차이는?
- `<b>`와 `<strong>`, `<i>`와 `<em>`의 차이는?

---

## 프로세스와 스레드의 차이는 무엇인가요?
- **카테고리**: CS

### 답변
실행 단위와 메모리 공유 방식에서 차이가 있습니다.

- **프로세스**: 실행 중인 프로그램의 단위로, 독립된 메모리 공간(Code, Data, Heap, Stack)을 가집니다.
- **스레드**: 프로세스 내 실행 흐름의 단위로, Code·Data·Heap을 공유하고 Stack만 독립적으로 가집니다.
- **특징**: 스레드는 메모리를 공유해 통신 비용이 적지만, 동기화 문제가 발생할 수 있습니다.

### 꼬리질문
- 멀티프로세스와 멀티스레드의 장단점은?
- 자바스크립트는 싱글 스레드인데 어떻게 비동기를 처리하나요?

---

## 이벤트 버블링과 캡처링은 무엇인가요?
- **카테고리**: JavaScript

### 답변
DOM 이벤트가 전파되는 두 가지 방향으로, 하나의 이벤트가 여러 요소를 거치며 전달됩니다.

- **캡처링**: 최상위(document)에서 시작해 타겟 요소까지 **아래로** 내려갑니다.
- **타겟**: 실제 이벤트가 발생한 요소에 도달합니다.
- **버블링**: 타겟에서 최상위까지 다시 **위로** 올라갑니다. (기본 동작)

```javascript
// 세 번째 인자 true면 캡처링 단계에서 실행
parent.addEventListener('click', handler, true);

// 전파 중단
event.stopPropagation();
```

### 꼬리질문
- 이벤트 위임(Event Delegation)은 어떤 원리를 이용하나요?
- `stopPropagation`과 `preventDefault`의 차이는?

---

## Promise와 async/await의 관계는 무엇인가요?
- **카테고리**: JavaScript

### 답변
async/await는 Promise를 더 동기 코드처럼 읽히게 해주는 문법 설탕(syntactic sugar)입니다.

- **async 함수**: 항상 Promise를 반환합니다.
- **await**: Promise가 이행될 때까지 기다렸다가 결과 값을 반환합니다.
- **에러 처리**: `.catch()` 대신 `try...catch`로 처리할 수 있습니다.

```javascript
async function getUser() {
  try {
    const res = await fetch('/api/user');
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}
```

### 꼬리질문
- 여러 비동기 작업을 병렬로 처리하려면 어떻게 하나요? (`Promise.all`)
- `Promise.all`과 `Promise.allSettled`의 차이는?

---

## Flexbox와 Grid는 언제 무엇을 쓰나요?
- **카테고리**: CSS

### 답변
둘 다 레이아웃 도구지만 다루는 축과 용도가 다릅니다.

- **Flexbox**: **1차원**(행 또는 열) 레이아웃에 적합합니다. (네비게이션 바, 버튼 정렬 등)
- **Grid**: **2차원**(행과 열 동시) 레이아웃에 적합합니다. (전체 페이지 레이아웃, 카드 그리드 등)
- **혼용**: Grid로 큰 구조를 잡고, 각 셀 내부 정렬은 Flexbox로 처리하는 방식이 흔합니다.

### 꼬리질문
- `justify-content`와 `align-items`의 차이는?
- Grid의 `fr` 단위는 무엇인가요?

---

## CSS position 속성의 값들은 어떤 차이가 있나요?
- **카테고리**: CSS

### 답변
요소의 배치 기준을 결정하는 속성입니다.

- **static**: 기본값. 일반 문서 흐름을 따릅니다. (`top/left` 등 무시)
- **relative**: 자기 원래 위치를 기준으로 이동하며, 흐름상 공간은 유지합니다.
- **absolute**: 가장 가까운 `position` 지정 조상을 기준으로 배치되고, 흐름에서 빠집니다.
- **fixed**: 뷰포트를 기준으로 고정됩니다. (스크롤해도 유지)
- **sticky**: 스크롤 위치에 따라 relative와 fixed처럼 전환됩니다.

### 꼬리질문
- `absolute` 요소의 기준이 되는 조상은 어떻게 정해지나요?
- `z-index`가 적용되려면 어떤 조건이 필요한가요?

---

## useEffect의 의존성 배열은 어떤 역할을 하나요?
- **카테고리**: React

### 답변
이펙트가 **언제 다시 실행될지**를 결정하는 값들의 목록입니다.

- **의존성 없음**: 매 렌더링마다 실행됩니다.
- **빈 배열 `[]`**: 마운트 시 한 번만 실행됩니다.
- **값 있음 `[a, b]`**: `a`나 `b`가 바뀔 때마다 실행됩니다.
- **cleanup**: 반환한 함수는 다음 실행 전 또는 언마운트 시 정리 작업을 수행합니다.

```javascript
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id); // cleanup
}, []);
```

### 꼬리질문
- 의존성 배열에 넣어야 할 값을 빠뜨리면 어떤 문제가 생기나요?
- `useEffect`와 `useLayoutEffect`의 실행 시점 차이는?

---

## React에서 상태를 컴포넌트 간에 공유하는 방법은?
- **카테고리**: React

### 답변
상태의 범위와 복잡도에 따라 여러 방법을 선택합니다.

- **props 전달**: 부모 → 자식으로 직접 내려줍니다. (가장 기본)
- **상태 끌어올리기(Lifting State Up)**: 공통 부모로 상태를 올려 형제 간 공유합니다.
- **Context API**: 깊은 트리에 걸친 전역성 데이터(테마, 인증 등)를 prop drilling 없이 전달합니다.
- **상태 관리 라이브러리**: Redux, Zustand, Jotai 등으로 복잡한 전역 상태를 관리합니다.

### 꼬리질문
- Prop Drilling이란 무엇이고 왜 문제가 되나요?
- Context를 남용하면 어떤 성능 문제가 생길 수 있나요?

---

## TypeScript에서 interface와 type의 차이는 무엇인가요?
- **카테고리**: TypeScript

### 답변
둘 다 타입을 정의하지만 확장 방식과 표현 범위에서 차이가 있습니다.

- **interface**: 객체 형태 정의에 주로 쓰이고, 같은 이름으로 **선언 병합(declaration merging)**이 가능합니다.
- **type**: 유니온, 인터섹션, 튜플, 원시 타입 별칭 등 더 넓은 표현이 가능합니다.

```typescript
interface User { name: string; }
interface User { age: number; } // 병합됨

type Status = 'active' | 'inactive'; // 유니온은 type만 가능
```

### 꼬리질문
- 언제 interface를 쓰고 언제 type을 쓰는 게 좋을까요?
- 인터섹션 타입(`&`)과 인터페이스 상속(`extends`)의 차이는?

---

## 얕은 복사와 깊은 복사의 차이는 무엇인가요?
- **카테고리**: JavaScript

### 답변
객체 내부의 참조까지 복사하는지 여부에서 차이가 있습니다.

- **얕은 복사**: 최상위 프로퍼티만 복사하고, 중첩 객체는 **참조를 공유**합니다. (`{...obj}`, `Object.assign`)
- **깊은 복사**: 중첩 객체까지 전부 새로 복사해 **완전히 독립적**입니다. (`structuredClone`, `JSON.parse(JSON.stringify())`)

```javascript
const a = { info: { age: 20 } };
const shallow = { ...a };
shallow.info.age = 30;
a.info.age; // 30 (참조 공유됨)

const deep = structuredClone(a);
```

### 꼬리질문
- `JSON.parse(JSON.stringify())` 방식의 한계는? (함수·undefined·순환 참조)
- `structuredClone`이 복사하지 못하는 값은?

---

## CORS는 무엇이고 왜 발생하나요?
- **카테고리**: Network

### 답변
브라우저의 동일 출처 정책(Same-Origin Policy) 때문에, 다른 출처의 리소스 요청을 제어하는 보안 메커니즘입니다.

- **출처(Origin)**: 프로토콜 + 도메인 + 포트의 조합입니다.
- **동작**: 브라우저가 요청 시 `Origin` 헤더를 보내고, 서버가 `Access-Control-Allow-Origin`으로 허용 여부를 응답합니다.
- **Preflight**: `PUT`·`DELETE`나 커스텀 헤더 등은 본 요청 전에 `OPTIONS` 예비 요청을 보냅니다.

### 꼬리질문
- CORS 에러는 프론트엔드와 백엔드 중 어디서 해결해야 하나요?
- Preflight 요청이 발생하는 조건은?

---

## 웹 접근성(a11y)을 높이려면 어떻게 해야 하나요?
- **카테고리**: HTML

### 답변
장애 여부와 관계없이 모두가 사용할 수 있도록 콘텐츠를 설계하는 것입니다.

- **시맨틱 태그**: `<button>`, `<nav>` 등 의미 있는 태그를 사용합니다.
- **대체 텍스트**: 이미지에 `alt`를 제공합니다.
- **ARIA 속성**: 시맨틱만으로 부족할 때 `role`, `aria-label` 등으로 보완합니다.
- **키보드 접근**: 마우스 없이 Tab·Enter로 조작 가능해야 합니다.

### 꼬리질문
- `<div onClick>` 대신 `<button>`을 써야 하는 이유는?
- 스크린 리더에서만 읽히게 하려면 어떻게 처리하나요? (`sr-only`)
