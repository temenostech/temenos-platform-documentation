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
      $templatesList.append('<li id="' + item.id + '" class="collapseItem" style="' + styleTemplate + '" onclick="getTemplateDetails(this.id)"><div class=""><p style="color: #005294; font-size: 24px; margin-bottom: 0px;">' + item.name + '</p><p class="card-subtitle">' + item.description + '</p></div></li>');
    }
  })

  function getTemplatesList() {
    var templatesList;
    //Get templates.
    var post1 = $.ajax({
      url: 'https://paascontroller.temenos.cloud/platform/controller-iris.svc/templates',
      headers: {
        'Accept': 'application/json',
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
