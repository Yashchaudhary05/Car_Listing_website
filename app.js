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
        { id: '1', model: 'Lamborghini Urus', description: 'The Lamborghini Urus is a luxury SUV that blends sportiness and practicality.', price: '$225,000', images: ['https://images.unsplash.com/photo-1562635020-d4b19b35b9b3', 'https://images.unsplash.com/photo-1565826641-f8708db5fd09'] },
        { id: '2', model: 'Lamborghini Terzo Millennio', description: 'The Lamborghini Terzo Millennio is a futuristic concept car with cutting-edge technology.', price: '$3,000,000', images: ['https://images.unsplash.com/photo-1512042757589-5b619be14a51'] },
        { id: '3', model: 'Toyota Supra', description: 'The Toyota Supra is a legendary sports car with a turbocharged engine and aggressive design.', price: '$50,000', images: ['https://images.unsplash.com/photo-1556742046-7a462c2b5f8d', 'https://images.unsplash.com/photo-1560921862-b458fe459f98'] },
        { id: '4', model: 'Ford Mustang', description: 'The Ford Mustang is an American muscle car known for its powerful engines and iconic design.', price: '$55,000', images: ['https://images.unsplash.com/photo-1574202898666-2d01ff399fc3', 'https://images.unsplash.com/photo-1562078582-8cf24e6b33d0'] },
        { id: '5', model: 'Porsche 911 GTR', description: 'The Porsche 911 GTR is a high-performance sports car with a turbocharged engine and unmatched precision.', price: '$200,000', images: ['https://images.unsplash.com/photo-1563648753-d945d11fdb1e', 'https://images.unsplash.com/photo-1564610000-59f1d52b8b9a'] },
        { id: '6', model: 'Nissan GTR', description: 'The Nissan GT-R is a highly capable and fast sports car with exceptional handling and speed.', price: '$115,000', images: ['https://images.unsplash.com/photo-1544461101-8fc96c53d6b9'] },
        { id: '7', model: 'McLaren 720S', description: 'The McLaren 720S is a high-performance supercar with a lightweight carbon fiber body and turbocharged engine.', price: '$300,000', images: ['https://images.unsplash.com/photo-1572162795-54e62fdd199f'] }
    ];
}

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
