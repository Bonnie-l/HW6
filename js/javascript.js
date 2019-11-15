//Author: Bonnie Liu
//Email:yueying_liu@student.uml.edu
//Student_id: 01661781

//check error if text is not a number return an error message
function check_error()
{
    var error_text;
    var x1 = document.getElementById("Hoz_axis1").value;
    var x2 = document.getElementById("Hoz_axis2").value;
    var y1 = document.getElementById("Ver_axis1").value;
    var y2 = document.getElementById("Ver_axis2").value;
    var text = "ok";
    
    if (x2 < x1)
    {
        error_text = "num_2 must greater than num_1 or equal";
        document.getElementById("e2").innerHTML = error_text;
        text = "error";
    }
    if (y2 < y1)
    {
        error_text = "num_4 must greater than num_3 or equal";
        document.getElementById("e4").innerHTML = error_text;
        text = "error";
    }
    
  // If x1,x2,y1,y2 is Not a Number or no input
    if (isNaN(x1)||x1=="")
    {
        error_text = "Invalid entry for num_1";
        document.getElementById("e1").innerHTML = error_text;
        text = "error";
    }
   if (isNaN(x2)||x2=="")
    {
        error_text = "Invalid entry for num_2";
        document.getElementById("e2").innerHTML = error_text;
        text = "error";
    }
    
    if (isNaN(y1)||y1=="")
    {
        error_text = "Invalid entry for num_3";
        document.getElementById("e3").innerHTML = error_text;
        text = "error";
    }
    
    if (isNaN(y2)||y2=="")
    {
        error_text = "Invalid entry for num_4";
        document.getElementById("e4").innerHTML = error_text;
        text = "error";
    }
    return text;//if text return ok, then no input is wrong
}

function dynamic_table()
{
    //get value
    var h1 = document.getElementById("Hoz_axis1").value;
    var h2 = document.getElementById("Hoz_axis2").value;
    var v1 = document.getElementById("Ver_axis1").value;
    var v2 = document.getElementById("Ver_axis2").value;
    
    //create a new table
    var tb_new = document.getElementById("new_table");
    if (tb_new) tb_new.parentNode.removeChild(tb_new);//delete table
    
    if(check_error() == "ok")
    {
         var table = document.createElement("TABLE");// create table
         table.setAttribute("id", "new_table");
         var tbody = document.createElement("TBODY");// create table body

         for (var i = v1-1; i <= v2 ; i++)
         {
             var trow = document.createElement("TR"); //add tr
             
             for (var j = h1-1; j <= h2; j++)
             {
                 var tcol = document.createElement("TD"); //add td
                 var cell ;

                 if (i == v1-1 && j == h1-1)
                 {
                      cell = document.createTextNode(" "); //first cell
                 }
                 else if (i == v1-1)
                 {
                      cell = document.createTextNode(j);
                 }
                 else
                 {
                     if(j == (h1-1))
                     {
                        cell = document.createTextNode(i);
                     }
                     else
                     {
                         cell = document.createTextNode(i*j);
                     }
                 }

                 tcol.appendChild(cell); //add cell to td
                 trow.appendChild(tcol); //add td to tr
             }
             
             tbody.appendChild(trow); // append row
         }
        table.appendChild(tbody);
        document.getElementById("table").appendChild(table);
    }
}
