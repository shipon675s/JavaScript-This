//! JavaScript This:

// 'use strict';

// console.log(this);

var firstName = "Shipon";

function myFunc(){
    return this;
}
// console.log(myFunc());


const myfunction = () => {
    // console.log(this);
};
// myfunction();


const mybtn = document.querySelector('button');
mybtn.addEventListener('click', function(){
    // console.log(this);
})




// var fName = 'Shipon';
// let fName = 'Shipon';
const student = {
    fName: 'Shipon',
    sInfo: function(){
        // console.log(`${this.fName} love to read`);
        return `${this.fName} love to read`
    },
    arrowFunction: () => {
        return `${this.fName} love to read`
    }
}
console.log(student.sInfo());
student.fName = 'Ibrahim';
console.log(student.sInfo());
console.log(student.arrowFunction());

/*
* Method 👉 Object
* Function 👉 Window / Global
*/



function newPhone() {
    let phone = 'Android';
    console.log(this.phone);
}
newPhone();


const game = {
    gName: 'NfS',
    gInfo: function() {
        console.log(`Love to play ${this.gName}`);
    },
};

const aGame = {
    gName: 'Car Game',
};


const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());