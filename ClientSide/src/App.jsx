import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage, ContentPage, FavouriteCoursesPage, LoginPage, MainPage, ProfilePage, RegisterPage } from './pages';
import QuizQuestions from './components/Quiz/QuizQuestions';
export default function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/registration",
      element: <RegisterPage/>,
    },
    {
      path: "/mainpage",
      element: <MainPage/>,
    },
    {
      path: "/contentpage",
      element: <ContentPage/>,
    },
    {
      path: "/contactus",
      element: <ContactPage/>,
    },
    {
      path: "/profile",
      element: <ProfilePage/>,
    },
    {
      path: "/quizques",
      element: <QuizQuestions/>,
    },
    {
      path: "/favouriteList",
      element: <FavouriteCoursesPage/>,
    },
  ]);
  return (
    <RouterProvider router={appRoute} />
  )
}
