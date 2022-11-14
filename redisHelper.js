var redis = require('redis');

var client = redis.createClient();

client.on('error', function(err){

  console.log('Error in redis connection', err)

});

module.exports = {
    set: (key, data) => {
        client.set(key, JSON.stringify(data));
    },
    del: (key) => {
        client.del(key);
    },
   
    get: (key) => {
        if (key) {
            return new Promise((resolve, reject) => {
                client.get(key, (error, result) => {
                    if (error) {
                        reject(null);
                    }
                    resolve(JSON.parse(result));
                })
            })
        }
    },
    hget: (key, element) => {
        if (key && element) {
            return new Promise((resolve, reject) => {
                client.hget(key, element, (error, result) => {
                    if (error) {
                        reject(null);
                    }
                    resolve(JSON.parse(result));
                })
            })
        }
    },
    hgetall: (key) => {
        if (key && element) {
            return new Promise((resolve, reject) => {
                client.hgetall(key, (error, result) => {
                    if (error) {
                        reject(null);
                    }
                    resolve(JSON.parse(result));
                })
            })
        }
    },
    hset: (key, element, data) => {
        client.hset(key, element, data);
    },
    hdel: (key, element) => {
        client.hdel(key, element);
    },
}