   function getTemplateDetails(templateId) {
     var templateYamlContent, templateVersion, templateName;
     //Get template details only if the template details element is not already collapsed.
     if (!document.getElementById(templateId).classList.contains("collapseActive")){
       var post1 = $.ajax({
         url: 'https://prodplatformcontroller.temenos.cloud/platform/orgs/1e6k1q8u8xg5c/templates/' + templateId,
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
		   response = response._embedded.item;
           templateYamlContent = response.yamlContents;
           templateVersion = response.version;
           templateName = response.name;
         },
         error: function(errorResponse) {
           console.log('error: ' + errorResponse);
         }
       }).responseJSON;

       if (templateYamlContent) {
         var yamlTemplateComps = parseYamlTemplate(templateYamlContent, templateVersion);
         var templateContentMinimize = '<div class="collapseContent">';
         templateContentMinimize = templateContentMinimize + '<p style="margin-bottom: 8px;margin-top: 8px;">' + templateName + ' template has the following components:<br></p>';
         var i;
         for (i = 0; i < yamlTemplateComps.length; i++) {
           templateContentMinimize = templateContentMinimize + '<li style="flex-direction: column; padding: 4px 4px 4px 4px; background-color: white; border: 1px solid rgba(0,0,0,.125);">' + yamlTemplateComps[i] + '</li>';
         }
         templateContentMinimize = templateContentMinimize + '<p style="margin-bottom: 8px;margin-top: 8px;"></p>';
       } else { // error case.
         var templateContentMinimize = '<div class="collapseContent">';
         templateContentMinimize = templateContentMinimize + '<p style="margin-bottom: 8px;margin-top: 8px;">Error received while retrieving template details!</p>';
       }
       templateContentMinimize = templateContentMinimize + '</div>';
     }

     // Append template content.
     if ($('#' + templateId).find('.collapseContent').length == 0) {
       $('#' + templateId).append(templateContentMinimize);
     }
     // Collapse / Remove template content.
     var contentElement = document.getElementById(templateId).lastElementChild;
     document.getElementById(templateId).classList.toggle("collapseActive");
     if (contentElement.style.maxHeight) {
       contentElement.style.maxHeight = null;
     } else {
       contentElement.style.maxHeight = contentElement.scrollHeight + "px";
     }
   }

   function parseYamlTemplate(yamlTemplateContent, templateVersion) {
     // Define template components variable.
     var yamlTemplateComps = new Array();

     // Load yaml Template.
     var doc = jsyaml.safeLoad(yamlTemplateContent);

     // Get general VM Type.
     var generalVmType = doc.provider[0].azure[0].server_size;

     // Get Load Balancer.
     var counter;
     if (doc.services.load_balancers) {
       yamlTemplateComps[0] = "Load Balancer with name " + doc.services.load_balancers[0].name + " in front of " + doc.services.load_balancers[0].be_servers + " VM";
       counter = 1;
     } else {
       counter = 0;
     }

     // Get servers.
     if (doc.services.servers) {
       var position;
       for (let j = 0; j <= doc.services.servers.length - 1; j++) {
         // Get server vm type.
         if (doc.services.servers[j].server_size) {
           var vmtype = doc.services.servers[j].server_size;
         } else {
           var vmtype = generalVmType;
         }
         position = counter + j;
         if (doc.services.servers[j].applications){
           let apps_manag_list = new Array();
           // Get only manageable applications.
           apps_manag_list = doc.services.servers[j].applications.filter(function(app) {return app.app_manageable});
           let apps_manag_nr = apps_manag_list.length;
           if (apps_manag_nr > 0){
             yamlTemplateComps[position] = "";
             for (let jj = 0; jj <= apps_manag_nr-1; jj++) {
                 yamlTemplateComps[position] = yamlTemplateComps[position] + doc.services.servers[j].applications[jj].name;
                 if (jj == apps_manag_nr-2){
                   yamlTemplateComps[position] = yamlTemplateComps[position] + " and ";
                 } else {
                   if (jj != apps_manag_nr-1){
                     yamlTemplateComps[position] = yamlTemplateComps[position] + ", ";
                   } else {
                     if (apps_manag_nr > 1){
                       yamlTemplateComps[position] = yamlTemplateComps[position] + " applications ";
                     } else {
                       yamlTemplateComps[position] = yamlTemplateComps[position] + " application ";
                     }
                   }
                 }
             }
             yamlTemplateComps[position] = yamlTemplateComps[position] + " installed in " + vmtype + " VM named " + doc.services.servers[j].name;
           }
         } else {
           // Get server name.
           var name = doc.services.servers[j].app_description.replace("{version}", templateVersion);
           // Set name and vmtype.
           yamlTemplateComps[position] = name + " ";
           if (name == 't24') {
             yamlTemplateComps[position] = yamlTemplateComps[position] + templateVersion + " version ";
           }
           yamlTemplateComps[position] = yamlTemplateComps[position] + " installed in " + vmtype + " VM named " + doc.services.servers[j].name;
         }
       }
     }

     // Get client repository app.
     if (doc.repository) {
       yamlTemplateComps[yamlTemplateComps.length] = doc.repository[0].app_description;
     }
     return yamlTemplateComps;
   }
