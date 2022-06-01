const { Tenant } = require('../models');

const tenantData = [
  {
    first_name: 'Mike',
    last_name: 'Yomi',
    email: "mikeyomi@gmail.com",
    password: "1274868732",
    unit_id: 1
  },
  {
    first_name: 'Scott',
    last_name: 'Adkins',
    email: "scottadkins@gmail.com",
    password: "1274868732sdfa",
    unit_id: 2
  },
];

const tenantIssues = () => Tenant.bulkCreate(tenantData);

module.exports = tenantIssues;