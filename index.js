const getRequest = fetch('http://jsonplaceholder.typicode.com/users')
    .then(function (resp) {

        return resp.json()
    })
    .then(function (data) {

        const userFullNames = data.map(user => `${user.name} ${user.username}`);

        for (let x = 0; x < 2; x++) {
            let rnd = Math.floor(Math.random() * 10);
            if (userFullNames.length > 8) {
                rnd -= 1;
            }
            userFullNames.splice(rnd, 1)
        }
        console.log('userFullNames', userFullNames)
        return userFullNames;

    })
    .catch(function (error) {
        console.log('error', error);
    });
    
