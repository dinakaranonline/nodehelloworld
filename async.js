console.log('before');
console.log('after');

console.log('before 1');
//Callback Example
function getUser(id, callback) {
    setTimeout(() => {
        console.log('fetching data from database.....');
        let user = { id: 1, name: 'dinakaran' };
        callback(user);
    }, 2000);
};

//callback example
getUser('1', function (user) {
    console.log(`user is : ${JSON.stringify(user)}`);
});

console.log('after 1');