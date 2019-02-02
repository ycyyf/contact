<%@language="VBSCRIPT" CODEPAGE="65001"%>
<% response.charset="utf-8"%>
<!-- #include file="conn.asp"-->
<%
	dim Name,Phone,NameIndex,operation
	operation=request.form("operation")
	Name=request.form("name")
	Phone=request.form("phone")
	NameIndex=request.form("nameIndex")
	id=request.form("id")
	if operation="编辑" then
		'进行变量校验
		if Name="" or Phone="" or NameIndex="" or id="" then 
			response.write("有未填的项")
			response.end
		end if
		'更新
		SqlUpdate="update S_Contacts set Name='"&Replace(Name,"'","''")&"', PhoneNum='"&Replace(Phone,"'","''")&"',NameIndex='"&NameIndex&"' where id='"&id&"'"
		'连接数据库
		call OpenConn(conn,"Development")
		conn.execute(SqlUpdate)
		call closeObj(conn)
		response.write("true")
		response.end()
	else
		'进行变量校验
		if id="" then 
			response.write("有未填的项")
			response.end
		end if
		'删除
		SqlDelete="delete from S_Contacts where id='"&id&"'"
		'连接数据库
		call OpenConn(conn,"Development")
		conn.execute(SqlDelete)
		call closeObj(conn)
		response.write("true")
		response.end()
	end if
%>