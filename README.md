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
     <td align="center">
      <a href="https://github.com/restareaByWeezy">
        <img src="https://github.com/restareaByWeezy.png" width="120px" /><br />
        <sub><b>restareaByWeezy</b></sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/Leeseunghwan7305">
        <img src="https://github.com/Leeseunghwan7305.png" width="120px" /><br />
        <sub><b>Leeseunghwan7305</b></sub>
      </a>
    </td>
  </tr>
</table>

---

## 📌 진행 방식

1. 매주 화, 금 `weeks/week-XX/{본인 핸들}.md` 파일을 만들어 PR을 올립니다.
2. 화요일은 메인 질문 10개를 준비하고, 금요일은 메인 질문 10개에 대한 꼬리질문을 준비합니다.
3. 7시 40분 밍글 스터디룸에 모여서 스터디 시간에 서로 질문하고 리뷰 후 PR을 머지합니다.
4. 머지되면 GitHub Actions가 자동으로 아래 질문 인덱스를 갱신합니다.

> 작성 규칙은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 📚 Interview

<!-- TOC:START -->
> **41** 개 질문 · 마지막 업데이트: 2026-07-10

### JavaScript

<details>
<summary>동기와 비동기의 차이는 무엇인가요?</summary>

### 답변

동기 처리 방식은 현재 실행 중인 작업이 종료될 때까지 기다렸다가 다음 작업이 실행되는 방식을 뜻하고, </br>
비동기 처리 방식은 현재 실행 중인 작업이 종료되지 않은 상태여도 다음 작업을 곧바로 실행하는 방식을 뜻합니다.

### 꼬리질문


<details>
<summary>이벤트 루프가 동기/비동기 처리에 어떻게 관여하나요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>Promise와 async/await의 차이는 무엇인가요?</summary>

### 답변
- promise는 .then(), .catch() 체이닝 방식이며 에러는 .catch()에서 처리
- async/await은 promise가 settled 될 때까지 함수 실행을 일시 중단하여 동기 코드처럼 작성 가능하게 해주며 async 함수는 항상 promise를 반환
- try/catch로 에러 처리 가능해 가독성이 좋음

</details>

</details>

<details>
<summary>스코프란 무엇인가요?</summary>

### 답변

스코프는 유효 범위라는 뜻으로, 식별자가 유효한 범위를 뜻합니다. </br>
자바스크립트 엔진은 스코프를 통해 어떤 변수를 참조해야 할 것인지를 결정하기 때문에 식별자를 검색할 때 사용하는 규칙이라고도 할 수 있습니다.

### 꼬리질문


<details>
<summary>렉시컬 스코프와 동적 스코프의 차이는 무엇인가요?</summary>

### 답변
- 렉시컬 스코프는 함수를 어디서 선언했는지에 따라 상위 스코프가 결정됨
- 동적 스코프는 함수를 어디서 호출했는지에 따라 상위 스코프가 결정됨

</details>

<details>
<summary>블록 스코프와 함수 스코프의 차이는 무엇인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>실행 컨텍스트란?</summary>

### 답변

실행 컨텍스트는 소스 코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역입니다. </br>
실행 컨텍스트 스택과 렉시컬 환경으로 구성되어 있습니다.

### 꼬리질문


<details>
<summary>클로저와 실행 컨텍스트는 어떤 관계인가요?</summary>

### 답변
- 리렌더링될 때마다 그 시점의 state와 props 값을 함수 내부에 고정해서 기억하게 해주는 역할
- 매 렌더링마다 함수 컴포넌트가 통째로 다시 실행되면서 그 안의 이벤트 핸들러나 useEffect 콜백이 그 시점의 값을 캡처하는 것
- 그래서 useEffect에서 deps 배열을 빠뜨리면, 콜백 내부의 state가 처음 렌더링 시점 값으로 고정돼버리는 stale closure 문제가 발생할 수 있음

</details>

<details>
<summary>호이스팅이 실행 컨텍스트와 어떤 관계인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>얕은 복사와 깊은 복사의 차이는 무엇인가요?</summary>

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


<details>
<summary>`JSON.parse(JSON.stringify())` 방식의 한계는? (함수·undefined·순환 참조)</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>`structuredClone`이 복사하지 못하는 값은?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>이벤트 루프가 어떻게 동작하나요?</summary>

### 답변

콜 스택, 매크로태스크 큐, 마이크로태스크 큐로 구성되어 비동기 작업을 처리합니다.

- **1단계**: 콜 스택이 비면 마이크로태스크 큐를 먼저 확인합니다.
- **2단계**: 마이크로태스크 큐가 비면 매크로태스크 큐에서 하나를 꺼내 실행합니다.
- **분류**: `Promise.then`은 마이크로태스크, `setTimeout`은 매크로태스크에 등록됩니다.

### 꼬리질문


<details>
<summary>마이크로태스크와 매크로태스크의 차이는?</summary>

### 답변
둘 다 비동기 콜백이 대기하는 큐지만, **실행 우선순위와 비우는 방식**이 다릅니다.

- **마이크로태스크**: `Promise.then`, `queueMicrotask`, `MutationObserver`. 콜 스택이 비면 **큐가 완전히 빌 때까지 전부** 실행됩니다.
- **매크로태스크**: `setTimeout`, `setInterval`, 이벤트 콜백. 한 루프에서 **하나만** 꺼내 실행합니다.
- **핵심**: 매크로태스크 하나가 끝날 때마다 마이크로태스크 큐를 먼저 모두 비우므로, 마이크로태스크가 항상 먼저 처리됩니다.

```javascript
setTimeout(() => console.log('macro'), 0);
Promise.resolve().then(() => console.log('micro'));
// 출력: micro → macro
```

</details>
- requestAnimationFrame은 어디에 속하나요?

</details>

<details>
<summary>이벤트 버블링과 캡처링은 무엇인가요?</summary>

### 답변

DOM 이벤트가 전파되는 두 가지 방향으로, 하나의 이벤트가 여러 요소를 거치며 전달됩니다.

- **캡처링**: 최상위(document)에서 시작해 타겟 요소까지 **아래로** 내려갑니다.
- **타겟**: 실제 이벤트가 발생한 요소에 도달합니다.
- **버블링**: 타겟에서 최상위까지 다시 **위로** 올라갑니다. (기본 동작)

```javascript
// 세 번째 인자 true면 캡처링 단계에서 실행
parent.addEventListener("click", handler, true);

// 전파 중단
event.stopPropagation();
```

### 꼬리질문


<details>
<summary>이벤트 위임(Event Delegation)은 어떤 원리를 이용하나요?</summary>

### 답변
- 렉시컬 스코프는 함수를 어디서 선언했는지에 따라 상위 스코프가 결정됨
- 동적 스코프는 함수를 어디서 호출했는지에 따라 상위 스코프가 결정됨

</details>

<details>
<summary>`stopPropagation`과 `preventDefault`의 차이는?</summary>

### 답변
- promise는 .then(), .catch() 체이닝 방식이며 에러는 .catch()에서 처리
- async/await은 promise가 settled 될 때까지 함수 실행을 일시 중단하여 동기 코드처럼 작성 가능하게 해주며 async 함수는 항상 promise를 반환
- try/catch로 에러 처리 가능해 가독성이 좋음

</details>

</details>

<details>
<summary>클로저란 무엇인가요?</summary>

### 답변

클로저는 함수와 그 함수가 선언될 당시의 렉시컬 환경의 조합으로, 함수가 선언된 스코프의 변수를 기억하여 해당 스코프 밖에서 실행되더라도 그 환경에 접근할 수 있는 기능입니다. 내부 함수가 외부 함수를 참조하게 되면, 외부 함수의 실행이 끝난 후에도 그 변수는 사라지지 않고 계속 참조할 수 있습니다.

예를 들어, 아래와 같은 코드에서 클로저를 확인할 수 있습니다:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

위 예제에서 외부 함수 `outer`의 변수 `count`는 내부 함수 `inner`의 클로저에 의해 유지되며, `counter`를 호출할 때마다 `count`의 값이 증가합니다.

### 꼬리질문


<details>
<summary>클로저가 메모리 누수를 일으킬 수 있나요?</summary>

### 답변
네, 클로저가 참조하는 외부 변수는 가비지 컬렉션 대상에서 제외되기 때문에, 더 이상 필요 없는 값을 계속 붙잡고 있으면 메모리 누수로 이어질 수 있습니다.

- **원인**: 클로저가 살아있는 한, 그 클로저가 참조하는 스코프의 변수도 메모리에 유지됩니다.
- **대표 사례**: 사라진 DOM 요소를 참조하는 이벤트 핸들러를 제거하지 않으면, 요소가 없어져도 참조가 남아 해제되지 않습니다.
- **해결**: 사용이 끝난 핸들러는 `removeEventListener`로 제거하고, 불필요한 참조는 `null`로 끊습니다.

</details>

<details>
<summary>클로저를 활용한 모듈 패턴은 어떻게 구현하나요?</summary>

### 답변
즉시 실행 함수(IIFE)로 스코프를 만들고, 내부 변수는 숨긴 채 필요한 것만 반환해 **은닉과 공개를 분리**하는 방식입니다.

- **원리**: 함수 스코프 안의 변수는 외부에서 접근 불가(private), 반환된 객체의 메서드만 접근 가능(public).
- **효과**: 전역 오염을 막고, 클로저로 내부 상태를 안전하게 유지합니다.

```javascript
const counter = (function () {
  let count = 0; // private
  return {
    increment() { return ++count; },
    get() { return count; },
  };
})();
counter.increment(); // 1
```

</details>

<details>
<summary>var와 let에서 클로저 동작이 다른 이유는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>React Hooks에서 클로저가 어떤 역할을 하나요?</summary>

### 답변
- 리렌더링될 때마다 그 시점의 state와 props 값을 함수 내부에 고정해서 기억하게 해주는 역할
- 매 렌더링마다 함수 컴포넌트가 통째로 다시 실행되면서 그 안의 이벤트 핸들러나 useEffect 콜백이 그 시점의 값을 캡처하는 것
- 그래서 useEffect에서 deps 배열을 빠뜨리면, 콜백 내부의 state가 처음 렌더링 시점 값으로 고정돼버리는 stale closure 문제가 발생할 수 있음

</details>

</details>

<details>
<summary>호이스팅이란 무엇인가요?</summary>

### 답변

호이스팅은 변수와 함수의 선언문이 해당 스코프의 최상단으로 끌어올려지는 현상을 뜻하며 초기화되기 전에 변수와 함수에 접근이 가능합니다. </br>
단, let과 const는 TDZ로 인해 접근 시 에러가 발생합니다.

### 꼬리질문


<details>
<summary>var, let, const의 호이스팅 동작 차이는 무엇인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>TDZ는 무엇인가요?</summary>

### 답변
`let`, `const`로 선언한 변수가 **선언 위치에 도달하기 전까지 접근할 수 없는 구간**입니다.

- **동작**: 선언은 스코프 최상단으로 호이스팅되지만, 초기화 전까지 "미초기화" 상태로 남습니다.
- **결과**: 이 구간에서 접근하면 `undefined`가 아니라 `ReferenceError`가 발생합니다.
- **목적**: 변수를 선언 전에 사용하는 실수를 방지합니다.

```javascript
console.log(x); // ReferenceError (TDZ 구간)
let x = 1;
```

</details>

</details>

<details>
<summary>화살표 함수와 일반 함수의 차이는?</summary>

### 답변

화살표 함수의 this는 언제나 상위 스코프의 this를 가리키며 arguments 객체가 없고, new 생성자로 호출합니다. </br>
반면 일반 함수는 호출 방식에 따라 this가 동적으로 결정됩니다.

### 꼬리질문


<details>
<summary>화살표 함수를 객체 메서드로 쓰면 안 되는 이유는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>리액트에서 이벤트 핸들러를 화살표 함수로 쓰는 이유는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>Promise란 무엇이고 왜 사용하나요?</summary>

### 답변

Promise는 비동기 작업의 성공/실패를 나타내는 객체로 pending, fulfilled, rejected 총 세 가지 상태를 가집니다.

### 꼬리질문


<details>
<summary>Promise.all과 Promise.allSettled의 차이는?</summary>

### 답변
- promise는 .then(), .catch() 체이닝 방식이며 에러는 .catch()에서 처리
- async/await은 promise가 settled 될 때까지 함수 실행을 일시 중단하여 동기 코드처럼 작성 가능하게 해주며 async 함수는 항상 promise를 반환
- try/catch로 에러 처리 가능해 가독성이 좋음

</details>

<details>
<summary>async/await은 Promise와 어떤 관계인가요?</summary>

### 답변
- promise는 .then(), .catch() 체이닝 방식이며 에러는 .catch()에서 처리
- async/await은 promise가 settled 될 때까지 함수 실행을 일시 중단하여 동기 코드처럼 작성 가능하게 해주며 async 함수는 항상 promise를 반환
- try/catch로 에러 처리 가능해 가독성이 좋음

</details>

</details>

<details>
<summary>Promise와 async/await의 관계는 무엇인가요?</summary>

### 답변

async/await는 Promise를 더 동기 코드처럼 읽히게 해주는 문법 설탕(syntactic sugar)입니다.

- **async 함수**: 항상 Promise를 반환합니다.
- **await**: Promise가 이행될 때까지 기다렸다가 결과 값을 반환합니다.
- **에러 처리**: `.catch()` 대신 `try...catch`로 처리할 수 있습니다.

```javascript
async function getUser() {
  try {
    const res = await fetch("/api/user");
    return await res.json();
  } catch (e) {
    console.error(e);
  }
}
```

### 꼬리질문


<details>
<summary>여러 비동기 작업을 병렬로 처리하려면 어떻게 하나요? (`Promise.all`)</summary>

### 답변
- key를 고유 값으로 주면 어떤 요소가 추가/삭제/이동됐는지 정확히 식별 가능하기 때문에 효율적으로 이전 트리와 비교 가능
- key가 없으면 react는 배열 순서로 엘리먼트를 비교해 불필요한 리렌더링이나 잘못된 DOM 재사용 발생 가능

</details>

<details>
<summary>`Promise.all`과 `Promise.allSettled`의 차이는?</summary>

### 답변
- context api나 zustand 같은 전역 상태 관리 라이브러리 사용

</details>

</details>

<details>
<summary>requestAnimationFrame은 어디에 속하나요?</summary>

### 답변
매크로태스크나 마이크로태스크와는 별개로, **렌더링 직전에 실행되는 전용 콜백**입니다.

- **실행 시점**: 브라우저가 다음 리페인트를 그리기 직전, 보통 초당 60회(약 16.7ms 간격)로 호출됩니다.
- **장점**: 화면 주사율에 맞춰 실행되므로 `setTimeout` 기반 애니메이션보다 부드럽고, 탭이 비활성화되면 자동으로 멈춰 자원을 아낍니다.
- **용도**: 애니메이션이나 시각적 변경을 프레임 단위로 처리할 때 사용합니다.

</details>

<details>
<summary>this란?</summary>

### 답변

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수를 뜻합니다. </br >
자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조가 가능합니다. </br>
this 바인딩은 함수 호출 방식에 의해 동적으로 결정됩니다.

### 꼬리질문


<details>
<summary>bind, call, apply의 차이는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>이벤트 리스너 콜백에서 this가 가리키는 것은?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

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


<details>
<summary>TDZ(Temporal Dead Zone)란 무엇인가요?</summary>

### 답변
`let`, `const`로 선언한 변수가 **선언 위치에 도달하기 전까지 접근할 수 없는 구간**입니다.

- **동작**: 선언은 스코프 최상단으로 호이스팅되지만, 초기화 전까지 "미초기화" 상태로 남습니다.
- **결과**: 이 구간에서 접근하면 `undefined`가 아니라 `ReferenceError`가 발생합니다.
- **목적**: 변수를 선언 전에 사용하는 실수를 방지합니다.

```javascript
console.log(x); // ReferenceError (TDZ 구간)
let x = 1;
```

</details>

<details>
<summary>`const`로 선언한 객체의 프로퍼티를 변경할 수 있는 이유는?</summary>

### 답변
`const`는 **변수가 가리키는 참조(주소)를 고정**할 뿐, 참조가 가리키는 값 내부의 변경까지 막지는 않기 때문입니다.

- **원리**: 객체 변수에는 실제 객체가 아니라 그 객체의 참조가 담깁니다. `const`는 이 참조의 재할당만 금지합니다.
- **결과**: 프로퍼티 추가·수정·삭제는 가능하지만, 변수에 다른 객체를 재할당하면 에러가 납니다.
- **완전 고정**: 내부 값까지 막으려면 `Object.freeze()`를 사용합니다.

```javascript
const obj = { a: 1 };
obj.a = 2;      // 가능
obj = { a: 3 }; // TypeError (재할당 불가)
```

</details>

</details>

### TypeScript

<details>
<summary>타입스크립트를 사용하는 이유는?</summary>

### 답변

타입 스크립트를 사용하면 컴파일 타임에 타입 오류를 잡아 런타임 에러를 줄이고, IDE 자동 완성과 타입 추론으로 개발 생산성이 높아집니다.

### 꼬리질문


<details>
<summary>any 타입을 쓰면 안 되는 이유는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>타입 가드란?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>TypeScript에서 interface와 type의 차이는 무엇인가요?</summary>

### 답변

둘 다 타입을 정의하지만 확장 방식과 표현 범위에서 차이가 있습니다.

- **interface**: 객체 형태 정의에 주로 쓰이고, 같은 이름으로 **선언 병합(declaration merging)**이 가능합니다.
- **type**: 유니온, 인터섹션, 튜플, 원시 타입 별칭 등 더 넓은 표현이 가능합니다.

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
} // 병합됨

type Status = "active" | "inactive"; // 유니온은 type만 가능
```

### 꼬리질문


<details>
<summary>언제 interface를 쓰고 언제 type을 쓰는 게 좋을까요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>인터섹션 타입(`&`)과 인터페이스 상속(`extends`)의 차이는?</summary>

### 답변
- 렉시컬 스코프는 함수를 어디서 선언했는지에 따라 상위 스코프가 결정됨
- 동적 스코프는 함수를 어디서 호출했는지에 따라 상위 스코프가 결정됨

</details>

</details>

<details>
<summary>TypeScript에서 type과 interface의 차이는?</summary>

### 답변

interface는 선언 병합이 가능하고, extends로 확장이 가능합니다. </br>
type은 유니온, 인터섹션, 조건부 타입 같은 복잡한 타입 조합이 가능합니다.

### 꼬리질문


<details>
<summary>어떤 상황에서 type을 선택하나요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>선언 병합이 실제로 쓰이는 경우는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>TypeScript의 제네릭(Generic)은 왜 사용하나요?</summary>

### 답변

타입을 매개변수처럼 받아서, 재사용성과 타입 안정성을 동시에 유지하는 기능입니다.

```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10); // number
const str = identity("hello"); // string (타입 추론)
```

- **핵심**: `any`는 타입 정보가 사라지지만, 제네릭은 호출 시점의 타입을 그대로 보존합니다.

### 꼬리질문


<details>
<summary>제네릭에 `extends`로 제약을 거는 이유는?</summary>

### 답변
제네릭 타입 매개변수에 `extends`로 **상한 경계(constraint)** 를 지정하면, 특정 조건을 만족하는 타입만 받도록 제한할 수 있습니다.

- **이유**: 제약 없는 제네릭은 아무 타입이나 받아, 내부에서 특정 프로퍼티에 안전하게 접근할 수 없습니다.
- **효과**: "이 타입은 최소한 이런 형태를 가진다"를 보장해, 타입 안정성을 유지하면서 프로퍼티에 접근합니다.

```typescript
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
```

</details>

<details>
<summary>`keyof`와 제네릭을 함께 쓰는 예시는?</summary>

### 답변
객체와 그 객체의 키를 제네릭으로 받아, **존재하는 키만 안전하게 접근**하도록 만들 때 사용합니다.

- **원리**: `K extends keyof T`로 K를 T의 키로 제한하면, 잘못된 키 접근을 컴파일 단계에서 차단합니다.
- **효과**: 반환 타입이 `T[K]`로 정확히 추론되어 타입 안정성이 보장됩니다.

```typescript
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: 'hovi', age: 20 };
getProp(user, 'name'); // string으로 추론
```

</details>

</details>

### React

<details>
<summary>리렌더링이 발생하는 조건은 무엇인가요?</summary>

### 답변

리액트 컴포넌트는 state 변경, props 변경, 부모 컴포넌트 리렌더링, Context 값 변경 시 리렌더링이 발생합니다.

### 꼬리질문


<details>
<summary>불필요한 리렌더링을 방지하는 방법은 무엇인가요?</summary>

### 답변
- React.memo, useMemo, useCallback을 사용하여 메모이제이션이나 컴포넌트 쪼개기, key 최적화, state를 필요한 범위로 최소화 및 끌어내리기

</details>

<details>
<summary>React.memo와 useMemo, useCallback의 차이는 무엇인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>리액트를 사용하는 이유는?</summary>

### 답변

리액트를 사용하면 상태가 변경될 때 DOM을 자동으로 업데이트 해주고, 컴포넌트 단위로 재사용이 가능합니다. </br>
또한 리액트는 가상 DOM을 사용하기 때문에 실제 DOM 조작을 최소화해 성능도 효율적으로 관리가 가능합니다.

### 꼬리질문


<details>
<summary>가상 DOM이 실제로 성능상 항상 빠른가요?</summary>

### 답변
아니요, 항상 빠른 것은 아닙니다. 가상 DOM은 **diffing과 재조정이라는 추가 연산**을 동반하기 때문입니다.

- **오해**: 가상 DOM 자체가 마법처럼 빠른 게 아니라, "불필요한 DOM 조작을 줄여준다"는 것이 본질입니다.
- **느릴 수 있는 경우**: 최적화가 잘 된 단일·소규모 직접 조작은 가상 DOM 비교 과정이 오히려 오버헤드일 수 있습니다.
- **진짜 장점**: 대규모 UI를 선언적으로 관리하며, 개발자가 수동 최적화를 하지 않아도 **일관되게 준수한 성능**을 유지해준다는 점입니다.

</details>

<details>
<summary>컴포넌트 단위로 개발하면 어떤 장점이 있나요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>리액트에서 이벤트를 어떻게 핸들링하나요?</summary>

### 답변

JSX에서는 onClick, onChange 같은 camelCase 속성으로 핸들러를 연결하지만, 리액트에서는 내부적으로 이벤트 위임 방식으로 루트에 등록해 관리합니다.

### 꼬리질문


<details>
<summary>리액트의 합성 이벤트란 무엇인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>e.preventDefault(), e.stopPropagination() 차이는?</summary>

### 답변
- promise는 .then(), .catch() 체이닝 방식이며 에러는 .catch()에서 처리
- async/await은 promise가 settled 될 때까지 함수 실행을 일시 중단하여 동기 코드처럼 작성 가능하게 해주며 async 함수는 항상 promise를 반환
- try/catch로 에러 처리 가능해 가독성이 좋음

</details>

</details>

<details>
<summary>리액트의 컴포넌트 라이프 사이클은?</summary>

### 답변

리액트의 컴포넌트 라이프 사이클은 마운트 > 업데이트 > 언마운트 세 단계로 나뉩니다. </br>
함수형 컴포넌트에서는 useEffect로 제어하며, 의존성 배열로 실행 시점을 조정합니다.

### 꼬리질문


<details>
<summary>useEffect clenup 함수는 언제 실행되나요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>마운트와 언마운트가 각각 어떤 시점인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>props와 state의 차이는 무엇인가요?</summary>

### 답변

props는 부모 컴포넌트가 설정하는 값으로 자식 컴포넌트는 해당 props를 읽기 전용으로만 사용할 수 있지만, </br>
state는 자식 컴포넌트 내부에서 값을 변경할 수 있습니다.

### 꼬리질문


<details>
<summary>props drilling 문제를 어떻게 해결할 수 있나요?</summary>

### 답변
- context api나 zustand 같은 전역 상태 관리 라이브러리 사용

</details>

<details>
<summary>state를 변경했는데 화면이 바로 안 바뀌는 경우가 있는 이유는 무엇인가요?</summary>

### 답변
- React.memo, useMemo, useCallback을 사용하여 메모이제이션이나 컴포넌트 쪼개기, key 최적화, state를 필요한 범위로 최소화 및 끌어내리기

</details>

</details>

<details>
<summary>React에서 가상 DOM(Virtual DOM)이란 무엇인가요?</summary>

### 답변

실제 DOM의 가벼운 자바스크립트 객체 복사본으로, 직접적인 DOM 조작을 최소화해 렌더링 성능을 최적화합니다.

- **생성**: 상태가 변경되면 새 가상 DOM을 만듭니다.
- **비교(diffing)**: 이전 가상 DOM과 비교해 바뀐 부분을 찾습니다.
- **반영(reconciliation)**: 실제로 바뀐 부분만 실제 DOM에 반영합니다.

### 꼬리질문


<details>
<summary>React의 재조정(Reconciliation) 과정에서 `key`가 중요한 이유는?</summary>

### 답변
`key`는 리스트를 렌더링할 때 React가 **어떤 항목이 추가·삭제·이동됐는지 식별**하는 기준이 됩니다.

- **역할**: 이전과 새 가상 DOM을 비교할 때, 같은 `key`를 가진 요소는 동일 요소로 간주해 재사용합니다.
- **key가 없거나 index를 쓰면**: 순서가 바뀔 때 잘못된 요소를 재사용해 상태가 엉키거나 불필요한 재렌더링이 발생합니다.
- **원칙**: 고유하고 안정적인 값(예: id)을 사용해야 합니다.

</details>

<details>
<summary>가상 DOM이 항상 실제 DOM 조작보다 빠른가요?</summary>

### 답변
아니요, 항상 빠른 것은 아닙니다. 가상 DOM은 **diffing과 재조정이라는 추가 연산**을 동반하기 때문입니다.

- **오해**: 가상 DOM 자체가 마법처럼 빠른 게 아니라, "불필요한 DOM 조작을 줄여준다"는 것이 본질입니다.
- **느릴 수 있는 경우**: 최적화가 잘 된 단일·소규모 직접 조작은 가상 DOM 비교 과정이 오히려 오버헤드일 수 있습니다.
- **진짜 장점**: 대규모 UI를 선언적으로 관리하며, 개발자가 수동 최적화를 하지 않아도 **일관되게 준수한 성능**을 유지해준다는 점입니다.

</details>

</details>

<details>
<summary>React에서 상태를 컴포넌트 간에 공유하는 방법은?</summary>

### 답변

상태의 범위와 복잡도에 따라 여러 방법을 선택합니다.

- **props 전달**: 부모 → 자식으로 직접 내려줍니다. (가장 기본)
- **상태 끌어올리기(Lifting State Up)**: 공통 부모로 상태를 올려 형제 간 공유합니다.
- **Context API**: 깊은 트리에 걸친 전역성 데이터(테마, 인증 등)를 prop drilling 없이 전달합니다.
- **상태 관리 라이브러리**: Redux, Zustand, Jotai 등으로 복잡한 전역 상태를 관리합니다.

### 꼬리질문


<details>
<summary>Prop Drilling이란 무엇이고 왜 문제가 되나요?</summary>

### 답변
- context api나 zustand 같은 전역 상태 관리 라이브러리 사용

</details>

<details>
<summary>Context를 남용하면 어떤 성능 문제가 생길 수 있나요?</summary>

### 답변
- key를 고유 값으로 주면 어떤 요소가 추가/삭제/이동됐는지 정확히 식별 가능하기 때문에 효율적으로 이전 트리와 비교 가능
- key가 없으면 react는 배열 순서로 엘리먼트를 비교해 불필요한 리렌더링이나 잘못된 DOM 재사용 발생 가능

</details>

</details>

<details>
<summary>useEffect의 의존성 배열은 어떤 역할을 하나요?</summary>

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


<details>
<summary>의존성 배열에 넣어야 할 값을 빠뜨리면 어떤 문제가 생기나요?</summary>

### 답변
- React.memo, useMemo, useCallback을 사용하여 메모이제이션이나 컴포넌트 쪼개기, key 최적화, state를 필요한 범위로 최소화 및 끌어내리기

</details>

<details>
<summary>`useEffect`와 `useLayoutEffect`의 실행 시점 차이는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

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


<details>
<summary>모든 함수에 useCallback을 쓰는 게 좋은가요?</summary>

### 답변
아니요, 대부분의 경우 불필요하고 성능에 손해일 수 있습니다.

- **비용**: `useCallback` 자체도 의존성 비교와 메모이제이션에 비용이 듭니다.
- **효과가 있는 경우**: `React.memo`로 감싼 자식에게 함수를 넘길 때, 또는 다른 훅의 의존성 배열에 함수가 들어갈 때만 참조 유지가 의미가 있습니다.
- **결론**: 해당 조건이 아니면 새 함수를 만드는 비용이 미미하므로, 필요한 곳에만 선택적으로 사용합니다.

</details>

<details>
<summary>자식 컴포넌트의 `React.memo`와 함께 쓰면 어떤 효과가 있나요?</summary>

### 답변
`React.memo`로 감싼 자식은 props가 바뀔 때만 재렌더링되는데, 이때 `useCallback`으로 **함수 props의 참조를 고정**하면 불필요한 재렌더링을 막을 수 있습니다.

- **원리**: `React.memo`는 props를 얕은 비교합니다. 부모가 리렌더링될 때마다 새 함수를 넘기면 참조가 매번 달라져 `memo`가 무력화됩니다.
- **조합 효과**: `useCallback`으로 함수 참조를 유지하면, 다른 props가 그대로일 때 자식이 재렌더링되지 않습니다.
- **주의**: `React.memo` 없이 `useCallback`만 쓰면 이 효과는 얻을 수 없습니다.

</details>

</details>

<details>
<summary>Virtual DOM이란 무엇인가요?</summary>

### 답변

Virtual DOM은 실제 DOM의 가벼운 복사본을 메모리에 유지하는 개념입니다. </br>
상태가 변경되면 새로운 Virtual DOM 트리를 생성하고, 이전 트리와 비교(diffing)하여 변경된 부분만 실제 DOM에 반영(reconciliation)합니다. </br>
이를 통해 불필요한 DOM 조작을 줄여 성능을 최적화합니다.

### 꼬리질문


<details>
<summary>React Fiber는 무엇인가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>key prop이 reconciliation에서 왜 중요한가요?</summary>

### 답변
- key를 고유 값으로 주면 어떤 요소가 추가/삭제/이동됐는지 정확히 식별 가능하기 때문에 효율적으로 이전 트리와 비교 가능
- key가 없으면 react는 배열 순서로 엘리먼트를 비교해 불필요한 리렌더링이나 잘못된 DOM 재사용 발생 가능

</details>

</details>

### CSS

<details>
<summary>CSS position 속성의 값들은 어떤 차이가 있나요?</summary>

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

</details>

<details>
<summary>CSS에서 BEM 방법론이란 무엇인가요?</summary>

### 답변

Block, Element, Modifier의 약자로, 재사용성과 가독성을 높이는 CSS 클래스 네이밍 규칙입니다.

- **Block**: 독립적인 컴포넌트 (`.card`)
- **Element**: Block의 구성 요소 (`.card__title`)
- **Modifier**: 상태나 변형 (`.card--highlighted`)

### 꼬리질문


<details>
<summary>BEM 외에 다른 CSS 네이밍 방법론은?</summary>

### 답변
규모와 목적에 따라 다양한 방법론이 있습니다.

- **OOCSS**: 구조(structure)와 스킨(skin)을 분리해 재사용성을 높입니다.
- **SMACSS**: Base·Layout·Module·State·Theme 5가지 범주로 규칙을 분류합니다.
- **SUIT CSS**: 컴포넌트 중심으로 카멜케이스 네이밍을 사용합니다.
- **Utility-First (Tailwind)**: 미리 정의된 유틸리티 클래스를 조합해 스타일링합니다.

</details>

<details>
<summary>CSS Modules과 BEM을 함께 사용할 수 있나요?</summary>

### 답변
네, 함께 쓸 수 있고 실제로 상호 보완적입니다.

- **CSS Modules**: 빌드 시 클래스명을 지역 스코프로 격리(해시화)해 **전역 충돌을 원천 차단**합니다.
- **BEM**: 클래스명 자체의 **구조와 의미를 명확히** 합니다.
- **조합**: CSS Modules가 스코프 격리를 담당하고, BEM 네이밍으로 요소 간 관계를 표현하면 파일 내부 가독성이 높아집니다.

</details>

</details>

<details>
<summary>Flex와 Grid를 사용하는 이유는 무엇인가요?</summary>

### 답변

flex와 grid는 레이아웃을 쉽게 잡기 위한 속성입니다. </br>
flex는 1차원 레이아웃에 최적화된 속성으로 컨테이너와 아이템 개념을 사용해 한 방향으로 요소를 정렬하고, 요소의 크기가 불분명하거나 동적인 경우에도 효율적으로 배치할 수 있습니다. </br>
grid는 2차원 레이아웃에 최적화된 속성으로 간격과 비율만 지정하면 행과 열을 동시에 제어할 수 있기 때문에 복잡한 레이아웃을 간단하게 구성할 수 있고, 브라우저 창 크기가 변해도 자동으로 반응하기 때문에 반응형 레이아웃을 만들기 쉽습니다.

### 꼬리질문


<details>
<summary>Flex와 Grid를 어떤 상황에서 어떻게 사용하는게 더 적합한가요?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>flex에서 justify-content와 align-items의 차이는 무엇인가요?</summary>

### 답변
- flex-direction이 row면 justify-content는 가로, align-items는 세로 정렬
- justify-content는 주축 방향 정렬
- align-items는 교차축 방향 정렬

</details>

</details>

<details>
<summary>Flexbox와 Grid는 언제 무엇을 쓰나요?</summary>

### 답변

둘 다 레이아웃 도구지만 다루는 축과 용도가 다릅니다.

- **Flexbox**: **1차원**(행 또는 열) 레이아웃에 적합합니다. (네비게이션 바, 버튼 정렬 등)
- **Grid**: **2차원**(행과 열 동시) 레이아웃에 적합합니다. (전체 페이지 레이아웃, 카드 그리드 등)
- **혼용**: Grid로 큰 구조를 잡고, 각 셀 내부 정렬은 Flexbox로 처리하는 방식이 흔합니다.

### 꼬리질문


<details>
<summary>`justify-content`와 `align-items`의 차이는?</summary>

### 답변
- flex-direction이 row면 justify-content는 가로, align-items는 세로 정렬
- justify-content는 주축 방향 정렬
- align-items는 교차축 방향 정렬

</details>
- Grid의 `fr` 단위는 무엇인가요?

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


<details>
<summary>`<section>`과 `<article>`의 차이는?</summary>

### 답변
둘 다 문서를 구획하는 시맨틱 태그지만, **독립적으로 재사용 가능한 콘텐츠인지**가 판단 기준입니다.

- **article**: 그 자체로 완결되어 **독립적으로 배포·재사용**될 수 있는 콘텐츠. (예: 블로그 글, 기사, 댓글)
- **section**: 문서 안에서 **주제별로 묶는** 구획. 보통 제목을 동반하며 문서의 일부입니다.
- **판단법**: "이 내용을 RSS 피드에 그대로 넣어도 말이 되는가?" → 그렇다면 `article`을 고려합니다.

</details>

<details>
<summary>`<b>`와 `<strong>`, `<i>`와 `<em>`의 차이는?</summary>

### 답변
시각적으로는 비슷하지만, **의미(시맨틱)를 담는지 여부**가 핵심 차이입니다.

- **b / i**: 순수하게 **시각적 표현**만을 위한 태그. 굵게(`b`), 기울임(`i`)일 뿐 특별한 의미는 없습니다.
- **strong / em**: **의미적 강조**를 나타냅니다. `strong`은 중요도가 높음, `em`은 강세(emphasis)를 표현합니다.
- **접근성**: 스크린 리더는 `strong`·`em`을 강조해 읽어주지만 `b`·`i`는 그렇지 않으므로, 의미가 있으면 `strong`·`em`을 사용해야 합니다.

</details>

</details>

<details>
<summary>웹 접근성(a11y)을 높이려면 어떻게 해야 하나요?</summary>

### 답변

장애 여부와 관계없이 모두가 사용할 수 있도록 콘텐츠를 설계하는 것입니다.

- **시맨틱 태그**: `<button>`, `<nav>` 등 의미 있는 태그를 사용합니다.
- **대체 텍스트**: 이미지에 `alt`를 제공합니다.
- **ARIA 속성**: 시맨틱만으로 부족할 때 `role`, `aria-label` 등으로 보완합니다.
- **키보드 접근**: 마우스 없이 Tab·Enter로 조작 가능해야 합니다.

### 꼬리질문


<details>
<summary>`<div onClick>` 대신 `<button>`을 써야 하는 이유는?</summary>

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

</details>

<details>
<summary>스크린 리더에서만 읽히게 하려면 어떻게 처리하나요? (`sr-only`)</summary>

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

</details>

</details>

### Network

<details>
<summary>CORS는 무엇이고 왜 발생하나요?</summary>

### 답변

브라우저의 동일 출처 정책(Same-Origin Policy) 때문에, 다른 출처의 리소스 요청을 제어하는 보안 메커니즘입니다.

- **출처(Origin)**: 프로토콜 + 도메인 + 포트의 조합입니다.
- **동작**: 브라우저가 요청 시 `Origin` 헤더를 보내고, 서버가 `Access-Control-Allow-Origin`으로 허용 여부를 응답합니다.
- **Preflight**: `PUT`·`DELETE`나 커스텀 헤더 등은 본 요청 전에 `OPTIONS` 예비 요청을 보냅니다.

### 꼬리질문


<details>
<summary>CORS 에러는 프론트엔드와 백엔드 중 어디서 해결해야 하나요?</summary>

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

</details>

<details>
<summary>Preflight 요청이 발생하는 조건은?</summary>

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

</details>

</details>

<details>
<summary>CORS란 무엇인가요?</summary>

### 답변

CORS란 교차 출처 공유라는 의미로 브라우저가 다른 출처로의 요청을 허용할지 판단하는 보안 메커니즘입니다. </br>
브라우저는 기본적으로 동일 출처 정책에 따라 다른 출처로의 요청을 차단하는데, 서버가 응답 헤더에 허용 출처를 명시하면 브라우저가 이를 확인하고 응답을 허용합니다.

### 꼬리질문


<details>
<summary>CORS 에러가 발생했을 때 프론트엔드에서 해결할 수 있는 방법은?</summary>

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

</details>

<details>
<summary>Preflight 요청이란 무엇인가요?</summary>

### 답변
- 실제 요청 전에 브라우저가 OPTIONS 메서드로 먼저 보내는 사전 요청
- 서버가 해당 출처/메서드/헤더를 허용하는지 확인 후, 허용되면 실제 요청 보냄
- 모든 요청에 발생하는 건 아니고 PUT/DELETE처럼 simple method가 아닌 경우는 무조건 발생하고, GET/POST/HEAD 같은 simple 메서드라도 custom header를 쓰거나 content-type이 application/json처럼 제한된 타입을 벗어나는 경우에 발생

</details>

</details>

<details>
<summary>HTTP 캐싱은 어떻게 동작하나요?</summary>

### 답변

응답을 재사용해 불필요한 네트워크 요청을 줄이는 메커니즘입니다.

- **강한 캐시**: `Cache-Control: max-age`, `Expires`로 만료 전까지 서버에 요청하지 않고 캐시를 사용합니다.
- **약한 캐시**: 만료 후 `ETag`, `Last-Modified`로 변경 여부를 확인하고, 변경이 없으면 `304 Not Modified`를 응답합니다.

### 꼬리질문


<details>
<summary>`no-cache`와 `no-store`의 차이는?</summary>

### 답변
둘 다 `Cache-Control` 지시어지만, **캐시 저장 자체를 막는지, 재검증을 강제하는지**가 다릅니다.

- **no-cache**: 캐시에 저장은 하되, 사용 전 **반드시 서버에 재검증**을 요청합니다. 변경이 없으면 `304`로 재사용합니다.
- **no-store**: 캐시에 **아예 저장하지 않고** 매번 새로 받습니다. 민감 정보(결제·개인정보)에 사용합니다.
- **핵심**: `no-cache`는 "검증 후 재사용 가능", `no-store`는 "저장 금지"입니다.

</details>

<details>
<summary>`ETag`는 어떻게 생성되나요?</summary>

### 답변
ETag는 서버가 리소스의 **특정 버전을 식별하는 고유 문자열**로, 생성 방식은 서버 구현에 따라 다릅니다.

- **일반적 방식**: 파일 내용의 해시(MD5·SHA 등), 또는 마지막 수정 시각과 파일 크기의 조합으로 만듭니다.
- **동작**: 클라이언트가 다음 요청에 `If-None-Match`로 ETag를 보내면, 서버가 현재 값과 비교해 같으면 `304 Not Modified`를 응답합니다.
- **강한/약한 검증**: 바이트 단위로 완전히 같아야 하는 강한 ETag와, 의미상 같으면 되는 약한 ETag(`W/` 접두사)가 있습니다.

</details>

</details>

<details>
<summary>HTTP와 HTTPS의 차이는 무엇인가요?</summary>

### 답변

HTTPS는 HTTP에 TLS/SSL 암호화 계층을 추가한 프로토콜입니다.

| 구분   | HTTP   | HTTPS   |
| ------ | ------ | ------- |
| 포트   | 80     | 443     |
| 암호화 | 없음   | TLS/SSL |
| 인증서 | 불필요 | 필요    |

HTTPS는 데이터를 암호화하여 중간자 공격을 방지하고, 데이터 무결성을 보장합니다.

### 꼬리질문


<details>
<summary>TLS 핸드셰이크 과정을 설명해주세요.</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>HSTS란 무엇인가요?</summary>

### 답변
- 서버가 Strict-Transport-Security 응답 헤더로 HTTPS만 접속하라고 브라우저에 강제하는 정책
- 목적은 SSL 스트리핑(HTTPS > HTTP 다운그레이드) 공격 방지 위함

</details>

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


<details>
<summary>Reflow와 Repaint의 차이는 무엇인가요?</summary>

### 답변
둘 다 렌더링을 다시 하는 과정이지만, **레이아웃 계산을 다시 하는지 여부**에서 차이가 있습니다.

- **Reflow(리플로우)**: 크기·위치 등 레이아웃이 바뀌어 **위치 계산을 다시** 하는 것. Repaint까지 동반해 비용이 큽니다. (예: `width`, `margin`, DOM 추가/삭제)
- **Repaint(리페인트)**: 레이아웃은 그대로지만 **시각적 스타일만 다시 그리는** 것. (예: `color`, `background`)
- **최적화**: `transform`, `opacity`처럼 합성 단계에서 처리되는 속성을 쓰면 둘 다 피할 수 있습니다.

</details>

<details>
<summary>CSS와 JS가 렌더링을 차단(blocking)하는 경우는?</summary>

### 답변
CSS와 JS는 파싱·렌더링 과정에서 서로 다른 방식으로 렌더링을 지연시킬 수 있습니다.

- **CSS**: CSSOM이 완성되어야 렌더 트리를 만들 수 있으므로, CSS는 기본적으로 **렌더링 차단 리소스**입니다.
- **JS**: `<script>`는 파싱 중 만나면 HTML 파싱을 멈추고 실행되어 **파싱 차단**이 됩니다. 게다가 이전 CSS가 로딩 중이면 그 CSSOM 완성까지 기다립니다.
- **완화**: JS에 `async`(순서 무관 즉시 실행)나 `defer`(파싱 완료 후 실행)를 붙이거나, `<script>`를 `body` 끝에 배치합니다.

</details>

</details>

### CS

<details>
<summary>브라우저가 HTML을 받아서 화면에 그리기까지의 과정을 설명해주세요.</summary>

### 답변

HTML 파싱 > DOM 트리 생성 > CSS 파싱 > CSSOM 생성 > Render Tree 결합 > Layout(reflow) > paint > composite 순서로 진행됩니다.

### 꼬리질문


<details>
<summary>reflow와 repaint의 차이와 최소화하는 방법은?</summary>

### 답변
둘 다 렌더링을 다시 하는 과정이지만, **레이아웃 계산을 다시 하는지 여부**에서 차이가 있습니다.

- **Reflow(리플로우)**: 크기·위치 등 레이아웃이 바뀌어 **위치 계산을 다시** 하는 것. Repaint까지 동반해 비용이 큽니다. (예: `width`, `margin`, DOM 추가/삭제)
- **Repaint(리페인트)**: 레이아웃은 그대로지만 **시각적 스타일만 다시 그리는** 것. (예: `color`, `background`)
- **최적화**: `transform`, `opacity`처럼 합성 단계에서 처리되는 속성을 쓰면 둘 다 피할 수 있습니다.

</details>

<details>
<summary><script> 태그 위치가 렌더링에 영향을 주는 이유는?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

</details>

<details>
<summary>프로세스와 스레드의 차이는 무엇인가요?</summary>

### 답변

실행 단위와 메모리 공유 방식에서 차이가 있습니다.

- **프로세스**: 실행 중인 프로그램의 단위로, 독립된 메모리 공간(Code, Data, Heap, Stack)을 가집니다.
- **스레드**: 프로세스 내 실행 흐름의 단위로, Code·Data·Heap을 공유하고 Stack만 독립적으로 가집니다.
- **특징**: 스레드는 메모리를 공유해 통신 비용이 적지만, 동기화 문제가 발생할 수 있습니다.

### 꼬리질문


<details>
<summary>멀티프로세스와 멀티스레드의 장단점은?</summary>

### 답변
- var은 호이스팅 되면서 undefined로 초기화 > 선언 전 접근해도 에러 없이 undefined 반환
- let/const는 호이스팅은 되지만 TDZ가 존재하기 때문에 초기화가 안됨 > 선언 전 접근 시 에러 발생
- TDZ : 스코프 시작 시점부터 실제 선언문이 실행되기 전까지 변수에 접근할 수 없는 구간

</details>

<details>
<summary>자바스크립트는 싱글 스레드인데 어떻게 비동기를 처리하나요?</summary>

### 답변
- 리렌더링될 때마다 그 시점의 state와 props 값을 함수 내부에 고정해서 기억하게 해주는 역할
- 매 렌더링마다 함수 컴포넌트가 통째로 다시 실행되면서 그 안의 이벤트 핸들러나 useEffect 콜백이 그 시점의 값을 캡처하는 것
- 그래서 useEffect에서 deps 배열을 빠뜨리면, 콜백 내부의 state가 처음 렌더링 시점 값으로 고정돼버리는 stale closure 문제가 발생할 수 있음

</details>

</details>
<!-- TOC:END -->
