export interface User {
  id: string,
  name: string,
  passCode: string,
  coursesState?: UserCourseState[]
}

export interface UserCourseState {
  id: string,
  activeStep: string,
  status: string
}

export interface Admin {
  id: string,
  login: string,
  name: string,
  passwordHash: string
}
