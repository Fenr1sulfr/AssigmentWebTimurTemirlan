const screamer=document.getElementById("persName")
screamer.addEventListener("input",function(event){
    var text =event.target.value;
    alert("Give us your money,"+text+"!")
})