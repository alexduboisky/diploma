export interface Course {
  activeStep?: string;
  practiceUrl?: string;
  isPracticeChecked?: boolean;
  id: string,
  title: string,
  description: string,
  image: string,
  name: string,
  lessons: Lesson[],
  tests: Test[]
}

export interface Lesson {
  id: string,
  text: string,
  youtubeId: string
}

export interface Test {
  id: string,
  question: string,
  answers: Answer[]
}

export interface Answer {
  text: string,
  isCorrect?: boolean
}
