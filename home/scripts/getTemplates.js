$(window).on("load", function() {
  // Get list of templates.
  var templatesList = getTemplatesList();
  // Get the id of <templates list> element from page.
  var $templatesList = $('#templatesList');
	var firstTemplateAdded = new Boolean(false);
	var styleTemplate = "";
  $.each(templatesList, function(idx, item) {
    // Set border top and bottom for the first template of the page only.
		if (firstTemplateAdded == true){
			styleTemplate = "border-bottom: 2px solid gray;";
		} else {
			styleTemplate = "border-bottom: 2px solid gray; border-top: 2px solid gray;";
		}
    if (item.publicTemplate) {
			firstTemplateAdded = true;
      $templatesList.append('<li id="' + item.id + '" class="collapseItem" style="' + styleTemplate + '" onclick="getTemplateDetails(this.id)"><div class=""><p style="color: #005294; font-size: 16px; margin-bottom: 0px;">' + item.name + '</p><p class="card-subtitle" style="font-size: 14px;">' + item.description + '</p></div></li>');
    }
  })

  function getTemplatesList() {
    var templatesList;
    //Get templates.
    var post1 = $.ajax({
      url: 'https://prodplatformcontroller.temenos.cloud/platform/templates',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb2Nwb3J0YWx1c2VyIiwidXNlcklkIjoiMWVhcGkzanRqdWM1YyIsInJvbGUiOiJST0xFX1VTRVIiLCJvcmdJZCI6IjFlNmsxcTh1OHhnNWMiLCJsYXN0UGFzc3dvcmRSZXNldERhdGUiOjE1NzgzODc0NTkxOTMsImlzc3VlVGltZSI6MTU3ODM4NzQ2NzQyNSwiZXhwaXJ5SW5TZWNzIjo4NjQwMDAwMH0.TrU-dKGmqGRyhrTXVTHzD1VAzuEz3tZ5d-E-FoZJyalFXHRzrttadZmZgHHcl4slJ2AmZmBrVywUw6uFlWFMbw',
        'Content-Type': 'application/json'
      },
      type: 'GET',
      dataType: 'json',
      contentType: "application/json",
      async: false,

      success: function(response) {
        templatesList = response._embedded.item;
      },
      error: function(errorResponse) {
        console.log('error: ' + errorResponse);
      },
      done: function(results) {
        console.log(results);
      },
      fail: function(jqXHR, textStatus, errorThrown) {
        console.log('Could not get posts, server response: ' + textStatus + ': ' + errorThrown);
      }
    }).responseJSON;
    return templatesList;
  }
});
