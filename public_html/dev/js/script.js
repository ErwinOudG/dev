//
var myTimer = setInterval(draaien,1000);
var text = "";
var hoek=0;
var loopcounter=0;
for (var i = 1; i < 101; i++) {
    if (i%3==0) { text += " fizz" }
    if (i%5==0) { text += " buzz" }
    if ((i%3>0) && (i%5>0)) { text += i }
    text += "<br>" }

    // document.getElementById("visbus").innerHTML = text;

    function draaien() {
        if (loopcounter>=360) {
            loopcounter=0;
        }
        hoek = loopcounter*3.6;
        var rotdeg = hoek +"%";
        traX = 100
        // console.log(rotdeg);
        // Code for Safari
        // document.getElementById("id_groenblok").style.WebkitTransform = "rotate("+rotdeg+")";
        // Code for IE9
        // document.getElementById("id_groenblok").style.msTransform = "rotate("+rotdeg+")";
        // Standard syntax
        document.getElementById("id_groenblok").style.Transform = "rotate("+rotdeg+")";
        // document.getElementById("id_groenblok").style.transform = "translateX("+rotdeg+")";
        // document.getElementById("id_groenblok").style.transform = "translateY("+rotdeg+")";
        document.getElementById("id_groenblok").style.transform = "translate(10px,10px)";
    }
