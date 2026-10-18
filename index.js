function isPrime(num){

    if (!Number.isInteger(num) || num < 2) return false;

    for (let i = 2; i <= num/2; i++) {
        
        if(num%i == 0) return false;
        
    }
    return true;
}



module.exports = {
    isPrime
}

