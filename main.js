let point1 = 0;

const point3 = document.getElementById("point1");

function clickcounter(){
    point1 = point1 + 1;
    point3.innerHTML = point1;
}

function clickcounter3(){
    if (point1 > 0){
        point1 = point1 - 1;
    }
    point3.innerHTML = point1;
}

let point2 = 0;

const point4 = document.getElementById("point2");

function clickcounter2(){
    point2 = point2 + 1;
    point4.innerHTML = point2;
}

function clickcounter4(){
    if (point2 > 0){
        point2 = point2 - 1;
    }
    point4.innerHTML = point2;
}

let changeteam2 = document.getElementById("changeteam");

function myFunction(){
    person = prompt();
    document.getElementById("changeteam").innerHTML = person;
}

let changeteam3 = document.getElementById("changeteam2");

function myfunction2(){
    person2 = prompt();
    document.getElementById("changeteam2").innerHTML = person2;
}




function myFunction3(){
    pointcheck = prompt()
    if (pointcheck != Number(pointcheck)){
        pointcheck = alert("Sistemin içine ettin !!!!")

        pointcheck = "??!!"
    }
    
    document.getElementById("point1").innerHTML = pointcheck;
}

function myfunction4(){
    pointcheck2 = prompt();
    if (pointcheck2 != Number(pointcheck2)){
        pointcheck2 = alert("Sistemin içine ettin !!!!")

        pointcheck2 = "??!!"
    }

    document.getElementById("point2").innerHTML = pointcheck2;
}