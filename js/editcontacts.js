$(document).ready(function(){
	// 点击取消时
	$("header span:eq(0)").click(function(){
		history.go(-1);
	})

	// 获取联系人的信息
	// 获取对应联系人的名字
	var name=window.location.search.split("&")[0].split("=")[1];
	var phone=window.location.search.split("&")[1].split("=")[1];
	var nameIndex=window.location.search.split("&")[2].split("=")[1];
	var id=window.location.search.split("&")[3].split("=")[1];

	name=decodeURI(name);
	$("#name").val(name);
	$("#phone").val(phone);
	$("#nameIndex").val(nameIndex);

	// 点击保存时，发出ajax请求
	$("header span:eq(2)").click(function(){
		var nameIndex=$("#nameIndex").val();
		var name=$("#name").val();
		var phoneNum=$("#phone").val();
		// 要传给后台的数据
		var obj="operation=编辑&name="+name+"&phone="+phoneNum+"&nameIndex="+nameIndex+"&id="+id;
		// 向后端发起请求
		var xmlhttp=httpRequest("editcontacts.asp","post",obj);
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4&&xmlhttp.status==200)
			{
				var result=xmlhttp.responseText;
				if(result=='true')
				{
					// 成功
					alert("操作成功！");
					window.location.href="index.html"
				}
				else
				{
					alert(result);
				}
			}
		}	
	})

	// 删除联系人功能
	$("#delete-contacts").click(function(){
		var result=confirm("确定要删除此联系人吗？");
		if(result)
		{
			// 要传给后台的数据
			var obj="operation=删除&id="+id;
			// 向后端发起请求
			var xmlhttp=httpRequest("editcontacts.asp","post",obj);
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200)
				{
					var result=xmlhttp.responseText;
					if(result=='true')
					{
						// 成功
						alert("操作成功！");
						window.location.href="index.html"
					}
					else
					{
						alert(result);
					}
				}
			}
		}
		
	})
})