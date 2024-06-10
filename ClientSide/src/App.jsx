import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage, ContentPage, FavouriteCoursesPage, LoginPage, MainPage, ProfilePage, RegisterPage } from './pages';
import AllCoursesPage from './pages/AllCoursesPage';
import AuthLayout from './components/Authentication/AuthLayout';
import ProtectedContainer from './components/Authentication/ProtectedContainer';
import { useDispatch } from 'react-redux';
import { login } from './features/authSlice';
import MyLearningPage from './pages/MyLearningPage';
import AboutUs from './components/AboutUsPage/AboutUs';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    if (userData) {
      dispatch(login({ user: userData }))
    }
  })
  const appRoute = createBrowserRouter([
    {
      path: "/login",
      element: (
        <AuthLayout authentication={false} >
          <LoginPage />
        </AuthLayout>
      )
    },
    {
      path: "/registration",
      element: (
        <AuthLayout authentication={false} >
          <RegisterPage />
        </AuthLayout>
      )
    },
    {
      path: "/",
      element: <ProtectedContainer />,
      children: [
        {
          path: "/",
          element: (
            <AuthLayout authentication={true} >
              <MainPage />
            </AuthLayout>
          )
        },
        {
          path: "/contentpage",
          element: (
            <AuthLayout authentication={true} >
              <ContentPage />
            </AuthLayout>
          )
        },
        {
          path: "/contactus",
          element: (
            <AuthLayout authentication={true} >
              <ContactPage />
            </AuthLayout>
          )
        },
        {
          path: "/profile",
          element: (
            <AuthLayout authentication={true} >
              <ProfilePage />
            </AuthLayout>
          )
        },
        {
          path: "/favouriteList",
          element: (
            <AuthLayout authentication={true} >
              <FavouriteCoursesPage />
            </AuthLayout>
          )
        },
        {
          path: "/allcourses",
          element: (
            <AuthLayout authentication={true} >
              <AllCoursesPage />
            </AuthLayout>
          )
        },
        {
          path: "/mylearning",
          element: (
            <AuthLayout authentication={true} >
              <MyLearningPage/>
            </AuthLayout>
          )
        },
        {
          path: "/aboutUs",
          element: (
            <AuthLayout authentication={true} >
              <AboutUs/>
            </AuthLayout>
          )
        },

      ]
    },
  ]);
  return (
    <RouterProvider router={appRoute} />
  )
}
