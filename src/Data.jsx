import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdContactPage, MdExplore } from "react-icons/md";

import { AiFillHome } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { FaIceCream } from "react-icons/fa";
import avoMaki from './assets/avoMaki.jpg'
import bambooRoll from './assets/bambooRoll.jpg'
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
import crispyPrawn from './assets/crispyPrawn.jpg'
import crispyPrawnFashion from './assets/cripsyPrawnFashion.jpg'
import crispySalmon from './assets/crispySalmon.jpg'
import crispySalmonFashion from './assets/crispySalmonFashion.jpg'
import crispyTuna from './assets/cripsyTuna.jpg'
import cucumberMaki from './assets/cucumberMaki.jpg'
import dragon from './assets/dragon.jpg';
import michealsCali from './assets/michealsCali.jpg';
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
import prawnSalmonRose from './assets/prawnSalmonRose.jpg'
import prawnSpring from './assets/prawnSpring.jpg';
import prawnTempuraCali from './assets/prawnTempuraCali.jpg'
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
import tempuraPrawnCali from './assets/tempuraPrawnCali.jpg'
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
import wasabiParcel from './assets/wasabiParcel.jpg';

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
    mainIngredient: ["crab"],
  },
  {
    id: 2,
    image: prawnAvo,
    name: "Prawn and Avo Salad",
    price: "R52",
    mainIngredient: ["prawn"],
  },
  {
    id: 3,
    image: prawnSpring,
    name: "Prawn Spring Rolls x2",
    price: "R32",
    mainIngredient: ["prawn"],
  },
  {
    id: 4,
    image: salmonRoses,
    name: "Salmon Roses x4",
    price: "R52",
    mainIngredient: ["salmon"],
  },
  {
    id: 5,
    image: crabSpringRolls3,
    name: "Crab Spring Rolls x2",
    price: "R28",
    mainIngredient: ["crab"],
  },
  {
    id: 6,
    image: tempuraPrawn,
    name: "Prawn Tempura x4",
    price: "R52",
    mainIngredient: ["prawn"],
  },
  {
    id: 7,
    image: tunaSashimi,
    name: "Tuna Sashimi x3",
    price: "R52",
    mainIngredient: ["tuna"],
  },
  {
    id: 8,
    image: salmonSashimi,
    name: "Salmon Sashimi x3",
    price: "R52",
    mainIngredient: ["salmon"],
  },
  {
    id: 9,
    image: tunaNigiri,
    name: "Tuna Nigiri x2",
    price: "R29",
    mainIngredient: ["tuna"],
  },
  {
    id: 10,
    image: salmonNigiri,
    name: "Salmon Nigiri x2",
    price: "R32",
    mainIngredient: ["salmon"],
  },
  {
    id: 11,
    image: prawnNigiri,
    name: "Prawn Nigiri x2",
    price: "R32",
    mainIngredient: ["prawn"],
  },
  {
    id: 12,
    image: beancurd,
    name: "Beancurd Plain x2",
    price: "R20",
    mainIngredient: ["veg"],
  },
  {
    id: 13,
    image: beancurdPrawn,
    name: "Beancurd spicy Prawn x2",
    price: "R29",
    mainIngredient: ["prawn"],
  },
  {
    id: 14,
    image: beancurdSalmon,
    name: "Beancurd Spicy Salmon x2",
    price: "R20",
    mainIngredient: ["salmon"],
  },
  {
    id: 15,
    image: cucumberMaki,
    name: "Cucumber Maki x6",
    price: "R26",
    mainIngredient: ["veg"],
  },
  {
    id: 16,
    image: tunaMaki,
    name: "Tuna Maki x6",
    price: "R28",
    mainIngredient: ["tuna"],
  },
  {
    id: 17,
    image: avoMaki,
    name: "Avo Maki x6",
    price: "R32",
    mainIngredient: ["veg"],

  },
  {
    id: 18,
    image: prawnMaki,
    name: "Prawn Maki x6",
    price: "R32",
    mainIngredient: ["prawn"],

  },
  {
    id: 19,
    image: crabMaki,
    name: "Crab Maki x6",
    price: "R29",
    mainIngredient: ["crab"],

  },
  {
    id: 20,
    image: salmonMaki,
    name: "Salmon Maki x6",
    price: "R29",
    mainIngredient: ["salmon"],

  },
  {
    id: 21,
    image: vegHandroll,
    name: "Veg Hand roll",
    price: "R32",
    mainIngredient: ["veg"],

  },
  {
    id: 22,
    image: salmonHandroll,
    name: "Salmon Hand roll",
    price: "R42",
    mainIngredient: ["salmon"],

  },
  {
    id: 23,
    image: crabHandroll1,
    name: "Crab Hand roll",
    price: "R34",
    mainIngredient: ["crab"],

  },
  {
    id: 24,
    image: tunaHandroll,
    name: "Tuna Hand roll",
    price: "R34",
    mainIngredient: ["tuna"],

  },
  {
    id: 25,
    image: vegCali,
    name: "Veg California roll x8",
    price: "R44",
    mainIngredient: ["veg"],

  },
  {
    id: 26,
    image: prawnCali,
    name: "Prawn California roll x8",
    price: "R59",
    mainIngredient: ["prawn"],

  },
  {
    id: 27,
    image: crabCali,
    name: "Crab California roll",
    price: "R34",
    mainIngredient: ["crab"],

  },
  {
    id: 28,
    image: tunaCali,
    name: "Tuna California roll",
    price: "R59",
    mainIngredient: ["tuna"],

  },
  {
    id: 29,
    image: cheeseCali,
    name: "Prawn and Cheese California roll",
    price: "R60",
    mainIngredient: ["prawn"],
  },
  {
    id: 30,
    image: salmonCaliCheese,
    name: "Smoked Salmon and Cream Cheese California roll",
    price: "R60",
    mainIngredient: ["salmon"],
  }, {
    id: 31,
    image: vegRainbow1,
    name: "Veg Rainbow roll x8",
    price: "R56",
    mainIngredient: ["veg"],
  },
  {
    id: 32,
    image: prawnRainbow1,
    name: "Prawn Rainbow roll",
    price: "R70",
    mainIngredient: ["prawn"],
  },
  {
    id: 33,
    image: salmonRainbow1,
    name: "Salmon Rainbow roll",
    price: "R69",
    mainIngredient: ["salmon"],
  },
  {
    id: 34,
    image: salmonCheeseRainbow,
    name: "Salmon and cream cheese Rainbow roll",
    price: "R70",
    mainIngredient: ["salmon"],
  },
  {
    id: 35,
    image: vegFashion,
    name: "Veg Fashion Sandwich x8",
    price: "R49",
    mainIngredient: ["veg"],
  },
  {
    id: 36,
    image: salmonFashion,
    name: "Salmon Fashion Sandwich x8",
    price: "R69",
    mainIngredient: ["salmon"],
  },
  {
    id: 37,
    image: crabFashion,
    name: "Crab Fashion Sandwich x8",
    price: "R58",
    mainIngredient: ["crab"],
  },
  {
    id: 38,
    image: tunaFashion,
    name: "Tuna Fashion Sandwich x8",
    price: "R69",
    mainIngredient: ["tuna"],
  },
  {
    id: 39,
    image: prawnFashion,
    name: "Prawn Fashion Sandwich x8",
    price: "R69",
    mainIngredient: ["prawn"],
  },
  {
    id: 40,
    image: salmonCheeseFashion,
    name: "Salmon & cream cheese Fashion Sandwich x8",
    price: "R70",
    mainIngredient: ["salmon"],
  },
  {
    id: 41,
    image: wasabiParcel,
    name: "Wasabi Parcels x3",
    price: "R39",
    mainIngredient: ["veg"],
  },
  {
    id: 42,
    image: bambooRoll,
    name: "Bamboo Roll x4",
    price: "R49",
    mainIngredient: ["veg"],
  },
  {
    id: 43,
    image: prawnSalmonRose,
    name: "Prawn and salmon roses x3",
    price: "R52",
    mainIngredient: ["salmon", "prawn"],
  },
  {
    id: 44,
    image: prawnTempuraCali,
    name: "Prawn Tempura california roll x8",
    price: "R62",
    mainIngredient: ["prawn"],
  },
  {
    id: 45,
    image: crispyTuna,
    name: "Crispy tuna california roll x8",
    price: "R72",
    mainIngredient: ["tuna"],
  },
  {
    id: 46,
    image: crispyPrawn,
    name: "Crispy Prawn California roll x8",
    price: "R72",
    mainIngredient: ["prawn"],
  },
  {
    id: 47,
    image: crispySalmon,
    name: "Crispy Salmon California rolls x8",
    price: "R72",
    mainIngredient: ["salmon"],
  },
  {
    id: 48,
    image: crispySalmonFashion,
    name: "Crispy Salmon Fashion Sandwich x8",
    price: "R76",
    mainIngredient: ["salmon"],
  },
  {
    id: 49,
    image: crispyPrawnFashion,
    name: "Crispy Prawn Fashion sandwich x8",
    price: "R76",
    mainIngredient: ["prawn"],
  },
  {
    id: 50,
    image: tempuraPrawnCali,
    name: "Michael's tempura prawn california roll x8",
    price: "R72",
    mainIngredient: ["prawn"],
  },
  {
    id: 51,
    image: michealsCali,
    name: "Michael's rainbow roll x8",
    price: "R76",
    mainIngredient: ["salmon"],
  },
  {
    id: 52,
    image: dragon,
    name: "Dragon roll x8",
    price: "R85",
    mainIngredient: ["salmon"],
  },

];

export const footerSocials = [<BsFacebook />];
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
