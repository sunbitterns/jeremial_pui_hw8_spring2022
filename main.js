/* Permahover for letters */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".red").addEventListener('mouseover', function(event) {
    document.querySelector(".red").classList.add('activated');
  });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".blue").addEventListener('mouseover', function(event) {
        document.querySelector(".blue").classList.add('activated');
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".yellow").addEventListener('mouseover', function(event) {
      document.querySelector(".yellow").classList.add('activated');
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".green").addEventListener('mouseover', function(event) {
        document.querySelector(".green").classList.add('activated');
    });
});

/* Style first word of poem line 
  https://www.jqueryscript.net/text/Styling-First-Word-Of-Any-Element-With-jQuery-CSS.html*/
$(".redP").each(function() {
    // Some Vars
    var elText,
        openSpan = '<span class="first-red">',
        closeSpan = '</span>';

    // Make the text into array
    elText = $(this).text().split(" ");

    // Adding the open span to the beginning of the array
    elText.unshift(openSpan);

    // Adding span closing after the first word in each sentence
    elText.splice(2, 0, closeSpan);

    // Make the array into string 
    elText = elText.join(" ");

    // Change the html of each element to style it
    $(this).html(elText);
});

$(".blueP").each(function() {
    var elText,
        openSpan = '<span class="first-blue">',
        closeSpan = '</span>';
    elText = $(this).text().split(" ");
    elText.unshift(openSpan);
    elText.splice(2, 0, closeSpan);
    elText = elText.join(" ");
    $(this).html(elText);
});

$(".yellowP").each(function() {
    var elText,
        openSpan = '<span class="first-yellow">',
        closeSpan = '</span>';
    elText = $(this).text().split(" ");
    elText.unshift(openSpan);
    elText.splice(2, 0, closeSpan);
    elText = elText.join(" ");
    $(this).html(elText);
});

$(".greenP").each(function() {
    var elText,
        openSpan = '<span class="first-green">',
        closeSpan = '</span>';
    elText = $(this).text().split(" ");
    elText.unshift(openSpan);
    elText.splice(2, 0, closeSpan);
    elText = elText.join(" ");
    $(this).html(elText);
});

/* Show poem lines on hover of alphabet */
$(function () {
    $("#a").hover(function(){
        $("#aLine").show()
    })
    $("#b").hover(function(){
        $("#bLine").show()
    })
    $("#c").hover(function(){
        $("#cLine").show()
    })
    $("#d").hover(function(){
        $("#dLine").show()
    })
    $("#e").hover(function(){
        $("#eLine").show()
    })
    $("#f").hover(function(){
        $("#fLine").show()
    })
    $("#g").hover(function(){
        $("#gLine").show()
    })
    $("#h").hover(function(){
        $("#hLine").show()
    })
    $("#i").hover(function(){
        $("#iLine").show()
    })
    $("#j").hover(function(){
        $("#jLine").show()
    })
    $("#k").hover(function(){
        $("#kLine").show()
    })
    $("#l").hover(function(){
        $("#lLine").show()
    })
    $("#m").hover(function(){
        $("#mLine").show()
    })
    $("#n").hover(function(){
        $("#nLine").show()
    })
    $("#o").hover(function(){
        $("#oLine").show()
    })
    $("#p").hover(function(){
        $("#pLine").show()
    })
    $("#q").hover(function(){
        $("#qLine").show()
    })
    $("#r").hover(function(){
        $("#rLine").show()
    })
    $("#s").hover(function(){
        $("#sLine").show()
    })
    $("#t").hover(function(){
        $("#tLine").show()
    })
    $("#u").hover(function(){
        $("#uLine").show()
    })
    $("#v").hover(function(){
        $("#vLine").show()
    })
    $("#w").hover(function(){
        $("#wLine").show()
    })
    $("#x").hover(function(){
        $("#xLine").show()
    })
    $("#y").hover(function(){
        $("#yLine").show()
    })
    $("#z").hover(function(){
        $("#zLine").show()
    })
});
