
function startGame(){
    for (var i = 0; i < 5; i++) {
        Left = (Math.random() * 400) + 10;
        Top = (Math.random() * 550) + 5;

        $("#L").append("<img src = 'smiley.png' + width='50' + height='50' + id=" + i + ">");
        $("#R").append("<img src = 'smiley.png' + width='50' + height='50' + id=" + i + ">");
        $("#" + i).css({
            "position": "relative",
                "top": Top,
                "left": Left
        });
    };
}
