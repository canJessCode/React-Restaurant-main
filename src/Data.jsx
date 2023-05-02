import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdContactPage, MdExplore } from "react-icons/md";

import { AiFillHome } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { FaIceCream } from "react-icons/fa";
import avoMaki from './assets/avoMaki.jpg'
import beancurd from './assets/beancurd.jpg'
import beancurdPrawn from './assets/beancurdPrawn.jpg'
import beancurdSalmon from './assets/beancurdSalmon.png';
import cheeseCali from './assets/cheeseCali.jpg';
import crabCali from './assets/crabCali.jpg'
import crabFashion from './assets/crabFashion.jpg'
import crabHandroll1 from './assets/crabHandroll1.jpg'
import crabMaki from './assets/crabMaki.jpg'
import crabSalad from './assets/crabSalad.jpg'
import crabSpringRolls3 from './assets/crabSpringRolls3.jpg';
import cucumberMaki from './assets/cucumberMaki.jpg'
import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";
import prawnAvo from './assets/prawnAvo.jpg';
import prawnCali from './assets/prawnCali.jpg'
import prawnFashion from './assets/prawnFashion.jpg'
import prawnMaki from './assets/prawnMaki.jpg'
import prawnNigiri from './assets/prawnNigiri.jpg'
import prawnRainbow1 from './assets/prawnRainbow1.jpg'
import prawnSpring from './assets/prawnSpring.jpg';
import salmonCaliCheese from './assets/salmonCaliCheese.jpg'
import salmonCheeseFashion from './assets/salmonCheeseFashion.jpg'
import salmonCheeseRainbow from './assets/salmonCheeseRainbow.jpg'
import salmonFashion from './assets/salmonFashion.jpg'
import salmonHandroll from './assets/salmonHandroll.jpeg';
import salmonMaki from './assets/salmonMaki.png';
import salmonNigiri from './assets/salmonNigiri.jpg'
import salmonRainbow1 from './assets/salmonRainbow1.jpg'
import salmonRoses from './assets/salmonRoses.jpg';
import salmonSashimi from './assets/salmonSashimi.jpg'
import tempuraPrawn from './assets/tempuraPrawn.jpg';
import tunaCali from './assets/tunaCali.jpg'
import tunaFashion from './assets/tunaFashion.jpg'
import tunaHandroll from './assets/tunaHandroll.jpg'
import tunaMaki from './assets/tunaMaki.jpg'
import tunaNigiri from './assets/tunaNigiri.jpg'
import tunaSashimi from './assets/tunaSashimi.jpg';
import vegCali from './assets/vegCali.jpg'
import vegFashion from './assets/vegFashion.jpg'
import vegHandroll from './assets/vegHandroll.jpg';
import vegRainbow1 from './assets/vegRainbow1.jpg';

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
];

export const recipes = [
  {
    id: 1,
    image: crabSalad,
    name: "Crab Salad",
    price: "R42",
  },
  {
    id: 2,
    image: prawnAvo,
    name: "Prawn and Avo Salad",
    price: "R52",
  },
  {
    id: 3,
    image: prawnSpring,
    name: "Prawn Spring Rolls x2",
    price: "R32",
  },
  {
    id: 4,
    image: salmonRoses,
    name: "Salmon Roses x4",
    price: "R52",
  },
  {
    id: 5,
    image: crabSpringRolls3,
    name: "Crab Spring Rolls x2",
    price: "R28",
  },
  {
    id: 6,
    image: tempuraPrawn,
    name: "Prawn Tempura x4",
    price: "R52",
  },
  {
    id: 7,
    image: tunaSashimi,
    name: "Tuna Sashimi x3",
    price: "R52",
  },
  {
    id: 8,
    image: salmonSashimi,
    name: "Salmon Sashimi x3",
    price: "R52",
  },
  {
    id: 9,
    image: tunaNigiri,
    name: "Tuna Nigiri x2",
    price: "R29",
  },
  {
    id: 10,
    image: salmonNigiri,
    name: "Salmon Nigiri x2",
    price: "R32",
  },
  {
    id: 11,
    image: prawnNigiri,
    name: "Prawn Nigiri x2",
    price: "R32",
  },
  {
    id: 12,
    image: beancurd,
    name: "Beancurd Plain x2",
    price: "R20",
  },
  {
    id: 13,
    image: beancurdPrawn,
    name: "Beancurd spicy Prawn x2",
    price: "R29",
  },
  {
    id: 13,
    image: beancurdSalmon,
    name: "Beancurd Spicy Salmon x2",
    price: "R20",
  },
  {
    id: 14,
    image: cucumberMaki,
    name: "Cucumber Maki x6",
    price: "R26",
  },
  {
    id: 14,
    image: tunaMaki,
    name: "Tuna Maki x6",
    price: "R28",
  },
  {
    id: 15,
    image: avoMaki,
    name: "Avo Maki x6",
    price: "R32",
  },
  {
    id: 15,
    image: prawnMaki,
    name: "Prawn Maki x6",
    price: "R32",
  },
  {
    id: 16,
    image: crabMaki,
    name: "Crab Maki x6",
    price: "R29",
  },
  {
    id: 17,
    image: salmonMaki,
    name: "Salmon Maki x6",
    price: "R29",
  },
  {
    id: 18,
    image: vegHandroll,
    name: "Veg Hand roll",
    price: "R32",
  },
  {
    id: 18,
    image: salmonHandroll,
    name: "Salmon Hand roll",
    price: "R42",
  },
  {
    id: 19,
    image: crabHandroll1,
    name: "Crab Hand roll",
    price: "R34",
  },
  {
    id: 20,
    image: tunaHandroll,
    name: "Tuna Hand roll",
    price: "R34",
  },
  {
    id: 21,
    image: vegCali,
    name: "Veg California roll x8",
    price: "R44",
  },
  {
    id: 22,
    image: prawnCali,
    name: "Prawn California roll x8",
    price: "R59",
  },
  {
    id: 23,
    image: crabCali,
    name: "Crab California roll",
    price: "R34",
  },
  {
    id: 24,
    image: tunaCali,
    name: "Tuna California roll",
    price: "R59",
  },
  {
    id: 25,
    image: cheeseCali,
    name: "Prawn and Cheese California roll",
    price: "R60",
  },
  {
    id: 26,
    image: salmonCaliCheese,
    name: "Smoked Salmon and Cream Cheese California roll",
    price: "R60",
  }, {
    id: 27,
    image: vegRainbow1,
    name: "Veg Rainbow roll x8",
    price: "R56",
  },
  {
    id: 28,
    image: prawnRainbow1,
    name: "Prawn Rainbow roll",
    price: "R70",
  },
  {
    id: 29,
    image: salmonRainbow1,
    name: "Salmon Rainbow roll",
    price: "R69",
  },
  {
    id: 30,
    image: salmonCheeseRainbow,
    name: "Salmon and cream cheese Rainbow roll",
    price: "R70",
  },
  {
    id: 31,
    image: vegFashion,
    name: "Veg Fashion Sandwich x8",
    price: "R49",
  },
  {
    id: 32,
    image: salmonFashion,
    name: "Salmon Fashion Sandwich x8",
    price: "R69",
  },
  {
    id: 32,
    image: crabFashion,
    name: "Crab Fashion Sandwich x8",
    price: "R58",
  },
  {
    id: 32,
    image: tunaFashion,
    name: "Tuna Fashion Sandwich x8",
    price: "R69",
  },
  {
    id: 33,
    image: prawnFashion,
    name: "Prawn Fashion Sandwich x8",
    price: "R69",
  },
  {
    id: 33,
    image: salmonCheeseFashion,
    name: "Salmon with cream cheese Fashion Sandwich x8",
    price: "R70",
  },

];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "044-873-2595",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "107 York Street, George, Western Cape",
  },

];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "recipe",
    text: "Recipe",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
