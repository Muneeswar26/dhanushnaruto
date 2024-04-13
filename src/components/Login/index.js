import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5'
import {
  LoginContainer,
  LoginCard,
  Heading,
  InputContainer,
  LabelEl,
  InputEl,
  PasswordContainer,
  PasswordInputEl,
  LoginButton,
} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    isEyesOpened: false,
    inputType: 'password',
    username: '',
    password: '',
    errorMsg: '',
  }

  passwordShow = () => {
    this.setState(prevState => ({
      isEyesOpened: !prevState.isEyesOpened,
      inputType: 'text',
    }))
  }

  passwordHide = () => {
    this.setState(prevState => ({
      isEyesOpened: !prevState.isEyesOpened,
      inputType: 'password',
    }))
  }

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  showSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === false) {
      this.setState({errorMsg: data.error_msg})
    } else {
      this.showSuccess(data.jwt_token)
    }
  }

  render() {
    const {isEyesOpened, inputType, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCard>
          <form onSubmit={this.submitLogin}>
            <Heading>Travel Trip</Heading>
            <InputContainer>
              <LabelEl htmlFor="username">Username</LabelEl>
              <InputEl
                id="username"
                type="text"
                placeholder="Username"
                onChange={this.onChangeUserName}
              />
            </InputContainer>
            <InputContainer>
              <LabelEl htmlFor="password">Password</LabelEl>
              <PasswordContainer>
                <PasswordInputEl
                  id="password"
                  type={inputType}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
                {isEyesOpened ? (
                  <IoEyeOffOutline
                    className="eye-icon"
                    onClick={this.passwordHide}
                  />
                ) : (
                  <IoEyeOutline
                    className="eye-icon"
                    onClick={this.passwordShow}
                  />
                )}
              </PasswordContainer>
            </InputContainer>
            <p className="error-message">{errorMsg}</p>
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
