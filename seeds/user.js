const {User} = require("../models");

const userData = [
    {        
        username: "user",
        email: "sampleEmail@gmail.com",
        password: "userpwd1"
    
    },
    {        
        username: "user2",
        email: "sample2Email@gmail.com",
        password: "userpwd2"
    
    }
]

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
module.exports = seedUser;


