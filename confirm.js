const item = document.getElementById("onlynumbers")
item.addEventListener("input",function(event){
    var text =event.target.value;
    if(/[a-zA-Z]/.test(text)){
        alert("There must be only numbers!")
    }
})