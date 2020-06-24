import IUser from '../types/User'

type IUserLocalStorage = Pick<IUser, 'id' | 'token'>

export function setLocalStorageUser(user: IUserLocalStorage) {
 localStorage.setItem('user', JSON.stringify(user))
}
