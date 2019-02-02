$(document).ready(function(){
	// 点击取消时
	$("header span:eq(0)").click(function(){
		history.go(-1);
	})

	// 当点击保存时，添加新联系人
	$("header span:eq(2)").click(function(){
		
		// 校验输入框有无空值
		var nameIndex=$("#nameIndex").val();
		var name=$("#name").val();
		var phoneNum=$("#phoneNum").val();
		if(name=="")
		{
			alert("请填写名字！");
			return false;
		}
		if(phoneNum=="")
		{
			alert("请填写手机号码！");
			return false;
		}
		if(/^[A-Z]$/.test(nameIndex)!=true)
		{
			alert("拼音索引格式不对!");
			return false;
		}

		// 要传给后台的数据
		var obj="name="+name+"&phone="+phoneNum+"&nameIndex="+nameIndex;
		// 向后端发起请求
		var xmlhttp=httpRequest("addcontacts.asp","post",obj)
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4&&xmlhttp.status==200)
			{
				var result=xmlhttp.responseText;
				if(result=='true')
				{
					// 成功
					alert("添加联系人成功！");
					history.go(-1);
				}
				else
				{
					alert(result);
				}
			}
		}
	})
})