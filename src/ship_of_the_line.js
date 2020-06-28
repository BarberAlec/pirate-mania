
//draw_ship(ctx,50,50,100,100)

make_our_ship();
make_enemy_ship();

function make_our_ship()
{
  base_image_rot = new Image();
  base_image_rot.src = '../assets/small_boat_rot.png';
  base_image_rot.onload = function(){
    ctx.drawImage(base_image_rot, 0,0);
  }
}

function make_enemy_ship()
{
  base_image = new Image();
  base_image.src = '../assets/small_boat.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, right_x,
        top_y,
        - (right_x - left_x) * enemy_border_percent_x, 
        (bottom_y - top_y) * enemy_border_percent_y);
  }
}
