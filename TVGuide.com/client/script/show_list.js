  Template.show_list.helpers({
    items: function () {		
        return Show_List.find({});
    }
	
  });
  
  Template.show_list.events({
	  
	  "click .nameList":function(evt,tmpl)
	  {
			//alert("List");
			var link=evt.target.text;
			//alert(link);
			Session.set("showList",false);
			Session.set("linkClicked",link);
			
			
	  }
  });
	