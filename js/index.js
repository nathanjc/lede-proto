(function () {
  $('#note').on('submit', function (e) {

    // prevent form from default submitting
    e.preventDefault();

    // get current time
    var currentTime = new Date();
    var thisTime = moment(currentTime).format('h:mm a');

    // get elements
    var $noteText = $('#note-text');

    if ($noteText.val() === '') {
      return;
    }

    var $notepad = $('#notepad');

    var htmlFormatted = $noteText.val().replace(/\n/g, '<br>').replace(/(\*)(.*?)\1/g, '<b>$2</b>').replace(/(_)(.*?)\1/g, '<i>$2</i>');

    // append to the document
    $notepad.append('<section class="row"><p class="ten columns">' + htmlFormatted + '</p> <p class="two columns"><time class="note-time" datetime="'+ currentTime +'">' + thisTime + '</p></section>');
    $noteText.val('');
    
    window.scrollTo(0, document.body.scrollHeight);
    $noteText.focus();
  });
  $('.note-time').on('click', function (e) {
    console.log('I was clicked');
  });
}());