$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main__list" data-message-id=${message.id}>
         <div class="main__list__next">
           <div class="listo">
             ${message.user_name}
           </div>
           <div class="listoo">
             ${message.created_at}
           </div>
         </div>
         <div class="main__list__nexts">
           <p class="lis">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main__list" data-message-id=${message.id}>
         <div class="main__list__next">
           <div class="listo">
             ${message.user_name}
           </div>
           <div class="listoo">
             ${message.created_at}
           </div>
         </div>
         <div class="main__list__nexts">
           <p class="lis">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main__messages').append(html);      
    $('form')[0].reset();
    $('.main__messages').animate({
      scrollTop: $('.main__messages')[0].scrollHeight},
      10);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})
});