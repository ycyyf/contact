<%@language="VBSCRIPT" CODEPAGE="65001"%>
<% response.charset="utf-8"%>
<!-- #include file="conn.asp"-->
<%
	dim name(),phone(),index(),id()
	'查询联系人
	sql="select * from S_Contacts"
	'连接数据库
	call OpenConn(conn,"Development")
	'打开数据集
	call OpenRs(conn,rst1,sql)
	
	if not (rst1.bof or rst1.eof) then
		
		for i=0 to rst1.recordcount-1
			redim preserve name(i+1)
			redim preserve phone(i+1)
			redim preserve index(i+1)
			redim preserve id(i+1)
			name(i)=rst1("Name")
			phone(i)=rst1("PhoneNum")
			index(i)=rst1("NameIndex")
			id(i)=rst1("id")
			response.write name(i)&","&phone(i)&","&index(i)&","&id(i)&";"
			rst1.movenext
		next
	end if
	call closeObj(rst1)
	call closeObj(conn)
%>