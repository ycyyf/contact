<%@language="VBSCRIPT" CODEPAGE="65001"%>
<% response.charset="utf-8"%>
<!-- #include file="conn.asp"-->
<%
	dim Name,Phone,NameIndex
	Name=request.form("name")
	Phone=request.form("phone")
	NameIndex=request.form("nameIndex")
	'变量校验
	if Name="" or Phone="" or NameIndex="" then
		response.write("有未填的项")
		response.end
	end if

	SqlInsert="insert into S_Contacts (Name,PhoneNum,NameIndex) values('"&Replace(Name,"'","''")&"','"&Replace(Phone,"'","''")&"','"&NameIndex&"')"
	'连接数据库
	call OpenConn(conn,"Development")
	conn.execute(SqlInsert)
	call closeObj(conn)
	response.write("true")
	response.end()
%>