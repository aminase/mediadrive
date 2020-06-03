import IUserSignUpData from '../types/UserSignUpData'

enum MEDIA_ACTIONS {
  DO_SIGN_UP_USER = 'MEDIA_ACTIONS::DO_SIGN_UP_USER',
  SET_SIGN_UP_USER = 'MEDIA_ACTIONS::SET_SIGN_UP_USER',
}

interface ISetUserSignUpCredentials {
  type: typeof MEDIA_ACTIONS.DO_SIGN_UP_USER
  payload: IUserSignUpData
}

const doSignUpUser = (signUpCredentials: IUserSignUpData) => {
  return {
    type: MEDIA_ACTIONS.DO_SIGN_UP_USER,
    payload: {
      signUpCredentials,
    },
  }
}

interface ISetSignUpUser {
  type: typeof MEDIA_ACTIONS.SET_SIGN_UP_USER
}

const setSignUpUser = () => {
  return {
    type: MEDIA_ACTIONS.SET_SIGN_UP_USER,
  }
}

export type IAllActions = ISetUserSignUpCredentials | ISetSignUpUser

export { doSignUpUser, setSignUpUser, MEDIA_ACTIONS }
