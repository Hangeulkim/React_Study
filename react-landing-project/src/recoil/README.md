# recoil
https://recoiljs.org/

상태(≒전역 변수) 관리 라이브러리인 recoil을 사용하여 상태를 선언하고, 선언된 상태를 사용하는 로직을 작성합니다.


---

## states.ts
[atom](https://recoiljs.org/docs/api-reference/core/atom)과 [selector](https://recoiljs.org/docs/api-reference/core/selector)을 선언합니다.

각 tab마다 다른 값을 저장하기 위해 [atomFamily](https://recoiljs.org/docs/api-reference/utils/atomFamily)와 [selectorFamily](https://recoiljs.org/docs/api-reference/utils/selectorFamily)를 사용합니다.

## key.ts
`atomFamily`와 `selectorFamily`에 쓰이는 parameter의 type입니다.

## hook.ts
메시지 전송 로직을 담는 [custom hook](https://ko.reactjs.org/docs/hooks-custom.html)입니다.

메시지 전송은 화면 우측 하단의 '전송 버튼'을 click할 때 수행되므로, '전송 버튼' 컴포넌트 내에서 동작하는 것이 바람직합니다. 이를 수행하기 위해선 입력된 전화번호, 제목, 메시지 내용이 필요합니다. 이들은 recoil의 `atom` 또는 `selector`에 저장되어 있으므로, 실제 값을 알기 위해서 `useRecoilValue()`를 사용할 수 있습니다. 

아래는 예시 코드이며, 여기에서 사용된 변수 이름을 꼭 따라할 필요는 없습니다.
```typescript
function SendButton() {
  const phoneNumber = useRecoilValue(phoneNumberAtom);
  const title = useRecoilValue(titleAtom);
  const message = useRecoilValue(messageAtom);
  
  const sendMessage = (phoneNumber, title, message) => {
    // send message
  }
  
  return (
    <Button onClick={() => sendMessage(phoneNumber, title, message)}>
      메시지 전송
    </Button>
  )
}
```

이렇게 작성한 컴포넌트는 `phoneNumber`, `title`, `message` 중 적어도 하나가 바뀌면 *항상* re-rendering이 됩니다(이를 '구독'이라고 합니다). 하지만 이 값들이 필요한 순간은 메시지 전송 함수를 호출할 때 단 한 번 뿐입니다. 즉, 불필요한 re-rending이 발생하는 거죠.

[useRecoilCallback](https://recoiljs.org/docs/api-reference/core/useRecoilCallback)를 이용해 이를 해결할 수 있습니다. `useRecoilCallbak()`을 이용해 함수를 선언하면, 구독을 하지 않고도 recoil value들의 최신 상태를 읽어올 수 있습니다. 자세한 사항은 해당 문서를 살펴보세요. 
