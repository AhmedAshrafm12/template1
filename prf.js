imgs=['11.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg'];
p=['App','Agency','Ecommerce','Appweb','resturant','ships','themes','demos','All','application','zerbio'];
div="<div class='col-lg-4'><div class='item text-center'><img class='img-responsive' src=''><h3></h3></div></div>";

pimgs=['15.png','16.png','17.png','18.png','19.png','20.png'];
prp=['type1','type3','type3','type4','type5','type6']

/* for(i=0;i<10;i++){
$('.items .showall').append(div);}
var imarray=document.querySelectorAll('.showall img');
var parray=document.querySelectorAll('.showall h3');



for(i=0;i<imarray.length;i++){
    imarray[i].setAttribute('src','imgs/'+imgs[i]);
    parray[i].append(p[i]);

}
 */
function addmult(arr,prr,x,y,k){
    for(i=0;i<k;i++){
        $(x).append(div);}
   


var imarray=document.querySelectorAll(x+' img');
var parray=document.querySelectorAll(x+' h3');

        for(i=0;i<imarray.length;i++){
            imarray[i].setAttribute('src','imgs/'+arr[i+y]);
            parray[i].append(prr[i+y]);
        
        }
}

addmult(imgs,p,'.items .showall .row',0,10);

addmult(imgs,p,'.items .cor .row',1,7);

addmult(imgs,p,'.items .Eco .row',2,6);

addmult(imgs,p,'.items .cre .row',3,4);

addmult(imgs,p,'.items .blog .row',4,3);

 
addmult(pimgs,prp,'.proto .row',0,6);


$('.sidnav span').not('.reb').click(function(){
    $(this).siblings().slideToggle();
    $(this).parent().siblings().children().not("span") .slideUp();

})




$('.deps li').click(function(){
    $('.'+$(this).data('dep')).fadeIn().siblings().fadeOut();
    $(this).addClass('active').siblings().removeClass('active');
})

$('.tog').click(function(){
$(this).fadeOut(10);
  $('.sidnav').animate({
    'right':'0px'
},600)
$('.main').animate({
    'left':'-310px'
},600)
$('.reb').fadeIn(1600)
$('.main').css('opacity','.9');

})


$('.reb').click(function(){
$('.main').css('opacity','1');
$('.tog').fadeIn(2000)
$(this).fadeOut();
  $('.sidnav').animate({
    'right':'-320px'
},600)
$('.main').animate({
    'left':'0px'
},600)
})

