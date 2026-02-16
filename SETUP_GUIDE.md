# AI 자동화 문의 사이트 설정 가이드

## 📋 프로젝트 개요
이 프로젝트는 AI 커스텀 자동화 툴 개발 기업을 위한 문의 사이트입니다.
다단계 설문조사 형식으로 고객의 니즈를 상세하게 파악하고, 입력된 내용을 이메일로 자동 전송합니다.

## 🚀 빠른 시작

### 1. 프로젝트 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 2. 빌드
```bash
npm run build
```

## 📧 EmailJS 설정 방법

이메일 전송 기능을 사용하려면 EmailJS 서비스를 설정해야 합니다.

### Step 1: EmailJS 계정 생성
1. [EmailJS](https://www.emailjs.com/) 접속
2. 무료 계정 생성 (월 200건까지 무료)

### Step 2: 이메일 서비스 연결
1. EmailJS 대시보드에서 **Email Services** 선택
2. **Add New Service** 클릭
3. Gmail, Outlook 등 원하는 이메일 서비스 선택
4. 서비스 연결 및 **Service ID** 복사

### Step 3: 이메일 템플릿 생성
1. **Email Templates** 선택
2. **Create New Template** 클릭
3. 아래 템플릿을 참고하여 작성:

```
제목: [AI 자동화 문의] {{from_name}}님의 문의

내용:
======================
📝 고객 기본 정보
======================
이름: {{from_name}}
회사: {{from_company}}
이메일: {{from_email}}
연락처: {{from_phone}}

======================
💰 프로젝트 정보
======================
예상 예산: {{budget}}
희망 일정: {{timeline}}

======================
🎯 자동화 니즈
======================
비즈니스 영역: {{business_area}}

[현재 업무 프로세스]
{{current_process}}

[주요 불편사항]
{{pain_points}}

[기대 효과]
{{expected_outcome}}

======================
💻 기술 요구사항
======================
관심 기술: {{tech_stack}}
연동 시스템: {{integrations}}
데이터 규모: {{data_volume}}

======================
📌 추가 정보
======================
{{additional_requirements}}

유입 경로: {{referral_source}}
```

4. **Save** 후 **Template ID** 복사

### Step 4: Public Key 확인
1. **Account** > **General** 메뉴
2. **Public Key** 복사

### Step 5: 코드에 설정 적용
`src/components/InquiryForm.jsx` 파일에서 다음 부분을 수정:

```javascript
// 78-80번째 줄
const serviceId = 'YOUR_SERVICE_ID'        // ← 여기에 Service ID 입력
const templateId = 'YOUR_TEMPLATE_ID'      // ← 여기에 Template ID 입력
const publicKey = 'YOUR_PUBLIC_KEY'        // ← 여기에 Public Key 입력

// 82번째 줄
to_email: 'your-email@example.com',        // ← 받을 이메일 주소 입력
```

### Step 6: 이메일 전송 코드 활성화
`src/components/InquiryForm.jsx` 97번째 줄:

```javascript
// 주석 제거
await emailjs.send(serviceId, templateId, emailData, publicKey)

// 100번째 줄 주석 처리 또는 삭제
// console.log('문의 내용:', emailData)
```

## 🎨 커스터마이징

### 회사명 및 헤더 변경
`src/App.jsx` 파일에서 수정:
```jsx
<h1 className="text-5xl font-bold text-gray-900 mb-4">
  AI 자동화 솔루션  {/* ← 회사명 수정 */}
</h1>
```

### 색상 테마 변경
`tailwind.config.js` 파일에서 primary 색상 수정:
```javascript
colors: {
  primary: {
    // 원하는 색상 코드로 변경
  }
}
```

### 설문 항목 수정
`src/components/InquiryForm.jsx`에서 각 Step의 내용 수정 가능

## 🌐 배포 방법

### Netlify 배포
1. [Netlify](https://www.netlify.com/) 로그인
2. **New site from Git** 선택
3. GitHub 저장소 연결
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Vercel 배포
1. [Vercel](https://vercel.com/) 로그인
2. **Import Project** 선택
3. GitHub 저장소 연결
4. 자동으로 설정 감지 → Deploy

## 📂 프로젝트 구조
```
ai-inquiry-site/
├── src/
│   ├── components/
│   │   └── InquiryForm.jsx    # 메인 설문 폼 컴포넌트
│   ├── App.jsx                 # 메인 앱 컴포넌트
│   ├── App.css
│   └── index.css              # Tailwind CSS
├── tailwind.config.js         # Tailwind 설정
├── package.json
└── README.md
```

## 🔧 주요 기능

### ✅ 5단계 설문 시스템
1. **기본 정보**: 이름, 회사, 연락처
2. **프로젝트 정보**: 예산, 일정
3. **자동화 니즈**: 비즈니스 영역, 현재 프로세스, 불편사항
4. **기술 요구사항**: AI 기술 스택, 연동 시스템
5. **추가 정보**: 추가 요청사항, 유입 경로

### ✅ 프로그레스 바
- 실시간 진행률 표시
- 단계별 이동 버튼

### ✅ 유효성 검사
- 필수 항목 체크
- 다음 단계 진행 조건 확인

### ✅ 이메일 자동 전송
- EmailJS를 통한 이메일 전송
- 구조화된 이메일 템플릿

### ✅ 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- Tailwind CSS 활용

## 📝 문의 항목 설명

### 비즈니스 영역
- 고객 서비스 / 챗봇
- 데이터 분석 / 리포팅
- 문서 자동화 / OCR
- 마케팅 자동화
- 업무 프로세스 자동화
- 이미지/영상 처리
- 예측 모델링 / AI 추천

### AI 기술 스택
- ChatGPT / LLM
- 자연어 처리 (NLP)
- 컴퓨터 비전
- 음성 인식/합성
- 예측 분석 / 머신러닝
- RPA (로봇 프로세스 자동화)
- 데이터 파이프라인

## 🛠️ 기술 스택
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Email**: EmailJS
- **Build**: Vite

## 📞 지원
문제가 발생하거나 질문이 있으시면 이슈를 등록해주세요.

---
Made with ❤️ for AI Automation Solutions
