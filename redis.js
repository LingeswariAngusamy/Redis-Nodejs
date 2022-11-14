var redisHelper = require('redisHelper');


async function connect() {

    //set the value to key
    //redisHelper.set('Key', 'Value');
    await redisHelper.set('Name', 'Lings');



    //get the value using key

    let getvalue = await redisHelper.get('Name');
    console.log(getvalue)

    //delete the key 
    await redisHelper.del('Name');



    //Stores a given key-value pair in the hash.
    await redisHelper.hset('userdetails ', 'age', '12');
    await redisHelper.hset('userdetails ', 'phonenumber', '9989789999');

    // Retrieves the value corresponding to the given hash key.
    let phonenumber = await redisHelper.hget('userdetails ', 'phonenumber');
    console.log(phonenumber)


    //Searches for a given hash entry and (if it exists) deletes it.
    await redisHelper.hdel('userdetails ', 'phonenumber');

    //Returns the entire hash and its key-value pairs.
    let userdetails = await redisHelper.hgetall('userdetails')
    console.log(userdetails)

}

connect();