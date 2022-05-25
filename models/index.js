const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const RentalUnit = require('./RentalUnit');


// insert model associations

Landlord.hasMany(Tenant, {
    foreignKey: 'landlord_id'
});

