function draaien() {
    if (x>=360) {
        x=0;
    }
    x += 10;
    var rotdeg = x +"deg";
    console.log(rotdeg);
    // Code for Safari
    document.getElementById("id_groenblok").style.WebkitTransform = "rotate(rotdeg)";
    // Code for IE9
    document.getElementById("id_groenblok").style.msTransform = "rotate(rotdeg)";
    // Standard syntax
    document.getElementById("id_groenblok").style.transform = "rotate(rotdeg)";

//     while (true) {
// }
}
//
// text = " "
var x =0;
// for (var i = 1; i < 101; i++) {
//     if (i%3==0) { text += " fizz" }
//     if (i%5==0) { text += " buzz" }
//     if ((i%3>0) && (i%5>0)) { text += i }
//     text += "<br>" }
//
//     document.getElementById("visbus").innerHTML = text;
