import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage, ContentPage, FavouriteCoursesPage, LoginPage, MainPage, ProfilePage, RegisterPage } from './pages';
import QuizQuestions from './components/Quiz/QuizQuestions';
import ProtectedRoute from './ProtectedRoute';
import CourseCards from './components/Cards/CourseCards';
import AllCoursesPage from './pages/AllCoursesPage';
export default function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/registration",
      element: <RegisterPage />,
    },
    {
      path: "/mainpage",
      element: <ProtectedRoute element={<MainPage />} /> // Protected route
    },
    {
      path: "/contentpage",
      element: <ProtectedRoute element={<ContentPage />} />
    },
    {
      path: "/contactus",
      element: <ProtectedRoute element={<ContactPage />} />
    },
    {
      path: "/profile",
      element: <ProtectedRoute element={<ProfilePage />} />
    },
    {
      path: "/quizques",
      element: <ProtectedRoute element={<QuizQuestions />} />
    },
    {
      path: "/favouriteList",
      element: <ProtectedRoute element={<FavouriteCoursesPage />} />
      // element: <FavouriteCoursesPage />,
    },
    {
      path: "/allcourses",
      element: <ProtectedRoute element={<AllCoursesPage/>} />
    },
  ]);
  return (
    <RouterProvider router={appRoute} />
  )
}
