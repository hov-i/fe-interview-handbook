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
> **82** 개 질문 · 마지막 업데이트: 2026-07-13

### JavaScript

<details>
<summary>다른 언어는 캡슐화·은닉화를 접근 제어자 같은 전용 문법으로 지원하는데, 자바스크립트는 왜 클로저로 이 문제를 풀게 되었을까요?</summary>

### 답변

자바스크립트의 설계 중심이 **일급 함수와 렉시컬 스코프**이기 때문입니다.

함수가 값처럼 전달·반환되는 언어에서 동작이 예측 가능하려면, 함수가 어디서 호출되든 **정의된 시점의 스코프를 보존**해야 합니다. 그게 클로저입니다. 즉 클로저는 은닉을 위해 만들어진 문법이 아니라, 일급 함수를 지탱하기 위한 렉시컬 환경 보존의 결과이고, **은닉은 그 부수 효과**로 따라온 것입니다.

또한 ES6 전까지 자바스크립트에는 클래스 문법이 없었고, 이후에도 객체보다 함수 단위 모듈화가 자연스러워 IIFE·모듈 패턴·커링의 기반으로 클로저가 일급 도구가 되었습니다. Java/C++처럼 클래스가 1급 단위인 언어는 인스턴스의 private 필드로 같은 문제(상태 은닉)를 푸는 반면, 자바스크립트는 함수의 본질적 성질에서 은닉이 자연스럽게 따라온 것입니다.

### 꼬리질문

- 렉시컬 스코프란 무엇이고, 클로저가 성립하는 데 왜 전제 조건이 되나요?
- ES2022부터 `#privateField`라는 진짜 private 문법이 생겼는데, 그럼에도 클로저 기반 은닉이 여전히 쓰이는 이유는 무엇인가요?

</details>

<details>
<summary>동기와 비동기의 차이는 무엇인가요?</summary>

### 답변

동기 처리 방식은 현재 실행 중인 작업이 종료될 때까지 기다렸다가 다음 작업이 실행되는 방식을 뜻하고, </br>
비동기 처리 방식은 현재 실행 중인 작업이 종료되지 않은 상태여도 다음 작업을 곧바로 실행하는 방식을 뜻합니다.

### 꼬리질문

- 이벤트 루프가 동기/비동기 처리에 어떻게 관여하나요?

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
- 블록 스코프와 함수 스코프의 차이는 무엇인가요?

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
- 함수 실행이 끝나면 컨텍스트는 콜 스택에서 제거
- 하지만 내부 함수가 외부 렉시컬 환경 참조 중인 경우 그 환경은 유지 > 클로저

</details>
- 호이스팅이 실행 컨텍스트와 어떤 관계인가요?

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
JSON 직렬화가 지원하지 않는 값들은 **손실되거나 에러**가 발생합니다.

- **손실되는 값**: `undefined`, `function`, `Symbol`은 프로퍼티째 사라집니다.
- **변환되는 값**: `Date`는 문자열로, `NaN`·`Infinity`는 `null`로 바뀝니다.
- **에러**: **순환 참조**가 있으면 `TypeError`가 발생합니다.
- **대안**: `structuredClone()`은 `Date`, `Map`, `Set`, 순환 참조를 지원합니다.

</details>

<details>
<summary>`structuredClone`이 복사하지 못하는 값은?</summary>

### 답변
DOM 노드, 함수, 그리고 일부 특수 객체는 복사할 수 없습니다.

- **불가능**: `Function`, `DOM 요소`, `Error` 객체(일부 환경), `Symbol`
- **가능**: `Date`, `Map`, `Set`, `ArrayBuffer`, `RegExp`, 순환 참조 — `JSON.parse(JSON.stringify())`보다 훨씬 넓은 범위를 지원합니다.
- **원리**: HTML 명세의 [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)을 따르며, 전송 가능한 객체(transferable)만 복사합니다.

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

<details>
<summary>requestAnimationFrame은 어디에 속하나요?</summary>

### 답변
매크로태스크나 마이크로태스크와는 별개로, **렌더링 직전에 실행되는 전용 콜백**입니다.

- **실행 시점**: 브라우저가 다음 리페인트를 그리기 직전, 보통 초당 60회(약 16.7ms 간격)로 호출됩니다.
- **장점**: 화면 주사율에 맞춰 실행되므로 `setTimeout` 기반 애니메이션보다 부드럽고, 탭이 비활성화되면 자동으로 멈춰 자원을 아낍니다.
- **용도**: 애니메이션이나 시각적 변경을 프레임 단위로 처리할 때 사용합니다.

</details>

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
**이벤트 버블링**을 이용해, 개별 자식 요소 대신 공통 부모에 하나의 이벤트 리스너만 등록하는 패턴입니다.

- **원리**: 자식에서 발생한 이벤트가 버블링으로 부모까지 올라오므로, 부모에서 `event.target`을 확인해 처리합니다.
- **장점**: 리스너 수가 줄어 메모리를 절약하고, 동적으로 추가되는 요소도 별도 등록 없이 처리됩니다.

```javascript
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});
```

</details>

<details>
<summary>`stopPropagation`과 `preventDefault`의 차이는?</summary>

### 답변
둘 다 이벤트 동작을 제어하지만, **전파를 막는지, 기본 동작을 막는지**가 다릅니다.

- **stopPropagation**: 이벤트가 부모로 전파(버블링/캡처링)되는 것을 **중단**합니다. 현재 요소의 핸들러는 실행되고, 상위 요소의 핸들러는 실행되지 않습니다.
- **preventDefault**: 브라우저의 **기본 동작을 취소**합니다. (예: `<a>`의 페이지 이동, `<form>`의 제출)
- **독립적**: 둘은 별개이므로 함께 사용할 수도 있습니다.

```javascript
link.addEventListener('click', (e) => {
  e.preventDefault();    // 페이지 이동 막기
  e.stopPropagation();   // 버블링 막기
});
```

</details>

</details>

<details>
<summary>클로저란 무엇인가요?</summary>

### 답변

클로저는 함수와 그 함수가 선언될 당시의 렉시컬 환경의 조합으로, 함수가 선언된 스코프를 기억하여 해당 스코프 밖에서 실행되더라도 그 환경에 접근할 수 있는 기능입니다. 내부 함수가 외부 함수를 참조하면, 외부 함수의 실행이 끝나도 그 변수는 사라지지 않고 남아있어 계속 참조할 수 있습니다.

예를 들어, 아래와 같은 코드에서 `count` 변수는 `outer` 함수의 스코프에 있지만, `inner` 함수가 클로저를 형성하여 `count`에 접근할 수 있습니다.

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

- **핵심**: 외부 함수의 변수 `count`가 내부 함수 `inner`의 클로저에 의해 유지되며, 이는 클로저의 주요 특징입니다.

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
- var와 let에서 클로저 동작이 다른 이유는?
- React Hooks에서 클로저가 어떤 역할을 하나요?

</details>

<details>
<summary>프로토타입 체인을 실행 컨텍스트와 엮어서 설명해 주세요.</summary>

### 답변

둘은 "코드 실행 직전의 준비 과정"으로 한 줄기로 엮입니다.

- **실행 컨텍스트**: 코드가 실행되는 환경입니다. 생성 단계에서 스코프 내 식별자를 미리 등록하고(이 등록이 우리가 보는 **호이스팅**의 정체), LexicalEnvironment와 this 바인딩을 준비한 뒤 실행 단계로 넘어갑니다.
- **호이스팅과 프로토타입의 연결**: 함수 선언문이 호이스팅될 때 함수 객체가 통째로 만들어지는데, 이때 그 함수의 `prototype` 객체도 함께 준비됩니다.
- **프로토타입 체인**: 모든 객체는 `[[Prototype]]` 링크를 가지며, 속성을 찾을 때 자신에게 없으면 이 체인을 타고 올라가며 탐색합니다.

정리하면 **컨텍스트 생성 → 식별자 등록(호이스팅, 이때 함수의 prototype도 세팅) → this 바인딩 → 실행 중 속성 접근 시 프로토타입 체인 탐색**의 흐름입니다. 식별자를 찾는 것은 실행 컨텍스트의 스코프 체인이, 객체의 속성을 찾는 것은 프로토타입 체인이 담당한다는 역할 구분이 핵심입니다.

### 꼬리질문

- 함수 선언문과 함수 표현식의 호이스팅 동작 차이는 무엇인가요?
- `__proto__`와 `prototype`의 차이는 무엇인가요?
- 스코프 체인 탐색과 프로토타입 체인 탐색은 각각 언제 일어나나요?

</details>

<details>
<summary>호이스팅과 실행 컨텍스트는 어떤 관계인가요?</summary>

### 답변
- 실행 컨텍스트 생성 단계에서 변수와 함수 선언이 먼저 메모리에 등록
- var는 undefined로 초기화
- let/const는 TDZ로 인해 접근 시 에러 발생

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
- TDZ는 무엇인가요?

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
- this가 객체가 아닌 상위 스코프를 가리켜 obj.method()를 호출해도 this가 객체가 되지 않음

</details>
- 리액트에서 이벤트 핸들러를 화살표 함수로 쓰는 이유는?

</details>

<details>
<summary>Map과 Object의 차이점은 무엇인가요?</summary>

### 답변

Object는 일반 객체를 표현하기 위한 자료구조이고, Map은 키와 값을 저장하기 위한 컬렉션입니다.

Object의 키는 문자열만 사용할 수 있지만, Map은 객체를 포함한 모든 값을 키로 사용할 수 있습니다.

또한 Map은 size, clear, has 등을 제공하며, 삽입 순서를 보장합니다.

### 꼬리질문


<details>
<summary>어떤 상황에서 Object보다 Map을 사용하는 것이 더 적합한가요?</summary>

### 답변

object는 정적인 데이터를 만들때 적합하고
map은 삽입 순서를 보장해야 하는 경우나 데이터의 추가/삭제가 빈번한 경우에 map을 사용하는게 좋습니다.

예를 들어 캐시 구현, 사용자 세션 관리, 중복 데이터 관리처럼 키를 기준으로 빠르게 조회하고 관리해야 하는 상황에서는 Map이 더 적합합니다.

</details>

<details>
<summary>Map의 key로 객체를 사용할 수 있는 이유는 무엇인가요?</summary>

### 답변

Map은 Object와 달리 key를 문자열로 변환하지 않고 참조값 자체로 관리하기 때문에 객체를 key로 사용할 수 있습니다.

예를들어 같은 형태의 객체라도 참조가 다르면 다른 key로 판단합니다.

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
**실패 처리 방식**이 다릅니다.

- **Promise.all**: 하나라도 거부되면 **즉시 전체가 거부**됩니다. 모든 작업이 성공해야 할 때 사용합니다.
- **Promise.allSettled**: 모든 Promise가 **이행이든 거부든 끝날 때까지 기다리고**, 각각의 결과(`{status, value/reason}`)를 배열로 반환합니다.
- **선택 기준**: 부분 실패를 허용하고 각 결과를 개별 처리하고 싶으면 `allSettled`, 전부 성공해야 의미 있는 작업이면 `all`을 사용합니다.

```javascript
const results = await Promise.allSettled([fetchA(), fetchB()]);
results.forEach(r => {
  if (r.status === 'fulfilled') console.log(r.value);
  else console.log(r.reason);
});
```

</details>
- async/await은 Promise와 어떤 관계인가요?

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
`Promise.all`을 사용하면 여러 Promise를 **동시에 실행**하고, 모두 완료될 때까지 기다립니다.

- **동작**: 배열로 전달한 모든 Promise가 이행되면, 결과를 배열로 반환합니다.
- **실패 시**: 하나라도 거부되면 즉시 전체가 거부됩니다.
- **효과**: 순차 실행 대비 전체 소요 시간이 가장 오래 걸리는 작업 하나의 시간으로 줄어듭니다.

```javascript
const [user, posts] = await Promise.all([
  fetch('/api/user').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
]);
```

</details>

<details>
<summary>`Promise.all`과 `Promise.allSettled`의 차이는?</summary>

### 답변
**실패 처리 방식**이 다릅니다.

- **Promise.all**: 하나라도 거부되면 **즉시 전체가 거부**됩니다. 모든 작업이 성공해야 할 때 사용합니다.
- **Promise.allSettled**: 모든 Promise가 **이행이든 거부든 끝날 때까지 기다리고**, 각각의 결과(`{status, value/reason}`)를 배열로 반환합니다.
- **선택 기준**: 부분 실패를 허용하고 각 결과를 개별 처리하고 싶으면 `allSettled`, 전부 성공해야 의미 있는 작업이면 `all`을 사용합니다.

```javascript
const results = await Promise.allSettled([fetchA(), fetchB()]);
results.forEach(r => {
  if (r.status === 'fulfilled') console.log(r.value);
  else console.log(r.reason);
});
```

</details>

</details>

<details>
<summary>Promise의 후속 처리(.then, .catch)는 언제 실행되나요?</summary>

### 답변
- 즉시 실행되지 않고 마이크로태스크 큐에 들어가서, 현재 실행 중인 동기 코드 종료 직후 실행
- setTimeout() 같은 매크로태스크보다 항상 먼저 처리됨

</details>

<details>
<summary>requestAnimationFrame은 언제 사용하나요?</summary>

### 답변

requestAnimationFrame은 브라우저의 다음 화면 갱신 시점에 맞춰 콜백을 실행하는 API입니다.

주로 애니메이션이나 스크롤 효과처럼 화면을 지속적으로 업데이트해야 하는 작업에 사용합니다.

브라우저의 렌더링 주기에 맞춰 실행되기 때문에 setTimeout보다 부드러운 애니메이션을 만들 수 있으며, 백그라운드 탭에서는 자동으로 실행 빈도를 줄여 불필요한 CPU 사용도 줄여줍니다.

### 꼬리질문


<details>
<summary>setTimeout이나 setInterval과의 차이점은 무엇인가요?</summary>

### 답변

setTimeout은 두번째 인자의 타이머가 됐을때 한번 실행되고
setInterval은 그 주기로 계속 실행됩니다.

</details>

<details>
<summary>requestAnimationFrame이 애니메이션 성능에 유리한 이유는 무엇인가요?</summary>

### 답변

requestAnimationFrame도 메인 스레드에서 실행되기 때문에 무거운 JavaScript 작업과 함께 사용하면 프레임 드랍이 발생할 수 있습니다.
setInterval과 달리 브라우저의 렌더링 사이클에 맞춰 실행되고, 탭 비활성화 시 자동으로 최적화되기 때문에 UI 애니메이션 구현에는 더 적합합니다.
무거운 계산은 Web Worker로 분리하고 메인 스레드는 렌더링에 집중시키는 방식으로 보완할 수 있습니다.

사용자가 다른 탭을 보고 있음
모바일에서 배터리가 부족함
화면이 보이지 않는 상태

이런 경우 브라우저가 호출 빈도를 낮추거나 멈출 수 있습니다.

</details>

</details>

<details>
<summary>TanStack Query(React Query)를 사용하는 이유는 무엇인가요?</summary>

### 답변

React Query는 서버 상태(Server State)를 효율적으로 관리하기 위한 라이브러리입니다.
API 요청 결과를 캐싱하여 동일한 요청을 중복해서 보내지 않고, 오래된 데이터를 자동으로 갱신하며 로딩, 에러, 성공 상태도 쉽게 관리할 수 있습니다.

또한 invalidateQueries를 통해 데이터 변경 이후 필요한 데이터만 다시 조회할 수 있습니다.
Redux나 Zustand는 클라이언트 상태를 관리하는 라이브러리이고, React Query는 서버 상태 관리에 특화되어 있다는 차이가 있습니다.

### 꼬리질문


<details>
<summary>staleTime과 gcTime(cacheTime)의 차이점은 무엇인가요?</summary>

### 답변

사용자가 리액트 쿼리를 통해 요청을 보냈을 때
staleTime이 fresh하면 gcTime안에 데이터가 있는지 확인 후 데이터가 있다면 그 값을 캐싱하고 없다면 api요청을 합니다.

그리고 staleTime이 stale 상태면 바로 api 요청을 보냅니다.

</details>

<details>
<summary>React Query와 Redux/Zustand는 어떤 역할의 차이가 있나요?</summary>

### 답변

react-query는 서버상태를 관리하고
redux나 zustand는 보통 클라이언트 상태를 관리합니다.
ex ) modal 등

</details>

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
- bind, call, apply 셋 다 this를 명시적으로 지정
- bind는 새 함수 반환
- call/apply는 즉시 실행되는데, call은 인자를 쉼표로 나열하고 apply는 배열로 전달된다는 차이가 있음

</details>

<details>
<summary>이벤트 리스너 콜백에서 this가 가리키는 것은?</summary>

### 답변
- 이벤트 리스너 콜백에서 this가 가리키는 것은 함수 선언 방식에 차이가 있음
- 일반 함수로 작성 시 이벤트가 발생한 DOM 요소를 가리킴
- 화살표 함수로 작성 시 렉시컬 this 적용돼 상위 스코프의 this를 가리킴

</details>

</details>

<details>
<summary>useLayoutEffect와 useEffect의 차이점은 무엇인가요?</summary>

### 답변

두 Hook 모두 Side Effect를 처리하지만 실행 시점이 다릅니다.
useEffect는 브라우저가 화면을 그린 후 비동기적으로 실행됩니다.

반면 useLayoutEffect는 DOM이 변경된 직후, 브라우저가 화면을 그리기 전에 동기적으로 실행됩니다.
따라서 DOM의 크기나 위치를 측정하거나 화면이 그려지기 전에 스타일을 변경해야 하는 경우 useLayoutEffect를 사용합니다.

다만 렌더링을 차단하기 때문에 꼭 필요한 경우에만 사용하는 것이 좋습니다.

### 꼬리질문


<details>
<summary>useLayoutEffect는 언제 사용하는 것이 적절한가요?</summary>

### 답변

브라우저 렌더링 후 레이아웃이 변경되어 사용자 경험이 떨어질때 사용됩니다.

</details>

<details>
<summary>useLayoutEffect를 남용하면 어떤 문제가 발생할 수 있나요?</summary>

### 답변

useLayoutEffect는 브라우저 렌더링 전에 실행되므로 남용하게 된다면 사용자가 흰 화면을 오래 봐
사용자 경험이 떨어질 수 있습니다.

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
<summary>선언 병합을 실제 사용하는 경우는 언제인가요?</summary>

### 답변
- 외부 라이브러리 타입 확장 시 많이 사용
- Express의 Request 인터페이스에 커스텀 프로퍼티 추가

</details>

<details>
<summary>타입스크립트를 사용하는 이유는?</summary>

### 답변

타입 스크립트를 사용하면 컴파일 타임에 타입 오류를 잡아 런타임 에러를 줄이고, IDE 자동 완성과 타입 추론으로 개발 생산성이 높아집니다.

### 꼬리질문

- any 타입을 쓰면 안 되는 이유는?

<details>
<summary>타입 가드란?</summary>

### 답변
- 런타임에 타입을 좁혀주는 조건문
- unknown 타입을 안전하게 다룰 때나 유니온 타입에서 분기 처리 시 자주 사용
- typeof, instanceof, in 연산자나 직접 작성한 is 반환 함수로 구현

</details>

</details>

<details>
<summary>타입스크립트에서 any 타입을 쓰면 안 되는 이유는 무엇인가요?</summary>

### 답변
- any 타입 사용 시 타입 검사를 완전히 비활성화하기 때문에 타입스크립트 사용 의미가 없어짐
- unknown을 사용해 타입 가드로 좁히는 게 안전

</details>

<details>
<summary>type과 interface 중 type을 선택하는 상황은 언제인가요?</summary>

### 답변
- 유니온 타입, 튜플, 함수 타입 등 interface로 표현하기 어려운 복잡한 타입 조합 필요한 경우 사용

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
명확한 정답보다는 **팀 컨벤션**이 중요하지만, 일반적인 가이드라인이 있습니다.

- **interface**: 객체 형태를 정의하고 확장(상속)이 필요할 때. 선언 병합이 필요한 라이브러리 타입 정의에 유리합니다.
- **type**: 유니온 타입, 튜플, 매핑 타입 등 복잡한 타입 표현이 필요할 때. `type Status = 'active' | 'inactive'`처럼 객체가 아닌 타입에도 사용합니다.
- **실무**: 대부분의 경우 둘 다 사용 가능하므로, 팀에서 하나를 기본으로 정하고 일관되게 씁니다.

</details>

<details>
<summary>인터섹션 타입(`&amp;`)과 인터페이스 상속(`extends`)의 차이는?</summary>

### 답변
둘 다 타입을 합치지만, **충돌 처리 방식과 표현 범위**가 다릅니다.

- **extends**: 상속 관계를 명시하며, 같은 프로퍼티의 타입이 호환되지 않으면 **컴파일 에러**가 발생합니다.
- **&(인터섹션)**: 두 타입을 합집합하며, 같은 프로퍼티가 충돌하면 `never`로 좁혀집니다(에러 대신 조용히 실패).
- **사용 구분**: 객체 확장은 `extends`가 에러를 명확히 잡아주고, 유니온과 조합이 필요하면 `&`를 사용합니다.

```typescript
interface A { x: number }
interface B extends A { y: string } // 명시적 상속

type C = A & { y: string } // 인터섹션
```

</details>

</details>

<details>
<summary>TypeScript에서 type과 interface의 차이는?</summary>

### 답변

interface는 선언 병합이 가능하고, extends로 확장이 가능합니다. </br>
type은 유니온, 인터섹션, 조건부 타입 같은 복잡한 타입 조합이 가능합니다.

### 꼬리질문

- 어떤 상황에서 type을 선택하나요?
- 선언 병합이 실제로 쓰이는 경우는?

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
<summary>가상 DOM은 실제로 성능상 항상 빠르다고 생각하나요?</summary>

### 답변
- 가상 DOM이 항상 빠른 건 아니고, 단순 페이지인 경우엔 오히려 오버헤드
- 상태 변경이 잦고 DOM 업데이트가 많은 복잡한 UI인 경우에만 효과적

</details>

<details>
<summary>리렌더링이 발생하는 조건은 무엇인가요?</summary>

### 답변

리액트 컴포넌트는 state 변경, props 변경, 부모 컴포넌트 리렌더링, Context 값 변경 시 리렌더링이 발생합니다.

### 꼬리질문

- 불필요한 리렌더링을 방지하는 방법은 무엇인가요?
- React.memo와 useMemo, useCallback의 차이는 무엇인가요?

</details>

<details>
<summary>리액트를 사용하는 이유는?</summary>

### 답변

리액트를 사용하면 상태가 변경될 때 DOM을 자동으로 업데이트 해주고, 컴포넌트 단위로 재사용이 가능합니다. </br>
또한 리액트는 가상 DOM을 사용하기 때문에 실제 DOM 조작을 최소화해 성능도 효율적으로 관리가 가능합니다.

### 꼬리질문

- 가상 DOM이 실제로 성능상 항상 빠른가요?
- 컴포넌트 단위로 개발하면 어떤 장점이 있나요?

</details>

<details>
<summary>리액트에서 이벤트 핸들러 함수를 화살표 함수로 사용하는 이유는 무엇인가요?</summary>

### 답변
- 클래스 컴포넌트에서 일반 함수는 호출 시 this가 undefined가 되기 때문에 화살표 함수로 선언하거나 bind로 묶어야 함
- 함수형 컴포넌트에서는 this 문제 없지만, 클로저로 특정 값을 캡처해 전달하기 편해서 자주 사용

</details>

<details>
<summary>리액트에서 이벤트를 어떻게 핸들링하나요?</summary>

### 답변

JSX에서는 onClick, onChange 같은 camelCase 속성으로 핸들러를 연결하지만, 리액트에서는 내부적으로 이벤트 위임 방식으로 루트에 등록해 관리합니다.

### 꼬리질문

- 리액트의 합성 이벤트란 무엇인가요?
- e.preventDefault(), e.stopPropagination() 차이는?

</details>

<details>
<summary>리액트에서 합성 이벤트란 무엇인가요?</summary>

### 답변
- 브라우저마다 다른 이벤트 동작을 통일하기 위해 제공하는 객체

</details>

<details>
<summary>리액트의 컴포넌트 라이프 사이클은?</summary>

### 답변

리액트의 컴포넌트 라이프 사이클은 마운트 > 업데이트 > 언마운트 세 단계로 나뉩니다. </br>
함수형 컴포넌트에서는 useEffect로 제어하며, 의존성 배열로 실행 시점을 조정합니다.

### 꼬리질문

- useEffect clenup 함수는 언제 실행되나요?
- 마운트와 언마운트가 각각 어떤 시점인가요?

</details>

<details>
<summary>마운트와 언마운트는 각각 어떤 시점인가요?</summary>

### 답변
- 마운트는 컴포넌트가 처음 DOM에 삽입되는 시점
- 언마운트는 컴포넌트가 DOM에서 제거되는 시점으로 페이지 이동이나 조건부 렌더링으로 컴포넌트가 사라지는 시점

</details>

<details>
<summary>불필요한 리렌더링 방지 방법</summary>

### 답변
- React.memo, useMemo, useCallback을 사용하여 메모이제이션이나 컴포넌트 쪼개기, key 최적화, state를 필요한 범위로 최소화 및 끌어내리기

</details>

<details>
<summary>재조정(Reconciliation) 과정에서 key가 중요한 이유는 무엇인가요?</summary>

### 답변
`key`는 리스트를 렌더링할 때 React가 **어떤 항목이 추가·삭제·이동됐는지 식별**하는 기준이 됩니다.

- **역할**: 이전과 새 가상 DOM을 비교할 때, 같은 `key`를 가진 요소는 동일 요소로 간주해 재사용합니다.
- **key가 없거나 index를 쓰면**: 순서가 바뀔 때 잘못된 요소를 재사용해 상태가 엉키거나 불필요한 재렌더링이 발생합니다.
- **원칙**: 고유하고 안정적인 값(예: id)을 사용해야 합니다.

</details>

<details>
<summary>컴포넌트 단위로 개발 시에 장점은 무엇인가요?</summary>

### 답변
- UI를 독립적인 단위로 분리하여 재사용성 향상
- 공통 컴포넌트로 구현 시 여러 곳에서 사용 가능하며 수정 시 한 곳에서만 수정하면 됨
- 각 컴포넌트가 자체 상태와 로직을 가져 독립적으로 테스트 및 유지보수 가능

</details>

<details>
<summary>e.preventDefault()와 e.stopPropagation()의 차이는 무엇인가요?</summary>

### 답변
- e.preventDefault()는 폼 제출, 링크 이동과 같은 브라우저 기본 동작 막음
- e.stopPropagation()은 이벤트가 부모 요소로 버블링되는 것을 막음

</details>

<details>
<summary>hydration이란 무엇인가요?</summary>

### 답변

Hydration은 서버에서 미리 생성한 HTML에 React가 이벤트와 상태를 연결하여 상호작용이 가능하도록 만드는 과정입니다.
SSR에서는 서버가 먼저 HTML을 생성하여 브라우저에 전달하고, 이후 브라우저에서 React가 해당 HTML을 이어받아 이벤트를 연결합니다.

덕분에 초기 화면은 빠르게 표시하면서도 이후에는 일반적인 React 애플리케이션처럼 동작할 수 있습니다.

### 꼬리질문


<details>
<summary>SSR과 CSR의 차이점은 무엇인가요?</summary>

### 답변

SSR은 서버에서 html을 렌더링하는 것이고 CSR는 클라이언트에서
렌더링하는 것입니다.

SSR는 서버에서 html을 렌더링하기때문에 seo에 좋지만
요청마다 새로 화면을 그려야한다는 단점이 있습니다.
CSR는 seo가 안좋지만 한번 그려두면 그 이후는 부분적으로 바뀌는 부분만 렌더링되기때문에 화면 깜빡임이 없습니다.

</details>

<details>
<summary>Hydration Mismatch는 왜 발생하나요?</summary>

### 답변

SSR 결과 HTML ≠ Client React 렌더링 결과 → Hydration 불일치

서버와 클라이언트의 결과가 다르기 때문에 발생합니다.

</details>

</details>

<details>
<summary>props drilling 문제를 해결하는 방법</summary>

### 답변
- context api나 zustand 같은 전역 상태 관리 라이브러리 사용

</details>

<details>
<summary>props와 state의 차이는 무엇인가요?</summary>

### 답변

props는 부모 컴포넌트가 설정하는 값으로 자식 컴포넌트는 해당 props를 읽기 전용으로만 사용할 수 있지만, </br>
state는 자식 컴포넌트 내부에서 값을 변경할 수 있습니다.

### 꼬리질문

- props drilling 문제를 어떻게 해결할 수 있나요?
- state를 변경했는데 화면이 바로 안 바뀌는 경우가 있는 이유는 무엇인가요?

</details>

<details>
<summary>React Hooks에서 클로저가 하는 역할</summary>

### 답변
- 리렌더링될 때마다 그 시점의 state와 props 값을 함수 내부에 고정해서 기억하게 해주는 역할
- 매 렌더링마다 함수 컴포넌트가 통째로 다시 실행되면서 그 안의 이벤트 핸들러나 useEffect 콜백이 그 시점의 값을 캡처하는 것
- 그래서 useEffect에서 deps 배열을 빠뜨리면, 콜백 내부의 state가 처음 렌더링 시점 값으로 고정돼버리는 stale closure 문제가 발생할 수 있음

</details>

<details>
<summary>React에서 가상 DOM(Virtual DOM)이란 무엇인가요?</summary>

### 답변

실제 DOM의 가벼운 자바스크립트 객체 복사본으로, 직접적인 DOM 조작을 최소화해 렌더링 성능을 최적화합니다.

- **생성**: 상태가 변경되면 새 가상 DOM을 만듭니다.
- **비교(diffing)**: 이전 가상 DOM과 비교해 바뀐 부분을 찾습니다.
- **반영(reconciliation)**: 실제로 바뀐 부분만 실제 DOM에 반영합니다.

### 꼬리질문

- React의 재조정(Reconciliation) 과정에서 `key`가 중요한 이유는?

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
부모에서 깊은 자식까지 데이터를 전달하기 위해 **중간 컴포넌트들이 사용하지도 않는 props를 계속 넘겨받는** 현상입니다.

- **문제**: 중간 컴포넌트가 불필요한 props에 의존하게 되어 유지보수가 어렵고, props 이름 변경 시 경로 전체를 수정해야 합니다.
- **해결 방법**: Context API, 상태 관리 라이브러리(Zustand, Redux), 또는 컴포넌트 합성(children 패턴)으로 우회합니다.

</details>

<details>
<summary>Context를 남용하면 어떤 성능 문제가 생길 수 있나요?</summary>

### 답변
Context의 값이 바뀌면 해당 Context를 구독하는 **모든 컴포넌트가 재렌더링**됩니다.

- **원인**: Context는 값 변경 시 부분 구독이 불가능해, 값의 일부만 사용하는 컴포넌트도 전부 다시 렌더링됩니다.
- **완화 방법**: Context를 용도별로 잘게 분리하거나, 자주 바뀌는 값은 별도 상태 관리 도구를 사용합니다. `useMemo`로 Provider의 value를 메모이제이션하는 것도 도움됩니다.

</details>

</details>

<details>
<summary>React에서 key prop이 reconciliation과정에서 왜 중요한가</summary>

### 답변
- key를 고유 값으로 주면 어떤 요소가 추가/삭제/이동됐는지 정확히 식별 가능하기 때문에 효율적으로 이전 트리와 비교 가능
- key가 없으면 react는 배열 순서로 엘리먼트를 비교해 불필요한 리렌더링이나 잘못된 DOM 재사용 발생 가능

</details>

<details>
<summary>React에서 useEffect는 언제 실행되며, 주의할 점은 무엇인가요?</summary>

### 답변

의존성 배열이 없으면 매 렌더링마다 실행됩니다.
빈 배열([])이면 최초 마운트 시 한 번만 실행됩니다.
값이 있으면 해당 값이 변경될 때마다 실행됩니다.

주의할 점은 cleanup 함수를 반환하여 이벤트 리스너 제거, 타이머 해제, 네트워크 요청 취소 등 리소스를 정리해야합니다.

### 꼬리질문


<details>
<summary>useEffect는 내부적으로 어떻게 동작하나요?</summary>

### 답변

useEffect는 Fiber에 Effect 정보를 저장하고, 렌더링 후 커밋 단계에서 실행됩니다. deps가 변경되면 실행 대상으로 표시하고, 실행 전에는 이전 effect의 cleanup(destroy)을 먼저 호출한 뒤 새로운 effect(create)를 실행합니다.

렌더링
↓
Fiber에 Effect 저장
↓
DOM 업데이트(commit)
↓
cleanup 실행
↓
effect 실행

ex

```
function useEffect(create, deps) {
  const hook = mountWorkInProgressHook();

  hook.memoizedState = {
    create,   // effect callback
    deps,     // dependency array
    destroy: undefined, // cleanup
  };

  // Fiber의 effect queue에 등록
  pushEffect(hook.memoizedState);
}
```

</details>

<details>
<summary>useEffect 내부에서 비동기 작업을 할 때 cleanup 함수는 왜 필요한가요?</summary>

### 답변

cleanup을 하지않으면 내부에서 타이머, 이벤트 리스너, webSocket 연결같은 작업이 계속 실행되어 메모리 누수나 잘못된 상태 업데이트가 될 수 있기때문입니다.

</details>

</details>

<details>
<summary>TanStack Query(React Query)의 retry 옵션은 어떤 기준으로 설정하시나요?</summary>

### 답변

재시도는 공짜가 아닙니다. **재시도 횟수 × (응답 시간 + 백오프 대기)가 곧 사용자 체감 지연**이라는 것이 기준의 출발점입니다.

- **전역 기본값은 보수적으로**: 일시적 네트워크 흔들림은 한 번의 재시도로 대개 회복되므로 `retry: 1` 정도로 두고, 그래도 실패하면 빠르게 ErrorBoundary로 떨어뜨려 "다시 시도" 버튼을 노출하는 명시적 UX가 균형점입니다. 기본 3회는 지수 백오프가 누적되며 수 초간 빈 화면이 생길 수 있습니다.
- **에러 종류로 가르기**: 4xx는 클라이언트 잘못이라 재시도해도 같은 결과이므로 0회, 재시도가 의미 있는 5xx·네트워크 에러만 `retry: (count, error) => ...` 함수로 재시도합니다.
- **응답 시간에 반비례**: 무겁고 핵심인 API는 재시도가 길어질수록 사용자가 빈 화면에 갇히므로 0~1회로 줄이고 사용자에게 통제권(명시적 재시도 버튼)을 줍니다. 반대로 응답이 수십 ms로 빠른 API는 재시도 비용이 작으니 2~3회로 늘려 안정성을 높입니다.

정리하면 "전역 기본은 보수적으로, 개별 쿼리는 특성에 맞게 오버라이드"입니다.

### 꼬리질문

- retryDelay의 기본 동작(지수 백오프)은 왜 필요한가요?
- `retry: 0`이 항상 더 빠른데, 왜 1회를 두나요?
- 응답이 유난히 오래 걸리는 요청에는 재시도 외에 어떤 장치가 필요한가요? (AbortController 타임아웃)

</details>

<details>
<summary>useEffect의 실행 시점과 클린업 함수의 실행 시점에 대해 설명해주세요.</summary>

### 답변
- useEffect는 렌더링이 DOM에 반영된 이후, 화면이 그려지고 나서 비동기적으로 실행
- 재실행 여부는 의존성 배열에 의해 결정
- 의존성 배열 생략할 경우 > 컴포넌트가 업데이트될 때마다 실행
- 의존성 배열이 빈 경우 > 최초 한 번만 실행
- 의존성 배열에 값이 있는 경우 > 지정한 변수 값이 변경될 때만 실행
- 클린업 > 언마운트되기 직전 실행되며 메모리 누수나 불필요한 동작 방지 가능

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
이펙트 내부에서 참조하는 값이 바뀌어도 이펙트가 재실행되지 않아, **오래된 값(stale closure)**을 사용하게 됩니다.

- **증상**: 상태가 업데이트됐는데 이펙트는 이전 값을 보고 동작합니다.
- **예시**: 타이머에서 `count`를 의존성에 넣지 않으면 항상 초기값만 참조합니다.
- **해결**: ESLint의 `exhaustive-deps` 규칙을 활성화해 빠뜨린 의존성을 자동 감지합니다.

</details>

<details>
<summary>`useEffect`와 `useLayoutEffect`의 실행 시점 차이는?</summary>

### 답변
둘 다 사이드 이펙트를 처리하지만, **브라우저 페인트 전후** 실행 시점이 다릅니다.

- **useEffect**: 렌더링 결과가 **화면에 그려진 후(paint 이후)** 비동기로 실행됩니다.
- **useLayoutEffect**: DOM 변경 후 **화면에 그려지기 전(paint 이전)** 동기로 실행됩니다.
- **사용 구분**: DOM 측정(크기·위치)이나 시각적 깜빡임을 방지해야 할 때만 `useLayoutEffect`를 쓰고, 나머지는 `useEffect`를 사용합니다.

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

- React Fiber는 무엇인가요?
- key prop이 reconciliation에서 왜 중요한가요?

</details>

### CSS

<details>
<summary>CSS 쌓임 맥락(Stacking Context)에 대해 설명해 주세요.</summary>

### 답변

쌓임 맥락은 요소들이 z축(화면 앞뒤)에서 쌓이는 순서를 결정하는 **독립된 레이어 그룹**입니다.

- **생성 조건**: `position` + `z-index`, `opacity < 1`, `transform`, `filter`, `will-change`, `isolation: isolate` 등이 새 쌓임 맥락을 만듭니다.
- **핵심 함정**: 자식의 `z-index`는 **자기 부모 쌓임 맥락 안에서만** 의미가 있습니다. 부모 맥락의 z-index가 1이면, 그 안의 자식이 z-index 9999여도 바깥의 z-index 2짜리 요소를 이길 수 없습니다. (1층 건물 옥상에 사다리를 아무리 높이 놓아도 2층 건물보다 낮은 것과 같습니다.)

실무에서 가장 흔한 버그는 "모달이 다른 요소 뒤로 깔리는" 현상인데, 보통 부모에 `transform`이나 `opacity`가 걸려 의도치 않게 새 쌓임 맥락이 생긴 탓입니다. 해결은 모달을 Portal로 `body` 직속에 렌더링하거나, 부모의 쌓임 맥락 유발 속성을 제거하는 것입니다.

### 꼬리질문

- `z-index`를 지정하지 않았을 때 요소가 쌓이는 기본 순서는 어떻게 결정되나요?
- `transform`은 왜 새로운 쌓임 맥락을 만드나요?
- React Portal이 쌓임 맥락 문제를 어떻게 우회하나요?

</details>

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


<details>
<summary>`absolute` 요소의 기준이 되는 조상은 어떻게 정해지나요?</summary>

### 답변
DOM 트리를 올라가며 `position`이 `static`이 **아닌** 가장 가까운 조상을 기준으로 삼습니다.

- **탐색 순서**: 부모 → 조부모 → … 순으로 올라가며 `relative`, `absolute`, `fixed`, `sticky` 중 하나가 설정된 요소를 찾습니다.
- **없는 경우**: 해당 조상이 없으면 **초기 컨테이닝 블록(보통 `<html>`)**을 기준으로 합니다.
- **실무 패턴**: `absolute`를 쓸 때 기준이 될 부모에 `position: relative`를 지정하는 것이 일반적입니다.

</details>

<details>
<summary>`z-index`가 적용되려면 어떤 조건이 필요한가요?</summary>

### 답변
`z-index`는 `position`이 `static`이 아닌 요소에서만 작동합니다.

- **조건**: `position: relative | absolute | fixed | sticky` 또는 `flex`·`grid` 자식 요소여야 합니다.
- **쌓임 맥락(Stacking Context)**: `z-index`를 지정하면 새로운 쌓임 맥락이 생기고, 그 안의 자식은 부모 맥락 안에서만 겹침 순서가 결정됩니다.
- **주의**: 서로 다른 쌓임 맥락에 속한 요소는 `z-index` 값과 무관하게 부모의 순서를 따릅니다.

</details>

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

- Flex와 Grid를 어떤 상황에서 어떻게 사용하는게 더 적합한가요?

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
Flexbox에서 **주축(main axis)**과 **교차축(cross axis)** 중 어느 방향으로 정렬하는지가 다릅니다.

- **justify-content**: **주축** 방향 정렬. `flex-direction: row`면 가로, `column`이면 세로.
- **align-items**: **교차축** 방향 정렬. `flex-direction: row`면 세로, `column`이면 가로.
- **핵심**: `flex-direction`에 따라 축이 바뀌므로, "가로/세로"가 아니라 "주축/교차축"으로 이해해야 합니다.

</details>

<details>
<summary>Grid의 `fr` 단위는 무엇인가요?</summary>

### 답변
`fr`(fraction)은 Grid 컨테이너의 **남은 공간을 비율로 나누는** 단위입니다.

- **동작**: 고정 크기(`px`, `rem`)나 콘텐츠 크기를 먼저 할당한 뒤, 남은 공간을 `fr` 비율로 분배합니다.
- **예시**: `grid-template-columns: 200px 1fr 2fr`이면 첫 열은 200px 고정, 나머지 공간을 1:2로 나눕니다.
- **장점**: 반응형 레이아웃을 `%` 계산 없이 직관적으로 만들 수 있습니다.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3등분 */
}
```

</details>

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

- `&lt;section&gt;`과 `&lt;article&gt;`의 차이는?
- `&lt;b&gt;`와 `&lt;strong&gt;`, `&lt;i&gt;`와 `&lt;em&gt;`의 차이는?

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
<summary>`&lt;div onClick&gt;` 대신 `&lt;button&gt;`을 써야 하는 이유는?</summary>

### 답변
`<button>`은 **기본적으로 접근성과 상호작용 기능을 내장**하고 있기 때문입니다.

- **키보드 접근**: `<button>`은 Tab으로 포커스되고 Enter·Space로 클릭됩니다. `<div>`는 `tabindex`, `role="button"`, 키보드 이벤트를 직접 구현해야 합니다.
- **스크린 리더**: `<button>`은 자동으로 "버튼"으로 인식됩니다.
- **원칙**: 클릭 가능한 요소는 `<button>`이나 `<a>`를 우선 사용하고, 시맨틱 태그로 불가능한 경우에만 ARIA로 보완합니다.

</details>

<details>
<summary>스크린 리더에서만 읽히게 하려면 어떻게 처리하나요? (`sr-only`)</summary>

### 답변
시각적으로는 숨기되, **스크린 리더는 읽을 수 있는** CSS 클래스를 사용합니다.

- **sr-only 패턴**: `display: none`이나 `visibility: hidden`은 스크린 리더도 무시하므로 사용할 수 없습니다.
- **구현**: 요소를 1px 크기로 줄이고 화면 밖으로 보내되, DOM에는 존재하게 합니다.

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

- **사용 예**: 아이콘 버튼에 `<span class="sr-only">닫기</span>`를 추가해 의미를 전달합니다.

</details>

</details>

<details>
<summary>b와 strong, i와 em의 차이는 무엇인가요?</summary>

### 답변
시각적으로는 비슷하지만, **의미(시맨틱)를 담는지 여부**가 핵심 차이입니다.

- **b / i**: 순수하게 **시각적 표현**만을 위한 태그. 굵게(`b`), 기울임(`i`)일 뿐 특별한 의미는 없습니다.
- **strong / em**: **의미적 강조**를 나타냅니다. `strong`은 중요도가 높음, `em`은 강세(emphasis)를 표현합니다.
- **접근성**: 스크린 리더는 `strong`·`em`을 강조해 읽어주지만 `b`·`i`는 그렇지 않으므로, 의미가 있으면 `strong`·`em`을 사용해야 합니다.

</details>

<details>
<summary>section과 article의 차이는 무엇인가요?</summary>

### 답변
둘 다 문서를 구획하는 시맨틱 태그지만, **독립적으로 재사용 가능한 콘텐츠인지**가 판단 기준입니다.

- **article**: 그 자체로 완결되어 **독립적으로 배포·재사용**될 수 있는 콘텐츠. (예: 블로그 글, 기사, 댓글)
- **section**: 문서 안에서 **주제별로 묶는** 구획. 보통 제목을 동반하며 문서의 일부입니다.
- **판단법**: "이 내용을 RSS 피드에 그대로 넣어도 말이 되는가?" → 그렇다면 `article`을 고려합니다.

</details>

### Network

<details>
<summary>대칭 키와 비대칭 키의 차이는 무엇인가요?</summary>

### 답변

대칭 키는 암호화와 복호화에 하나의 동일한 키를 사용하는 방식입니다.
처리 속도가 빨라서 암호화에 주로 사용되지만 보안문제가 있습니다.
반면 비대칭키는 공개키와 개인키 두 개의 키를 사용하는 방식입니다.
공개키로 암호화한 데이터는 개인키로만 복호화할 수 있어 키를 안전하게 공유할 수 있지만, 대칭키보다 속도가 느립니다.

</details>

<details>
<summary>브라우저 캐시와 CDN 캐시의 차이점은 무엇인가요?</summary>

### 답변

브라우저 캐시는 사용자의 브라우저에 리소스를 저장하는 캐시입니다.
같은 사용자가 다시 방문하면 캐시된 데이터를 사용하거나 서버에 변경 여부만 확인하여 응답 속도를 높입니다.

반면 CDN 캐시는 사용자와 가까운 CDN 서버에 리소스를 저장하는 캐시입니다.
여러 사용자가 동일한 캐시를 공유하기 때문에 원본 서버의 부하를 줄이고, 지리적으로 가까운 서버에서 데이터를 제공하여 응답 속도를 개선합니다.

즉 브라우저 캐시는 사용자 단위 캐시, CDN 캐시는 공유 캐시라는 차이가 있습니다.

### 꼬리질문


<details>
<summary>Cache-Control과 ETag는 각각 어떤 역할을 하나요?</summary>

### 답변

Cache-control -> 캐시를 사용해도 되는가?
ETag -> 서버의 리소스가 이전과 같은지 확인

</details>

<details>
<summary>CDN을 사용하면 어떤 성능상의 이점이 있나요?</summary>

### 답변

캐싱, 저 빠른 요청 응답으로 응답 시간 감소, 보안 강화

</details>

</details>

<details>
<summary>프록시(Proxy)와 리버스 프록시(Reverse Proxy)의 차이점은 무엇인가요?</summary>

### 답변

프록시는 클라이언트 앞에 위치하여 클라이언트를 대신해 서버와 통신하는 서버입니다.
반면 리버스 프록시는 서버 앞에 위치하여 여러 서버를 대신해 클라이언트의 요청을 처리합니다.

프록시는 익명성 제공이나 접근 제어를 위해 사용되고, 리버스 프록시는 로드 밸런싱, SSL 종료, 캐싱, 보안 등의 목적으로 많이 사용됩니다.
대표적인 리버스 프록시 서버로 Nginx가 있습니다.

### 꼬리질문


<details>
<summary>Nginx는 왜 리버스 프록시로 많이 사용되나요?</summary>

### 답변

높은 동시 처리 성능 → 적은 리소스 사용 → 안정성 → 다양한 기능 지원

</details>

<details>
<summary>리버스 프록시를 사용하면 어떤 장점이 있나요?</summary>

### 답변

DB 보안 및 로드밸런싱, 캐싱

</details>

</details>

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
**백엔드(서버)에서 해결**해야 합니다.

- **이유**: CORS는 서버 응답의 `Access-Control-Allow-Origin` 헤더로 허용 여부를 결정합니다. 브라우저는 이 헤더를 확인해 차단할 뿐, 프론트에서 우회할 수 없습니다.
- **서버 설정**: 허용할 출처, 메서드, 헤더를 명시합니다.
- **개발 환경**: 프론트 개발 서버의 프록시 설정(`proxy` 또는 `vite.config`의 `server.proxy`)으로 CORS를 우회할 수 있지만, 이는 개발용일 뿐입니다.

</details>

<details>
<summary>Preflight 요청이 발생하는 조건은?</summary>

### 답변
**단순 요청(Simple Request)**이 아닌 경우 브라우저가 자동으로 `OPTIONS` 메서드의 Preflight 요청을 보냅니다.

- **단순 요청 조건**: `GET`·`POST`·`HEAD` 메서드이고, `Content-Type`이 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` 중 하나이며, 커스텀 헤더가 없어야 합니다.
- **Preflight 발생**: `PUT`·`DELETE` 메서드, `Content-Type: application/json`, `Authorization` 등 커스텀 헤더 사용 시.
- **캐싱**: 서버가 `Access-Control-Max-Age`를 설정하면 Preflight 결과를 캐싱해 반복 요청을 줄입니다.

</details>

</details>

<details>
<summary>CORS란 무엇인가요?</summary>

### 답변

CORS란 교차 출처 공유라는 의미로 브라우저가 다른 출처로의 요청을 허용할지 판단하는 보안 메커니즘입니다. </br>
브라우저는 기본적으로 동일 출처 정책에 따라 다른 출처로의 요청을 차단하는데, 서버가 응답 헤더에 허용 출처를 명시하면 브라우저가 이를 확인하고 응답을 허용합니다.

### 꼬리질문

- CORS 에러가 발생했을 때 프론트엔드에서 해결할 수 있는 방법은?

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

- TLS 핸드셰이크 과정을 설명해주세요.

<details>
<summary>HSTS란 무엇인가요?</summary>

### 답변
- 서버가 Strict-Transport-Security 응답 헤더로 HTTPS만 접속하라고 브라우저에 강제하는 정책
- 목적은 SSL 스트리핑(HTTPS > HTTP 다운그레이드) 공격 방지 위함

</details>

</details>

<details>
<summary>HTTPS란 무엇이고, HTTP와의 차이는?</summary>

### 답변

HTTPS는 HTTP 메시지를 `TLS`로 보호해서 전송하는 방식입니다. HTTP와 요청/응답 구조, URL, 메서드, 상태 코드 같은 의미는 같지만,
전송 전에 HTTP 메시지가 TLS로 암호화되어 네트워크에서는 평문이 아니라 암호문으로 흐릅니다.

이 과정에서 TLS는 통신 내용을 숨기는 `기밀성`, 중간 변조를 막는 `무결성`, 인증서를 통해 서버가 진짜인지 확인하는 `서버 인증`을 제공합니다.
기본 포트도 달라서 HTTP는 80번, HTTPS는 `443번 포트`를 사용합니다.

### 꼬리질문

3


<details>
<summary>HTTPS는 어떻게 동작하나요? TLS Handshake 과정을 설명해주세요.</summary>

### 답변

Hello -> 인증서 -> 인증 -> 세션키 -> 대칭키 통신

</details>
- 대킹 키와 비대칭 키의 차이가 무엇인가요?

</details>

<details>
<summary>REST API 설계에서 프론트엔드는 화면 기준 API를, 백엔드는 오브젝트 중심 모델링을 원해 언더패칭/오버패칭 갈등이 생깁니다. 어떻게 풀어야 할까요?</summary>

### 답변

- **언더패칭**: 한 화면을 그리는 데 API를 여러 번 호출해야 하는 상황 (카드 20개 → 20번 호출)
- **오버패칭**: 큰 덩어리 API 하나로 받지만, 화면 기획이 바뀌면 안 쓰는 필드가 쌓이고 재설계 비용이 커지는 상황

판단 기준을 취향이 아니라 **유저 체감 성능**에 둡니다. 추가 호출이 병목이나 불편으로 이어지지 않으면 백엔드의 오브젝트 모델링을 존중하고 프론트에서 흡수합니다. 반대로 카드 20개를 동기로 20번 호출해야 하는 식이면 그건 귀찮음이 아니라 **프론트가 해결할 수 없는 구조적 성능 결함**이므로 명확히 개선을 요청합니다.

의견이 계속 대립하면 **판단 기준의 외재화**가 수단입니다. "로드타임 N초 이내" 같은 측정 가능한 공통 목표를 먼저 합의하고, 각 안(잘게 쪼갠 API / 덩어리 API / 절충안)을 그 기준으로 검증하면 '누구 의견이냐'가 아니라 '기준을 충족하느냐'로 자동 정렬됩니다. 그래도 좁혀지지 않으면 **BFF(Backend For Frontend)** 같은 중간 계층으로 화면 변경을 백엔드 모델과 분리해, 양쪽 비용을 동시에 줄이는 제3안을 제시합니다.

### 꼬리질문

- BFF란 무엇이고, 언더패칭/오버패칭 문제를 어떻게 절충하나요?
- BFF를 도입할 여력이 없다면 클라이언트 측에서 어떤 우회 방법이 있나요? (배치 호출, 노멀라이징 캐시)
- GraphQL 전면 도입과 비교하면 어떤 트레이드오프가 있나요?

</details>

<details>
<summary>WebSocket과 HTTP의 차이점은 무엇인가요?</summary>

### 답변

HTTP는 요청이 있어야 응답을 받을 수 있는 요청-응답(Request-Response) 기반의 프로토콜입니다.
반면 WebSocket은 최초 HTTP Handshake 이후 연결을 계속 유지하는 양방향(Full Duplex) 통신 프로토콜입니다.

연결이 유지되는 동안 서버와 클라이언트가 서로 자유롭게 데이터를 주고받을 수 있기 때문에 채팅, 실시간 알림, 게임, 주식 시세처럼 실시간성이 중요한 서비스에 적합합니다.

### 꼬리질문


<details>
<summary>WebSocket은 어떻게 연결을 수립하나요?</summary>

### 답변

HTTP 기반 Handshake로 연결 수립 후, Upgrade 헤더와 101 응답으로 WebSocket으로 전환하고 TCP 연결을 유지하며 양방향 통신합니다.

</details>

<details>
<summary>WebSocket 대신 SSE(Server-Sent Events)를 사용하는 경우는 언제인가요?</summary>

### 답변

webSocket -> 양방향 실시간 통신
SSE -> 서버 -> 클라이언트 단방향 실시간 통신

서버와 클라이언트의 통신이 빈번할 때 양방향 통신인 websocket을 사용하고
서버에서 클라이언트로 통신이 많을때는 단방향 SSE를 고려합니다.

구현 자체의 난이도가 webSocket이 SSE가 더 간단하기때문에
클라이언트의 요청이 있어도 그 부분은 api요청으로 해결하고 sse를 선택할 수도 있습니다.
ex ) ai 챗봇 스트리밍, 주문 알림 서비스 등

</details>

</details>

### Browser

<details>
<summary>멀티스텝 폼의 입력 상태를 새로고침에도 유지하기 위해 웹 스토리지에 저장한다면, 어떤 것들을 고려해야 하나요?</summary>

### 답변

크게 네 가지를 설계해야 합니다.

- **저장소 선택**: 진행 중인 일회성 상태는 sessionStorage(탭 종료 시 소멸), 재방문 시 prefill 같은 편의 기능은 localStorage, 여러 기기 간 이어쓰기나 강한 일관성이 필요하면 서버 저장. 책임이 다르면 키를 분리합니다.
- **버저닝·마이그레이션**: 영구 저장 데이터는 시간이 지나며 코드 스키마와 어긋납니다(drift). 저장 시 `version` 필드를 함께 기록하고, 읽을 때 버전이 일치하면 사용, 불일치하지만 변환 가능하면 마이그레이션, 불가하면 폐기 후 초기값으로 시작합니다.
- **삭제 시점(라이프사이클)**: 저장과 삭제는 한 쌍입니다. 폼 제출이 성공한 시점(확정 mutation 성공 직후)에 정리하지 않으면, 다음 이용 시 과거 입력값이 남아 있게 됩니다. 완료 화면은 스토리지가 아니라 **서버 응답을 진실의 원천**으로 그립니다.
- **신/구 버전 충돌**: 사용자가 구버전 탭에서 데이터를 채우던 중 새 버전이 배포되고 새로고침하면, 신버전 코드가 구버전 데이터를 주입받아 깨질 수 있습니다. 버전 게이트로 진입 시점에 걸러내고, 서버가 mutation 시점에 payload를 최종 검증하는 두 층 방어가 필요합니다.

### 꼬리질문

- localStorage에 저장한 값은 언제까지 남아 있나요? 용량 한계를 초과하면 어떻게 되나요?
- 왜 제출 "성공 직후"가 스토리지를 비우는 기준 시점인가요? 더 이르거나 늦으면 어떤 문제가 있나요?
- 단순 버전 비교 대신 zod 같은 스키마 검증을 쓰면 어떤 점이 더 안전한가요?

</details>

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
<summary>브라우저 성능을 향상시킬 수 있는 방법들에 대해 설명해주세요.</summary>

### 답변
- 이미지 크기 최적화 : `<img>` 태그의 srcset 속성이나 WebP 형식 사용
- HTML, CSS, JS 파일 압축 : 웹 서버(NginX 등) 설정을 통해 파일 전송 전 자동으로 압축하여 전달 
- 레이지 로딩 : 필요 시점에 필요 데이터 로드, React.lazy()나 `<img loading='lazy'>` 사용하여 구현 가능
- CDN : JS, CSS와 같은 정적 파일 CDN 통해 제공
- 불필요한 자바스크립트 최소화 : 불필요한 라이브러리 제거, 코드 스플리팅 적용하여 페이지별로 필요한 코드만 로딩
- 캐싱 : 방문한 사이트의 특정 파일(CSS, JS, 이미지 등)을 브라우저에 저장해두고 재방문 시 저장된 파일 사용

</details>

<details>
<summary>브라우저가 HTML을 받아서 화면에 그리기까지의 과정을 설명해주세요.</summary>

### 답변

HTML 파싱 > DOM 트리 생성 > CSS 파싱 > CSSOM 생성 > Render Tree 결합 > Layout(reflow) > paint > composite 순서로 진행됩니다.

### 꼬리질문

- reflow와 repaint의 차이와 최소화하는 방법은?
- &lt;script&gt; 태그 위치가 렌더링에 영향을 주는 이유는?

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
자원 독립성과 통신 효율 사이의 트레이드오프입니다.

- **멀티프로세스**: 각 프로세스가 독립된 메모리를 가져 하나가 죽어도 다른 프로세스에 영향이 없습니다. 대신 프로세스 간 통신(IPC)이 느리고 메모리 사용량이 큽니다.
- **멀티스레드**: 메모리를 공유해 통신이 빠르고 자원 효율적입니다. 대신 하나의 스레드 오류가 전체 프로세스를 죽일 수 있고, 동기화 문제(경쟁 조건, 데드락)가 발생할 수 있습니다.
- **예시**: Chrome은 탭마다 프로세스를 분리(멀티프로세스)해 한 탭이 죽어도 다른 탭에 영향이 없습니다.

</details>

<details>
<summary>자바스크립트는 싱글 스레드인데 어떻게 비동기를 처리하나요?</summary>

### 답변
자바스크립트 엔진 자체는 싱글 스레드지만, **브라우저(또는 Node.js)의 런타임 환경**이 비동기 작업을 대신 처리합니다.

- **Web API**: `setTimeout`, `fetch`, DOM 이벤트 등은 브라우저의 별도 스레드에서 처리됩니다.
- **콜백 큐**: 작업이 완료되면 콜백을 태스크 큐에 넣습니다.
- **이벤트 루프**: 콜 스택이 비면 큐에서 콜백을 꺼내 실행합니다.
- **핵심**: 자바스크립트 코드 실행은 싱글 스레드지만, I/O 작업은 런타임 환경이 멀티 스레드로 처리하고, 이벤트 루프가 이를 연결합니다.

</details>

</details>

<details>
<summary>reflow와 repaint의 차이에 대해 설명해주세요.</summary>

### 답변
- reflow는 레이아웃 전체 재계산하는 작업, DOM 구조나 크기/위치 변경 시 발생
- repaint는 시각적 스타일을 다시 그리는 작업, 색상이나 스타일만 변경되는 경우 발생

</details>

### 기타

<details>
<summary>기획이 확정되지 않았고 디자인 시안도 일부만 나온 상태인데 납기는 정해져 있다면, 어떻게 개발을 진행하시겠어요?</summary>

### 답변

기다리지 않고 확정된 부분부터 즉시 시작하되, 변경에 대비해 코드를 격리하는 것이 핵심입니다.

- **확정된 시안부터 착수**: 시안이 나온 부분은 바로 컴포넌트로 구현을 시작합니다.
- **UI / 로직 / 상태 3층 분리**: 미확정 영역은 UI는 스켈레톤·placeholder로 두고, 로직은 순수 함수나 커스텀 훅으로 격리해 시안이 바뀌어도 로직을 재사용할 수 있게 합니다.
- **상태 스키마는 최소로**: 변경 확률이 큰 필드는 optional로 느슨하게 잡아 폐기 비용을 줄입니다.

이렇게 하면 "미리 작성했다가 폐기하는 비용"보다 "확정을 기다리다 늦어지는 비용"이 훨씬 크다는 판단 아래, 시안 확정 시점부터 결합까지의 리드타임을 크게 줄일 수 있습니다.

### 꼬리질문

- 진행 도중 기획이 크게 바뀌는 변수를 통제하기 위해 기술 외적으로(커뮤니케이션 측면에서) 할 수 있는 일은 무엇인가요?
- 미리 작성한 코드가 전부 폐기되는 최악의 경우, 이 방식이 여전히 유리하다고 볼 수 있는 근거는 무엇인가요?

</details>

<details>
<summary>지금까지 개발하면서 겪은 가장 큰 갈등(분쟁)은 무엇이었고, 어떻게 해결했나요?</summary>

### 답변

이 질문에서 면접관이 원하는 것은 조율 "과정"이 아니라 **최종 결론(누가 어떻게 합의했는가)**입니다. 답변 구조:

1. **본인이 직접 이해당사자였던 사례를 고르기**: "런칭 속도 vs 실험 속도" 같은 전사 공통 주제를 꺼내면 "그건 모두가 겪는 문제고, 당신에게 종속된 분쟁을 달라"고 좁혀 들어옵니다. 본인이 직접 구현자·당사자였던 갈등을 준비합니다.
2. **결론을 한 문장으로 먼저**: "결론은 ~쪽으로 났습니다"를 먼저 못 박고, 그 다음에 과정을 설명합니다.
3. **재발 방지 시스템으로 닫기**: 누가 양보했는지에서 끝내지 않고, 충돌의 원인(예: 커뮤니케이션 핑퐁 루프) 자체를 프로세스나 도구로 제거한 이야기로 마무리하면 강합니다.
4. **자기 해법을 절대화하지 않기**: "우리 조직의 특수한 상황이라 필요했던 해법이고, 환경이 달랐다면 불필요했을 것"이라고 한계를 스스로 인정하는 것이 오히려 신뢰를 줍니다.

### 꼬리질문

- 그 결론은 결국 어느 쪽이 양보한 것인가요? 그 판단의 근거는 무엇이었나요?
- 상대방 의견이 부정당하면 방어기제가 발동해 비이성적 영역으로 가기도 하는데, 감정 충돌은 어떻게 다루나요?

</details>

<details>
<summary>최근 1년 내에 새로운 기술이나 도구 도입을 검토한 경험을 말씀해 주세요. 도입 여부의 판단 기준과 얻은 교훈은 무엇인가요?</summary>

### 답변

이 질문의 채점 포인트는 도입한 기술 자체가 아니라 **판단 기준을 명시적으로 끊어 말할 수 있는가**입니다. 답변 구조:

1. **문제 먼저**: "이 기술이 신기해서"가 아니라 "워크플로의 어디에서 비효율이 발생했는지"를 먼저 짚습니다. 도입 검토의 출발은 기능이 아니라 측정된 병목입니다.
2. **판단 기준을 2~3개로 명시**: 예 — ① 해결하려는 비효율이 실재하고 측정 가능한가, ② 대안 대비 이 도구가 우수한 근거가 있는가, ③ 도입·유지 비용(학습 곡선, 레거시와의 충돌)이 이득보다 작은가.
3. **도입하지 않기로 한 판단도 좋은 답**: 레거시 규모와 일정을 근거로 전면 도입을 절제하고 핵심 개념만 차용한 경험(예: GraphQL 전환 대신 REST 위에 DataLoader식 배치·노멀라이징만 적용)은 "할 수 있다"가 아니라 "지금 할 근거가 있나"로 판단하는 시니어 시그널입니다.
4. **교훈으로 닫기**: 결과가 좋았든 아쉬웠든, 다음 도입 검토에서 무엇을 다르게 할지 한 문장으로 정리합니다.

### 꼬리질문

- 도입을 검토했지만 결국 도입하지 않기로 한 경험이 있나요? 그 판단의 근거는 무엇이었나요?
- 도입 후 판단이 틀렸다는 것을 알게 되면 어떻게 하시겠어요?

</details>

<details>
<summary>최근 학습했거나 흥미롭게 본 기술 아티클(또는 기술)을 회사 동료에게 소개한다고 생각하고 설명해 주세요.</summary>

### 답변

이 질문은 지식 자체보다 **학습 습관과 전달력**을 봅니다. "내가 겪던 문제 → 그 기술이 푸는 방식 → 우리 팀에 적용한다면"의 3단 구조로 답하는 것이 좋습니다.

예시 (TanStack Router):

> "URL search param은 원래 전부 문자열이라, 컴포넌트마다 파싱·검증 코드를 중복으로 짜야 하는 문제가 있었습니다. TanStack Router는 라우트 정의 시점에 search 스키마를 선언해 URL을 **타입 안전한 상태 저장소**로 끌어올립니다. loader로 진입 전 데이터를 확보하고 beforeLoad로 권한 가드를 걸 수 있어 라우터가 데이터·인증 흐름의 단일 진입점이 됩니다. 당장 도입하지 않더라도 'URL을 검증된 타입 객체로 다룬다'는 개념은 지금 코드에도 차용할 수 있을 것 같아 공유합니다."

핵심은 (1) 실무에서 겪은 페인 포인트와 연결하고, (2) 동료의 눈높이에 맞는 용어로 설명하고, (3) "도입 안 해도 개념은 차용 가능"처럼 현실적인 적용 제안으로 닫는 것입니다.

### 꼬리질문

- 그 기술(아티클)을 어떤 계기로 접하게 되었나요?
- 소개한 기술을 실제 프로젝트에 도입한다면, 어떤 기준으로 도입 여부를 판단하겠어요?

</details>
<!-- TOC:END -->
