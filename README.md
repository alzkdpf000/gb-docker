# 🚀 Crew Station

> 본 서비스는 여행자들이 연결되는 소셜 여행 플랫폼
> 여행 동행 모집, 지역 상품 판매, 여행 일기 작성을 한 곳에서 제공합니다.
> 여행자 간 교류와 거래가 이루어지는 통합 여행 플랫폼입니다.
> 함께 여행하고, 사고팔고, 기록하는 새로운 여행 경험을 만듭니다.

---

## 🎯 기획 의도

<img width="893" height="491" alt="Image" src="https://github.com/user-attachments/assets/62bbc22b-547c-4f73-9385-987955c1642c" />

<img width="892" height="497" alt="Image" src="https://github.com/user-attachments/assets/2e785061-087a-4c09-8021-0be51391ba9b" />

본 프로젝트는 청년층의 **사회적 고립 문제**와 **연대 부족**을 해결하고자 기획되었습니다.

주요 기획 배경은 다음과 같습니다:

1. **사회적 고립 완화**  
   청년들이 혼자 경험하는 여행이나 활동에서 **새로운 인간관계를 형성할 기회가 부족**하다는 문제를 발견했습니다.

2. **경제적 제약 완화**  
   청년들이 해외여행 등 다양한 경험을 하고 싶어도 **비용 부담으로 기회가 제한**되는 현실을 확인했습니다.

3. **안전하고 책임 있는 만남 필요**  
   기존의 여행 동행 방식에서는 **안전성과 신뢰성 부족**으로 범죄나 사고 위험이 존재한다는 점이 문제였습니다.

이에 따라, **안전한 플랫폼을 통해 청년들이 여행을 함께하고, 사회적 연결망을 확장할 수 있는 서비스**를 기획하게 되었습니다.

---

## 💡 기대 효과

<img width="1395" height="736" alt="Image" src="https://github.com/user-attachments/assets/66048866-0050-4afd-952b-4d2286b807b0" />

1. **경제적 부담 완화와 기회 형평성 제고**

    - 우리 서비스의 **크루원 모집 기능**을 통해 여행이나 활동 비용을 분담할 수 있어,  
      경제적 제약이 있는 청년도 다양한 경험을 누릴 수 있습니다.

2. **창업적 감각 함양**

    - 사용자가 해외에서 구한 상품을 **기프트에 올려 사고팔기**를 경험함으로써  
      소규모 비즈니스 운영 및 거래 경험을 쌓을 수 있습니다.

3. **콘텐츠 기반 성장**

    - **여행 다이어리 기록 공유**를 통해 개인 경험을 기록하고,  
      다른 사용자와 소통하며 **콘텐츠 기반의 성장 및 학습**이 가능합니다.

4. **심리적 안정감 제공**
    - 크루와 함께 활동하며 **역할을 수행하고 협력**함으로써  
      정서적 지지와 **심리적 안정감**을 얻을 수 있습니다.

---

## 🧰 프로젝트 사용 툴

| 구분           | 기술/도구 |
|----------------|-----------|
| **HTML Engine** | Thymeleaf |
| **Frontend**    | HTML, JavaScript, CSS |
| **Backend**     | Spring Boot, Java |
| **Database**    | PostgreSQL, Redis |
| **Infra**       | AWS EC2, AWS IAM, AWS S3 |
| **Tool**        | VS Code, IntelliJ IDEA |
| **CI/CD & Container** | Docker, GitHub Actions |
| **API**         | Kakao Login, Kakao Map, Kakao 주소, SMTP Gmail API, REST API, Lombok, MyBatis, OAuth 2.0, Google Login, Boot Pay, Naver Login, JWT, Spring Security, CoolSMS, Swagger UI |
| **기타**        | Git, GitHub, Slack, Postman, Sourcetree |
| **테스트**      | JUnit5 |


---

## 🗂 ERD (Entity Relationship Diagram)

<img width="6222" height="6184" alt="Image" src="https://github.com/user-attachments/assets/6e275336-0946-4425-aae2-ccca73d4c320" />

---

## 👩‍💻 담당 업무

<img width="1148" height="279" alt="스크린샷 2025-10-28 오후 2 54 28" src="https://github.com/user-attachments/assets/666b0331-1999-4ab9-b247-d0fa08e67f06" />


<br>▶ 다이어리 페이지(웹)

-   다이어리 목록
-   다이어리 상세
-   다이어리 작성
-   다이어리 수정
-   다이어리 삭제
-   다이어리 신고
-   다이어리 좋아요
-   댓글 목록
-   댓글 수정
-   댓글 삭제
-   댓글 작성<br>

▶ 기프트 페이지(모바일)

-   기프트 목록
-   기프트 상세
-   기프트 작성
-   기프트 수정
-   기프트 삭제
-   기프트 신고
-   기프트 판매 요청<br>

---

## 🚨 오류 상황들

### **📌 1. 모호성을 제거하자**

#### **💥문제 상황**

-   페이징 처리를 위해 오프셋을 계산하는 과정에서 SQL문에 음수가 들어가는 상황 발생했습니다.

#### **🔍문제 원인**

-   class안에 필드명과 파라미터명이 일치하면서 모호성이 발생하여 계산식이 반영이 안되는 것을 파악했습니다.

#### **🛠️해결 방안**

-   <img width="721" height="372" alt="Image" src="https://github.com/user-attachments/assets/20448366-e56a-4fbd-9cab-e65f96e42847" />
-   page에 this를 추가해서 모호성을 제거해주니 정상적으로 작동하였습니다.

### **📌 2. DBMS를 확인하자**

#### **💥문제 상황**

-   기존 Mysql에서 사용한 시간을 3일 전, 2분 전을 리턴해주는 <code>toRelativeTime</code> 함수를 실행시
    <img width="1086" height="46" alt="Image" src="https://github.com/user-attachments/assets/04afdb36-c13d-4886-8391-47c4f434f4c6" />
    포맷과 문자열 불일치를 뜻하는 오류 문구가 발생

#### **🔍문제 원인**

-   PostgreSQL에 날짜를 저장 시 2023-09-16 07:07:55.348506로 MySQL은 2025-08-13 14:21:47로 저장되어 서로 다르게 저장되는것을 파악했습니다.

#### **🛠️해결 방안**

-   <img width="393" height="46" alt="Image" src="https://github.com/user-attachments/assets/ff81de00-6b7a-4941-9fde-65f17deb6019" />
-   마이크로초를 제거해주어서 문자열을 맞춰주어 해결했습니다.

### **📌 3. 버전을 확인하자**

#### **💥문제 상황**

-   CoolSMS을 쓰기 위해 <code>implementation 'net.nurigo:javaSDK:2.2'</code>를 추가하니
    <img width="1244" height="163" alt="Image" src="https://github.com/user-attachments/assets/98f0d549-bc84-47ad-b6f6-834bfcbc0106" />
    주로 라이브러리 버전 불일치 때문에 발생하는 에러가 나왔지만 이 버전은 이전 프로젝트에서는 잘 동작하는 버전이였습니다.

또한 <code>Factory method 's3Client' threw exception with message: INSTANCE</code> S3Config 안에서 S3Client를 생성하는 메서드(@Bean)에서 예외가 발생했습니다.

#### **🔍문제 원인**

-   <code>implementation 'net.nurigo:javaSDK:2.2'</code>와 AWS S3가 AWS SDK의 내부 버전과 충돌이 발생한 것 같다고 추측하였습니다.

#### **🛠️해결 방안**

-   버전을<code>implementation 'net.nurigo:sdk:4.3.0'</code>로 교체하고 해당 버전에 맞는 코드를 사용하니 정상적으로 작동하였습니다.

-   기존 코드
-   <img width="418" height="490" alt="Image" src="https://github.com/user-attachments/assets/d2f200d1-32ad-4ed1-8708-26b881f4014f" />

-   바뀐 코드
-   <img width="909" height="276" alt="Image" src="https://github.com/user-attachments/assets/3b8f2dde-c345-4e51-9c90-936841d77791" />
-   <img width="911" height="443" alt="Image" src="https://github.com/user-attachments/assets/60133f85-e185-4c02-8db8-ada99fc4659a" />

---

## 📊 QA 테스트

<img width="922" height="577" alt="Image" src="https://github.com/user-attachments/assets/9bda25db-1a46-439f-8abe-aa35500f5c95" />

<img width="658" height="212" alt="스크린샷 2025-10-29 오후 2 35 56" src="https://github.com/user-attachments/assets/ad77d8bc-0a57-4fb3-99e3-14af9abaa804" />

---

## 🧭 총평

### 기획

-   에러 처리의 경우, 게시글이 존재하지 않거나 회원 정보가 유효하지 않은 경우 등 다양한 예외 상황에 대해 미리 논의하고 기획한 점이 매우 유익했습니다.
    서버 측에서는 이러한 사전 기획 덕분에 예외 발생 시의 흐름(예: 에러 페이지 이동, 토스트 메시지 처리 등)을 명확히 설계할 수 있었고, 실제 개발 단계에서도 혼선을 줄일 수 있었습니다.
    이 경험을 통해 서버 로직에서도 ‘미리 기획된 시나리오’가 얼마나 중요한지 체감했습니다.

### 협업

-   이번 프로젝트에서 새로 배운 Spring Security와 JWT를 적용하는 과정에서, URL 접근 권한 설정이나 토큰 유무에 따른 처리 로직 등 핵심적인 보안 설정 정보를 팀원 간에 즉시 공유하지 못하는 상황이 있었습니다.
    이를 계기로, 중요한 설정이나 로직 변경이 있을 때는 짧게라도 회의를 진행하고, Slack 같은 협업 도구를 더욱 적극적으로 활용해야 한다는 필요성을 느꼈습니다.
    이전보다 기술 수준은 높아졌지만, 정보 공유 속도와 방법 또한 그에 맞게 개선되어야 함을 깨달았습니다.

### 좋았던 점

-   이전 프로젝트보다 훨씬 다양한 기술을 경험해 볼 수 있어서 좋았습니다.
    AWS S3, AWS IAM, Spring Security, AOP, Swagger, JWT 등 새로운 기술들을 직접 적용하며 배운 점이 많았고, 실무 감각을 키울 수 있는 좋은 기회였습니다.
    특히 배포 및 인증 과정을 직접 다뤄봄으로써 백엔드 전반에 대한 이해도가 크게 향상되었습니다.

### 아쉬웠던 점

-   “소통을 잘 해보자”는 목표 아래 기획 시간을 늘리고 아침마다 회의를 진행했지만, 단순히 회의 시간을 늘리는 것만으로는 효율적인 소통이 이루어지지 않는다는 점을 느꼈습니다.
    무작정 회의 시간을 늘리기보다, 회의의 목적과 안건을 명확히 하고 기록을 남겨 다음 단계에 바로 반영할 수 있도록 체계화하는 것이 더 중요하다는 점을 배웠습니다.
    또한, 회의 후 결정된 내용을 Slack이나 Notion 등을 통해 빠르게 공유하여 모든 팀원이 동일한 정보를 가질 수 있도록 하는 절차의 필요성도 느꼈습니다.

---

📌 **작성자:** 정충효 &nbsp;&nbsp;&nbsp;&nbsp; **TEAM:** Crew <br>
📅 **기간:** 2025.09.24 ~ 2025.10.19 (**총 프로젝트 기간:** 2025.09.24 ~ 2025.10.24)
