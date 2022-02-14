// import { GlobalStyle } from './styles/GlobalStyle'

import { HashRouter, Route, Routes} from "react-router-dom";


import { Greetings } from './components/Greetings'
import { Header } from "./components/Header/Header";
import { Login } from './components/Login/Login';
import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
  return (
    <>
    <GlobalStyle />
      <HashRouter>
        <Header />
            <Routes>
            <Route path="/" element={<Greetings />}/>
              <Route path="/login" element={<Login />} />
            </Routes>
      </HashRouter>
    </>
  )
}