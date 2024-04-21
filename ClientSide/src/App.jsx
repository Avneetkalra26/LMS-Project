import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage, ContentPage, LoginPage, MainPage, ProfilePage, RegisterPage } from './pages';
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
  ]);
  return (
    <RouterProvider router={appRoute} />
  )
}
