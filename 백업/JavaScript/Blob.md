Blob은 Binary Large Object의 약자이며 텍스트 혹은 이진 데이터(이미지,사운드,동영상 등)를 담고 있는 대용량 바이러니 데이터를 담을 수 있다.

````javascript
const newBlob = new Blob(array, options);
````
Blob 생성자는 새로운 Blob 객체를 반환합니다.
생성 시 인수로 **array**와 **options**을 받는다



````javascript
new Blob([new ArrayBuffer(data)], { type: 'video/mp4' });
new Blob(new Uint8Array(data), { type: 'image/png' });  
new Blob(['<div>Hello Blob!</div>'], {
  type: 'text/html',
  endings: 'native'
});
````

**array**는 Blob 생성자의 첫번째 인수로 ArrayBuffer, ArrayBufferView, Blob(File), DOMString 객체 또는 이러한 객체가 혼합된 Array를 사용할 수 있으며
**options**는 type과 endings를 가진다.

type : contents의 MIME Type 설정

endings : 데이터가 텍스트일 때 개행문자 '\n'을 어떻게 해석할지 지정하는 값이며  transparent와 native로 지정할 수 있다.

*** transparent : 개행 문자를 바꾸지 않고 블록 데이터로 복사**
*** native : 사용 중인 OS에 맞춰서 줄 바꿈 문자 인식하여 데이터를 삽입**


### Blob객체 속성
![](https://velog.velcdn.com/images/kyj96/post/455511b7-c08c-4679-bef8-ce30303980e3/image.png)

- size : blob객체의 사이즈를 나타내며 바이트(byte) 단위의 크기를 나타낸다. 
- type : blob 객체의 mime 타입을 나타낸다.

