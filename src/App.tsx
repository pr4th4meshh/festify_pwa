import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import { AuthContextProvider } from "./context/AuthContext"
import Protected from "./components/Protected"
import MainLayout from "./layouts/MainLayout"
import QrScanning from "./pages/QrScanning"
import Introduction from "./components/AppIntroduction"

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route element={<MainLayout />}>
            <Route
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
             <Route
              path="/qrscan"
              element={
                <Protected>
                  <QrScanning />
                </Protected>
              }
            />
          </Route>
          <Route
              path="/introduction"
              element={
                <Protected>
                  <Introduction />
                </Protected>
              }
            />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
