const user = {
    username: "nandini",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coding(){
//     let username = "nandini"
//     console.log(this.username);
// }

// coding()