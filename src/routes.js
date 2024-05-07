import Alkolsuz from "./components/Alkolsuz";
import Alkollu from "./components/alcohol/Alkollu";
import Beer from "./components/alcohol/Beer";
import Raki from "./components/alcohol/Raki";
import Vodka from "./components/alcohol/Vodka";
import Whiskey from "./components/alcohol/Whiskey";
import Drinks from "./components/mainmenu/Drinks";
import HotStarters from "./components/mainmenu/HotStarters";
import MainFoods from "./components/mainmenu/MainFoods";
import Menu from "./components/mainmenu/Menu";
import Mezeler from "./components/mainmenu/Mezeler";
import Salads from "./components/mainmenu/Salads";
import Home from "./pages/Home";


export const routes =[
    {
        path: "/",
        element:<Home></Home>
    },
    {
        path: "/menu",
        element:<Menu></Menu>
    },
    {
        path: "/menu/hotstarters",
        element:<HotStarters></HotStarters>
    },
    {
        path: "/menu/mainfoods",
        element:<MainFoods></MainFoods>
    },
    {
        path: "/menu/drinks",
        element:<Drinks></Drinks>
    },
    {
        path: "/menu/drinks/alkollu",
        element:<Alkollu></Alkollu>
    },
    {
        path: "/menu/drinks/alkollu/raki",
        element:<Raki></Raki>
    },
    {
        path: "/menu/drinks/alkollu/whiskey",
        element:<Whiskey></Whiskey>
    },
    {
        path: "/menu/drinks/alkollu/beer",
        element:<Beer></Beer>
    },
    {
        path: "/menu/drinks/alkollu/vodka",
        element:<Vodka></Vodka>
    },
    {
        path: "/menu/drinks/alkolsuz",
        element:<Alkolsuz></Alkolsuz>
    },
    {
        path: "/menu/mezeler",
        element:<Mezeler></Mezeler>
    },
    {
        path: "/menu/salads",
        element:<Salads></Salads>
    },
]