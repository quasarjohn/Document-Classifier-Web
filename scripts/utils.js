function ajaxSendFile(form_id, server_address) {
  var form = $(form_id)[0];
  var data = new FormData(form);

  $.ajax({

    type:'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Credentials': true,
    },
    enctype: 'multipart/form-data',
    url = server_address,
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 60000,
    success: function(data) {

    },
    error: function(e) {
      console.log(e);
    }

  });
}

function getClassifierAddress() {
  return "localhost:8090/api/v1/classify"
}
