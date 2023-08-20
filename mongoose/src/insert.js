const dbconnect = require('./app');


const insertData = async ()=>{
let data = await  dbconnect();
let result  = await data.insert([
    {name:"singh",address:"bhangel",pincode:203464}
])

if(result.acknowledged)
  {
      console.log("data is inserted")
  }

}

module.exports = insertData;