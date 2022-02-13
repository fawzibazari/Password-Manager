import { GlobalStyle } from './styles/GlobalStyle'

import { HashRouter, Route, Routes} from "react-router-dom";


import { Greetings } from './components/Greetings'
import { Login } from './components/Login/Login';

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