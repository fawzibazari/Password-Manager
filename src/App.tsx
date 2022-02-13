import { GlobalStyle } from './styles/GlobalStyle'

import { BrowserRouter, Route, Routes} from "react-router-dom";


import { Greetings } from './components/Greetings'
import { Login } from './components/Login/Login';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
            <Routes>
            <Route path="/main_window" element={<Greetings />}/>
              <Route path="/login" element={<Login />} />
            </Routes>

          </BrowserRouter>
    </>
  )
}