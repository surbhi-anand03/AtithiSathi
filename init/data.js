const sampleListings = [
    {
        title: "Cozy Cottage in Manali",
        description: "A peaceful mountain getaway with stunning views.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Manali",
        country: "India"
    },
    {
        title: "Luxury Villa in Goa",
        description: "Beachfront villa with pool and private garden.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
        price: 7500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Modern Apartment in Mumbai",
        description: "City view apartment with modern amenities.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1560448075-bb485b067938",
        },
        price: 5000,
        location: "Mumbai",
        country: "India"
    },
    {
        title: "Traditional Haveli in Jaipur",
        description: "Experience royal living in the Pink City.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        },
        price: 3200,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Houseboat in Kerala",
        description: "Backwater cruise stay with traditional meals.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 6000,
        location: "Alleppey",
        country: "India"
    },
    {
        title: "Himalayan Cabin in Shimla",
        description: "Wooden cabin with snow views and fireplace.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2800,
        location: "Shimla",
        country: "India"
    },
    {
        title: "Penthouse in Delhi",
        description: "Luxury penthouse with skyline city views.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
        },
        price: 8200,
        location: "New Delhi",
        country: "India"
    },
    {
        title: "Heritage Haveli in Udaipur",
        description: "Stay in a royal haveli near Lake Pichola.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        },
        price: 5500,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Jungle Resort in Jim Corbett",
        description: "Nature retreat with wildlife safari packages.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        },
        price: 4300,
        location: "Jim Corbett",
        country: "India"
    },
    {
        title: "Beach Hut in Lakshadweep",
        description: "Private hut on pristine white-sand beach.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        price: 4500,
        location: "Lakshadweep",
        country: "India"
    },
    {
        title: "Tea Garden Homestay",
        description: "Tea estate views and home-cooked meals.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        price: 2200,
        location: "Darjeeling",
        country: "India"
    },
    {
        title: "Desert Camp in Jaisalmer",
        description: "Traditional tents with camel safari.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Riverside Cottage in Rishikesh",
        description: "Yoga retreat beside the Ganga river.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        },
        price: 2800,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Backpacker Hostel",
        description: "Affordable stay for travelers and nomads.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 600,
        location: "Kasol",
        country: "India"
    },
    {
        title: "Lake View Resort",
        description: "Calm lakeside resort with restaurant.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        },
        price: 3700,
        location: "Nainital",
        country: "India"
    },
    {
        title: "Cliff-side Stay",
        description: "Experience sunrise over mountains.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        },
        price: 2600,
        location: "Mussoorie",
        country: "India"
    },
    {
        title: "City Condo",
        description: "Premium condo in commercial hub.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 5200,
        location: "Bangalore",
        country: "India"
    },
    {
        title: "Mountain Stone House",
        description: "Rustic stone house for nature lovers.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        },
        price: 2000,
        location: "Mcleodganj",
        country: "India"
    },
    {
        title: "Luxury Farm Stay",
        description: "Organic farm stay with private rooms.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4200,
        location: "Pune",
        country: "India"
    },
    {
        title: "Himalayan Glamping Dome",
        description: "Luxury dome stay with snow peaks view.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4800,
        location: "Spiti Valley",
        country: "India"
    },
    {
        title: "Forest Treehouse",
        description: "Stay above trees in nature retreat.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        },
        price: 3500,
        location: "Wayanad",
        country: "India"
    },
    {
        title: "Private Island Stay",
        description: "Secluded island home with ocean views.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 9000,
        location: "Andaman",
        country: "India"
    },
    {
        title: "Hill Cabin",
        description: "Quiet cabin surrounded by pine forests.",
        category: "forest",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        },
        price: 2300,
        location: "Kasauli",
        country: "India"
    },
    {
        title: "Beach View Apartment",
        description: "Modern apartment near the ocean.",
        category: "beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Puri",
        country: "India"
    },
    {
        title: "Traditional Cottage",
        description: "Old-style mud house stay.",
        category: "domes",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Hampi",
        country: "India"
    },
    {
        title: "Eco Bamboo Cottage",
        description: "Sustainable bamboo stay by river.",
        category: "domes",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2900,
        location: "Arunachal Pradesh",
        country: "India"
    },
    {
        title: "Snow View Chalet",
        description: "Wooden chalet near ski slopes.",
        category: "mountain",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 5600,
        location: "Gulmarg",
        country: "India"
    },
    {
        title: "Rooftop Studio",
        description: "Studio with rooftop seating & city view.",
        category: "farm",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
        },
        price: 2500,
        location: "Hyderabad",
        country: "India"
    },
    {
        title: "City Riverfront Apartment",
        description: "Apartment overlooking river promenade.",
        category: "farm",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        },
        price: 3300,
        location: "Ahmedabad",
        country: "India"
    }
];

module.exports = { data: sampleListings };
