function openNav() {
    document.getElementById("navbar").style.display = "block";
}

function closeNave() {
    document.getElementById("navbar").style.display = 'none';
}


var onresize = function() {
    width = document.body.clientWidth;
    if(width >= 767) {
        document.getElementById("navbar").style.display = "block";
    }
}

window.addEventListener("resize", onresize);