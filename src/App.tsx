import { GlobalStyles } from "./components/GlobalStyles/styles";
import { Home } from "./pages/Home";
import { Join } from "./pages/Join";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Upload } from "./pages/Upload";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { NotFound } from "./pages/NotFound";
import { Collection } from "./pages/Collection";
import { Photo } from "./pages/Photo";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyles></GlobalStyles>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:uid">
            <Route path="/profile/:uid" element={<Profile page="Gallery" />} />
            <Route
              path="/profile/:uid/gallery"
              element={<Profile page="Gallery" />}
            />
            <Route
              path="/profile/:uid/collections"
              element={<Profile page="Collections" />}
            />
          </Route>
          <Route path="/collection/:uid" element={<Collection />} />
          <Route path="/photo/:uid" element={<Photo />} />
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
