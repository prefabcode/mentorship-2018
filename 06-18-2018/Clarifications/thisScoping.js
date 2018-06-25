// the point: "this" always points to what is to the left of the dot.

const vueInit = {
    el: '#el',
    data: {
        xhrData: {id: 5, userName: 'lenny'}
    },
    methods: {
        funcOne: function() {
            console.log(this);
            function InternalFuncOne() {

            }
            InternalFuncOne();
        },
        name: 'Lennie',
    }
}

vueInit.methods.funcOne();

const vueInstance = new Vue(vueInit);
vueInstance.funcOne();

function Vue(init) {
    this.el = init.el;
    
    for (let prop in init.data) {
        if (init.data.hasOwnProperty(prop)) {
            this[prop] = init.data[prop];
        }
    }

    for (let prop in init.methods) {
        if (init.methods.hasOwnProperty(prop)) {
            this[prop] = init.methods[prop];
        }
    }

    return this;
}



