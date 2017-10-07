function uploadSingleDocument() {
  $("#file1").click();
}

$(document).ready(function() {

  $("#file1").change(function(event) {
    $("#btnSubmit").click();
  });

  $("#btnSubmit").click(function(event) {
    event.preventDefault();
    alert('prevented default')
    ajaxSendFile("#fileUploadForm", getClassifierAddress());
  });

});
