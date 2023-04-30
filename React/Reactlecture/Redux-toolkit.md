### CreateSlice

기본 구조 

``` javascript
const slice = createSlice({
  name: 'sliceName' /* slice 이름 */,
  initialState: /* 초기 상태 */,
  reducers: {
    /* 액션 생성자 함수 */
  },
  extraReducers: {
    /* 추가 리듀서 함수 */
  }
})
```

#### name: slice의 이름을 나타냅니다.
#### initialState: slice의 초기 상태를 나타냅니다.
#### reducers: slice에서 처리하는 액션 및 해당 액션에 대한 리듀서를 정의합니다.
#### extraReducers: slice에서 처리하지 않는 액션 및 해당 액션에 대한 리듀서를 정의합니다.
