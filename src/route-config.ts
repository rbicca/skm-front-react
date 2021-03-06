import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGeres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movieTheaters/CreateMovieTheater";
import EditMovieTheater from "./movieTheaters/EditMovieTheater";
import IndexMovieTheaters from "./movieTheaters/IndexMovieTheaters";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    { path: '/', component: LandingPage, exact: true },
    
    { path: '/genres', component: IndexGenres, exact: true },
    { path: '/genres/create', component: CreateGenre },
    { path: '/genres/edit/:id(\\d+)', component: EditGenre},

    { path: '/actors', component: IndexActors, exact: true },
    { path: '/actors/create', component: CreateActor },
    { path: '/actors/edit/:id(\\d+)', component: EditActor},

    { path: '/movieTheaters', component: IndexMovieTheaters, exact: true },
    { path: '/movieTheaters/create', component: CreateMovieTheater },
    { path: '/movieTheaters/edit/:id(\\d+)', component: EditMovieTheater},

    { path: '/movies/create', component: CreateMovie },
    { path: '/movies/edit/:id(\\d+)', component: EditMovie },
    { path: '/movies/filter', component: FilterMovies},

    { path: '*', component: RedirectToLandingPage}

];

export default routes;