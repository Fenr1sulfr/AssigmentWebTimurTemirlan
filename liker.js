let counters = Array.from({ length: document.getElementsByClassName("btn btn-lg").length }, () => 0);
const clickers = document.getElementsByClassName("btn btn-lg");
for (let i = 0; i < clickers.length; i++) {
    clickers[i].addEventListener("click", function() {
        counters[i]++;
        clickers[i].innerHTML = '<i class="far fa-star" style="color: gold;"></i> '+counters[i] ;
    });
}   