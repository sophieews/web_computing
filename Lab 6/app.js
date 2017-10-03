const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        visible: true,
        shopping_list: [
            {name: 'bread', price: 2.75},
            {name: 'milk', price: 2.50},
            {name: 'pasta', price: 1.99}
        ]
    },
    methods: {
        calculateTotal: function() {
            var total = 0;
            for(var i=0; i < this.shopping_list.length; i++){
                total += this.shopping_list[i].price;
            }
            return total;
        }
    }
});

