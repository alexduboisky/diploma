export interface User {
  id: string,
  name: string,
  passCode: string
}

export interface Admin {
  id: string,
  login: string,
  name: string,
  passwordHash: string
}
