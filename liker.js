let counter = 0;
const countElement = document.getElementById("starIcon");
countElement.addEventListener("click",function(counter){
    counter++
    countElement.textContent=counter;
})