Calendly-Style Appointment Scheduler

This project is a mini appointment-scheduling application built as part of a PHP Developer technical challenge.
It demonstrates a simple, clean scheduling flow inspired by Calendly using a Laravel backend and a React frontend.

Tech Stack

Backend: Laravel (PHP 8.2)

Frontend: React

Database: MySQL

API Type: REST APIs

Libraries & Tools: Axios, React DatePicker, Postman

Project Structure
scheduler-app/
│
├── backend/    → Laravel backend (API)
├── frontend/   → React frontend (UI)
└── README.md

Backend Setup (Laravel)
Prerequisites

PHP 8.2+

Composer

MySQL

XAMPP / Laravel compatible local server

Installation Steps

Navigate to backend folder:

cd backend


Install dependencies:

composer install


Create .env file and configure database:

DB_DATABASE=scheduler_db
DB_USERNAME=root
DB_PASSWORD=


Run migrations:

php artisan migrate


Start Laravel server:

php artisan serve


Backend will be available at:

http://127.0.0.1:8000

Backend APIs
Get Available Slots
GET /api/available-slots?date=YYYY-MM-DD

Book a Slot
POST /api/book-slot


Request Body (JSON):

{
  "user_name": "John Doe",
  "user_email": "john@example.com",
  "date": "2026-02-05",
  "time_slot": "10:00"
}

Frontend Setup (React)
Prerequisites

Node.js (v16+ recommended)

npm

Installation Steps

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start React development server:

npm start


Frontend will run at:

http://localhost:3000

Application Flow

User selects a date

Available slots are fetched from backend

User selects a time slot

User enters name and email

Booking is confirmed or error message is shown

Double booking is prevented at backend level

Data Model Design
Tables Used
availabilities

id

date

time_slot

is_booked

bookings

id

user_name

user_email

date

time_slot

Relationships & Constraints

Each availability slot can be booked only once

Backend validation prevents double booking

Booking and availability are linked by date and time_slot

AI Tools & Libraries Used

ChatGPT – used for guidance, problem-solving, and best practices

Axios – for frontend API communication

React DatePicker – for clean and user-friendly date selection

Notes & Design Decisions

Focused on core scheduling functionality as requested

Clean REST API design

Simple and intuitive UI

Backend-first validation to ensure data integrity

Kept the solution lean and production-oriented within the given time constraint

Time Management

Core backend APIs implemented first

Basic React UI built to consume APIs

Avoided over-engineering and focused on essential features

Thank you for reviewing this submission.
Looking forward to your feedback!