Template.home.helpers({
	    onIndexLoad:function()
		{
			Session.set("showList",true);
		},
		loadShowList:function()
		{
			return Session.get("showList",true);
		}
  });

  