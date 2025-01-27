const express = require('express');
const app = express();
const path = require('path');

// Set up view engine and static files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes for main pages
app.get('/', (req, res) => {
    const cars = getCars();  // Get cars data
    res.render('index', { cars });  // Pass cars to the view
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Car details route
app.get('/car/:id', (req, res) => {
    const carId = req.params.id;
    const carDetails = getCarDetailsById(carId);
    res.render('car-details', { car: carDetails });
});

// Function to fetch car details by ID
function getCarDetailsById(id) {
    const cars = getCars();
    return cars.find(car => car.id === id);
}

// Function to fetch the list of all cars
function getCars() {
    return [
        { 
            id: '1', 
            model: 'Lamborghini Urus', 
            description: 'The Lamborghini Urus is a luxury SUV that blends sportiness and practicality.',
            price: '$225,000', 
            year: 2023,
            manufacturer: 'Lamborghini',
            engine: '4.0L Twin-Turbo V8',
            horsepower: '650 HP',
            topSpeed: '190 mph',
            acceleration: '0-60 mph in 3.6 seconds',
            images: [
                'https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-urus-performante-141-1665754343.jpg?crop=1xw:1xh;center,top&resize=980:*',
                'https://images.unsplash.com/photo-1565826641-f8708db5fd09'
            ]
        },
        { 
            id: '2', 
            model: 'Lamborghini Terzo Millennio', 
            description: 'The Lamborghini Terzo Millennio is a futuristic concept car with cutting-edge technology.',
            price: '$3,000,000', 
            year: 2025,
            manufacturer: 'Lamborghini',
            engine: 'Electric (Concept)',
            horsepower: 'TBD',
            topSpeed: 'TBD',
            acceleration: 'TBD',
            images: [
                'https://upload.wikimedia.org/wikipedia/commons/d/dc/Festival_automobile_international_2018_-_Lamborghini_Terzo_Millennio_-_015_(cropped).jpg'
            ]
        },
        { 
            id: '3', 
            model: 'Toyota Supra', 
            description: 'The Toyota Supra is a legendary sports car with a turbocharged engine and aggressive design.',
            price: '$50,000', 
            year: 2023,
            manufacturer: 'Toyota',
            engine: '3.0L Turbo I6',
            horsepower: '382 HP',
            topSpeed: '155 mph',
            acceleration: '0-60 mph in 4.1 seconds',
            images: [
                'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/04/972350.jpg'
            ]
        },
        { 
            id: '4', 
            model: 'Ford Mustang', 
            description: 'The Ford Mustang is an American muscle car known for its powerful engines and iconic design.',
            price: '$55,000', 
            year: 2023,
            manufacturer: 'Ford',
            engine: '5.0L V8',
            horsepower: '450 HP',
            topSpeed: '155 mph',
            acceleration: '0-60 mph in 4.2 seconds',
            images: [
                'https://www.rosevillemidwayford.com/inventoryphotos/10625/1fa6p8cfxr5424604/ip/1.jpg?timestamp=2024-11-24T01:28:02Z&bg-color=FFFFFF&width=800%20800w'
            ]
        },
        { 
            id: '5', 
            model: 'Porsche 911 GT3 RS', 
            description: 'The Porsche 911 GTR is a high-performance sports car with a turbocharged engine and unmatched precision.',
            price: '$200,000', 
            year: 2023,
            manufacturer: 'Porsche',
            engine: '4.0L Twin-Turbo Flat-6',
            horsepower: '520 HP',
            topSpeed: '205 mph',
            acceleration: '0-60 mph in 3.1 seconds',
            images: [
                'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/11/porsche-911-gt3-rs-facelift-003.jpg'
            ]
        },
        { 
            id: '6', 
            model: 'Nissan GTR', 
            description: 'The Nissan GT-R is a highly capable and fast sports car with exceptional handling and speed.',
            price: '$115,000', 
            year: 2023,
            manufacturer: 'Nissan',
            engine: '3.8L Twin-Turbo V6',
            horsepower: '565 HP',
            topSpeed: '196 mph',
            acceleration: '0-60 mph in 3.0 seconds',
            images: [
                'https://images.hgmsites.net/med/nissan-gt-r_100758126_m.jpg'
            ]
        },
        { 
            id: '7', 
            model: 'McLaren Senna', 
            description: 'The McLaren Senna is a hypercar with a track-ready design and incredible speed.',
            price: '$1,000,000', 
            year: 2023,
            manufacturer: 'McLaren',
            engine: '4.0L Twin-Turbo V8',
            horsepower: '800 HP',
            topSpeed: '208 mph',
            acceleration: '0-60 mph in 2.7 seconds',
            images: [
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/_06i9850b.jpg?itok=p7WkxyS-'
            ]
        },
        { 
            id: '8', 
            model: 'Apollo IE', 
            description: 'The Apollo is a stunning supercar known for its beautiful curves and blistering performance.',
            price: '$250,000', 
            year: 2023,
            manufacturer: 'Apollo Automobil',
            engine: '4.0L Twin-Turbo V8',
            horsepower: '600 HP',
            topSpeed: '190 mph',
            acceleration: '0-60 mph in 3.0 seconds',
            images: [
                'https://exclusivecarregistry.com/render-images?imgid=157595'
            ]
        },
        { 
            id: '9', 
            model: 'BMW M4', 
            description: 'The BMW M4 is a performance-oriented luxury coupe known for its power and agile handling.',
            price: '$75,000', 
            year: 2023,
            manufacturer: 'BMW',
            engine: '3.0L Twin-Turbo I6',
            horsepower: '473 HP',
            topSpeed: '155 mph',
            acceleration: '0-60 mph in 3.8 seconds',
            images: [
                'https://hips.hearstapps.com/hmg-prod/images/2022-bmw-m4-front-three-quarters-64075157a1722.jpg?crop=1.00xw:0.751xh;0,0.249xh&resize=300:*'
            ]
        },
        { 
            id: '10', 
            model: 'Mercedes G-Wagon', 
            description: 'The Mercedes G-Wagon is a luxury SUV combining off-road capabilities with opulent features.',
            price: '$130,000', 
            year: 2023,
            manufacturer: 'Mercedes-Benz',
            engine: '4.0L Twin-Turbo V8',
            horsepower: '577 HP',
            topSpeed: '130 mph',
            acceleration: '0-60 mph in 4.5 seconds',
            images: [
                'https://i.insider.com/5952995ea3630f950f8b52c0?width=700'
            ]
        }
    ];
}

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
