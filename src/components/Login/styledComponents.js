import {styled} from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  padding: 30px;
  box-shadow: 1px 4px 10px 1px grey;
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-family: 'Caveat';
  color: #1e293b;
  text-align: center;
`

export const InputContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`
export const LabelEl = styled.label`
  font-family: 'Roboto';
  color: #334155;
  margin-bottom: 10px;
`
export const InputEl = styled.input`
  border-color: #cbd5e1;
  border-radius: 5px;
  height: 35px;
  width: 300px;
  outline: none;
`
export const PasswordContainer = styled.div`
  border: 2px solid #cbd5e1;
  border-radius: 5px;
  height: 35px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
`

export const PasswordInputEl = styled.input`
  border: none;
  height: 30px;
  width: 250px;
  outline: none;
`
export const LoginButton = styled.button`
  width: 300px;
  height: 35px;
  color: #ffffff;
  background-color: #304766;
  border-radius: 5px;
  cursor: pointer;
`
