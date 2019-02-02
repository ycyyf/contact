$(document).ready(function(){
	
	// 获取对应联系人的名字
	var name=window.location.search.split("&")[0].split("=")[1];
	var phone=window.location.search.split("&")[1].split("=")[1];
	var nameIndex=window.location.search.split("&")[2].split("=")[1];
	var id=window.location.search.split("&")[3].split("=")[1];

	name=decodeURI(name);
	$(".touxiang p").text(name);
	$("#phone-number").text(phone);

	// 点击号码拨号
	$("#phone-number").click(function(){
		$("#call").show();
	})
	$("#call").click(function(){
		$("#call").hide();
	})

	// 点击头部的联系人时回退到联系人页面
	$("header span:eq(0)").click(function(){
		history.go(-1);
	})
	//点击编辑时显示编辑页面
	$("header span:eq(2)").click(function(){
		window.location.href="editcontacts.html?name="+name+"&phone="+phone+"&nameIndex="+nameIndex+"&id="+id;
	})
})
	

