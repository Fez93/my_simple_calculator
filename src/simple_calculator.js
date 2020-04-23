
function add(){
    sum=0, i=0;

    while(i<arguments.length){
        sum+= arguments[i];
        i++;
    }
    return sum;
}

function multiply(){
    result=arguments[0];
    var i=1;

    while(i<arguments.length){
        result *= arguments[i];
        i++;
    }
    return result;
}
module.exports={add, multiply}


