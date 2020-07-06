interface IUser {
 userId: number
 id: string
 email: string
 password: string
 username: string
 auth0Id?: string
 googleId?: string
 facebookId?: string
 createdAt?: string
 updatedAt?: string
 strategy: string
}

export default IUser
