# پروژه لاگین کاربران با Node.js و JavaScript

## معرفی

این پروژه یک سیستم لاگین ساده است که با استفاده از Node.js و JavaScript خالص (Vanilla JavaScript) پیاده‌سازی شده است.

کاربر با وارد کردن نام کاربری، اطلاعات خود را از API دریافت می‌کند و در صورت موفقیت در ورود، به صفحه پنل کاربری هدایت می‌شود.

## ویژگی‌ها

* ساخت API با Node.js
* دریافت اطلاعات کاربران از دیتابیس موقت (Array)
* جستجوی کاربر بر اساس نام کاربری
* اعتبارسنجی فرم ورود
* مدیریت خطاها
* هدایت کاربر به پنل پس از ورود موفق
* ذخیره اطلاعات کاربر در LocalStorage
* خروج از حساب کاربری (Logout)

## تکنولوژی‌های استفاده شده

* HTML
* CSS
* JavaScript (Vanilla JS)
* Node.js
* HTTP Module

## ساختار پروژه

```text
project/
├── backEnd/                         # Backend API
│   └── server.js                    # Node.js Server
│
├── frontEnd/
│   ├── public/                      # Public Assets
│   │
│   └── src/
│       ├── assets/font
│       ├── pages/
│       │   ├── panel.html           # User Dashboard Page
│       │   └── panel.js             # Dashboard Logic
│       │
│       ├── index.html               # Login Page
│       ├── script.js                # Login Logic
│       ├── input.css                # Tailwind Source File
│       └── output.css               # Compiled CSS
│
└── README.md
```
## نحوه اجرا

### اجرای سرور

```bash
node server.js
```

سرور روی پورت 3300 اجرا خواهد شد.

### اجرای فرانت‌اند

فایل‌های HTML را با Live Server یا هر وب سرور دیگری اجرا کنید.

## API Endpoint

```http
GET /api/users?username=username
```

نمونه:

```http
http://localhost:3300/api/users?username=abolfazl
```

## هدف پروژه

این پروژه با هدف یادگیری مفاهیم زیر توسعه داده شده است:

* کار با HTTP Server در Node.js
* ارسال درخواست با Fetch API
* مدیریت فرم‌ها
* کار با LocalStorage
* مسیریابی سمت کاربر (Client-side Navigation)
* مدیریت وضعیت ورود کاربران

## توسعه‌دهنده

Abolfazl Dev



# User Login System with Node.js and JavaScript

## Overview

This project is a simple user login system built with Node.js and Vanilla JavaScript.

Users can enter their username, fetch their information from an API, and upon successful authentication, they are redirected to a dashboard page.

## Features

* Node.js REST API
* User lookup by username
* Form validation
* Error handling
* Redirect after successful login
* LocalStorage-based session persistence
* Logout functionality

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Node.js
* HTTP Module

## 📁 Project Structure

```text
project/
├── backEnd/                         # Backend API
│   └── server.js                    # Node.js Server
│
├── frontEnd/
│   ├── public/                      # Public Assets
│   │
│   └── src/
│       ├── assets/font
│       ├── pages/
│       │   ├── panel.html           # User Dashboard Page
│       │   └── panel.js             # Dashboard Logic
│       │
│       ├── index.html               # Login Page
│       ├── script.js                # Login Logic
│       ├── input.css                # Tailwind Source File
│       └── output.css               # Compiled CSS
│
└── README.md
```

## Getting Started

### Start the Backend Server

```bash
node server.js
```

The server will run on:

```text
http://localhost:3300
```

### Run the Frontend

Open the HTML files using Live Server or any static web server.

## API Endpoint

```http
GET /api/users?username=username
```

Example:

```http
http://localhost:3300/api/users?username=abolfazl
```

## Learning Objectives

This project was created to practice:

* Building HTTP servers with Node.js
* Working with Fetch API
* Form handling
* LocalStorage management
* Client-side navigation
* Basic authentication concepts

## Author

Abolfazl Dev
