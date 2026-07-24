# 4주차 - hovi

## TanStack Query에서 prefetchQuery와 HydrationBoundary를 사용하는 이유는 무엇인가요?

- **카테고리**: React

### 답변

Next.js App Router 환경에서 서버 컴포넌트 단계에서 데이터를 미리 가져와 클라이언트에 전달하기 위해 사용합니다.

서버 컴포넌트에서 `queryClient.prefetchQuery()`로 데이터를 미리 조회하면, 해당 결과가 QueryClient의 캐시에 저장됩니다. 이 캐시를 `dehydrate()`로 직렬화한 뒤 `HydrationBoundary`의 `state` prop으로 넘기면, 클라이언트 컴포넌트가 마운트될 때 별도의 API 호출 없이 캐시된 데이터를 즉시 사용할 수 있습니다.

이를 통해 초기 데이터 로드 시점이 서버 단계로 앞당겨져 클라이언트 측 워터폴(컴포넌트 마운트 → API 호출 → 렌더링)이 제거되고, 첫 화면 인지 속도가 개선됩니다.

### 꼬리질문

- prefetchQuery와 fetchQuery의 차이는 무엇인가요?
- SSR 환경에서 QueryClient를 요청마다 새로 생성해야 하는 이유는?

---

## Storybook과 MSW를 조합한 Mock API 환경은 어떻게 구성하나요?

- **카테고리**: 빌드도구

### 답변

Storybook에서 MSW(Mock Service Worker)를 연동하면 실제 백엔드 없이 API 응답을 시뮬레이션하면서 컴포넌트를 개발하고 테스트할 수 있습니다.

MSW는 Service Worker를 통해 브라우저의 네트워크 요청을 가로채고, 미리 정의한 핸들러에서 목업 응답을 반환합니다. Storybook의 `msw-storybook-addon`을 사용하면 스토리 단위로 핸들러를 지정할 수 있어, 같은 컴포넌트에 대해 성공/실패/로딩 등 다양한 상태를 시나리오별로 분리해서 확인할 수 있습니다.

이 구조의 핵심은 프론트엔드가 API 명세만 확정되면 백엔드 구현과 병렬로 개발을 진행할 수 있다는 점이며, 백엔드 API가 완성되면 MSW 핸들러만 제거하면 실제 서버와 바로 연결됩니다.

### 꼬리질문

- MSW가 Service Worker 기반인 것과 서버 사이드(node) 기반인 것의 차이는?
- Storybook Decorator를 활용해 인증 상태를 주입하는 방법은?

---

## STOMP WebSocket 통신에서 연결 안정성을 확보하려면 어떤 점을 고려해야 하나요?

- **카테고리**: Network

### 답변

STOMP WebSocket 통신에서는 토큰 만료 시 재연결, 구독 관리, 메모리 누수 방지를 함께 고려해야 합니다.

Access Token이 만료되면 STOMP 연결이 끊기는데, 이때 토큰 재발급 후 자동으로 재연결하는 흐름이 필요합니다. 연결 상태를 `useRef`로 관리하면 리렌더링 없이 현재 연결 상태를 추적할 수 있어, 재연결 시점을 정확하게 판단할 수 있습니다.

또한 화면 전환이나 재연결 시 기존 구독을 명시적으로 해제(`unsubscribe`)하지 않으면 중복 구독이 발생해 같은 메시지를 여러 번 수신하게 됩니다. 구독 해제와 연결 종료(`deactivate`) 로직을 분리해 컴포넌트 언마운트나 재연결 시점에 정리해야 할 자원을 명확히 구분하는 것이 중요합니다.

### 꼬리질문

- WebSocket과 HTTP 폴링의 차이점과 각각 적합한 상황은?
- useRef로 통신 상태를 관리하는 것과 useState로 관리하는 것의 차이는?

---

## FSD(Feature-Sliced Design) 아키텍처에서 웹과 모바일 공통 로직 중복을 어떻게 해소하나요?

- **카테고리**: React

### 답변

FSD 아키텍처의 계층 구조를 활용해 공통 도메인 로직을 상위 레이어에 응집시키고, 플랫폼별 UI는 하위 레이어에서 분기합니다.

`entities` 레이어에 도메인 모델과 타입을, `features` 레이어에 공통 API 호출과 비즈니스 로직을 정의합니다. 웹과 모바일은 각자의 `pages`와 `widgets` 레이어에서 상위 레이어의 로직을 주입받아 화면만 다르게 구성합니다.

이렇게 하면 API 호출이나 도메인 로직 수정이 한 지점에서 끝나고, 신규 기능 추가 시 양쪽에 중복 작업을 하지 않아도 됩니다. 핵심은 FSD의 단방향 의존성 규칙(상위 레이어는 하위 레이어만 참조)을 지켜 계층 간 결합도를 낮추는 것입니다.

### 꼬리질문

- FSD에서 feature와 entity의 차이는 무엇인가요?
- 단방향 의존성 규칙을 위반하면 어떤 문제가 발생하나요?

---

## React에서 SSR과 CSR의 차이점과 Next.js 마이그레이션 시 고려할 점은?

- **카테고리**: React

### 답변

CSR은 브라우저에서 JavaScript로 화면을 그리고, SSR은 서버에서 HTML을 완성해 보내는 방식입니다.

CSR(React SPA)은 초기에 빈 HTML과 JS 번들을 받아 렌더링하므로 첫 화면이 느리고, 모든 페이지가 동일한 메타 정보를 가져 SEO와 SNS 공유 미리보기가 불리합니다. SSR은 서버에서 완성된 HTML을 보내므로 초기 콘텐츠 표시가 빠르고 검색 엔진이 콘텐츠를 읽을 수 있습니다.

Next.js로 마이그레이션할 때는 `generateMetadata`를 사용해 페이지별로 동적 OpenGraph 메타데이터를 서버 단계에서 생성할 수 있어, 경기별/챔피언별로 다른 미리보기를 제공하는 것이 가능해집니다. 또한 서버 컴포넌트와 클라이언트 컴포넌트의 경계를 명확히 나누고, hydration 불일치를 방지하는 것이 중요합니다.

### 꼬리질문

- generateMetadata와 기존 react-helmet의 차이는?
- hydration 불일치가 발생하는 원인과 해결 방법은?

---

## Sentry를 프론트엔드에 도입할 때 어떤 점을 고려해야 하나요?

- **카테고리**: Browser

### 답변

Sentry 도입 시 에러 수집 범위, 성능 영향, 소스맵 관리를 함께 고려해야 합니다.

에러 수집 범위에서는 모든 에러를 무차별 수집하면 노이즈가 많아지므로, `beforeSend` 콜백으로 무시할 에러를 필터링하고 사용자 컨텍스트(`setUser`, `setTag`)를 추가해 디버깅에 필요한 정보를 함께 기록합니다.

성능 측면에서는 `tracesSampleRate`을 조절해 프로덕션 환경에서 모든 트랜잭션을 수집하지 않도록 설정합니다. 소스맵은 빌드 시 Sentry에 업로드하되, 프로덕션 배포에는 포함하지 않아 원본 코드 노출을 방지합니다.

여러 프로젝트를 운영할 때는 프로젝트별로 분리해 알림 규칙과 이슈 할당을 독립적으로 관리하는 것이 효율적입니다.

### 꼬리질문

- Source Map을 Sentry에 업로드하는 방식은 어떻게 동작하나요?
- Sentry의 tracesSampleRate을 어떤 기준으로 설정하나요?

---

## SVG 좌표계 기반 지도 마커 시스템은 왜 뷰포트에 독립적인가요?

- **카테고리**: CSS

### 답변

SVG는 `viewBox` 속성으로 논리 좌표 공간을 정의하고, 실제 렌더링 크기와 무관하게 내부 좌표가 일정하게 유지되기 때문입니다.

`viewBox="0 0 1000 500"`으로 정의하면 내부 좌표계는 항상 0~1000, 0~500 범위를 사용합니다. 배경 도면과 마커를 같은 좌표 공간 위에 올리면, 컨테이너 크기가 변해도 배경과 마커가 동일한 비율로 스케일됩니다. 별도의 리사이즈 이벤트 리스너나 좌표 보정 로직이 필요 없습니다.

반면 Canvas나 절대 위치(px) 기반으로 마커를 배치하면 컨테이너 크기 변화 시 좌표를 재계산해야 하고, 뷰포트별로 위치가 어긋날 수 있습니다. SVG의 선언적 좌표계가 이 문제를 구조적으로 해결합니다.

### 꼬리질문

- SVG의 viewBox와 width/height의 관계는?
- preserveAspectRatio 속성은 어떤 역할을 하나요?

---

## Axios 인터셉터를 활용한 토큰 갱신(Refresh Token) 구조는 어떻게 설계하나요?

- **카테고리**: Network

### 답변

Axios의 응답 인터셉터에서 401 에러를 감지하면 Refresh Token으로 새 Access Token을 발급받고, 실패했던 요청을 재시도하는 구조입니다.

응답 인터셉터에서 `error.response.status === 401`을 확인하면, Refresh Token API를 호출해 새 Access Token을 저장하고 원래 요청의 헤더를 갱신한 뒤 `axios(originalRequest)`로 재시도합니다. 이때 동시에 여러 요청이 401을 받는 경우를 대비해, 갱신 중임을 나타내는 플래그와 대기 큐를 두어 토큰 갱신은 한 번만 수행하고 나머지 요청은 갱신 완료 후 순차 재시도합니다.

Refresh Token마저 만료된 경우에는 로그아웃 처리하되, 사용자에게 세션 만료 알림을 먼저 보여주는 UX를 함께 설계하는 것이 좋습니다.

### 꼬리질문

- 동시 요청 시 토큰 갱신이 중복 호출되는 문제를 어떻게 방지하나요?
- Access Token을 어디에 저장하는 것이 안전한가요?

---

## 대량 데이터 일괄 처리 시 병렬 API 호출은 어떻게 설계하나요?

- **카테고리**: JavaScript

### 답변

`Promise.all` 또는 `Promise.allSettled`를 사용해 여러 API 호출을 동시에 실행하되, 동시 요청 수를 제한하는 청크 단위 처리가 핵심입니다.

수백 건의 데이터를 한 번에 `Promise.all`로 보내면 서버에 과부하가 걸리므로, 배열을 일정 크기(예: 10~50건)로 나눈 뒤 청크 단위로 병렬 처리합니다. 각 청크가 완료되면 다음 청크를 실행하는 방식입니다. `Promise.allSettled`를 쓰면 일부 실패해도 나머지 결과를 확인할 수 있어 부분 실패 처리에 유리합니다.

또한 API 호출 전에 클라이언트 측에서 유효성 검증을 수행하면 형식 오류가 있는 데이터를 사전에 걸러내 불필요한 서버 호출을 줄일 수 있습니다.

### 꼬리질문

- Promise.all과 Promise.allSettled의 차이는?
- 청크 크기는 어떤 기준으로 결정하나요?

---

## Jenkins 기반 CI/CD 파이프라인은 어떻게 구성하나요?

- **카테고리**: 빌드도구

### 답변

GitHub Webhook과 Jenkins를 연동해 특정 브랜치에 push가 발생하면 빌드와 배포가 자동으로 수행되는 파이프라인을 구성합니다.

GitHub에서 Webhook을 설정해 push 이벤트를 Jenkins에 전달하면, Jenkins가 소스를 체크아웃하고 `npm install` → `npm run build` → 배포 스크립트 실행 순서로 파이프라인을 실행합니다. Jenkinsfile에 이 단계를 선언적으로 정의하면 파이프라인 변경 이력도 Git으로 관리됩니다.

개발 서버와 운영 서버를 분리할 때는 브랜치별로 다른 파이프라인을 트리거하도록 구성하고, 배포 산출물에 커밋 메시지와 배포일자를 자동 기록해 어느 시점의 어떤 변경이 배포됐는지 추적할 수 있게 합니다.

### 꼬리질문

- Jenkinsfile의 Declarative Pipeline과 Scripted Pipeline의 차이는?
- GitHub Actions와 Jenkins의 장단점 비교는?

---

## WebSocket 미지원 환경에서 실시간 데이터를 처리하려면 어떻게 하나요?

- **카테고리**: Network

### 답변

HTTP 폴링(Polling)이나 SSE(Server-Sent Events)로 대체할 수 있습니다.

폴링은 일정 주기로 서버에 요청을 보내 새로운 데이터를 확인하는 방식입니다. 구현이 단순하지만 불필요한 요청이 발생하고 실시간성이 폴링 주기에 의존합니다. Long Polling은 서버가 새 데이터가 생길 때까지 응답을 지연시켜 실시간성을 높입니다.

폴링 환경에서 알람처럼 중복 방지가 필요한 데이터는 이미 처리한 ID를 상태(store)에 저장하고, 새로 수신된 데이터에서 기존 ID를 필터링하는 방식으로 중복을 방지합니다.

SSE는 서버에서 클라이언트로 단방향 스트리밍이 가능하며, HTTP 기반이라 프록시 호환성이 좋습니다.

### 꼬리질문

- Long Polling과 Short Polling의 차이는?
- SSE와 WebSocket은 각각 어떤 상황에 적합한가요?

---

## useMutation과 조건부 refetch를 활용한 데이터 갱신 전략은?

- **카테고리**: React

### 답변

TanStack Query에서 `useMutation`의 `onSuccess` 콜백에서 `queryClient.invalidateQueries()`를 호출해 관련 쿼리를 무효화하는 것이 기본 패턴입니다.

하지만 모든 액션에 대해 무조건 refetch하면 불필요한 네트워크 요청이 발생합니다. 사용자 액션의 결과가 이미 mutation 응답에 포함되어 있다면 `setQueryData`로 캐시를 직접 업데이트하고, 서버 상태 동기화가 필요한 경우에만 조건부로 `invalidateQueries`를 호출합니다.

또한 모달 닫기 애니메이션과 refetch 타이밍이 충돌하면 프레임 드랍이 발생할 수 있으므로, 애니메이션 종료 콜백(`onAnimationEnd`, `onTransitionEnd`) 이후에 데이터를 갱신하는 구조가 필요합니다.

### 꼬리질문

- invalidateQueries와 setQueryData는 각각 언제 사용하나요?
- 쿼리 키 팩토리 패턴이란 무엇인가요?

---

## Vanilla Extract와 styled-components의 차이는 무엇인가요?

- **카테고리**: CSS

### 답변

핵심 차이는 스타일이 생성되는 시점입니다. Vanilla Extract는 빌드 타임에, styled-components는 런타임에 CSS를 생성합니다.

Vanilla Extract는 `.css.ts` 파일에서 TypeScript로 스타일을 작성하면 빌드 시 정적 CSS 파일로 추출됩니다. 런타임 오버헤드가 없고 타입 안전한 스타일 작성이 가능합니다. 하지만 props에 따른 동적 스타일링은 CSS 변수나 레시피(recipe) 패턴으로 우회해야 합니다.

styled-components는 런타임에 JavaScript로 CSS를 생성해 `<style>` 태그에 주입합니다. props 기반 동적 스타일링이 자유롭지만, SSR 시 스타일 하이드레이션 처리가 필요하고 번들 크기와 런타임 비용이 추가됩니다.

### 꼬리질문

- zero-runtime CSS-in-JS의 장점은?
- Tailwind CSS와 CSS-in-JS의 트레이드오프는?

---

## 쿼리 키 팩토리 패턴은 무엇이고 왜 사용하나요?

- **카테고리**: React

### 답변

쿼리 키 팩토리는 TanStack Query의 쿼리 키를 중앙에서 계층적으로 관리하는 패턴입니다.

```typescript
const tripsQueries = {
  all: () => ['trips'] as const,
  lists: () => [...tripsQueries.all(), 'list'] as const,
  infinite: (filters: Filters) => [...tripsQueries.lists(), 'infinite', filters] as const,
  detail: (id: number) => [...tripsQueries.all(), 'detail', id] as const,
};
```

이 구조에서 `queryClient.invalidateQueries({ queryKey: tripsQueries.all() })`을 호출하면 trips 관련 모든 쿼리가 한 번에 무효화됩니다. 쿼리 키가 문자열로 흩어져 있으면 키 불일치로 캐시가 제대로 무효화되지 않는 버그가 발생하기 쉬운데, 팩토리 패턴이 이를 방지합니다.

또한 TypeScript의 `as const`와 결합하면 쿼리 키의 타입 추론이 가능해져, 잘못된 키 사용을 컴파일 타임에 잡을 수 있습니다.

### 꼬리질문

- invalidateQueries의 키 매칭 규칙은 어떻게 동작하나요?
- staleTime과 gcTime(cacheTime)의 차이는?

---

## DevTools Profiler로 렌더링 병목을 진단하는 방법은?

- **카테고리**: React

### 답변

React DevTools의 Profiler 탭에서 컴포넌트별 렌더링 횟수와 소요 시간을 기록하고 분석합니다.

Profiler에서 녹화를 시작한 뒤 특정 인터랙션을 수행하면, 각 커밋(commit)에서 어떤 컴포넌트가 렌더링됐고 얼마나 걸렸는지 플레임 차트로 확인할 수 있습니다. "Why did this render?" 옵션을 활성화하면 리렌더링 원인(props 변경, state 변경, 부모 리렌더)도 함께 표시됩니다.

모달의 콜백 함수가 매 렌더마다 새로 생성되어 하위 컴포넌트가 불필요하게 리렌더되는 경우, 콜백을 `useCallback`으로 감싸고 리스트 컴포넌트에 `React.memo`를 적용하면 리렌더를 최소화할 수 있습니다. 단, 무분별한 memo 적용은 오히려 메모리 비용만 늘리므로 Profiler로 실제 병목이 확인된 지점에만 적용하는 것이 좋습니다.

### 꼬리질문

- React.memo와 useMemo의 차이는?
- useCallback은 언제 사용하는 것이 적절한가요?

---

## CSS Variable 기반 테마 시스템은 어떻게 설계하나요?

- **카테고리**: CSS

### 답변

`:root`에 의미 기반(semantic) CSS 변수를 정의하고, 다크/라이트 모드에 따라 변수 값만 교체하는 구조입니다.

```css
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #1a1a1a;
}

[data-theme="dark"] {
  --color-bg-primary: #1a1a1a;
  --color-text-primary: #ffffff;
}
```

컴포넌트에서는 `var(--color-bg-primary)`로 참조하므로, 테마 전환 시 변수 값만 바뀌고 컴포넌트 코드는 수정할 필요가 없습니다. Mantine과 Tailwind를 혼용하는 환경에서도 CSS 변수를 단일 진실 원천(Single Source of Truth)으로 삼으면 디자인 토큰 불일치를 방지할 수 있습니다.

`color-primary` 같은 시각적 이름 대신 `color-bg-primary`처럼 의미 기반 이름을 쓰면, 디자인과 개발 간 컬러 불일치를 줄이고 신규 컴포넌트 확장 비용을 최소화할 수 있습니다.

### 꼬리질문

- CSS 변수와 SCSS 변수의 차이는?
- prefers-color-scheme 미디어 쿼리와 data-theme 속성 방식의 차이는?
