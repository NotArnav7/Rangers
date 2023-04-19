my_canvas= new fabric.Canvas("myCanvas");
my_canvas.getContext("2d");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var ranger_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		ranger_object = Img;

        ranger_object.scaleToWidth(350);
        ranger_object.scaleToHeight(430);
        ranger_object.set({
            top:block_x,
            left:block_y
        });
my_canvas.add(ranger_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png");
	}
	if(keyPressed == '71')
	{
		block_y = 490;
		block_x = 1;
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_y = 150;
		block_x =1;
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_y = 650;
		block_x = 1;
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_y = 750;
		block_x = 1;
		new_image("br.png");
	}
	
}

