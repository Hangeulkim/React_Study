# components

화면을 구성하는 컴포넌트들을 작성합니다.

* 하나의 `.tsx` 파일엔 하나의 컴포넌트만 선언합니다.


* 작성한 컴포넌트가 props를 받아온다면, 해당 props의 type을 `interface`로 선언합니다.

```typescript
interface ComponentProps {
  str: string;
  num: numberl;
}

export default function Component({str, num}:ComponentProps) {
  return (
    // ...
  )
}
```

* recoil이나 props를 사용할 때에는 불필요한 re-rendering이 발생하지 않도록 주의합니다.


* 주어진 폴더 구조를 꼭 따를 필요는 없습니다. 더 좋은 방법이 있다면 얼마든지 수정을 해도 좋습니다.


* 실무 코드에선 UI를 제작할 때 mui 라이브러리를 사용하고 있습니다. 랜딩 프로젝트에서도 해당 라이브러리 사용을 권장합니다. https://mui.com/
