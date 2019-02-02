window.onload=function(){
	var xmlhttp=httpRequest("index.asp","post","");
	xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4&&xmlhttp.status==200)
			{
				var ulEle=document.getElementById("show-list");
				var arr=[];
				arr=xmlhttp.responseText.split(";");
				for(var i=0;i<arr.length-1;i++)
				{
					var obj=arr[i].toString().split(",");
					arr[i]={
						name:obj[0],
						phoneNum:obj[1],
						nameIndex:obj[2].replace(/\s*/g,''),
						id:obj[3]
					};
				}
				arr.length=arr.length-1;
				$("#search input").attr("placeholder","在"+arr.length+"位联系人中搜索")
				// 对数组按字母表排序
				for(var i=0;i<arr.length;i++)
				{
					for(var j=i+1;j<arr.length;j++)
					{
						if(arr[i].nameIndex>arr[j].nameIndex)
						{
							var temp=arr[i];
							arr[i]=arr[j];
							arr[j]=temp;
						}
					}
				}
				// 动态创建元素
				for(var i=0;i<arr.length;i++)
				{
					// 获得字母索引值
					switch(arr[i].nameIndex)
					{
						case "A":createNewEle("a",i);break;									
						case "B":createNewEle("b",i);break;			
						case "C":createNewEle("c",i);break;			
						case "D":createNewEle("d",i);break;			
						case "E":createNewEle("e",i);break;			
						case "F":createNewEle("f",i);break;			
						case "G":createNewEle("g",i);break;			
						case "H":createNewEle("h",i);break;			
						case "I":createNewEle("i",i);break;			
						case "J":createNewEle("j",i);break;			
						case "K":createNewEle("k",i);break;			
						case "L":createNewEle("l",i);break;			
						case "M":createNewEle("m",i);break;			
						case "N":createNewEle("n",i);break;			
						case "O":createNewEle("o",i);break;			
						case "P":createNewEle("p",i);break;			
						case "Q":createNewEle("q",i);break;			
						case "R":createNewEle("r",i);break;			
						case "S":createNewEle("s",i);break;			
						case "T":createNewEle("t",i);break;			
						case "U":createNewEle("u",i);break;			
						case "V":createNewEle("v",i);break;			
						case "W":createNewEle("w",i);break;			
						case "X":createNewEle("x",i);break;			
						case "Y":createNewEle("y",i);break;			
						case "Z":createNewEle("z",i);break;			
					}
				}
				function createNewEle(id,index)
				{
					if(document.getElementById(id)==null)
					{	
						var newLiHead=document.createElement("li");
						newLiHead.innerText=id.toUpperCase();
						newLiHead.setAttribute("id",id);
						newLiHead.setAttribute("class","indexTitle");
						var newLi=document.createElement("li");
						newLi.className=id;
						var newA=document.createElement("a");
						newA.innerText=arr[index].name;
						newA.href="showdetail.html?name="+arr[index].name+"&phone="+arr[index].phoneNum+"&nameIndex="+arr[index].nameIndex+"&id="+arr[index].id;
						newLi.appendChild(newA);
						ulEle.appendChild(newLiHead);
						$(newLi).insertAfter(newLiHead);
					}
					else
					{
						var newLi=document.createElement("li");
						newLi.className=id;
						var aHeader=document.getElementById(id);
						var newA=document.createElement("a");
						newA.innerText=arr[index].name;
						newA.href="showdetail.html?name="+arr[index].name+"&phone="+arr[index].phoneNum+"&nameIndex="+arr[index].nameIndex+"&id="+arr[index].id;
						newLi.appendChild(newA);
						$(newLi).insertAfter(aHeader);
					}
				}

			}
		}
	// 触发添加联系人事件
	$("header span:eq(1)").click(function(){
		location.href="addcontacts.html"
	})
}
// 搜索联系人功能
function showResult(str)
{
	$("#show-search-result").html("");
	if(str.length==0)
	{
		$("#show-search-result").html("");
		$("#show-list").show();
		return false;
	}
	// 判断搜索字符串的类型，1.是英文字母 2.是汉字
	// 字母索引搜索
	else if(/^[a-zA-Z]+$/g.test(str)&&!(/^[\u4e00-\u9fa5]+$/g.test(str)))
	{
		var liTitle=$(".indexTitle");
		for(var i=0;i<liTitle.length;i++)
		{
			if(liTitle[i].innerText==str.slice(0,1).toUpperCase())
			{
				$("#show-search-result").append($(liTitle[i]).clone());
				$("#show-list").hide();
				var liClass="."+liTitle[i].innerText.toLowerCase()+"";
				var len=$(liTitle[i]).siblings(liClass).length;
				for(var j=0;j<len;j++)
				{
					$("#show-search-result").append($(liTitle[i]).siblings(liClass).eq(j).clone());
				}
				break;
			}
		}
	}
	// 汉字搜索
	else
	if(/^[\u4e00-\u9fa5]+/g.test(str))
	{
		var lis=$("#show-list li");
		for(var i=0;i<lis.length;i++)
		{	
			var re=new RegExp(lis[i].innerText.slice(0,1));
			if(re.test(str))
			{
				console.log("3")
				$("#show-search-result").append($(lis[i]).clone());
			}
		}
	}
}