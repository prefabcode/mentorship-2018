const app = new Vue({
    el: '#app',
    data: {
        name: 'Lenny',
        todoList: ['Do Laundry', 'Walk the dog', 'Buy Groceries', 'Study for test'],
        message: null,
        myFunc: function() {
            console.log('function invoked');
            this.name = 'Wong';
        },
    },
    methods: {
        clickAction: function() {
            if (this.message === null) {
                this.message = 'You clicked a button';
            }
        }  
    }
});

console.log(app);


// show app.todoList.push().