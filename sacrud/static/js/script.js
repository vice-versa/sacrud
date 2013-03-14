$(document).ready(function() {
   $(".paste").click(function() {
   		form  = $(this).parent().find(".form_paste");
   		form.submit();
   		}
  		
  	)
   $(".paste").each(function() {
   		form  = $(this).parent().find(".form_paste")
		$.data(this, 'action', form.attr("action")
			)
			
   		}
   	)
   	
   $(".cut").click(function() {
   	
   	target_id = $(this).closest('tr').attr('id').split('_')
   	target_id =  target_id[1]
   	row = $(this).closest('tr')
   	new_row = row.clone()
   	new_row.find('td').last().hide()
   	message = "<table>" + new_row.html() + "</table>"
   	message = "You choose element to paste" + message
   	$.jGrowl(message, {sticky: true});
   	
   	$(".paste").each(function(){
		action = $.data(this, 'action')
		form  = $(this).parent().find(".form_paste")
		action = URI.expand(action+"/{target_id}", { 
								target_id :target_id
								}
						)	
		$(this).show()
		form.attr('action', action)
		
		
	})
   		
   })
 });