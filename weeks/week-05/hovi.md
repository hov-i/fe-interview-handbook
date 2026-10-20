# 5주차 - hovi

## 여러 모니터링 도구 중 Sentry를 선택한 이유는 무엇인가요?

- **카테고리**: Browser

### 답변

프론트엔드 에러 모니터링 도구로는 Sentry, Firebase Crashlytics, New Relic, Datadog 등이 있는데, 7개 프론트엔드 프로젝트에 Sentry를 도입한 이유는 크게 세 가지입니다.

첫째, **프론트엔드 에러 추적에 특화**되어 있습니다. Sentry는 JavaScript 런타임 에러를 자동 캡처하고, Source Map을 연동하면 난독화된 프로덕션 코드에서도 원본 파일명과 라인 번호를 정확히 보여줍니다. Firebase Crashlytics는 모바일 네이티브 크래시 중심이고, New Relic이나 Datadog은 백엔드 APM이 주력이라 프론트엔드 에러 컨텍스트(브레드크럼, 사용자 행동 재현)가 상대적으로 약합니다.

둘째, **이슈 그루핑과 알림 커스터마이징**이 강력합니다. 같은 원인의 에러를 자동으로 하나의 이슈로 묶어주고, `tags`와 `extra`로 모듈별·이벤트별 필터링이 가능합니다. Slack 연동 알림도 레벨별로 채널을 분리할 수 있어 7개 프로젝트를 독립적으로 관리하기에 적합했습니다.

셋째, **무료 플랜으로도 소규모 팀 운영이 가능**합니다. Developer 플랜에서 월 5,000건의 에러 이벤트와 성능 모니터링을 제공하므로, `tracesSampleRate`과 `beforeSend`로 수집량을 조절하면 비용 부담 없이 시작할 수 있었습니다.

### 꼬리질문

- Sentry의 Source Map 연동은 어떻게 동작하나요?
- Sentry와 Firebase Crashlytics를 함께 사용하는 경우도 있나요?

---

## Claude Code Skill로 API 자동 생성기를 만든 경험에 대해 설명해주세요.

- **카테고리**: 빌드도구

### 답변

Swagger OpenAPI 명세를 기반으로 API 호출 함수와 TanStack Query 훅을 자동 생성하는 Claude Code Skill을 만들어 사내 마켓플레이스에 배포했습니다.

기존에는 백엔드에서 API가 업데이트되면 프론트엔드 개발자가 Swagger 문서를 확인하고 수동으로 타입, API 함수, 훅을 수정해야 했습니다. 이 과정에서 타입 불일치나 엔드포인트 누락이 빈번했고, 팀원마다 코드 스타일도 달랐습니다.

Skill은 OpenAPI JSON을 입력받아 엔드포인트별 요청/응답 타입, Axios 기반 API 함수, useQuery/useMutation 훅을 일관된 컨벤션으로 생성합니다. Skill의 frontmatter에 트리거 조건을 설정해 API 관련 작업 시에만 호출되도록 했고, CLAUDE.md에 넣을 때 발생하는 불필요한 컨텍스트 소모를 방지했습니다.

결과적으로 API 동기화 작업이 1분 내로 단축되었고, 팀 전체가 동일한 코드 구조를 유지할 수 있게 되었습니다.

### 꼬리질문

- OpenAPI 명세에서 타입을 추출할 때 제네릭 응답 구조는 어떻게 처리하나요?
- Claude Code Skill과 CLAUDE.md에 직접 프롬프트를 넣는 것의 차이는?

---

## 디바이스 감지 기반 동적 라우팅은 어떻게 구현하나요?

- **카테고리**: React

### 답변

User-Agent 또는 화면 크기를 기반으로 웹/모바일 진입점을 분기합니다.

서버 사이드에서는 요청 헤더의 `User-Agent` 문자열을 파싱해 모바일 기기 여부를 판별하고, 해당하는 페이지로 리다이렉트합니다. 클라이언트에서는 `window.matchMedia`나 `navigator.userAgent`로 판별할 수 있지만, 초기 렌더링에서 깜빡임(FOUC)이 발생할 수 있어 서버 단에서 처리하는 것이 UX상 유리합니다.

한 프로젝트 안에 관리자용 웹과 작업자용 모바일이 함께 있는 경우, 라우트 레벨에서 `/admin/*`과 `/mobile/*`로 분기하고 공통 로직은 상위 레이어에서 공유하는 구조가 효과적입니다. 반응형 디자인과 달리 완전히 다른 UI/UX를 제공해야 할 때 이 방식을 사용합니다.

### 꼬리질문

- User-Agent 기반 감지의 한계점은 무엇인가요?
- 반응형 디자인과 적응형 디자인의 차이는?

---

## 상태 머신 기반 UI 렌더링이란 무엇인가요?

- **카테고리**: React

### 답변

상태 머신(State Machine)은 가능한 상태와 상태 간 전이를 명시적으로 정의해, 불가능한 상태 조합을 원천 차단하는 패턴입니다.

다단계 점검 프로세스(최초 점검, 일일 점검, 분기 점검, 고장 상황)처럼 상태가 복잡한 도메인에서 `if-else`나 `boolean` 플래그 조합으로 UI를 분기하면 상태 간 의존성이 숨겨져 버그가 발생하기 쉽습니다.

상태 머신을 사용하면 각 상태에서 허용되는 전이(transition)만 정의하므로 "점검 중인데 동시에 완료된" 같은 불가능한 상태가 코드상 존재할 수 없습니다. React에서는 `useReducer`로 간단한 상태 머신을 구현하거나, XState 같은 라이브러리를 사용해 시각적 상태 차트까지 활용할 수 있습니다.

상태별 UI 컴포넌트를 매핑하면 각 상태에 대응하는 화면이 명확해지고, 신규 상태 추가 시에도 기존 로직에 영향을 주지 않습니다.

### 꼬리질문

- useReducer와 useState의 차이는 무엇인가요?
- XState의 장점과 도입 시 고려할 점은?

---

## revokeObjectURL은 왜 호출해야 하나요?

- **카테고리**: Browser

### 답변

`URL.createObjectURL()`은 Blob이나 File 객체에 대한 임시 URL을 생성하는데, 이 URL은 메모리에 참조를 유지하므로 명시적으로 해제하지 않으면 메모리 누수가 발생합니다.

파일 다운로드 구현 시 서버로부터 Blob 응답을 받아 `createObjectURL`로 URL을 만들고, `<a>` 태그의 `href`에 설정한 뒤 프로그래밍 방식으로 클릭해 다운로드를 트리거합니다. 다운로드가 완료된 후에는 `URL.revokeObjectURL(url)`을 호출해 해당 참조를 해제해야 합니다.

```javascript
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'filename.xlsx';
a.click();
URL.revokeObjectURL(url); // 메모리 해제
```

특히 대량 파일 다운로드가 반복되는 환경에서는 해제하지 않으면 브라우저 메모리 사용량이 지속적으로 증가합니다.

### 꼬리질문

- Blob과 ArrayBuffer의 차이는 무엇인가요?
- 서버에서 파일을 다운로드할 때 Content-Disposition 헤더의 역할은?

---

## useSuspenseInfiniteQuery와 cursor 기반 페이지네이션은 어떻게 구현하나요?

- **카테고리**: React

### 답변

`useSuspenseInfiniteQuery`는 TanStack Query의 무한 스크롤 훅에 Suspense를 결합한 것으로, 로딩 상태를 컴포넌트 외부의 `<Suspense>` 바운더리에서 선언적으로 처리할 수 있습니다.

cursor 기반 페이지네이션은 `getNextPageParam`에서 서버 응답의 마지막 항목 ID나 cursor 값을 반환하고, `fetchNextPage`가 호출되면 해당 cursor 이후의 데이터를 추가로 가져옵니다. offset 방식과 달리 중간에 데이터가 추가/삭제되어도 항목이 중복되거나 빠지지 않습니다.

```typescript
useSuspenseInfiniteQuery({
  queryKey: ['trips', 'list'],
  queryFn: ({ pageParam }) => fetchTrips({ cursor: pageParam }),
  getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  initialPageParam: null,
});
```

Intersection Observer로 리스트 하단 감지 시 `fetchNextPage()`를 호출하면 자연스러운 무한 스크롤이 구현됩니다.

### 꼬리질문

- offset 기반과 cursor 기반 페이지네이션의 장단점은?
- Suspense와 ErrorBoundary를 함께 사용하는 이유는?

---

## postcss-pxtorem을 도입하는 이유는 무엇인가요?

- **카테고리**: CSS

### 답변

디자인 시안의 px 값을 그대로 코드에 사용하면서도 접근성과 반응성을 위해 rem으로 자동 변환하기 위해 사용합니다.

`rem`은 루트 요소의 `font-size`를 기준으로 계산되므로, 사용자가 브라우저 기본 글꼴 크기를 변경하면 UI가 비례적으로 확대됩니다. 이는 시각 접근성 측면에서 중요합니다. 하지만 디자이너는 px 단위로 시안을 제공하기 때문에, 개발자가 매번 px을 rem으로 변환하는 건 비효율적입니다.

postcss-pxtorem은 빌드 단계에서 CSS의 px 값을 자동으로 rem으로 변환합니다. `rootValue`로 기준 px을 설정하고(보통 16), `propList`로 변환할 속성을 지정할 수 있습니다. `border`나 `box-shadow`처럼 px이 적절한 속성은 제외하는 것이 일반적입니다.

### 꼬리질문

- rem과 em의 차이는 무엇인가요?
- 브라우저 기본 font-size를 변경하면 px 단위 요소는 어떻게 되나요?

---

## Zustand와 Jotai의 차이는 무엇인가요?

- **카테고리**: React

### 답변

둘 다 가벼운 상태 관리 라이브러리이지만 설계 철학이 다릅니다.

Zustand는 **스토어 기반**입니다. `create`로 스토어를 정의하고, 스토어 안에 상태와 액션을 함께 둡니다. 컴포넌트 외부에서도 `getState()`로 상태에 접근할 수 있어 비동기 로직이나 미들웨어 연동에 유리합니다. 하나의 스토어가 관련 상태를 모아 관리하는 구조입니다.

Jotai는 **아톰 기반**입니다. `atom()`으로 최소 단위 상태를 정의하고, 아톰 간 의존성으로 파생 상태를 만듭니다. `useState`와 비슷한 `useAtom` API라 진입 장벽이 낮고, 아톰 단위로 구독하므로 불필요한 리렌더가 적습니다. 다만 상태가 여러 아톰에 흩어지면 전체 흐름을 파악하기 어려울 수 있습니다.

전역적으로 모아서 관리할 상태가 많으면 Zustand, 독립적인 상태 조각이 많으면 Jotai가 적합합니다.

### 꼬리질문

- Zustand에서 selector를 사용하는 이유는?
- Jotai의 derived atom은 어떻게 동작하나요?

---

## XLSX 파싱과 클라이언트 측 유효성 검증은 어떻게 구현하나요?

- **카테고리**: JavaScript

### 답변

SheetJS(xlsx) 라이브러리로 엑셀 파일을 파싱하고, API 호출 전에 데이터 형식을 검증해 불필요한 서버 요청을 줄입니다.

`<input type="file">`로 파일을 받아 `FileReader.readAsArrayBuffer()`로 읽은 뒤, `XLSX.read()`로 워크북 객체를 생성합니다. `XLSX.utils.sheet_to_json()`으로 시트를 JSON 배열로 변환하면 각 행의 데이터에 접근할 수 있습니다.

변환된 데이터에 대해 필수 필드 누락, 이메일/전화번호 형식, 중복 값 등을 클라이언트에서 먼저 검증합니다. 유효성 검증을 통과한 데이터만 서버로 전송하면 형식 오류로 인한 불필요한 API 호출을 사전에 차단할 수 있습니다. 오류가 있는 행은 행 번호와 함께 사용자에게 피드백합니다.

### 꼬리질문

- FileReader의 readAsArrayBuffer와 readAsText의 차이는?
- 대용량 엑셀 파일을 파싱할 때 웹 워커를 사용하는 이유는?

---

## 사용자 역할 기반 UI 분기(RBAC)는 어떻게 설계하나요?

- **카테고리**: React

### 답변

RBAC(Role-Based Access Control)는 사용자 역할에 따라 메뉴, 기능, 화면 접근을 제어하는 패턴입니다.

선언적 메뉴 트리에 각 메뉴의 접근 가능 역할을 설정 객체로 정의하고, 로그인 정보의 `permission_level`과 `현장_id` 조합으로 동적 렌더링합니다. 이렇게 하면 권한 변경이나 신규 메뉴 추가 시 설정 객체만 수정하면 되어 확장 비용이 최소화됩니다.

```typescript
const menuConfig = [
  { path: '/dashboard', label: '대시보드', roles: ['admin', 'manager'] },
  { path: '/inspection', label: '점검', roles: ['admin', 'manager', 'worker'] },
  { path: '/settings', label: '설정', roles: ['admin'] },
];
```

라우트 레벨에서도 `ProtectedRoute` 같은 래퍼 컴포넌트로 권한이 없는 페이지 접근을 차단합니다. 단, 프론트엔드 권한 체크는 UX 용도이며, 실제 보안은 반드시 서버 측에서도 검증해야 합니다.

### 꼬리질문

- 프론트엔드에서만 권한을 체크하면 안 되는 이유는?
- permission_level과 현장_id 조합 기반 동적 권한 생성은 어떻게 구현하나요?
