let res = document.getElementById("screen");
let calc = (num)=>{
    res.value = res.value+num;
}
// eval() method / compute math operations
let callEqual =()=>{
    try{
        res.value=eval(res.value);
    }
    catch(err){
        res.value="MATH ERROR!";
    }
}
// empty the screen
let callClear =()=>{
    res.value="";
}

const callDel =()=>{
    // remove the last number
    res.value=res.value.slice(0,-1);
}
// math.pi object.property
const callPi =()=>{
    res.value=Math.PI;
}