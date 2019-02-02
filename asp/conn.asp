
<% 

Sub OpenConn(OpenConn_Conn,OpenConn_DateBase)
	set OpenConn_Conn=server.CreateObject ("adodb.connection")
	OpenConn_Conn.ConnectionString = "Provider=sqloledb.1;Server=10.30.1.99;uid=dev;pwd=dev;DATABASE="&OpenConn_DateBase
	OpenConn_Conn.Open 
End Sub
Sub OpenRs(OpenRs_Conn,OpenRs_Rs,OpenRs_Sql)
	 set OpenRs_Rs = Server.CreateObject("ADODB.Recordset")
	 OpenRs_Rs.open OpenRs_Sql,OpenRs_Conn,1,1
End Sub

Sub closeObj(conn)
	conn.close()
	set conn=nothing
end Sub

%>