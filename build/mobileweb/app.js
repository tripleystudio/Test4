
//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
Ti.App.isAndroid = (Titanium.Platform.name == 'andr')? true : false;
Ti.App.Tab = null;
Ti.App.Esa = "-----";
Ti.App.Water = "-----";
Ti.App.Items = [];

// This is a single context application with mutliple windows in a stack
(function() 
{
	
	Ti.API.debug("☆☆☆☆☆☆☆SSSSSTART");
	
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	isTablet = true;

	var http = Ti.Network.createHTTPClient();
	http.open('GET','http://makers.sakura.ne.jp/chi/login.php?id=pcuser1');
	http.onload  = function() 
	{		
	    this.data = this.responseData;
		Ti.API.info("data"+this.data);
		// テーブルを生成
		var re = ""+this.data;
		var res = re.split(",");	
		
		// ユーザ情報取得
		Ti.App.Esa = res[0];	
		Ti.App.Water = res[1];
		
		var num = res[2]-2;
		for(var i = 0;i < num;i++)
		{	
			Ti.App.Items.push(res[i]);
		}		
		var ApplicationTabGroup = require('ApplicationTabGroup');
		Ti.App.Tab = ApplicationTabGroup;
		ApplicationTabGroup().open();
	}
	http.send();
	
})();
