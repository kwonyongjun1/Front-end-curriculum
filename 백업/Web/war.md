**J2EE**(Java 2 Enterprise Edition, Java 기술로 기업환경의 어플리케이션을 만드는데 필요한 스펙들을 모아둔 스펙 집합) 애플리케이션에서 모듈은 기능에 따라 JAR, WAR 그리고 EAR로 패키징이 될 수 있습니다.

![](https://velog.velcdn.com/images/kyj96/post/d977f45e-458a-451a-b7bd-a5e4e36eac24/image.png)

## JAR (Java Archive)

Java 애플리케이션이 동작할 수 있도록 Java 프로젝트를 압축한 파일로써, 내부에는 **Class와 같은 Java 리소스와 속성파일** 그리고 **라이브러리등이 포함**되어있으며 .jar 확장자를 가집니다.

JAR 파일은 JRE만으로도 실행이 가능하며, Java 플랫폼에 귀속된다는 것을 제외하면 zip 파일과 같은 구조입니다. 

또한, JAR는 원하는 구조로 구성을 할 수 있는 것이 특징입니다.
![](https://velog.velcdn.com/images/kyj96/post/24c00298-93ff-4543-9d65-6ef097f9e545/image.png)


### 왜 사용할까요?

.jar 여러개의 파일등과 리소스들이 모여있는것이 .zip과 같은 맥락이지만, .jar 파일은 **압축을 따로 해제해주지 않아도 JDK에서 접근해서 사용**할 수 있도록 지원하는 편리함 때문에 사용합니다.

## WAR **(Web Application Archive)**

servlet / jsp 컨테이너에 배치 할 수 있는 **웹 어플리케이션(Web Application) 압축 파일 포맷**입니다.

JSP, SERVLET, JAR, CLASS, XML, HTML, JAVASCRIPT 등 Servlet Context 관련 파일들로 패키징 되어있습니다.

원하는 구성을 할 수 있는 JAR 포맷과 달리 WAR은 WEB-INF 및 META-INF 디렉토리로 **사전 정의 된 구조를 사용**하며 ****WAR파일을 실행하려면 **Tomcat, Weblogic, Websphere 등의 웹 서버 (WEB)또는 웹 컨테이너(WAS)가 필요**합니다.
![](https://velog.velcdn.com/images/kyj96/post/aedd1da3-d3cf-4723-9120-a5aa9fd8e546/image.png)

### 왜 사용할까요?

WAR는 웹 응용 프로그램를 위한 포맷이기 때문에 웹 관련 자원만 포함하고 있으며, **이를 사용하면 웹 어플리케이션을 쉽게 배포**하고 테스트 할 수 있습니다.

## JAR vs WAR

- JAR는 JRE(Java Runtime Environment)만 존재하면 프로젝트 구동이 가능!
- WAR는 별도의 웹서버 또는 WAS(웹 컨테이너)가 있어야 프로젝트 구동이 가능!

## EAR (Enterprise Application Archive)

여러 모듈이 애플리케이션 서버에 동시에 일관성 있게 배치될 수 있도록 하기 위해서 자바 EE에서 사용되는 파일 형식입니다. 

EAR은 하나 이상의 JAR, WAR, RAR 아카이브들을 가질 수 있습니다.

하나의 웹어플리케이션 단위를 넘어 실제 서버에서 배포하기 위한 단위를 말하며, 이를 위해서 jar와 war를 묶어서 각각의 기능을 지원하여 줍니다.

### 왜 사용할까요?

한 개 이상의 모듈을 단일 아카이브로 패키징하여 애플리케이션 서버에 동시에 일괄적으로 올리기 위하여 사용됩니다. (실제 서버에 올리기 위함)
