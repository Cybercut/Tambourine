alert("hello");

$(document).keypress(function(event)
{
    Sounds(event.key);
})

function Sounds(key)
{
    switch(key)
    {
        case "w":
            var s = new Audio("middle.mp3");
            s.play();
            break;
        case "a":
            var so = new Audio("edge.mp3");
            so.play();
            break;
        case "s":
            var sou = new Audio("bell.mp3");
            sou.play();
            break; 
    }
}