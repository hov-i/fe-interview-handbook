<div align="center">

# 📝 Frontend Interview Handbook

**신입/주니어 프론트엔드 개발자를 위한 기술면접 대비 스터디**

매주 질문을 작성하고, 서로 꼬리질문하며 성장하는 스터디입니다.

</div>

---

## 👨‍👩‍👦‍👦 Contributer

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/hov-i">
        <img src="https://github.com/hov-i.png" width="120px" /><br />
        <sub><b>hovi</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kzlsk">
        <img src="https://github.com/kzlsk.png" width="120px" /><br />
        <sub><b>kzlsk</b></sub>
      </a>
    </td>
  </tr>
</table>

---

## 📌 진행 방식

1. 매주 화, 금 `weeks/week-XX/{본인 핸들}.md` 파일을 만들어 PR을 올립니다.
2. 한 파일에 최소 **10개** 질문 + 답변 + 꼬리질문을 작성합니다.
3. 7시 30분 밍글 스터디룸에 모여서 스터디 시간에 서로 질문하고 리뷰 후 PR을 머지합니다.
4. 머지되면 GitHub Actions가 자동으로 아래 질문 인덱스를 갱신합니다.

> 작성 규칙은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 📚 Interview

<!-- TOC:START -->
> **13** 개 질문 · 마지막 업데이트: 2026-07-01

### JavaScript

<details>
<summary>이벤트 루프가 어떻게 동작하나요?</summary>

### 답변
콜 스택, 매크로태스크 큐, 마이크로태스크 큐로 구성되어 비동기 작업을 처리합니다.

- **1단계**: 콜 스택이 비면 마이크로태스크 큐를 먼저 확인합니다.
- **2단계**: 마이크로태스크 큐가 비면 매크로태스크 큐에서 하나를 꺼내 실행합니다.
- **분류**: `Promise.then`은 마이크로태스크, `setTimeout`은 매크로태스크에 등록됩니다.

### 꼬리질문
- 마이크로태스크와 매크로태스크의 차이는?
- requestAnimationFrame은 어디에 속하나요?

</details>

<details>
<summary>클로저란 무엇인가요?</summary>

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

</details>

<details>
<summary>var, let, const의 차이는 무엇인가요?</summary>

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

</details>

### TypeScript

<details>
<summary>TypeScript의 제네릭(Generic)은 왜 사용하나요?</summary>

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

</details>

### React

<details>
<summary>React에서 가상 DOM(Virtual DOM)이란 무엇인가요?</summary>

### 답변
실제 DOM의 가벼운 자바스크립트 객체 복사본으로, 직접적인 DOM 조작을 최소화해 렌더링 성능을 최적화합니다.

- **생성**: 상태가 변경되면 새 가상 DOM을 만듭니다.
- **비교(diffing)**: 이전 가상 DOM과 비교해 바뀐 부분을 찾습니다.
- **반영(reconciliation)**: 실제로 바뀐 부분만 실제 DOM에 반영합니다.

### 꼬리질문
- React의 재조정(Reconciliation) 과정에서 `key`가 중요한 이유는?
- 가상 DOM이 항상 실제 DOM 조작보다 빠른가요?

</details>

<details>
<summary>useMemo와 useCallback의 차이는 무엇인가요?</summary>

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

</details>

<details>
<summary>Virtual DOM이란 무엇인가요?</summary>

### 답변
Virtual DOM은 실제 DOM의 가벼운 복사본을 메모리에 유지하는 개념입니다.
상태가 변경되면 새로운 Virtual DOM 트리를 생성하고, 이전 트리와 비교(diffing)하여
변경된 부분만 실제 DOM에 반영(reconciliation)합니다.

이를 통해 불필요한 DOM 조작을 줄여 성능을 최적화합니다.

### 꼬리질문
- React Fiber는 무엇인가요?
- key prop이 reconciliation에서 왜 중요한가요?

</details>

### CSS

<details>
<summary>CSS에서 BEM 방법론이란 무엇인가요?</summary>

### 답변
Block, Element, Modifier의 약자로, 재사용성과 가독성을 높이는 CSS 클래스 네이밍 규칙입니다.

- **Block**: 독립적인 컴포넌트 (`.card`)
- **Element**: Block의 구성 요소 (`.card__title`)
- **Modifier**: 상태나 변형 (`.card--highlighted`)

### 꼬리질문
- BEM 외에 다른 CSS 네이밍 방법론은?
- CSS Modules과 BEM을 함께 사용할 수 있나요?

</details>

### HTML

<details>
<summary>시맨틱 마크업(Semantic Markup)이란 무엇이고 왜 중요한가요?</summary>

### 답변
`<header>`, `<nav>`, `<main>`, `<article>` 등 의미를 담은 태그로 문서 구조를 작성하는 것입니다.

- **접근성**: 스크린 리더가 구조를 올바르게 해석합니다.
- **SEO**: 검색 엔진이 콘텐츠의 의미를 이해하기 쉽습니다.
- **유지보수**: `<div>` 남발보다 코드 가독성이 높습니다.

### 꼬리질문
- `<section>`과 `<article>`의 차이는?
- `<b>`와 `<strong>`, `<i>`와 `<em>`의 차이는?

</details>

### Network

<details>
<summary>HTTP 캐싱은 어떻게 동작하나요?</summary>

### 답변
응답을 재사용해 불필요한 네트워크 요청을 줄이는 메커니즘입니다.

- **강한 캐시**: `Cache-Control: max-age`, `Expires`로 만료 전까지 서버에 요청하지 않고 캐시를 사용합니다.
- **약한 캐시**: 만료 후 `ETag`, `Last-Modified`로 변경 여부를 확인하고, 변경이 없으면 `304 Not Modified`를 응답합니다.

### 꼬리질문
- `no-cache`와 `no-store`의 차이는?
- `ETag`는 어떻게 생성되나요?

</details>

<details>
<summary>HTTP와 HTTPS의 차이점은 무엇인가요?</summary>

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

</details>

### Browser

<details>
<summary>브라우저에 URL을 입력하면 화면이 그려지기까지 어떤 과정을 거치나요?</summary>

### 답변
크게 네트워크 단계와 렌더링 단계를 거칩니다.

- **DNS 조회**: 도메인을 IP 주소로 변환합니다.
- **연결 수립**: TCP 연결과 TLS 핸드셰이크로 서버와 연결합니다.
- **요청·응답**: HTTP 요청을 보내고 HTML 문서를 받습니다.
- **렌더링**: DOM·CSSOM 생성 → Render Tree → Layout → Paint → Composite 순으로 화면을 그립니다.

### 꼬리질문
- Reflow와 Repaint의 차이는 무엇인가요?
- CSS와 JS가 렌더링을 차단(blocking)하는 경우는?

</details>

### CS

<details>
<summary>프로세스와 스레드의 차이는 무엇인가요?</summary>

### 답변
실행 단위와 메모리 공유 방식에서 차이가 있습니다.

- **프로세스**: 실행 중인 프로그램의 단위로, 독립된 메모리 공간(Code, Data, Heap, Stack)을 가집니다.
- **스레드**: 프로세스 내 실행 흐름의 단위로, Code·Data·Heap을 공유하고 Stack만 독립적으로 가집니다.
- **특징**: 스레드는 메모리를 공유해 통신 비용이 적지만, 동기화 문제가 발생할 수 있습니다.

### 꼬리질문
- 멀티프로세스와 멀티스레드의 장단점은?
- 자바스크립트는 싱글 스레드인데 어떻게 비동기를 처리하나요?

</details>
<!-- TOC:END -->
