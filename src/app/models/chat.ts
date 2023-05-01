export interface Chat {
  id: string,
  userId: string,
  messages: message[]
}

export interface message {
  text: string,
  isAdmin: boolean
  isFile?: boolean,
  timestamp: number
}
