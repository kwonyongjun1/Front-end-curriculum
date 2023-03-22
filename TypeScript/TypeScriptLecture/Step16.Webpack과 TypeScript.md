### 1. Webpack은 왜 쓸까요?

<br>

Webpack은 의존성을 가진 수십,수백 개의 파일로 구성된 복잡한 애플리케이션 처리를 돕는다.

Webpack은 각기 다른 에셋을 모아 정적 에셋으로 번들링한다. 수많은 라이브러리를 포함하는 백여 개의 JavaScript 파일이 하나로 합쳐져서 한 스크립트로 불러올 수 있는 번들 파일이 된다.


### 2. Webpack 의존성 설치하기

<br>

Webpack 패키지 설치

###### Terminal

```
npm install --save-dev webpack webpack-cli typescript ts-loader

```

Webpack은 모듈 번들러이지만 Webpack을 명령줄에서 사용하거나 package.json 파일 내에서 호출하려면
webpack-cli가 필요하다. 그래서 둘은 함께 사용된다.

webpack-cli 는 Webpack의 명령줄 인터페이스로 Webpack 없이는 사용할 수 없으나 Webpack에 포함이 되어 있지는 않는 개별 패키지이다.

typescript는 package.json에 TypeScript를 포함시키기위해서 다운로드 받았다. 이유는 현재 작업하고 있는 버전을 명시하기위해서이다.

ts-loader는 TypeScript와 Webpack 사이의 중간자 역할을 한다. TypeScript를 호출해서 즉, tsc 명령어를 호출해 TypeScript를 Javascript로 컴파일링한 뒤 이를 모두 번들링하게 될 Webpack으로 전달하는 역할을 한다.

### 3. Webpack 기초 구성

<br>

#### entry
entry 프로퍼티는 Webpack에게 번들링을 시작할 애플리케이션의 시작점을 지정해 준다.

#### module
module 프로퍼티는 객체인데 여기에는 배열이 될 rules 프로퍼티가 포함되며, 여러 개의 규칙을 추가할 수 있다.

ts나 tsx로 끝나는 파일이오면 ts-loader를 사용하라는 의미.

#### resolve
resolve 프로퍼티는 객체로 extensions에는 Webpack이 resolve할 수 있는 확장자의 리스트가 들어간다.


###### webpack.config.js
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```