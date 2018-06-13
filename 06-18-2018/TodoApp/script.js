const TodoItem = {
    template:'<li>{{ todoData.name }}</li>',
    props: ['todoData']
}

const TodoList = {
    template: `<ul><todo-item v-for="todo in todoList" v-bind:todoData="todo"></todo-item></ul>`,
    data() {
        return {
            todoList: [
                {id: 1, name: 'Do Laundry'}, 
                {id: 2, name: 'Walk the dog'}, 
                {id: 3, name: 'Buy Groceries'}, 
                {id: 4, name: 'Study for Test'}
            ]
        };
    },
    components: { 'todo-item': TodoItem },
}

const app = new Vue({
    el: '#app',
    data: {
        name: 'Lenny',
        message: null,
    },
    methods: {
        clickAction: function() {
            if (this.message === null) {
                this.message = 'You clicked a button';
            }
        },  
    }, 
    components: {'todo-list': TodoList},
});


