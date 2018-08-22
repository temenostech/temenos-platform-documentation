   function functionToTriggerOnSelect(templateId) {
     var templatesYamlContent;
     //Get template details.
     var post1 = $.ajax({
       url: 'https://paascontroller.temenos.cloud/platform/controller-iris.svc/templates/' + templateId,
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       type: 'GET',
       dataType: 'json',
       contentType: "application/json",
       async: false,

       success: function(response) {
         templatesYamlContent = response.yamlContents;
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
     $('#tmplYamlContent').remove();
     $('#appendTemplate').append('<pre id="tmplYamlContent"><code class="yaml" style="white-space: pre-line;white-space: pre-wrap;text-align: justify !important">' + templatesYamlContent + '</code></pre>');
   }
