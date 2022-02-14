import { HashRouter, Route, Routes} from "react-router-dom";


import { Greetings } from './components/Greetings'
import { Login } from './components/Login/Login';
import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
  return (
    <>
    <GlobalStyle />
      <HashRouter>
            <Routes>
            <Route path="/" element={<Greetings />}/>
              <Route path="/login" element={<Login />} />
            </Routes>
      </HashRouter>
    </>
  )
}