// declare some static variable to be used
// this will be the variable for now. Set it to 0
var clicks = 0;

function counter() {
    // all this will do is increase the counter

    
    clicks++;
    console.log(clicks);
    document.getElementById("clicker").innerHTML = clicks;
    
}