/**
 * Created by swa158 on 19/08/17.
 */
const db = require('./config/db'),
    express = require('./config/express');

const app = express();

// Connect to MySQL on start
db.connect(function(err) {
    if(err) {
        console.log('Unable to connect to MySQL.');
        process.exit(1);
    } else {
        app.listen(process.env.PORT, function() {
            console.log('Listening on port: ' + process.env.PORT);
        });
    }
});

new Vue({
    el: '#app',

    data: {
        users: []
    },

    mounted: function() {
        this.getUsers();
    },

    methods: {

        getUsers: function() {
            this.$http.get('https://localhost:3000/api/users')
                .then(function(response) {
                    this.users = response.data;
                }, function(error){
                    console.log(error);
            });
        }
    }
});