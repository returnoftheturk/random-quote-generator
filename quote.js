$(document).ready(function(){
  $("#tweet").click(function() {
    $("#tweet").attr('data-text', 'He said' );
  });

  $("#button").click(function() {
    console.log(randomColor());
    // $("body").fadeOut(1000, function(){
        $("body").css("background-color", randomColor());
      // });
      // $("body").animate({backgroundColor: "#ff0000"});
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
var arrayOfColors = ["#1569C7","#3090C7", "#306EFF", "#7FFFD4", "#4EE2EC", "#52D017",
"#00FF00", "#FFE87C", "#F3E5AB", "#FDD017", "#C68E17", "#966F33", "#C35817", "#E55451", "#E41B17",
"#7D0552", "#C48189", "#FAAFBA", "#F6358A", "#4B0082", "#842DCE", "#7F38EC", "#FFF5EE"];

function randomColor(){
  return arrayOfColors[Math.floor(Math.random()*24)];
}
