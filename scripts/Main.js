document.addEventListener('alpine:init', () => {
    // Product list
    Alpine.data('products', () => ({
        items: [
            { id: 1, type: 'Video_card', brand: 'nvidia', name: 'Nvidia RTX 5090', img: 'RTX 5090.png', price: '$500', diskonpersen: '-25%', startingprice: '$650' },
            { id: 2, type: 'mouse', brand: 'razer', name: 'Razer DeathAdder V3 Pro', img: 'Razer Viper V3 Pro.png', price: '$200', diskonpersen: '-15%', startingprice: '$245' },
            { id: 3, type: 'headphone', brand: 'sony', name: 'Sony Inzone H9', img: 'Sony INZONE H9.png', price: '$160', diskonpersen: '-25%', startingprice: '$210' },
            { id: 4, type: 'processor', brand: 'intel', name: 'Intel Core i9-285K', img: 'core_9_285K.png', price: '$250', diskonpersen: '-25%', startingprice: '$280' },
            { id: 5, type: 'keyboard', brand: 'keychron', name: 'Keychron Q1 Max', img: 'Keychron Q1 Max.png', price: '$350', diskonpersen: '-25%', startingprice: '$400' },
        ],
    }));

    // Cart system
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        saldo: 1000, // Misalnya saldo awal pengguna adalah $1000

        add(newItem) {
            const found = this.items.find(item => item.id === newItem.id);
            const numericPrice = parseFloat(newItem.price.replace('$', ''));

            if (found) {
                // If item already exists, just increase qty
                found.qty += 1;
            } else {
                // New item: add qty property
                this.items.push({ ...newItem, qty: 1 });
            }

            this.quantity++;
            this.total += numericPrice;
        },

        increment(item) {
            item.qty++;
            const numericPrice = parseFloat(item.price.replace('$', ''));
            this.quantity++;
            this.total += numericPrice;
        },

        decrement(item) {
            if (item.qty > 1) {
                item.qty--;
                const numericPrice = parseFloat(item.price.replace('$', ''));
                this.quantity--;
                this.total -= numericPrice;
            } else {
                this.remove(item);
            }
        },

        remove(item) {
            const index = this.items.indexOf(item);
            if (index > -1) {
                const numericPrice = parseFloat(item.price.replace('$', '')) * item.qty;
                this.quantity -= item.qty;
                this.total -= numericPrice;
                this.items.splice(index, 1);
            }
        },

        clear() {
            this.items = [];
            this.total = 0;
            this.quantity = 0;
        },

    });

    Alpine.store('payment', {
        saldo: 1000,
        checkout() {
            if (this.saldo >= Alpine.store('cart').total) {
                this.saldo -= Alpine.store('cart').total;
                Swal.fire({
                    title: "Checkout Berhasil!",
                    text: "Terima kasih sudah berbelanja!",
                    icon: "success"
                });
                Alpine.store('cart').clear();
            } else {
                Swal.fire({
                    title: "Saldo Tidak Cukup!",
                    text: "Silakan tambah saldo Anda sebelum checkout.",
                    icon: "error"
                });
            }
        }
    });
    

});

// Optional: Open cart automatically after 3 seconds
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.body.__x.$data.cartOpen = true;
    }, 3000);
});
