document.write("<script type='text/javascript' src='https://apis.google.com/js/plusone.js'></script>");
/*document.write("<div id=\"fb-root\"></div>"
+ "<script>(function(d, s, id) {"
+ " var js, fjs = d.getElementsByTagName(s)[0]; "
+ " if (d.getElementById(id)) return; "
+ " js = d.createElement(s); js.id = id; "
+ " js.src = \"//connect.facebook.net/en_US/all.js#xfbml=1\"; "
+ " fjs.parentNode.insertBefore(js, fjs); "
+ "}(document, 'script', 'facebook-jssdk'));</script>"); */


//MMI_mShare(InstanceName, toolbar_width, toolbar_height, MMI_mShareTrack, "http://www.martinimediainc.com" ,"http://bit.ly/pkcUb8", 
//"Connect brands with the most important Audience", "0", MMI_mShareBlockId, toolbar_x, toolbar_y, padding-left, imageURL, toolbarSelection, paddingBottom, GooglePlus_button_size)
var MMI_mShare = function(name, width, height, trackurl, mshareurl, tinyurl, addesc, toolbar, canvas, timer, startx, starty, paddingLeft, image, selection, paddingBottom, gplus_size) 
{
	this.name = name;
	this.mmi_x = startx;
	this.mmi_y = starty; 
	this.mmi_paddingLeft = paddingLeft;
	this.mmi_width = width;
	this.mmi_height = height;
	this.mmi_trackURL = trackurl;
	this.mmi_mshrURL = mshareurl;
	this.mmi_tinyURL = tinyurl;
	this.mmi_adDesc = addesc;
	this.mmi_staticToolbar = toolbar; /* 0 = rollover ; 1 = static toolbar */
	this.mmi_canvas = canvas;
	this.mmi_timer = timer;
	this.mmi_image = encodeURIComponent(image); //Pinterest Image
	this.mmi_selection = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]; 
	if(selection != null) this.mmi_selection = selection.split(",");
	this.mmi_style;
	this.mmi_posXY;
	this.divElement;
	this.mmi_gplusURL;
	this.mmi_socialToolbar;
	if(typeof paddingBottom == "undefined") { paddingBottom = 0; }
	this.mmi_paddingBottom = paddingBottom;
	if(typeof gplus_size == "undefined") { gplus_size = "small"; }
	this.mmi_gplus_size = gplus_size;

	this.RecordTracking = function (mmi_type)
	{
		var clickurl = this.mmi_trackURL.replace("/type/0/","/type/" + mmi_type + "/")
		var divTag = document.createElement("div");
		divTag.innerHTML = "<img src = '" + clickurl + "' style='display:none;border:0;height=1px;width:1px;'>";
	}

	/* Google Plus tracking */
	this.mmi_plusone_vote = function() {
		this.RecordTracking(4);
	}

	this.facebook = function() 
	{
		var mmi_fbfinal = 'http://www.facebook.com/sharer.php?u='+this.mmi_mshrURL;
		var mmi_topval = (screen.height/2)-250;
		var mmi_leftval = (screen.width/2)-425;
  		this.RecordTracking(1);
 		MyWindow=window.open(mmi_fbfinal,"_blank",'toolbar=no,location=no,directories=no,copyhistory=no,status=no,menubar=no,scrollbars=no,resizable=no,width=850,height=500,top='+mmi_topval+',left='+mmi_leftval+'');
	};

	this.twitter = function() {
		var mmi_topval = (screen.height/2)-200;
		var mmi_leftval = (screen.width/2)-300;
		this.RecordTracking(2);
		var twitterURL = "http://twitter.com/intent/tweet?text="+this.mmi_adDesc+" "+this.mmi_tinyURL;
		window.open(twitterURL,'_blank','toolbar=no,location=no,directories=no,copyhistory=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=400,top='+mmi_topval+',left='+mmi_leftval+'');
	};

	this.email = function() {
		var mmi_topval = (screen.height/2)-175;
		var mmi_leftval = (screen.width/2)-275;
		this.RecordTracking(3);
  		window.open("http://mshare.martiniadnetwork.com/mail.php?link="+this.mmi_tinyURL+"&subject="+this.mmi_adDesc,'_blank','toolbar=no,location=no,directories=no,copyhistory=no,status=no,menubar=no,scrollbars=no,resizable=no,width=550,height=350,top='+mmi_topval+',left='+mmi_leftval+'');
	};

	this.linkedIn = function() {
		var mmi_topval = (screen.height/2)-200;
		var mmi_leftval = (screen.width/2)-300;
		this.RecordTracking(5);
		var linkedInURL = "http://www.linkedin.com/cws/share?url="+this.mmi_mshrURL+"&original_referer=http://developer.linkedin.com/sites/Fall/themes/dlc/sandbox.php?&token=&isFramed=true&_ts=1326851054918.7036";
		window.open(linkedInURL,'_blank','toolbar=no,location=no,directories=no,copyhistory=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=400,top='+mmi_topval+',left='+mmi_leftval+'');
	};

	this.goToMartini = function() {
		this.RecordTracking(8);
		window.open('http://www.martinimediainc.com','_blank');
	};

	this.showtoolbar = function()
	{
		if(this.mmi_staticToolbar == 0){ // Roll-over toolbar
			document.getElementById("mmi_"+this.name+"Middletoolbar").style.visibility = 'visible';	
			document.getElementById(this.mmi_canvas+"_mmi_gplus").style.display = 'block';
		}
	};

	this.hidetoolbar = function()
	{
		if(this.mmi_staticToolbar == 0){ // Roll-over toolbar
			document.getElementById("mmi_"+this.name+"Middletoolbar").style.visibility = "hidden";
			document.getElementById(this.mmi_canvas+"_mmi_gplus").style.display = 'none'; 
		}
	};
	
	this.mShareLoad = function(mmi_render)
	{
		this.mmi_style = "width: "+this.mmi_width+"px; height: "+this.mmi_height+"px; left: "+this.mmi_x+"px; top:"+this.mmi_y+"px; position: absolute; z-index: 999;";
		this.mmi_iconStyle = "float: left; padding-bottom: " +this.mmi_paddingBottom+ "px; padding-left: " + this.mmi_paddingLeft + "px; cursor:pointer;";
		this.mmi_gplusURL = this.mmi_mshrURL.replace(/&/g,"&amp;");
		this.divElement = document.getElementById(this.mmi_canvas);
		
		this.divElement.onmouseover = function() { mmi_render.showtoolbar()}
		this.divElement.onmouseout = function() { mmi_render.hidetoolbar()}
		
		var $pinit = "";
		if(this.mmi_image != null && this.mmi_image != "0" ) { // Load Pinterest button
			var mmi_pinURL = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.mmi_mshrURL) + "&media="+this.mmi_image+"&description="+this.mmi_adDesc;
			$pinit = "<div id=\"" + this.mmi_canvas + "_mmi_pinterest\" onclick=\""+this.name+".pinterest()\" style=\"" + this.mmi_iconStyle + "\"><a href=\""+mmi_pinURL+"\" class=\"pin-it-button\" count-layout=\"none\">Pin It</a></div>";
		}
		
		this.mmi_socialToolbar = "<div class=\""+this.mmi_canvas+"class\" id=\"mmi_"+this.name+"Middletoolbar\" style=\""+ this.mmi_style +"\" onmouseover=\""+this.name+".showtoolbar();\" onmouseout=\""+this.name+".hidetoolbar();\" >";
		
		/* Twitter button */
		if(this.mmi_selection[1] == "1")  this.mmi_socialToolbar += "<img id=\"" + this.mmi_canvas + "_mmi_tw\" onclick=\""+ this.name +".twitter()\" src=\"http://cdn.martiniadnetwork.com/8062D5/mshare_images/images/twitter.png\" style=\"" + this.mmi_iconStyle + "\" />";
		
		/* LinkedIn button */
		if(this.mmi_selection[3] == "1") this.mmi_socialToolbar += "<img id=\"" + this.mmi_canvas + "_mmi_ln\" onclick=\"" + this.name + ".linkedIn()\" src=\"http://cdn.martiniadnetwork.com/8062D5/mshare_images/images/linkedin.png\" style=\"" + this.mmi_iconStyle + "\"/>";
		
		/* Email button */
		if(this.mmi_selection[2] == "1") this.mmi_socialToolbar += "<img id=\"" + this.mmi_canvas + "_mmi_em\" onclick=\"" + this.name + ".email()\" src=\"http://cdn.martiniadnetwork.com/8062D5/mshare_images/images/email.png\" style=\"" + this.mmi_iconStyle + "\" />";
		
		/* Facebook Like button */
		if(this.mmi_selection[5] == "1") this.mmi_socialToolbar += "<div id=\"" + this.mmi_canvas + "_mmi_fblike\" style=\"width:77px; float: left; padding-left: "+this.mmi_paddingLeft+"px;\"><div class=\"fb-like\" data-href=\""+encodeURIComponent(this.mmi_mshrURL)+"\" data-send=\"false\" data-layout=\"button_count\"data-width=\"50\" data-show-faces=\"true\"></div></div>"; 
		
		/* Google Plus */
		if(this.mmi_selection[4] == "1") this.mmi_socialToolbar += "<div id=\"" + this.mmi_canvas + "_mmi_gplus\" style=\""+ this.mmi_iconStyle +"\"><div class=\"g-plusone\" data-size=\""+this.mmi_gplus_size+"\" data-annotation=\"none\" callback=\"" + this.name + ".mmi_plusone_vote()\" data-href=\""+this.mmi_gplusURL+"\"></div></div>";
		
		/* Pinterest */
		if(this.mmi_selection[8] == "1") this.mmi_socialToolbar += $pinit;
		
		this.mmi_socialToolbar += "</div>";
		
		this.divElement.innerHTML += this.mmi_socialToolbar;
		
		var mmi_pintr = document.createElement('script'); 
		mmi_pintr.type = 'text/javascript'; mmi_pintr.async = false;
		mmi_pintr.src = 'http://assets' + '.pinterest.com/js/pinit.js';
		var s = document.getElementsByTagName('script')[0]; 
		s.parentNode.insertBefore(mmi_pintr, s);
		
		if(navigator.appName != "Microsoft Internet Explorer"){
			/* <!-- FACEBOOK UNLIKE/LIKE SCRIPT --> */
			/*document.write("<script> window.onload = function(){ if (typeof FB != 'undefined') {	FB.Event.subscribe('edge.remove', function(response) { "+this.name+".RecordTracking(7); }); FB.Event.subscribe('edge.create', function(response) { "+this.name+".RecordTracking(6); }); } }</script>"); */
		}

		gapi.plusone.go();
	};
};

function MMI_Initialize()
{
	var i=0;
	if(typeof mmi_arr != "undefined")
	{
		try {
			if(mmi_arr.length != 0)
			{
				var mmi_val = mmi_arr.pop(); //mmi_arr[i];
				mmi_mshrInstance = mmi_val[0]; //mshare_test1
				var mmi_localInstance = new MMI_mShare(mmi_val[0], mmi_val[1], mmi_val[2], mmi_val[3], mmi_val[4], mmi_val[5], mmi_val[6], mmi_val[7], mmi_val[8], mmi_val[9], mmi_val[10], mmi_val[11], mmi_val[12], mmi_val[13], mmi_val[14], mmi_val[15], mmi_val[16]);
				eval("var mmi_render = "+ mmi_mshrInstance +" = mmi_localInstance");
				mmi_render.mShareLoad(mmi_render);
			}
		}
		catch (err){ }
	}
}

setTimeout("MMI_Initialize()",500);
