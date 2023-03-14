// code your solution here
//Implement a function called saturdayFun:
function saturdayFun(x){
    if (typeof x ==='undefined'){
        x='roller-skate'
    }
    
return 'This Saturday, I want to ' +`${x}` +'!' 
}

//Implement a function called mondayWork:

function mondayWork(y){
    if (typeof y ==='undefined'){
        y='go to the office'
    }
return 'This Monday, I will ' +`${y}` +'.' 

}

//Implement a function called wrapAdjective:


function wrapAdjective(z){

    return function wrap(txt){
        return `You are ${z}${txt}${z}!`
    }


}