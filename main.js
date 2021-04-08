var canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

any_player_width = 30;
any_player_height = 30;

var player_object = "";
var any_player_object = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeigth(120);
        player_object.set({
            top: player_y,
            player_x

        });
        canvas.add(player_object);
    });


}

function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        any_player_object = Img;
        any_player_object.scaleToWidth(any_player_width);
        any_player_object.scaleToHeigth(any_player_height);
        any_player_object.set({
            top: player_y,
            player_x

        });
        canvas.add(any_player_object);
    });


}

