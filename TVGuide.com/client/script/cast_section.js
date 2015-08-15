Template.cast_section.helpers({
	showCast:function()
	{
		linkC = Session.get("linkClicked");
		alert("link inside = "+linkC);
		return Show_Cast.find({cast_show:linkC});
	}
});