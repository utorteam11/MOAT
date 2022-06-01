const { Unit } = require('../models');

const unitData = [
  {
    unit_number: 1,
    property_id: 1,
    rent: 500,
    rent_due: 2022-01-17,
  },
  {
    unit_number: 1,
    property_id: 2,
    rent: 5004,
    rent_due: 2022-01-27,
  },
];

const unitIssues = () => Unit.bulkCreate(unitData);

module.exports = unitIssues;