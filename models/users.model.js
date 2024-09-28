const {v4: uuidv4}=require("uuid");

const users=[
    {
        id:uuidv4(),
        username:"fahim faysal",
        email:"fahimbafu@gmail.com",
    },

    {
        id:uuidv4(),
        username:"jarin tasnim",
        email:"jarinmoni@gamil.com",
    },
]

module.exports=users;
