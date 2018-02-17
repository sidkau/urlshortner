$('.btn-shorten').on('click', function(){
  var http="http://"
var inputLongUrl=$('#url-field').val();

if(inputLongUrl.indexOf('http')!=0 && inputLongUrl.indexOf('https')!=0) {
  inputLongUrl=http + $('#url-field').val();
}
    $.ajax({
      url: '/create',
      type: 'POST',
      dataType: 'JSON',
      data: {longUrl: inputLongUrl,burn_notice:$('input[name="burn-notice"]:checked').val()},
      error : function(error){
        console.log(error);
      },
      success: function(data){
          var resultHTML = '<a class="result" target="_blank" href="' + data.shortUrl + '">'
              + data.shortUrl + '</a>';
          $('#link').html(resultHTML);
          $('#link').hide().fadeIn('slow');
      }
    });
  
  });

