
function Calculate_Size()
{   
    var FormLink = document.forms["TakeUserInput"]
    //get references in js
    console.log("Function starts")

    
    var ORD = document.getElementById("ORD").value;
    var AVGCSO = document.getElementById("AVGCSO").value;
    var AVGLOG = document.getElementById("AVGLOG").value;
    var DAYSTORE = document.getElementById("DAYSTORE").value;


    var THROUGHPUT= (ORD/8/3600)
    console.log("THROUGHPUT",THROUGHPUT)
    console.log(typeof(THROUGHPUT))

    var FIVETHR = (THROUGHPUT*5);
    console.log("FIVETHR",FIVETHR)
    console.log(typeof(FIVETHR))

    var TOTVM = (FIVETHR/AVGCSO);
    console.log("TOTVM",TOTVM)
    console.log(typeof(TOTVM))

    var TOTVM20 = (TOTVM*1.2).toFixed(0);
    console.log("TOTVM20",TOTVM20)
    console.log(typeof(TOTVM20))


    var LOGSIZE = ((850000*AVGLOG)/(1024*1024*1024));
    console.log("LOGSIZE",LOGSIZE)
    console.log(typeof(LOGSIZE))

    var TOTSTORE =((LOGSIZE*DAYSTORE)+(LOGSIZE*DAYSTORE*0.3));
    console.log("TOTSTORE",TOTSTORE)
    console.log(typeof(TOTSTORE))

    
  //print to html
  

   document.getElementById('THROUGHPUT').value = THROUGHPUT;
   document.getElementById('FIVETHR').value = FIVETHR;
   document.getElementById('TOTVM').value = TOTVM;
   document.getElementById('TOTVM20').value = TOTVM20;
   document.getElementById('LOGSIZE').value = LOGSIZE;
   document.getElementById('TOTSTORE').value = TOTSTORE;



   console.log("Function ends");
  
    
}


function Reset_Function()
{
    document.getElementById("TakeUserInput").reset();
    console.log("Reset function executed")
}

