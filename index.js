init();

function init(){
  $('#input').hide();
  var howmany=$('li').length;
  $('span').text(howmany);
}
//刪除鍵
$('.remove').on('click',function(){
  $(this).parent().remove();
  var count=$('.done').length;
  var howmany=$('li').length;
  var final=howmany-count
  $('span').text(final);
});
//完成鍵
$('.finish').on('click',function(){
  $(this).parent().toggleClass('done');
  var count=$('.done').length;
  var howmany=$('li').length;
  var final=howmany-count
  $('span').text(final);
  })



//滑出滑入input
$('.addItem').on('click',function(){
  $('#input').slideToggle();
  })
//可變換順序
$('ul').sortable();
//新增
$('.add').click(function(){
  var str=$('#item').val();
  if(str.length>10){str=str.substring(0,9)+'...'}
  if(str!==null&&str!==''){
    $('ul').append("<li ><a class='remove'><i class='fa fa-trash' ></i></a>&nbsp;<a class='finish'><i class='fa fa-thumbs-up'></i></a>&nbsp;"+str+"</li>").fadeIn();
  var count=$('.done').length;
  var howmany=$('li').length;
  var final=howmany-count
  $('span').text(final);
    //刪除鍵
$('.remove').on('click',function(){
  $(this).parent().remove();
  var count=$('.done').length;
  var howmany=$('li').length;
  var final=howmany-count
  $('span').text(final);
});
//完成鍵
$('.finish').on('click',function(){
  $(this).parent().toggleClass('done');
  var count=$('.done').length;
  var howmany=$('li').length;
  var final=howmany-count
  $('span').text(final);
})
    $('#item').val('');
    }
 })