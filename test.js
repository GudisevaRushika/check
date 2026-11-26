function check(){
    const cgpa=Number(document.getElementById("cgpa").value);
    if(cgpa>8){
        alert("allowed");

    }
    else{
        if(cgpa>6){
        alert("allowed, but be cautious");
    }
    else{
        alert("you arent allowed");
    }
}
}