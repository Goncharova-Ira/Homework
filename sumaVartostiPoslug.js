var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100.20 грн",



    getPrice: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                sum += parseFloat(this[key])
            }
        }
        return sum;
    },

    getMin: function () {
        let minPrice = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                if (minPrice > parseFloat(this[key])) {
                    minPrice = parseFloat(this[key])
                }
            }
        }
        return minPrice;
    },

    getMax: function () {
        let maxPrice = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                if (maxPrice < parseFloat(this[key])) {
                    maxPrice = parseFloat(this[key])
                }
            }
        }
        return maxPrice;
    }
}
services['Розбити скло'] = "200 грн",
services['Манікюр'] = "500 грн",
services['Педикюр'] = "600 грн",
console.log('Загальна вартість послуг: '+ services.getPrice()+ 'грн')
console.log('Максимальна вартість послуг: '+services.getMax()+ 'грн')
console.log('Мінімальна вартість послуг: '+services.getMin()+ 'грн')
