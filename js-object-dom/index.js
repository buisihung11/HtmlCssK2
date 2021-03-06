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


let ronaldo = {
    // attributes thuoc tinh
    chisotancong: 11,
    chisophongthu: 7,
    // method
    sut: function (params) {
        console.log('Sut bang chan phai');
    },
    cacdoibongdathamgia: ['MU', 'Real Mad', 'Juventus',' Portugal'],
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
    data: {
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



console.log(user.data.location['city'])
