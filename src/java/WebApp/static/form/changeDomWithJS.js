require(["htmlparser.js"],function(){
	 
//	 var results = "";
//
//	 HTMLParser("hello world", {
//	 start: function( tag, attrs, unary ) {
//	  results += "<" + tag; for ( var i = 0; i < attrs.length; i++ ) results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
//	  results += (unary ? "/" : "") + ">";
//	  },
//	 end: function( tag ) {
//	  results += "";
//	  },
//	 chars: function( text ) {
//	  results += text;
//	  },
//	 comment: function( text ) {
//	  results += "";
//	  }
//	 });
//
//	 console.log(results == "hello world");
	
	var testHtmlDom = "<HTML><HEAD><TITLE>testSet<\/TITLE>\n<META content=\"text/html; charset=utf-8\" http-equiv=Content-Type>\n<STYLE  type=text/css> .search-word{background-color:#ffee94 !important} p, td, li {font-family:맑은 고딕, arial; font-size:11pt; margin-top:5px;margin-bottom:5px;} body{margin:10px 10px 10px 10px; line-height:1.4; font-family:맑은 고딕, arial; font-size:11pt;}<\/STYLE>\n\n<META content=IE=5 http-equiv=X-UA-Compatible>\n<META content=IE=5 http-equiv=X-UA-Compatible>\n<META name=GENERATOR content=ActiveSquare><\/HEAD>\n<BODY>\n<DIV id=cafe-note-contents style='FONT-SIZE: 11pt; FONT-FAMILY: \"맑은 고딕\"; MARGIN: 10px'>\n<P><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\">안녕하십니까!<\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/P>\n<P><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\">인트라넷사업팀 개발그룹 박종명 선임입니다.<\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/P>\n<P style=\"LINE-HEIGHT: 200%\"><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\"><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN>&nbsp;<\/P>\n<P style=\"LINE-HEIGHT: 200%\"><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\"><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN>&nbsp;<\/P>\n<P style=\"LINE-HEIGHT: 200%\"><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\"><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN>&nbsp;<\/P>\n<P style=\"LINE-HEIGHT: 200%\"><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\"><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN>&nbsp;<\/P>\n<P><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,0,0)\">감사합니다.<\/SPAN><\/SPAN><\/SPAN><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"COLOR: rgb(0,156,225)\"><\/SPAN><\/SPAN><\/SPAN><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,156,225)\"><SPAN style=\"FONT-SIZE: 11pt; FONT-FAMILY: 맑은 고딕\">&nbsp;<\/SPAN> <BR><\/SPAN><\/SPAN><\/SPAN><SPAN style=\"MARGIN-BOTTOM: 0px; COLOR: rgb(0,0,0); MARGIN-TOP: 0px\"><SPAN style=\"MARGIN-BOTTOM: 0px; MARGIN-TOP: 0px\"><SPAN style=\"FONT-FAMILY: 맑은 고딕; COLOR: rgb(0,156,225)\">_________________________________________________<\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/SPAN><\/P>\n<P><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BR>선임 / 개발그룹(인트라넷사업팀)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BR>Advisory Engineer / Development Group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BR><\/SPAN><STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\">T<\/SPAN><\/STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\"> +82-70-7164-3758 <\/SPAN><STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\">M<\/SPAN><\/STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\"> +82-10-2649-6318&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BR><\/SPAN><STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\">F<\/SPAN><\/STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\"> +82-2-3486-9725&nbsp;&nbsp; <\/SPAN><STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\">E<\/SPAN><\/STRONG><SPAN style=\"FONT-FAMILY: 맑은 고딕\">&nbsp;<\/SPAN><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><\/SPAN><\/A><\/SPAN><\/P>\n<P><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\">&nbsp; <IMG style=\"BORDER-LEFT-WIDTH: 0px; HEIGHT: 23px; BORDER-RIGHT-WIDTH: 0px; WIDTH: 242px; BORDER-BOTTOM-WIDTH: 0px; BORDER-TOP-WIDTH: 0px\" data-cui-image=\"true\" unselectable=\"on\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <\/SPAN><\/SPAN><\/P>\n<P><SPAN style=\"FONT-SIZE: 11pt\"><SPAN style=\"FONT-FAMILY: 맑은 고딕\"><\/SPAN><\/A><\/SPAN><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P><\/DIV>\n<P><\/P>\n<P><\/P>\n<P><\/P>\n<P><\/P><\/BODY><\/HTML><body><p>&nbsp;<\/p><p>&nbsp;<\/p><p>--------- <b>Original Message<\/b> ---------<\/p><p><b>Sender<\/b> : &gt;<\/p><p><b>Date<\/b>   : 2016-06-17 11:24 (GMT+9)<\/p><p><b>Title<\/b>  : in Success - <\/p><\/body><body><p>&nbsp;<\/p><\/body> <!DOCTYPE HTML PUBLIC -//W3C//DTD HTML 4.01 Transitional//EN> <html> <head> <title>CR Web Mail<\/title> <meta http-equiv=Content-Type content=text/html; charset=utf-8> <style type=\"text/css\"> .font_blue \t{color: #0033FF;} .line_base \t{text-decoration:underline;} .table_line\t{background-color:#CDD6E4;} .table_unit\t{font-size:12px; color:#333333;text-align:right;} td {font-size: 12px; color:  #363636; font-family:\"arial\",\"dotum\" ; text-decoration: none ;margin:0; padding:0;}     A:link    {font-size: 12px; color: #333333; text-decoration: none; font-family:\"arial\",\"dotum\" ;}     A:visited {font-size: 12px; color: #333333; text-decoration: none; font-family:\"arial\",\"dotum\" ;}     A:active  {font-size: 12px; color: #333333; text-decoration: none; font-family:\"arial\",\"dotum\" ;}     A:hover   {font-size: 12px; color: #FD5F00; text-decoration: none; font-family:\"arial\",\"dotum\" ;} body   {scrollbar-face-color:#F7F7F7;    scrollbar-highlight-color:#ffffff;    scrollbar-shadow-color:#cccccc;    scrollbar-3dlight-color:#FFFFFF;    scrollbar-arrow-color:#cccccc;    scrollbar-track-color:#FFFFFF;    scrollbar-darkshadow-color:#ffffff;}\t img { margin:0; border:0; display:block;} input, select, textarea{ font-size:12px; color:#666666;}\t .textarea\t\t{font-size:12px; font-family:\"arial\",\"dotum\"; color: #363636; background-color:#FFFFFF; border:0px solid #CDCDCD; padding:2px 3px; overflow:auto;  width:100%; } .big_title\t\t{font-size:16px; font-family: Verdana; color:#000000; font-weight:bold; Text-align:left; valign:bottom; line-height:100%; } .notice_title \t\t{font-size:12px; color:#333333; font-weight:bold; padding: 0px 0px 7px 12px;} .notice_title1 \t\t{font-size:11px; color:#003366; padding:0px 0px 7px 12px; Text-align:right;} .point\t\t\t{font-size:13px; color:#20639C; font-weight: bold;} .table_bigtitle\t\t{font-size:16px; color:#333333; padding:0 5px 0 5px; Text-align:center; font-weight: bold; text-decoration:underline; } .table_description\t{font-size:12px; color:#333333; padding:0 0 0 0;  font-weight: bold;} .table1_head\t\t{font-size:12px; color:#113f8c; line-height:20px; Background-Color:#F2F5F9; padding:0 5px 0 5px; Text-align:center;} .table1_head_left\t{font-size:12px; color:#113f8c; line-height:20px; Background-Color:#F2F5F9; padding:0 5px 0 5px; Text-align:left; } .table1_head_right\t{font-size:12px; color:#003366; line-height:20px; Background-Color:#F2F5F9; padding:0 5px 0 5px; Text-align:right; } .table1_head2\t\t{font-size:12px; color:#003366; line-height:20px; Background-Color:#E6F1F6; padding:0 5px 0 5px; Text-align:center;} .table1_head2_left\t{font-size:12px; color:#003366; line-height:20px; Background-Color:#E6F1F6; padding:0 5px 0 5px; Text-align:leff; } .table1_head2_right\t{font-size:12px; color:#003366; line-height:20px; Background-Color:#E6F1F6; padding:0 5px 0 5px; Text-align:right; } .table2_head\t\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#ECE9E2; padding:0 5px 0 5px; Text-align:center;} .table2_head_left\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#ECE9E2; padding:0 5px 0 5px; Text-align:left;} .table2_head_right\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#ECE9E2; padding:0 5px 0 5px; Text-align:right;} .table2_head2\t\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#F6F4E6; padding:0 5px 0 5px; Text-align:center;} .table2_head2_left\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#F6F4E6; padding:0 5px 0 5px; Text-align:left;} .table2_head2_right\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#F6F4E6; padding:0 5px 0 5px; Text-align:right;} .table2_head2_red\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#F6F4E6; padding:0 5px 0 5px; Text-align:center; color:#dd0000;} .table2_head2_left_red\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#F6F4E6; padding:0 5px 0 5px; Text-align:left;   color:#dd0000;} .table2_head2_right_red\t{font-size:12px; color:#39410A; line-height:20px; Background-Color:#F6F4E6; padding:0 5px 0 5px; Text-align:right;  color:#dd0000;} .table_list\t\t{font-size:12px; line-height:20px; Background-Color:#ffffff; padding:0 5px 0 5px; Text-align:center; } .table_list_left\t{font-size:12px; line-height:20px; Background-Color:#ffffff; padding:0 5px 0 5px; Text-align:left; } .table_list_right\t{font-size:12px; line-height:20px; Background-Color:#ffffff; padding:0 5px 0 5px; Text-align:right; } .table_list_red\t\t{font-size:12px; line-height:20px; Background-Color:#ffffff; padding:0 5px 0 5px; Text-align:center; color:#dd0000;} .table_list_left_red\t{font-size:12px; line-height:20px; Background-Color:#ffffff; padding:0 5px 0 5px; Text-align:left;   color:#dd0000;} .table_list_right_red\t{font-size:12px; line-height:20px; Background-Color:#ffffff; padding:0 5px 0 5px; Text-align:right;  color:#dd0000;} .gray_list\t\t{font-size:12px; line-height:20px; Background-Color:#f3f3f3; padding:0 5px 0 5px; Text-align:center;} .gray_list_left\t\t{font-size:12px; line-height:20px; Background-Color:#f3f3f3; padding:0 5px 0 5px; Text-align:left;} .gray_list_right\t{font-size:12px; line-height:20px; Background-Color:#f3f3f3; padding:0 5px 0 5px; Text-align:right;} .gray_list_red\t\t{font-size:12px; line-height:20px; Background-Color:#f3f3f3; padding:0 5px 0 5px; Text-align:center; color:#dd0000;} .gray_list_left_red\t{font-size:12px; line-height:20px; Background-Color:#f3f3f3; padding:0 5px 0 5px; Text-align:left;   color:#dd0000;} .gray_list_right_red\t{font-size:12px; line-height:20px; Background-Color:#f3f3f3; padding:0 5px 0 5px; Text-align:right;  color:#dd0000;} .table_list_left_sum\t{font-size:12px; line-height:20px; Background-Color:#f0f5d9; padding:0 5px 0 5px; Text-align:left;   color:#71a500; font-weight:bold;} .table_list_right_sum\t{font-size:12px; line-height:20px; Background-Color:#f0f5d9; padding:0 5px 0 5px; Text-align:right;   color:#71a500; font-weight:bold;} /* tab_menu */ .tabmenu\t\t{color: #000e90;text-decoration: none; font-size: 12px;\tfont-weight: normal;padding : 6px 10px 4px 10px; } .tabmenu a:link \t{color: #666666;text-decoration: none; font-size: 12px} .tabmenu a:visited\t{color: #888888;text-decoration: none; font-size: 12px} .tabmenu a:hover \t{color: #000e90;text-decoration: none; font-size: 12px} .tabmenu_s\t\t{color: #000e90;text-decoration: none; font-size: 12px;\tfont-weight: bold;padding : 6px 10px 4px 10px;} .tabmenu_s a:link \t{color: #333333;text-decoration: none; font-size: 12px} .tabmenu_s a:visited\t{color: #333333;text-decoration: none; font-size: 12px} .tabmenu_s a:hover \t{color: #000e90;text-decoration: none; font-size: 12px} <\/style><\/head> <body> <table border=0 cellpadding=0 cellspacing=0 width=750 align=center> <tr> <td> <table border=0 align=center cellpadding=0 cellspacing=0 width=100%>     <tr>         <td><\/td>         <td  width=100%><\/td>         <td><\/td>     <\/tr> <\/table> <table border=0 align=center cellpadding=0 cellspacing=0 width=100%>     <tr>         <td bgcolor=#c8c8c8 width=1><\/td>         <td bgcolor=#efefef>         <table border=0 cellpadding=0 cellspacing=10>             <tr>                 <td valign=top><\/td>                 <td valign=center><font face=verdana size=3><b>Feedback<\/b><\/font><\/td>             <\/tr>         <\/table>         <\/td>         <td bgcolor=#c8c8c8 width=1><\/td>         <td bgcolor=#f2f2f2 width=2><\/td>     <\/tr> <\/table> <table border=0 align=center cellpadding=0 cellspacing=0 width=100%>     <tr>         <td bgcolor=#c8c8c8 width=1><\/td>         <td bgcolor=#ffffff width=25><\/td>         <td bgcolor=#ffffff>         <br><br>         <table border=0 cellpadding=0 cellspacing=0>             <tr>                 <td><\/td>                 <td><span style=font-size:12px;font-family:arial;color:#333333;><b>General Information<\/b><\/span><\/td>             <\/tr>             <tr>                 <td height=7><\/td>             <\/tr>         <\/table>         <!-- table -->         <table width=100% border=0 cellpadding=0 cellspacing=1 bgcolor=#CDD6E4>             <tr>                 <td class=table1_head_left width=20%>Module<\/td>                 <td class=table_list_left width=80% colspan=3>SF<\/td>             <\/tr>             <tr>                 <td class=table1_head_left>Request Date<\/td>                 <td class=table_list_left><\/td>                 <td class=table1_head_left>Requester<\/td>                 <td class=table_list_left>Y_JUN.KWON<\/td>             <\/tr>         <\/table>         <!-- table -->         <table border=0 cellpadding=4 cellspacing=0 width=100%>         <\/table>         <br><br>         <table border=0 cellpadding=0 cellspacing=0>             <tr>                 <td><\/td>                 <td><span style=font-size:12px;font-family:arial;color:#333333;><b>Detail Information<\/b><\/span><\/td>             <\/tr>             <tr>                 <td height=7><\/td>             <\/tr>         <\/table>         <!-- table -->         <table width=100% border=0 cellpadding=0 cellspacing=1 bgcolor=#CDD6E4>             <tr>                 <td class=table1_head_left width=20%>Request No.<\/td>                 <td class=table_list_left width=% colspan=3>Object<\/td>             <\/tr>             <tr>                 <td class=table1_head_left>Description<br>(Error/Success)<\/td>                 <td class=table_list_left colspan=3>                 - Request No 생성자: <br>                 - 결재 상신자: <br>                 - 결재 상신일: <br>                 - 최종 결재자: <br>                 - 최종 결재일: <br>                 - 최종 결재시간: <br>                 - <br>                 - <br>                 - <br>                 - <\/td>             <\/tr>         <\/table>         <br>         <br>         <\/td>         <td bgcolor=#ffffff width=25><\/td>         <td bgcolor=#c8c8c8 width=1><\/td>         <td bgcolor=#f2f2f2 width=2><\/td>     <\/tr> <\/table> <table border=0 align=center cellpadding=0 cellspacing=0 width=100%>     <tr>         <td><\/td>         <td width=100%>         <table border=0 cellpadding=0 cellspacing=0 width=100%>             <tr><td bgcolor=#dddddd height=1><\/td><\/tr>             <tr><td bgcolor=#f3f3f3 height=29><\/td><\/tr>             <tr><td bgcolor=#c8c8c8 height=1><\/td><\/tr>             <tr><td bgcolor=#f2f2f2 height=2><\/td><\/tr>         <\/table>         <\/td>         <td><\/td>     <\/tr> <\/table> <\/td> <\/tr> <\/table> <table id=confidentialsignimg><tr><td>\r\n<!--<p>&#10;<\/p>&#10;-->\r\n<p><img border=\"0\" /><\/p> \r\n<\/td><\/tr><\/table><\/body> <\/html>";
	
	// 결과 객체
	var resultDom = {
		result :"" ,
		countSet : []
			
	};
	
	var chageRightDom = function (testHtmlDom){

		// 전처리
		var modifyDom = testHtmlDom.replace("<\/","</");
		
		var result = "";
		var countSet = []; // <html , </html , <head , </head , <body , </body
		//1. seperate html / head / body
		
		var htmlArr = [];
		var htmlStartPatt = new RegExp("<html","ig");
		var htmlEndPatt = new RegExp("</html","ig");
		countSet.push(modifyDom.match(htmlStartPatt).length);
		countSet.push(modifyDom.match(htmlEndPatt).length);
//		var htmlStartPatt = /<html/g;
		
		var headArr = [];
		var headStartPatt = new RegExp("<head","ig");
		var headEndPatt = new RegExp("</head","ig");
		countSet.push(modifyDom.match(headStartPatt).length);
		countSet.push(modifyDom.match(headEndPatt).length);
		
		
		var bodyArr = [];
		var bodyStartPatt = new RegExp("<body","ig");
		var bodyEndPatt = new RegExp("</body","ig");
		countSet.push(modifyDom.match(bodyStartPatt).length);
		countSet.push(modifyDom.match(bodyEndPatt).length);
		
		resultDom.countSet = countSet;
//		console.log(countSet);
		//2. validation html tags
		//   ex) count <html === </html  
		var validataDom = _validationDom(countSet);
		
		// html, head, body 값이 매칭되지 않으면 변경 하지 않고 리턴함
		if(!validataDom){
			return modifyDom;
		}
		
		//3. make temp dom
		var header = "";
		var bodier = "";
		
		//4. setHtml
		result = header + bodier;
		
		//5. end html setting 
		return result;
	}
	
	// Dom validation check
	var _validationDom = function(countSet){
		console.log("_validationDom",countSet);
		var result = true;
		var i = 0;
		while(i < countSet.length ){
			if(countSet[i] != countSet[i+1]){
				result = false;
				break;
			}else{
				i = i + 2;
			}
		}
		
		return result;
		
	}
	
	// 함수 실행
	resultDom.result = chageRightDom(testHtmlDom);
	
	
	return resultDom;
});
