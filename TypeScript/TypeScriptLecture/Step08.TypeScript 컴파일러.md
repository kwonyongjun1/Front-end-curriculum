### 1. JavaScript 컴파일하기

<br>

터미널에 아래의 명령어를 입력하면 
``` 
tsc --init
```
폴더에 몇몇 설정과 100여개의 주석이 달린 tsconfig.json 파일이 생성될 것이다.

tsconfig는 타입스크립트를 자바스크립트로 변환활 때 설정을 정의해놓은 파일이다.




제네릭 tsc 명령어를 사용하면 모든 .ts 파일을 컴파일링 한다.
``` 
 tsc 
```
특정 파일 컴파일 명령어
```
tsc 파일명.ts
```
해당 파일만 컴파일된다.


### 2.감시 모드

<br>


 단 한 번만 컴파일하지 말라고 지시하는 옵션이다.
 TypeScript가 변경 사항이 발생하는지 항상 감시하고 해당 파일을 변경하고 저장하면 자동으로 다시 컴파일하도록 하는 명령어이다.
``` 
tsc -w 파일명.ts
```


### 3. 컴파일러 옵션

<br>


앞서 말한 tsc 명령어로 파일을 컴파일 할 수 있지만 여러개의 파일일 경우 하나씩 컴파일하기 어렵다.
특정 위치만 컴파일하거나 특정 파일을 무시하도록 설정할 수 있다.

TypeScript가 특정 하위 집합의 파일만 컴파일하도록 설정하는 방법

<br>

#### - Files옵션

<br>

컴파일 할 모든 파일을 나열한다.

###### tsconfig.json
```
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```
files 옵션은 포함할 파일이 많지 않은 소규모 프로젝트에 적합하다.

<br>

#### - Include옵션

<br>

컴파일 할 특정 위치를 지정한다.

include 옵션을 사용하지 않으면 Default 값은 모든 파일을 컴파일 하며

파일 이름은 tsconfig.json이 포함된 디렉터리를 기준으로 결정되므로 프로젝트의 최상위 폴더,즉 루트 디렉터리에 저장해야 한다.



<br>

###### tsconfig.json
```
{
  "include": ["src/**/*", "tests/**/*"]
}
```

###### 디렉터리 구조
```
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ✓
│   │    └── utils.ts      ✓
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```


#### - exclude

include 옵션과 반대로 컴파일할 파일을 제외하는 옵션이다.


```
{
  "include": ["src/**/*", "tests/**/*"]
  "exclude": [src/client/*, "node_modules"]
}
```

###### 디렉터리 구조
```
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ⨯
│   │    └── utils.ts      ⨯
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```

exclude 사용시 주의할 점이 있는데, include 항목 중 node_modules 디렉터리가 있다면 반드시 제외해서 의존성이 컴파일되지 않도록 해야한다.

#### - outDir 옵션

TypeScript가 컴파일된 Javascript 파일을 내보낼 위치를 지정한다.

대규모 프로젝트에서는 보통 src 디렉터리 또는 특정 디렉터리에 TypeScript 파일을 모아두며 TypeScript 파일에 사응하는 Javascript 파일은 별도의 디렉터리에 컴파일하며 보통 디렉터리 이름은 dist로 사용된다.

TypeScript 디렉터리 이름 : src 

JavaScript 디렉터리 이름 : dist

###### tsconfig.json
```
"outDir" : "./dist"
```

### - target 옵션

TypeScript를 컴파일한 JavaScript의 버전을 제어하는 옵션이다.

###### tsconfig.json
```
"target" : "es6"
```


### - lib 옵션

###### tsconfig.json
```
"lib" : [
  "dom",
  "es5"
]
```
lib 옵션의 기본값은 target 항목에서 지정한 ECMAScript의 버전에 따라 기본값이 정의됩니다.
대부분의 경우 기본값만 사용하지만 TypeScript 라이브러리를 커스텀하게 쓰려고 할 때, lib을 정의하여 사용한다.



### - strict 옵션

TypeScript 전체의 타입 검사 추가규칙,제약 조건이 활성화 된다. 즉, 타입 검사를 보다 엄격하게 만들며
프로그램의 정확성을 높이는 것이 핵심이다.
###### tsconfig.json
```
"strict" : true
```


