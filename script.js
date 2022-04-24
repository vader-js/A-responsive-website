let i = 1;
function slider(){
    document.getElementById("radio"+i).checked= true;
    i++;
    if(i > 6){i = 1};
}
setInterval(slider, 3000);



/*let slides= document.querySelectorAll(".slide");
let i = 0;
function slider(){
    if(i < slides.length -1){
    i++;} else{ i = 0}
    slides[i];
}
setInterval(slider, 3000);*/

/*gav all images an id and called them with a name and 
then put them in an array and loop through on interval*/

/*let slide1 = document.getElementById("1").innerHTML;
let slide2 = document.getElementById("2").innerHTML;
let slide3 = document.getElementById("3").innerHTML;
let slide4 = document.getElementById("4").innerHTML;
let slide5 = document.getElementById("5").innerHTML;
let slide6 = document.getElementById("6").innerHTML;

let images = ["slide1", "slide2", "slide3", "slide4", "slide5", "slide6"]
let i = 0;
function myFunction(){
    document.getElementById("container2").innerHTML = images[i];
    if( i < images.length - 1){
        i++;} else{ i = 0;}
        setTimeout(myFunction, 2000);
}
window.onload = myFunction;*/
