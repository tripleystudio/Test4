
function GetSaveData(window)
{
	var http = Ti.Network.createHTTPClient();
	http.open('GET','http://makers.sakura.ne.jp/poke/php/getranking.php');
	http.onload  = function() 
	{
	    this.data = this.responseData;
		Ti.API.info("data"+this.data);
	}
	http.send();
}

module.exports = GetSaveData;
