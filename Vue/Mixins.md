### Mixins


믹스인(Mixins)은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법이며 믹스인 파일은 순수 자바스크립트로 작성된 객체이다.

Vuex 믹스인은 state, getters, mutations 및 작업과 같은 Vuex 관련 기능을 캡슐화하는 코드 조각이며

여러 Vue 구성 요소에 추가할 수 있습니다. Vuex 믹스인을 사용하면 구성 요소 간에 Vuex 코드가 중복되는 것을 방지하고 코드베이스를 DRY(Don't Repeat Yourself)로 유지할 수 있습니다.


#### example

``` javascript

import { mapState } from 'vuex';

const myVuexMixin = {
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};

Vue.mixin(myVuexMixin);

```

mixin이 Vue 인스턴스에 추가되면 mixin을 사용하는 모든 구성 요소는 각 구성 요소에서 별도로 정의할 필요 없이 'count' 계산 속성과 'increment' 메서드에 액세스할 수 있습니다.

``` javascript
export default {
  mixins: [myVuexMixin],
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  }
};

```

Vuex 믹스인은 여러 Vue 구성 요소에서 Vuex 관련 코드를 캡슐화하고 재사용하여 코드 구성을 개선하고 중복을 줄이는 방법




