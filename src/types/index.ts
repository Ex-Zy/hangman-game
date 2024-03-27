export enum CategoriesEnum {
  movies = 'Movies',
  tvShows = 'TV Shows',
  countries = 'Countries',
  capital = 'Capital Cities',
  animals = 'Animals',
  sports = 'Sports'
}

export type Categories = Record<string, Word[]>

export interface Word {
  name: string
  selected: boolean
}

export interface Step {
  title: string
  body: string
}

export type EncryptedWord = Letter[][]

export interface Letter {
  name: string
  enable: boolean
}

export type MenuType = 'lose' | 'win' | 'pause'
