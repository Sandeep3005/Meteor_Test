Template.show_desc.helpers({
	showDescription:function()
	{
		//alert("Inside Show Description");
		var s_pic,s_name,s_desc,s_cw,s_creator,s_creator1,s_creator2;
		var linkC = Session.get("linkClicked");
		//alert("link C = "+linkC);
		Show_Basic.find({show_name:linkC})
		.forEach(function(myDoc)
		{
				s_pic    = myDoc.show_pic;
				s_name = myDoc.show_name;
				s_desc  = myDoc.show_desc;
				s_creator1  = myDoc.show_creator.creator_1;
				s_creator2  = myDoc.show_creator.creator_2;										
		});
		s_creator = s_creator1+","+s_creator2;
		
		Session.set("s_pic",s_pic);
		Session.set("s_name",s_name);
		Session.set("s_desc",s_desc);
		Session.set("s_creator",s_creator);
		
	},
	sPic:function()
	{		
		s_pic = Session.get("s_pic");
		extension=".jpg";
		s_pic=s_pic+extension;
		
		return s_pic;		
	},	
	sName:function()
	{
		s_name = Session.get("s_name");
		return s_name;
	},
	sDesc:function()
	{
		s_desc = Session.get("s_desc");
		return s_desc;
	},
	sCreator:function()
	{
		s_creator = Session.get("s_creator");
		return s_creator;
	},
	showDetails:function()
	{
		var s_name,s_cw,s_site,s_cn,s_lang,s_date;
		var linkC = Session.get("linkClicked");
		
		Show_Detail.find({show_name:linkC})
		.forEach(function(myDoc)
		{				
				s_name = myDoc.show_name;
				s_site    = myDoc.show_site;
				s_cn  = myDoc.show_country;
				s_lang  = myDoc.show_lang;										
				s_date  = myDoc.show_date;										
		});		

		Session.set("s_site",s_site);
		Session.set("s_cn",s_cn);
		Session.set("s_lang",s_lang);
		Session.set("s_date",s_date);
	},
	sWebsite:function()
	{
		s_web = Session.get("s_site");
		return s_web;		
	},	
	sCountry:function()
	{
		s_cn = Session.get("s_cn");
		return s_cn;
	},
	sLang:function()
	{
		s_lang = Session.get("s_lang");
		return s_lang;
	},
	sDate:function()
	{
		s_date =  Session.get("s_date");
		return s_date;
	}
});
	Template.show_desc.events({
		"click .buttonP":function(evt,tmpl)
		{
			//alert("Inside");
			
			var s_code;
			var linkC = Session.get("linkClicked");
			//alert("link C = "+linkC);
			Show_Basic.find({show_name:linkC})
			.forEach(function(myDoc)
			{
				s_code = myDoc.show_code_word;												
			});
			//alert("Scode  = "+s_code);
			
			var count = Show_Cast.find().count();
			count=count+1;	
			picBase = "cast"+s_code+count+".jpg";
			//alert(picBase);
			
			Show_Cast.insert({	
			cast_pic:picBase,
			cast_name:"Teri Polo",			
			cast_char_name:"Stef Foster",
			cast_show:"The Fosters"
			}
		    , function( error, result)
			{ 
		       if ( error ) alert( error ); //info about what went wrong
		       if ( result ) alert( result ); //the _id of new object if successful
			});						
			alert("Document Added in Database");			

		}
    });

	
