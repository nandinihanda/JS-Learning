// Immediately Invoked Function Expressions (IIFE)


(function code(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {   // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nandini')