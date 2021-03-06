import { GlobalStyles } from './components/GlobalStyles/styles';
import { Home } from './pages/Home';
import { Join } from './pages/Join'
import { Login } from './pages/Login';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyles></GlobalStyles>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/join" element={<Join/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
