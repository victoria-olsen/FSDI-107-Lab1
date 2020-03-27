module.exports = {
    sayHello: function(text){
        console.log('Hello there!' + text);
    },
    
    sum: function(num1, num2){
        return num1 + num2;
    },
    
    greater: function(num1, num2){
        if (num1 > num2) {
            return num1;
        }
        else {
            return num2;
        }
    },
    
    isEven: function(num){
        var res = num % 2
        if(res === 0){
            return true;
        }
        else {
            return false;
        }
    }

}
