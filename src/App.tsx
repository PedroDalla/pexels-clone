import { GlobalStyles } from "./components/GlobalStyles/styles";
import { Home } from "./pages/Home";
import { Join } from "./pages/Join";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Upload } from "./pages/Upload";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyles></GlobalStyles>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:uid" element={<Profile />} />
          <Route path="/upload" element={<Upload />}></Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
