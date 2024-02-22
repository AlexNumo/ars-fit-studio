import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
import Loading from "./Pages/Loading/Loading";
import { Wrapper } from './App.styled';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from "react";
import { useSelector } from 'react-redux';

const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const Header = lazy(() => import("./Components/Header/Header"));
const Cabinet = lazy(() => import("./Pages/Cabinet/Cabinet"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const isAuthenticated = user.isAuthenticated;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route
              path="/"
              element={
                <Wrapper>
                  <MainPage />
                  <Footer />
                </Wrapper>
              }
            />
            <Route
              path="/login"
              element={
                <Wrapper>
                  <Header />
                  <LoginPage />
                  <Footer />
                </Wrapper>
              }
            />
            <Route
              path="/cabinet"
              element={
                isAuthenticated ? (
                  <Wrapper>
                    <Header />
                    <Cabinet />
                    <Footer />
                  </Wrapper>
                ) : (
                  // Якщо користувач не авторизований, перенаправити його на сторінку логіну
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
