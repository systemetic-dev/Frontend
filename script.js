function checkage(){
    let age = document.getElementById("ageinput").value;
    if(age >= 18){
        document.getElementById("result").innerText = "you are adult";
    } else{
        document.getElementById("result").innerText = "you are child";
    }
}