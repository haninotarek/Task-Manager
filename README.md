# TaskFlow — React Task Manager

Simple solution for the React Task Manager assessment.

## Run

```bash
npm install
npm run dev
```

## Tech

- React + Vite
- React Router DOM v6 (BrowserRouter, Routes, Route, NavLink, Link, useNavigate, useParams)
- useState for all data
- Plain CSS

## Files

```
src/
  pages/
    Dashboard.jsx
    Tasks.jsx
    AddTask.jsx
    TaskDetails.jsx
  App.jsx      (tasks state + routes + sidebar)
  main.jsx
  index.css
```

## Routes

| Path         | Page         |
| ------------ | ------------ |
| /            | Dashboard    |
| /tasks       | My Tasks     |
| /add-task    | Add Task     |
| /tasks/:id   | Task Details |
| *            | Not Found    |
