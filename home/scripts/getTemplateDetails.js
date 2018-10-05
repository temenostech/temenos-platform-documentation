   function getTemplateDetails(templateId) {
     var templateYamlContent, templateVersion, templateName;
     //Get template details only if the template details element is not already collapsed.
     if (!document.getElementById(templateId).classList.contains("collapseActive")){
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
         var templateContentMinimize = '<div class="collapseContent" style="margin-bottom: 8px; margin-top: 8px; font-family: Arial, Helvetica, sans-serif !important;line-height: 18px !important;font-size: 16px !important;font-weight: normal;">';
         templateContentMinimize = templateContentMinimize + '<p style="margin-bottom: 8px;margin-top: 8px;">' + templateName + ' template has the following components:<br></p>';
         var i;
         for (i = 0; i < yamlTemplateComps.length; i++) {
           templateContentMinimize = templateContentMinimize + '<li style="flex-direction: column; padding: 4px 4px 4px 4px; background-color: white; border: 1px solid rgba(0,0,0,.125);">' + yamlTemplateComps[i] + '</li>';
         }
         templateContentMinimize = templateContentMinimize + '<p style="margin-bottom: 8px;margin-top: 8px;"></p>';
         templateContentMinimize = templateContentMinimize + '</div>';
       } else { // error case.
         var templateContentMinimize = '<div class="collapseContent" style="margin-bottom: 8px; margin-top: 8px; font-family: Arial, Helvetica, sans-serif !important;line-height: 18px !important;font-size: 16px !important;font-weight: normal;">';
         templateContentMinimize = templateContentMinimize + '<p style="margin-bottom: 8px;margin-top: 8px;">Error received while retrieving template details!</p>';
       }
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
         // Get server name.
         var name = doc.services.servers[j].app_description.replace("{version}", templateVersion);
         // Get server vm type.
         if (doc.services.servers[j].server_size) {
           var vmtype = doc.services.servers[j].server_size;
         } else {
           var vmtype = generalVmType;
         }
         position = counter + j;
         // Set name and vmtype.
         yamlTemplateComps[position] = name + " ";
         if (name == 't24') {
           yamlTemplateComps[position] = yamlTemplateComps[position] + templateVersion + " version "
         }
         yamlTemplateComps[position] = yamlTemplateComps[position] + "installed in " + generalVmType + " VM named " + doc.services.servers[j].name;
       }
     }

     // Get client repository app.
     if (doc.repository) {
       yamlTemplateComps[doc.services.servers.length + counter] = doc.repository[0].app_description;
     }
     return yamlTemplateComps;
   }
