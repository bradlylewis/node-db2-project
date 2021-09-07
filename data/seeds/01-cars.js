// STRETCH
const cars = [
    {
        vin: '4795860298134',
        make: 'ford',
        model: 'fusion',
        mileage: 120000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '9706958174567',
        make: 'jeep',
        model: 'cherokee',
        mileage: 44500
    },
    {
        vin: '7994833746509',
        make: 'dodge',
        model: 'ram',
        mileage: 320000,
        title: 'salvage',
    },
    {
        vin: '1116758947362',
        make: 'kia',
        model: 'soul',
        mileage: 123456,
        title: 'clean',
        transmission: 'automatic'
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}