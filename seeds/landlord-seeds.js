const { Landlord } = require('../models');

const landlordData = [
  {
    first_name: 'Taif',
    last_name: 'Hasanf',
    email: "taihasasdfn@gmail.com",
    password: "12345621789",
  },
  {
    first_name: 'Kevin',
    last_name: 'Fang',
    email: "kevinfang@hotmail.com",
    password: "qwertyuio",
  },
];

const seedLandlords= () => Landlord.bulkCreate(landlordData);

module.exports = seedLandlords;