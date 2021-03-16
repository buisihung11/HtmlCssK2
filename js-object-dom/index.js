function getIndexToIns(arr = [], insertNumber) {
    const copyArr = [].concat(arr);

    copyArr.push(insertNumber)
    copyArr.sort(function (a, b) {
        return a - b;
    });

    return copyArr.indexOf(insertNumber);

}

const index = getIndexToIns([20, 3, 5], 19);
console.log('index', index);


//--------


// KEY : VALUE


let ronaldo = {
    // attributes thuoc tinh
    chisotancong: 11,
    chisophongthu: 7,
    cacdoibongdathamgia: ['MU', 'Real Mad', 'Juventus', ' Portugal'],
    // method
    sut: function (params) {
        console.log('Sut bang chan phai');
    },
    thongkechiso: function () {
        console.log('Chi so tan cong la: ', this.chisotancong);
    }
}
let thuoctinhcantim = 'chisotancong';

console.log(ronaldo.chisotancong)

ronaldo.thongkechiso();

console.log(ronaldo['chisotancong'])
console.log(ronaldo.chisophongthu)
ronaldo.sut();

ronaldo.chisotancong = 12;

ronaldo.thongkechiso();

console.log(ronaldo.chisotancong);

ronaldo.sut = function (params) {
    console.log('Sut bang hai chan');
}

console.log(ronaldo.cacdoibongdathamgia[0])

ronaldo.cacdoibongdathamgia.push('HAGL');

console.log(ronaldo.cacdoibongdathamgia)

ronaldo.sut();





let user = {
    name: 'Kenneth',
    age: 28,
    data: { // nested object
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};



console.log(user.data.location['city']);

// --------- CART EXAM -------- //


let cart = {
    items: [
        {
            name: 'Coca',
            quantity: 1,
            unitPrice: 10000,
        },
        {
            name: 'Snack',
            quantity: 2,
            unitPrice: 5000,
        },
    ],
    customer: {
        age: 18,
        address: 'Le Van Viet',
    },
    // METHOD
    addToCart: function (prodName, quantity, price) {
        // xu ly de them vao trong thuoc tinh items
        this.items.push(...)
    },
    deletFromCart: function (nameItem) // xoa hang
    {
        // let lengthArray = this.items.length;
        // for (let i = 0; i < lengthArray; i++) {

        //     if (nameItem === this.items[i].nameItem) {
        //         this.items.splice(i, 1);
        //         break;
        //     }
        // }

        // map, filter, reduce

        this.items = this.items.filter(function (item) {
            return item.name != nameItem;
        });

    },
}



