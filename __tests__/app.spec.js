const {getData} = require('./app');

test("Fetch data", async()=> {
    const res = await getData();
    console.log(res)
})