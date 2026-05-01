<!-- # Authentication System (Next.js)

## 🚀 Project Overview
This is a fully functional authentication system built using Next.js. It includes login, registration, OTP verification, and protected routing with proper validation, loading states, and responsive UI.

The project focuses on clean architecture, reusable components, and real-world authentication flow.

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install

Approach
Built authentication flow step-by-step (Login → Register → OTP → Protected Routes)
Used Next.js App Router for routing structure
Created reusable UI components (Input, Button, Form Card, etc.)
Implemented form handling using Formik, Yup
Added validation using Yup for better form control
OTP verification handled using controlled inputs for better UX
API integration handled with async requests and proper error handling
Focused on clean UI and user-friendly experience -->

<!-- Features
Fully responsive design
Authentication flow (Login, Register, OTP Verification)
Form validation with error handling
Loading states during API calls
Protected routes for authenticated users
Clean and reusable component structure

Status
All features working without errors
UI aligned with design requirements
Authentication flow properly integrated
Responsive across all devices -->

#Backend Cors 
<!-- CORS Setup
import cors from "cors";

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,              
  })
);

Inside AuthController
  res.cookie("token", token, {
      httpOnly: true,
      secure: false, // for localhost
      sameSite: "lax",
  });

Inside .env file
MONGO_URI=mongodb://127.0.0.1:27017/uptrix

Login authentication using JWT
HTTP-only cookie session management
Protected session check (/me route)
Secure logout by clearing cookie
CORS configured for frontend integration
IMPLEMENTED REGISTER, LOGIN, LOGOUT
 -->