$(document).ready(function(){
  $("#button").click(function() {
    $.ajax( {
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      crossDomain: true,

      type:"GET",
      header:{
        contentType: "application/javascript",
        Accept: "application/json",

      },
      success: function(data){
        // var post = data.shift();
        $("#quote-source").html("<p>- " + data.quoteAuthor + "</p>");
        $("#quote").html("<q>"+ data.quoteText + "</q>");
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false


    });
  });
});
