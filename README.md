# DevCourses – React Course Catalog

A simple and interactive course catalog application built with React. Users can browse available courses, search by course title, and filter courses by level and category.

## Features

- **Course Listing:** Display available courses dynamically.
- **Search:** Search courses by title (case-insensitive).
- **Filter by Level:** Filter courses by Beginner, Intermediate, or Advanced.
- **Filter by Category:** Filter courses by category, such as Frontend and Backend.
- **Combined Filtering:** Apply search and multiple filters simultaneously.
- **Loading State:** Display a loading message while fetching course data.
- **Reusable Components:** Organized component structure for better maintainability.

## Built With

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Filters.jsx
│   ├── CourseList.jsx
│   ├── CourseCard.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx

public/
└── courses.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Data Source

Course information is stored in `public/courses.json` and retrieved using the Fetch API inside React's `useEffect` hook.

Each course contains:

- `id`
- `title`
- `level`
- `category`
- `duration`
- `price`

## Learning Objectives

This project provides practical experience with:

- React components and props
- React Hooks (`useState` and `useEffect`)
- Fetch API and JSON data
- Rendering lists using `.map()`
- Filtering arrays using `.filter()`
- Controlled form inputs
- Component-based architecture

## License

This project was created for educational and learning purposes.
