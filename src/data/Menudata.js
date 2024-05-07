import anayemeklerimg from "../img/Anayemekler.jpg"
import arasicakimg from "../img/arasicak.jpg"
import mezelerimg from "../img/mezeler.jpg"
import salataimg from "../img/Salatalar.jpg"
import drinksimg from "../img/drinks.jpg"
import rakiimg from "../img/raki.jpg"
import whiskeyimg from "../img/whiskey.jpg"
import beerimg from "../img/bira.png"
import vodkaimg from "../img/vodka.jpg"
export const menuItems = [
    {
      mainmenus:[
         {
        id: 1,
        name: 'mainfoods',
        img:anayemeklerimg,
        route:'mainfoods'
      },
      {
        id: 2,
        name: 'hotstarters',
        img:arasicakimg,
        route:'hotstarters'
      },
      {
        id: 3,
        name: 'mezeler',
        img:mezelerimg,
        route:'mezeler'
      },
      {
        id: 4,
        name: 'salads',
        img:salataimg,
        route:'salads'
      },
      {
        id: 5,
        name: 'drinks',
        img:drinksimg,
        route:'drinks'
      }
    ],
    alkolmenus:[
      {
     id: 1,
     name: 'raki',
     img:rakiimg,
     route:'raki'
   },
   {
     id: 2,
     name: 'whiskey',
     img:whiskeyimg,
     route:'whiskey'
   },
   {
     id: 3,
     name: 'beer',
     img:beerimg,
     route:'beer'
   },
   {
     id: 4,
     name: 'vodka',
     img:vodkaimg,
     route:'vodka'
   },
 ],
    }
   
  ];
  
