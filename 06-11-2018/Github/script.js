const app = new Vue({
    el: '#app',
    data: {
        username: '',
        login: null,
    },
    methods: {
        search() {
            if (this.username.length > 0) {
                const apiUrl = 'https://api.github.com/users/' + this.username;
                axios.get(apiUrl).then(function(response) {
                    this.login = response.data.login;
                }, (err) => {
                    console.log(err);
                });
            }
            else {
                // show validation
            }
        },
    }
});

