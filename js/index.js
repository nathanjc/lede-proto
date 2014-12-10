(function () {
  
  // fires off when the #note element is clicked
  $('#note').on('submit', function (e) {

    // prevent form from default submitting
    e.preventDefault();

    // get current time
    var currentTime = new Date();

    // use moment.js to format the date
    var thisTime = moment(currentTime).format('h:mm a');

    // get assingn elements to variables
    var $noteText = $('#note-text');
    var $notepad = $('#notepad');

    // check if the form is empty
    if ($noteText.val() === '') {
      return;
    }

    // Regex through the text and format as html
    var markdownFormatted = $noteText.val().replace(/\n/g, '<br>').replace(/(\*)(.*?)\1/g, '<b>$2</b>').replace(/(_)(.*?)\1/g, '<i>$2</i>');

    // append to the article
    $notepad.append('<section class="row"><p class="ten columns">' + markdownFormatted + '</p> <p class="two columns"><time class="note-time" datetime="'+ currentTime +'">' + thisTime + '</p></section>');

    // empty the textarea
    $noteText.val('');
    
    // scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // refocus the cursor into the textarea field
    $noteText.focus();
  });
}());