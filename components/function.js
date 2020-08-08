
    export getJson = () => {
        fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6d991e78b8msh69c679f3d407ba3p1d8966jsna6f58b6b7240"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
        });
    }

    // _getCountry = () => {
        
    //     fetch("https://covid-193.p.rapidapi.com/history?day=2020-06-02&country=togo", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "covid-193.p.rapidapi.com",
    //             "x-rapidapi-key": "6d991e78b8msh69c 679f3d407ba3p1d8966jsna6f58b6b7240"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }