import Footer from "./Components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
// import Cabinet from "./Pages/Cabinet/Cabinet";
import { Wrapper } from './App.styled';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from "react";
import { useSelector } from 'react-redux';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const Header = lazy(() => import("./Components/Header/Header"));
const Cabinet = lazy(() => import("./Pages/Cabinet/Cabinet"));

function App() {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user.isAuthenticated;

  return (
    <>
      <Suspense fallback={<h2>Downloading</h2>}>
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
    </>
  );
}

export default App;