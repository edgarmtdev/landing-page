import renderCarrousel from "../carrousel/index";
import renderPlans from "../plans/index";

const data = [
  {
    name: "Dessert",
    img: "https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?cs=srgb&dl=pexels-pixabay-461956.jpg&fm=jpg",
  },
  {
    name: "Ligths",
    img: "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?cs=srgb&dl=pexels-visit-greenland-360912.jpg&fm=jpg",
  },
  {
    name: "Beach",
    img: "https://images.pexels.com/photos/8650280/pexels-photo-8650280.jpeg?cs=srgb&dl=pexels-jess-loiterton-8650280.jpg&fm=jpg",
  },
  {
    name: "Mountain",
    img: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-roberto-nickson-2559941.jpg&fm=jpg",
  },
];

const plans = [
  {
    title: "Venecia, Italy",
    description: "A week traveling the streets of Italy.",
    date: new Date(),
    img: "https://images.pexels.com/photos/12382781/pexels-photo-12382781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    days: 7,
    price: 600,
  },
  {
    title: "Paris, Francia",
    description: "Enjoy the city of love for 5 days.",
    date: new Date(new Date().setDate(new Date().getDate() + 24)),
    img: "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=600",
    days: 5,
    price: 400,
  },
  {
    title: "Rome, Italy",
    description: "Visita el pasado de la humanidad ",
    date: new Date(new Date().setDate(new Date().getDate() + 28)),
    img: "https://images.pexels.com/photos/3757139/pexels-photo-3757139.jpeg?auto=compress&cs=tinysrgb&w=600",
    days: 5,
    price: 400,
  },
  {
    title: "Pisa, Italy",
    description: "Learn about the history of the mythical leaning tower.",
    date: new Date(new Date().setDate(new Date().getDate() + 56)),
    img: "https://images.pexels.com/photos/5538432/pexels-photo-5538432.jpeg?auto=compress&cs=tinysrgb&w=600",
    days: 5,
    price: 400,
  },
];

renderCarrousel(data);
renderPlans(plans);