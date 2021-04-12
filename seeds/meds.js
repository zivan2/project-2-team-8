const {Meds} = require("../models")

const medsData = [
    {
    "medName": "drug",
    "dosage": "200mg",
    "medRegimen": "take twice daily with food",
    "medLength": "14",
    "sideEffects": "Drowsiness",
    "medRefill": "false",
    "user_id": "1"
    }
]

const seedMeds = () => Meds.bulkCreate(medsData)
console.log('seedMeds')
module.exports = seedMeds;






