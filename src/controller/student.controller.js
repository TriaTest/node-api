
const getList = async (req, res) => {
  let data = [
    {
        id : 1,
        name: "Sok Dara",
        gender: "Male",
        age: 22
    },
    {
        id : 2,
        name: "Van Vuthy",
        gender: "Male",
        age: 25
    }
]
res.send(data)
/*
res.json({
  list: data,
});*/
};



module.exports = {
  getList,
};
