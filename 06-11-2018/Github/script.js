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
                const that = this;
                axios.get(apiUrl).then(function(response) {
                    console.log(response);
                    that.login = response.data.login;
                }, function(err) {
                    console.log(err);
                });
            }
            else {
                // show validation
            }
        },
    }
});

