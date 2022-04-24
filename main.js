/* Permahover */
$('.letter').mouseover(function(){
    $(this).addClass("activated");
});  

/* Style first word of poem line 
   Modified from: https://www.jqueryscript.net/text/Styling-First-Word-Of-Any-Element-With-jQuery-CSS.html*/
function firstWord(a, b) {
    $(a).each(function() {
        var elText,
            openSpan = '<span class='+b+'>';
            closeSpan = '</span>';
        elText = $(this).text().split(" ");
        elText.unshift(openSpan);
        elText.splice(2, 0, closeSpan);
        elText = elText.join(" ");
        $(this).html(elText);
    });
}

firstWord(".redP", "first-red");
firstWord(".blueP", "first-blue");
firstWord(".yellowP", "first-yellow");
firstWord(".greenP", "first-green");

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
