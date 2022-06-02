const { Property } = require('../models');

const propertyData = [
  {
    address: '20 yonge st',
    nickname: 'Hasan place',
    landlord_id: 1
  },
  {
    address: '20 finch ave',
    nickname: 'Kevin place',
    landlord_id: 2
  },
];

const seedProperties= () => Property.bulkCreate(propertyData);

module.exports = seedProperties;