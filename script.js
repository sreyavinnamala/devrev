function myFunction() {
    var input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      var rowcount=0;
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
         td1 = tr[i].getElementsByTagName("td")[1];
         td2 = tr[i].getElementsByTagName("td")[2];
         td3 = tr[i].getElementsByTagName("td")[3];

        if (td) {
          if ( (td.innerHTML.toUpperCase().indexOf(filter) > -1) ||(td1.innerHTML.toUpperCase().indexOf(filter) > -1) || (td2.innerHTML.toUpperCase().indexOf(filter) > -1) ||(td3.innerHTML.toUpperCase().indexOf(filter) > -1) )  {            
            tr[i].style.display = "";
            rowcount++;
          } else {
            tr[i].style.display = "none";
          }
        }
        mycount(rowcount)
      }
    } 
function mycount(rowcount){
    document.getElementById("ct").innerHTML="Total entries:"+rowcount;
}