// import { Button } from '../Button'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AuthServices } from '../../services/auth'
import { Header } from '../Header/Header'
import { PasswordsServices } from '../../services/passwords'
import axios from 'axios'
import authHeader from '../Header/auth-header'

export function Greetings() {
  const [password, setPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [showPassword, setShowPassword] = useState('Show password')
  const [passwordArray, setPasswordArray] = useState([] as any)
  const navigate = useNavigate()

  useEffect(() => {
    AuthServices.getUser().then(
      response => {},
      error => {
        console.log(error)
        console.log("T'as pas le droit 😁", error.response)
        // Invalid token
        if (error.response && error.response.status === 401) {
          navigate('/login')
          window.location.reload()
        }
      }
    )

    PasswordsServices.getPasswords().then(response => {
      setPasswordArray(response.data)
    })
  }, [])

  const newPassword = async (e: any) => {
    e.preventDefault()
    try {
      await PasswordsServices.newPasswords(website, password).then(
        () => {},
        error => {
          console.log(error)
        }
      )
      window.location.reload()
    } catch (error) {}
  }

  const decryptPassword = (encryption: any) => {
    axios
      .post(
        'http://localhost:4000/decryptpassword',
        {
          password: encryption.password,
          iv: encryption.iv,
        },
        { headers: authHeader() as any }
      )
      .then(response => {
        setPasswordArray(
          passwordArray.map((val: any) => {
            console.log(val)
            return val.id === encryption.id
              ? {
                  id: val.id,
                  password: val.password,
                  passwordD: response.data,
                  website: val.website,
                  iv: val.iv,
                }
              : val
          })
        )
      })
  }

  const deletePassword = (id: any) => {
    axios
      .delete(`http://localhost:4000/${id}`, { headers: authHeader() as any })
      .then(response => {
        setPasswordArray(
          passwordArray.filter((val: any) => {
            return val.id !== id
          })
        )
      })
  }

  return (
    <>
      <Header />
      <Container>
        <div className="AddingPassword">
          <input
            type="text"
            placeholder="Website"
            onChange={event => {
              setWebsite(event.target.value)
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={event => {
              setPassword(event.target.value)
            }}
          />

          <button onClick={newPassword}> Add Password</button>
        </div>

        <div className="Passwords">
          {passwordArray.map((val: any, key: any) => {
            return (
              <>
                <h3>{val.website}</h3>
                <div
                  className="password"
                  onClick={() => {
                    decryptPassword({
                      password: val.password,
                      iv: val.iv,
                      id: val.id,
                    })
                  }}
                  key={key}
                >
                  <h3>
                    {showPassword}
                    {val.passwordD}
                  </h3>
                  <button
                    onClick={() => {
                      deletePassword(val.id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )
          })}
        </div>
      </Container>
    </>
  )
}
