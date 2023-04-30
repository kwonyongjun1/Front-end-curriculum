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


### configureStore는

configureStore는 Redux Toolkit에서 제공하는 유틸리티 함수 중 하나로, 스토어를 구성하고 초기화하는 역할을 합니다.

configureStore를 사용하면, 다음과 같은 작업을 자동으로 처리할 수 있습니다.

``` javascript
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: /* 미들웨어 */,
  devTools: /* devTools 사용 여부 */,
  preloadedState: /* 초기 상태 */
})
```

#### reducer: 스토어에 등록할 리듀서입니다.
#### middleware: 스토어에 적용할 미들웨어입니다.
#### devTools: devTools 확장 프로그램 사용 여부를 설정합니다. 기본값은 true입니다.
#### preloadedState: 스토어의 초기 상태를 설정합니다. 이 값이 지정되면, 스토어가 생성될 때 해당 값으로 초기화됩니다.
