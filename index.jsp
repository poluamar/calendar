<%@ page language="java" %>

<%@ taglib uri="/calendar" prefix="calendar" %>


<html>
  <head>
    <title>Welcome: Calendar Demo Sapient</title>
    
    <link rel=stylesheet href="css/calendar.css" type="text/css">
    <script language="JavaScript" type="text/javascript" src="javascript/calendar.js"></script>
    
  </head>
  <body>
  
    <table>
      <tr>
        <td><hr width="100%"></td>
      </tr>
      <tr>
        <th>Simple Calendar:</th>
      </tr>
      <tr>
        <td>
          <table>
	        <tr>
	          <td>BirthDate:</td>
	          <td><calendar:calendar property="startDate" >10/7/1975</calendar:calendar></td>
	        </tr>
	      </table>
	    </td>
	  </tr>
      <tr>
        <td><hr width="100%"></td>
      </tr>
      <tr>
        <th>Supports Multiple Calendars:</th>
      </tr>
      <tr>
        <td>
          <table>
	        <tr>
	          <td>StartDate_abcd:</td>
	          <td><calendar:calendar property="startDate" >10/7/1975</calendar:calendar></td>
	          <td>&nbsp;</td>
	          <td>EndDate:</td>
	          <td><calendar:calendar property="endDate" >10/07/2000</calendar:calendar></td>
	        </tr>
	      </table>
	    </td>
	  </tr>
      <tr>
        <td><hr width="100%"></td>
      </tr>
      <tr>
        <th>Supports indexed properties:</th>
      </tr>
      <tr>
        <td>
	      <table>
	        <%for(int i=0; i<5; i++){%>
	        <tr>
	          <td>month_StartDate:</td>
	          <td><calendar:calendar property="startDate" >10/7/1975</calendar:calendar></td>
	          <td>&nbsp;</td>
	          <td>month_EndDate:</td>
	          <td><calendar:calendar property="endDate" >10/07/2000</calendar:calendar></td>
	        </tr>
	        <%}%>
	      </table>
	    </td>
      </tr>
      <tr>
        <td><hr width="100%"></td>
      </tr>
    </table>
    
    

    
  </body>
</html>
