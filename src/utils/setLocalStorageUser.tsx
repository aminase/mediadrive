import IUser from '../types/User'

type IUserLocalStorage = Pick<IUser, 'userId' | 'id'>

export function setLocalStorageUser(user: IUserLocalStorage) {
 localStorage.setItem('user', JSON.stringify(user))
}
