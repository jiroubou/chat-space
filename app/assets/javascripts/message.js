$(function(){ 
  var buildHTML = function(message) {
    if (message.content && message.image) {
      //data-idが反映されるようにしている
      var html = `<div class="main__list" data-message-id=${message.id}>
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
          <img src= ${message.image}  class="lower-message__image"> 
        </div>
      </div>`
    } else if (message.content) {
      //同様に、data-idが反映されるようにしている
      var html = `<div class="main__list" data-message-id=${message.id}>
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
    } else if (message.image) {
      //同様に、data-idが反映されるようにしている
      var html = `<div class="main__list" data-message-id=${message.id}>
        <div class="main__list__next">
          <div class="listo"> 
            ${message.user_name}
          </div>
          <div class="listoo">
            ${message.created_at}
          </div>
        </div>
        <div class="main__list__nexts">
          <img src=${message.image} class="lis" >
        </div>
      </div>`
    };
    return html;
  };

  $('#new_message').on('submit', function(e){
   e.preventDefault();
   var formData = new FormData(this);
   var url = $(this).attr('action');

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
     $('.main__messages').animate({ scrollTop: $('.main__messages')[0].scrollHeight});
     $('.form__submit').prop('disabled', false);
   })
   .fail(function() {
     alert("メッセージ送信に失敗しました");
   })
   .always(function(){
    $('.form__submit').prop('disabled', false);
   });
  })
  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.main__list:last').data("message-id");

    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.main__messages').append(insertHTML);
        $('.main__messages').animate({ scrollTop: $('.main__messages')[0].scrollHeight});
        $("#new_message")[0].reset();
        $(".form__submit").prop("disabled", false);
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});