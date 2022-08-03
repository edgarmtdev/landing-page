import renderCarrousel from '../carrousel/index';

const data = [
    {
        name: 'Dessert',
        img: 'https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?cs=srgb&dl=pexels-pixabay-461956.jpg&fm=jpg'
    },
    {
        name: 'Ligths',
        img: 'https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?cs=srgb&dl=pexels-visit-greenland-360912.jpg&fm=jpg'
    },
    {
        name: 'Beach',
        img: 'https://images.pexels.com/photos/8650280/pexels-photo-8650280.jpeg?cs=srgb&dl=pexels-jess-loiterton-8650280.jpg&fm=jpg'
    },
    {
        name: 'Mountain',
        img: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-roberto-nickson-2559941.jpg&fm=jpg'
    },
]

renderCarrousel(data)