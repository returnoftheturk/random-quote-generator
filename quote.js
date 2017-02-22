$(document).ready(function(){
  $("#tweet").click(function() {
    $("#tweet").attr('data-text', 'He said' );
  });

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
        $("#tweet").attr('href', "https://twitter.com/intent/tweet?text=" + formatTweet(data.quoteText, data.quoteAuthor));
        $("#quote").html("<q>"+ data.quoteText + "</q>");
        if (typeof data.custom_meta !== 'undefined' && typeof data.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + data.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false


    });
  });
});

function formatTweet(tweet, author){
  return "\"" + tweet + "\"" + " - " + author;

}
