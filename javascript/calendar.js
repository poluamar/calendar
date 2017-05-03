dow = new Array('S','M','T','W','T','F','S');
moy = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

function testCalendar()
{
  alert('Version: beta 1.0');
}

function getX(obj)
{
  return( obj.offsetParent==null ? obj.offsetLeft : obj.offsetLeft+getX(obj.offsetParent) );
}

function getY(obj)
{
  return( obj.offsetParent==null ? obj.offsetTop : obj.offsetTop+getY(obj.offsetParent) );
}

function showCalendar(position, functionName, dValue)
{
  //alert('showCalendar('+position+', '+functionName+', '+dValue+')');
  
  if( dValue.indexOf('/') == -1 )
  {
    date = new Date;
    dValue = (date.getMonth()+1) +"/"+ date.getDate() +"/"+ date.getFullYear();
  }

  month = dValue.substr(0,dValue.indexOf("/"));
  year = dValue.substr(dValue.lastIndexOf("/")+1,dValue.length);

  writeCalendar(month, year, functionName);

  document.getElementById('calendar').style.position = "absolute";
  document.getElementById('calendar').style.top = getY(position);
  document.getElementById('calendar').style.visibility = "visible";
  document.getElementById('calendar').style.zIndex=100;

  if (document.all)
  {
    document.getElementById('calendar').style.left = getX(position)-10;
  }
  else
  {
    document.getElementById('calendar').style.left = getX(position)-200;
  }
}

function hideCalendar()
{
  document.getElementById('calendar').style.visibility = "hidden";
}

function writeCalendar(month, year, funName)
{
  date = new Date;
  dom = 1;

  date.setDate(dom);
  date.setMonth(month-1);
  month = date.getMonth();

  date.setYear(year);

  backYear=date.getFullYear();
  if (date.getMonth()==0) backYear = year-1; 

  forwardYear=date.getFullYear();
  if (date.getMonth()==11) forwardYear = year+1; 

  offset = date.getDay();

  cal = '';
  cal = cal + '<table border="2" cellspacing="0" cellpadding="0" >';
  cal = cal + '<tr>';
  cal = cal + '  <td valign="top">';
  cal = cal + '  <table class="HeaderBg" border="0" cellspacing="1" cellpadding="2">';
  cal = cal + '    <tr><td colspan="7"><table width="100%" border="0" cellspacing="0" cellpadding="0" ><tr>';
  cal = cal + '        <td title="Month - 1" class="SubnavText" align="left"  ><a href="javascript:writeCalendar('+ (date.getMonth()%12) +', '+backYear+', \''+funName+'\')"><img border="0" src="images/prev.gif"/></a></td>';
  cal = cal + '        <td title="Year - 1"  class="SubnavText" align="left"  ><a href="javascript:writeCalendar('+ (date.getMonth()+1) +', '+ (date.getFullYear()-1) +', \''+funName+'\')"><img border="0" src="images/prev.gif"/></a></td>';
  cal = cal + '        <td width="90%"       class="HeaderText" align="center">'+ moy[date.getMonth()] +', ' + date.getFullYear() + '</td>';
  cal = cal + '        <td title="Year + 1"  class="SubnavText" align="right" ><a href="javascript:writeCalendar('+ (date.getMonth()+1) +', '+ (date.getFullYear()+1) +', \''+funName+'\')"><img border="0" src="images/next.gif"/></a></td>';
  cal = cal + '        <td title="Month + 1" class="SubnavText" align="right" ><a href="javascript:writeCalendar('+ ((date.getMonth()+2)%12) +', '+forwardYear+', \''+funName+'\')"><img border="0" src="images/next.gif"/></a></td>';
  cal = cal + '    </tr></table></tr>';
  cal = cal + '    <tr>';
  for(i=0; i<7; i++)
  {
    cal = cal + '      <td align="center" class="SubnavText">'+dow[i]+'</td>';
  }
  cal = cal + '    </tr>';
  cal = cal + '    <tr>';

  count=0;
  for(; count<offset; count++)
  {
    cal = cal + '      <td class="SubnavText" bgcolor="#FFFFFF">&nbsp;</td>';
  }

  for(; month==date.getMonth(); count++)
  {
    if( count>0 && count%7 == 0 )
    {
       cal = cal + '    </tr><tr>';
    }

    cal = cal + '      <td class="SubnavText" bgcolor="#FFFFFF" align="right">';
    cal = cal + '        <a href="javascript:'+funName+'('+(date.getMonth()+1)+','+date.getDate()+','+date.getFullYear()+')">'+dom+'</a>';
    cal = cal + '      </td>';
    date.setDate(++dom);
  }

  for(;(count%7!=0); count++ )
  {
    cal = cal + '      <td class="SubnavText" bgcolor="#FFFFFF">&nbsp;</td>';
  }

  date = new Date;

  cal = cal + '</tr><tr>';
  cal = cal + '<td align="center" class="SubnavText" bgcolor="#FFFFFF" colspan="7"><table width="100%" border="0" cellspacing="1" cellpadding="1"><tr>';
  cal = cal + '<td align="center" class="SubnavText" bgcolor="#FFFFFF"><a href="javascript:hideCalendar()">cancel</a></td>';
  cal = cal + '<td align="center" class="SubnavText" bgcolor="#FFFFFF"><a href="javascript:'+funName+'('+(date.getMonth()+1)+','+date.getDate()+','+date.getFullYear()+')">today</a></td>';
  cal = cal + '</tr></table></td>';

  cal = cal + '</tr></table></td></tr></table>';

  document.getElementById('calendar').innerHTML = cal;
}