const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const RentalUnit = require('./RentalUnit');
const Issue = require('./Issue');


// insert model associations

// landlord tenant relationship
Landlord.hasMany(Tenant, {
    foreignKey: 'landlord_id'
});

Tenant.belongsTo(Landlord, {
    foreignKey: 'landlord_id'
});


// landlord rental relationship
Landlord.hasMany(RentalUnit, {
    foreignKey: 'landlord_id'
});

RentalUnit.belongsTo(Landlord, {
    foreignKey: 'landlord_id'
});

// tenant rental relationship
RentalUnit.hasMany(Tenant, {
    foreignKey: 'rental_id'
});

Tenant.belongsTo(RentalUnit, {
    foreignKey: 'rental_id'
});

// issue relationships

Tenant.hasMany(Issue, {
    foreignKey: 'tenant_id'
});

Issue.belongsTo(Tenant, {
    foreignKey: 'tenant_id'
});

RentalUnit.hasMany(Issue, {
    foreignKey: 'rental_id'
});

Issue.belongsTo(RentalUnit, {
    foreignKey: 'rental_id'
});

Landlord.hasMany(Issue, {
    foreignKey: 'landlord_id'
});

Issue.belongsTo(Landlord, {
    foreignKey: 'landlord_id'
})

module.exports = { Landlord, Tenant , RentalUnit, Issue}