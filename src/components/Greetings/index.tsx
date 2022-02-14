import { Button } from '../Button'
import { Container, Image, Text } from './styles'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthServices } from '../../services/auth';
import { Header } from '../Header/Header';


export function Greetings() {

  const navigate = useNavigate();


  useEffect(() => {
    AuthServices.getUser().then(
      (response) => {
        console.log(response.status);
        
      },
      (error) => {
        console.log(error)
        console.log("T'as pas le droit 😁", error.response);
            // Invalid token
            if (error.response && error.response.status === 401) {
              navigate("/login");
              window.location.reload();
            }
      }
    );
  }, []);


  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <>
    <Header/>
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
      <Button onClick={handleSayHello}>Send message to main process</Button>
      <Link to={`/login`}>test</Link>
    </Container>
    </>
  )
}
 
