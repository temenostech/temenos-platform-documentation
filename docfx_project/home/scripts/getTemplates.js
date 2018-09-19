$(window).on("load", function(){
	  var templatesList;
		templatesList = getTemplatesList();

		var $selecttmpl = $('#templateSelectionId');
		$.each(templatesList, function(idx, item){
			if (item.publicTemplate){
				$selecttmpl.append('<option value="' + item.id + '">' + item.name + '</option>');
			}
		})

		function getTemplatesList() {
			var templatesList;
			//Get templates.
			var post1 = $.ajax({
		    url: 'https://paascontroller.temenos.cloud/platform/controller-iris.svc/templates',
		    headers: {
		        'Accept':'application/json',
		        'Content-Type':'application/json'
		    },
		    type: 'GET',
		    dataType: 'json',
		    contentType: "application/json",
		    async: false,

		    success: function(response){
			  templatesList = response._embedded.item;
		    },
		    error: function(errorResponse){
		      console.log('error: ' + errorResponse);
		    },
		    done: function(results) {
		      console.log(results);
		    },
		    fail: function( jqXHR, textStatus, errorThrown ) {
		        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
		    }
		    }).responseJSON;
				return templatesList;
		}
});
