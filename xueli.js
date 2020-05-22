*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/movie/WatchMovie';

const checkvip = '/api/Account/CheckVip';

const vipinfo = '/api/account/IndexDetail';

if (url.indexOf(vip) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(checkvip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vipinfo) != -1) {
	obj["nickName"] = "好心人";
   obj["vipLevel"] = "101";
   obj["vipEndTime"] = "2222-02-22";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});
