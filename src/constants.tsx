
export type MenuItem = {
  name: string;
  imageUrl: string; // Теперь это путь к импортированной иконке
}

export const mainMenuItems: MenuItem[] = [
  {
    name: 'Search',
    imageUrl: '/assets/menuItems/search.png',
  },
  {
    name: 'Home',
    imageUrl: '/assets/menuItems/home.png',
  },
  {
    name: 'TV Shows',
    imageUrl: '/assets/menuItems/tv-shows.png'
  },
  {
    name: 'Movies',
    imageUrl: '/assets/menuItems/movies.png'
  },
  {
    name: 'Genres',
    imageUrl: '/assets/menuItems/genres.png'
  },
  {
    name: 'Watch Later',
    imageUrl: '/assets/menuItems/watch-later.png'
  },
];

export const additionalMenuItems: String[] = [
  'Language.png',
  'Get help.png',
  'Exit.png',
];