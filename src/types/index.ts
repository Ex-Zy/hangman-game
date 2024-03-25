export enum CategoriesEnum {
  movies = 'Movies',
  tvShows = 'TV Shows',
  countries = 'Countries',
  capital = 'Capital Cities',
  animals = 'Animals',
  sports = 'Sports'
}

export type Categories = {
  [key in CategoriesEnum]: Category[]
}

export interface Category {
  name: string
  selected: boolean
}