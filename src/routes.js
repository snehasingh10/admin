import React from 'react';
import Categeories from './views/Categeories/Categeories';
import AddPerson from './views/Director/AddPerson';
import AllPerson from './views/Director/AllPerson';
import AddPackage from './views/Package/AddPackage';
import AllPackage from './views/Package/AllPackage';
import AddPublisher from './views/Publisher/AddPublisher';
import AllPublisher from './views/Publisher/AllPublisher';
import AddEpisode from './views/Web/AddEpisode';
import MyWeb from './views/Web/MyWeb';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const AllMovies = React.lazy(() => import('./views/Movies/AllMovies.js'));
const AddMovies = React.lazy(() => import('./views/Movies/AddMovies.js'));
const AddWeb =React.lazy(() => import('./views/Web/AddWeb.js'));
const AddMusic =React.lazy(()=> import('./views/Music/AddMusic.js'));
const AllMusic =React.lazy(()=> import('./views/Music/AllMusic.js'));
const AllWeb =React.lazy(()=> import('./views/Web/AllWeb.js'));
const AllTVChannel =React.lazy(()=> import('./views/TVChannel/AllLiveTv.js'));
const AddTVChannel =React.lazy(()=> import('./views/TVChannel/AddLiveTv.js'));
const MovieScrapper =React.lazy(()=>import('./views/MovieScrapper/'));
const Genre =React.lazy(()=>import('./views/Genre'));
const Slider=React.lazy(()=> import('./views/Slider/Slider'));
const AllUser=React.lazy(()=>import('./views/UserList/AllUser.js'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },


  
  {path:  '/AllMovies', name: 'AllMovies', component: AllMovies},
  { path: '/AddMovies', name: 'AddMovies', component: AddMovies },

  { path: '/AddWeb', name: 'AddTVSeries', component: AddWeb },
  { path: '/AllWeb', name: 'AllTVSeries', component: AllWeb },
  { path: '/MyWeb', name: 'My AllTVSeries', component: MyWeb },
  { path: '/AddEpisode/:id', name: 'AddEp', component: AddEpisode },

  { path: '/TVChannel', name: 'TVChannel', component: AllTVChannel, exact: true },
  { path: '/AddLiveTv', name: 'AddTVChannel', component: AddTVChannel },
  { path: '/AllLiveTv', name: 'AllTVChanel', component: AllTVChannel },

  { path: '/MovieScrapper', name: 'MovieScrapper', component: MovieScrapper, exact: true },
  { path: '/MovieScrapper', name: 'MovieScrapper', component: MovieScrapper },

  { path: '/Music', name: 'Music', component: AllMusic, exact: true },
  { path: '/AddMusic', name: 'AddMusic', component: AddMusic },
  { path: '/AllMusic', name: 'AllMusic', component: AllMusic },

  { path: '/Genre', name: 'Genre', component: Genre, exact: true },
  { path: '/Genre', name: 'Genre', component: Genre },

  { path: '/AllPerson', name: 'Director Actor', component: AllPerson, exact: true },
  { path: '/AddPerson', name: 'Director Actor', component: AddPerson, exact: true },

  { path: '/AllPublisher', name: 'Director Actor', component: AllPublisher, exact: true },
  { path: '/AddPublisher', name: 'Director Actor', component: AddPublisher, exact: true },

  {path: '/Package/AddPackage', name: 'AddPackage', component: AddPackage, exact: true},
  {path: '/Package/AllPackage', name: 'AllPackage', component: AllPackage, exact: true},

  {path: '/Slider', name: 'Sliders', component: Slider, exact: true},

  {path: '/UserList' ,name: 'User', component: AllUser, exact: true},
  
  {path: '/Categeories' ,name: 'Categeories', component: Categeories, exact: true},

];

export default routes;
