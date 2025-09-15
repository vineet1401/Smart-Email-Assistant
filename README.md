# Smart Email Assistant

Smart Email Assistant is an AI-powered tool that helps you generate professional, context-aware emails in your chosen tone. It is available as a web application and a Chrome extension, making email writing fast, easy, and effective.

---

## 🏗️ Architecture Overview

```
+----------------+        +----------------+        +-------------------+
|   User (Web)   | <----> |   Frontend     | <----> |    Backend        |
+----------------+        +----------------+        +-------------------+
        ^                        |                        |
        |                        v                        v
+----------------+        +----------------+        +-------------------+
| Chrome         | <----> |   Extension    | <----> | Gemini AI API     |
+----------------+        +----------------+        +-------------------+
```

- **Frontend (React):** User interface for input and displaying generated emails.
- **Backend (Spring Boot):** REST API, prompt construction, Gemini AI integration.
- **Chrome Extension:** Quick access to email generation from browser.
- **Gemini AI API:** Generates email content based on prompt.

---

## 🚀 Features
- Input email content and select tone
- AI-generated, context-aware email suggestions
- Web app and Chrome extension
- Multiple tones supported

---

## 🛠️ Tech Stack
- **Frontend:** React, Material UI, Axios, Vite
- **Backend:** Spring Boot, Java, WebClient
- **AI Integration:** Google Gemini API
- **Extension:** Chrome (HTML, JS, CSS)

---

## ⚙️ Setup Instructions

### 1. Backend (Spring Boot)

**Prerequisites:** Java 17+, Maven

```bash
cd BE
mvnw spring-boot:run
```

**Environment Variables:**
Set in `BE/src/main/resources/application.properties` or as system environment variables:
```
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=
gemini.api.key=YOUR_GEMINI_API_KEY
```

### 2. Frontend (React)

**Prerequisites:** Node.js 18+

```bash
cd FE
npm install
npm run dev
```

**Config:**
- Update API endpoint in Axios calls if backend runs on a different port (default: `http://localhost:8080/api/email/generate`).

### 3. Chrome Extension

**Steps:**
1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `Extension` folder

### 4. Usage
- Open the web app (`http://localhost:5173` by default) and generate emails.
- Use the Chrome extension for quick access.

---

## 📦 Environment Variables

| Variable         | Description                        | Example Value |
|------------------|------------------------------------|--------------|
| gemini.api.url   | Gemini API endpoint URL            | https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key= |
| gemini.api.key   | Gemini API Key                     | AIza...      |

---

## ✨ Key Highlights
- Multi-platform: Web & Chrome Extension
- AI-powered, tone-adaptive email generation
- Clean, modern UI
- Secure API integration

---

## 🏢 Real-Life Use Case
- Professionals, students, and anyone who wants to save time writing emails—especially useful for customer support, sales, HR, and networking.

---

## 🔄 Workflow
1. User submits email content and tone via frontend or extension.
2. Backend receives request, builds prompt, and calls Gemini AI.
3. AI response is sent back and displayed to the user.

---

## ⚡ Challenges & Solutions
- **API Integration:** Managed securely via environment variables.
- **CORS Issues:** Resolved by enabling CORS in backend.

---

## 🚀 Future Scope
- Add more tones and languages
- Integrate with Gmail/Outlook
- Save email templates
- Analytics for usage insights

---
