질문 : 
NabVar.tsx에 있는 

```ts
                <h1
                    onClick={() => {
                        console.log("실행됌");
                        dispatch(changeQnaCategory());
                    }}
                >QnA</h1>
```
다음과 같은 dispatch로 store에 state를 바꾸고싶은데, redux-toolkit 사용을 위한 코드셋팅이 잘못된 것인지 dispatch를 잘못사용하고 있는 것인지 왜 dispatch가 안되는 지 궁금해서 여쭤봅니다..! 바쁘신데 죄송합니다..