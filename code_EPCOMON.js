
function Calculate_Size()
{   
    var FormLink = document.forms["TakeUserInput"]
    //get references in js
    console.log("Function starts")

    
    var CUSORD = document.getElementById("CUSORD").value;
    var CATITEMS = document.getElementById("CATITEMS").value;
    var EOCPEAK = document.getElementById("EOCPEAK").value;
    var ECMPEAK = document.getElementById("ECMPEAK").value;
    var ORDRET = document.getElementById("ORDRET").value;
    var EXTSYS = document.getElementById("EXTSYS").value;
    var ORDDUR = document.getElementById("ORDDUR").value;
    var CUSTOMER = document.getElementById("CUSTOMER").value;
    var DECOMP = document.getElementById("DECOMP").value;
    var PROD = document.getElementById("PROD").value;
    var SERV = document.getElementById("SERV").value;
    var HRSPERDAY = document.getElementById("HRSPERDAY").value;
    var HRSPERMONTH = document.getElementById("HRSPERMONTH").value;
    var ACTPERPROC = document.getElementById("ACTPERPROC").value;
    var ECMPLMACT = document.getElementById("ECMPLMACT").value;
    var INCCUST = document.getElementById("INCCUST").value;
    var INCCAT = document.getElementById("INCCAT").value;
    var PEAKORD = document.getElementById("PEAKORD").value;
    var APIMSG = document.getElementById("APIMSG").value;
    var APICALL = document.getElementById("APICALL").value;
    var APIECMCORE = document.getElementById("APIECMCORE").value;
    var PEACT = document.getElementById("PEACT").value;
    var AVGELE = document.getElementById("AVGELE").value;
    var AVGATT = document.getElementById("AVGATT").value;
    var RECSIZE = document.getElementById("RECSIZE").value;
    var METASIZE = document.getElementById("METASIZE").value;
    var PROTABCACHE = document.getElementById("PROTABCACHE").value;
    var ACTCACHESIZE = document.getElementById("ACTCACHESIZE").value;
    var PRODATACACHE = document.getElementById("PRODATACACHE").value;
    var DYPARSIZE = document.getElementById("DYPARSIZE").value;
    //var INTDATACACHE = document.getElementById("INTDATACACHE").value;
    var RECINTDATA = document.getElementById("RECINTDATA").value;
    var DECOMPORD = document.getElementById("DECOMPORD").value;
    var SUM = document.getElementById("SUM").value;


    //EOC

    var PEEOC= ((CUSORD*ACTPERPROC*PEAKORD)/(HRSPERMONTH*HRSPERDAY*PEACT*3600))
    console.log("PEEOC without round",PEEOC)
    PEEOC=Math.ceil(PEEOC/8)*8
    console.log("PEEOC",PEEOC)
    console.log(typeof(PEEOC))
    var APIEOC = ((CUSORD*PEAKORD*EXTSYS)/(HRSPERDAY*HRSPERMONTH*APIMSG*3600));
    console.log("APIEOC without round",APIEOC)
    APIEOC=Math.ceil(APIEOC/8)*8
    console.log("APIEOC",APIEOC)
    console.log(typeof(APIEOC))
    var DBEOC = ((PEEOC+APIEOC)*12/(4*8));
    //DBEOC=DBEOC.toFixed(1)
    console.log("DBEOC",DBEOC)
    console.log(typeof(DBEOC))

    //ECM
    var PEECM = ((CATITEMS*ECMPLMACT*ECMPEAK)/(HRSPERDAY*HRSPERMONTH*PEACT*3600));
    console.log("PEECM without round",PEECM)
    PEECM=Math.ceil(PEECM/8)*8
    console.log("PEECM",PEECM)
    console.log(typeof(PEECM))
    var APIECM = ((CATITEMS*EXTSYS*ECMPEAK)/(HRSPERDAY*HRSPERMONTH*APIMSG*3600));
    console.log("APIECM without round",APIECM)
    APIECM=Math.ceil(APIECM/8)*8
    
    //APIECM=APIECM.toFixed(1)
    console.log("APIECM",APIECM)
    console.log(typeof(APIECM))
    var DBECM =(((PEECM+APIECM)*12)/(4*8));
    //DBECM=DBECM.toFixed(1)
    console.log("DBECM",DBECM)
    console.log(typeof(DBECM))

    //IWS
    var CPUIWS = (EOCPEAK*8)/400;
    console.log("CPUIWS without round",CPUIWS)
    CPUIWS=Math.ceil(CPUIWS/8)*8
    console.log("CPUIWS",CPUIWS)
    console.log(typeof(CPUIWS))

    //Hardware
    var PROCACHE = ((CUSORD*PEAKORD*1000*DECOMPORD)/(1024*1024*HRSPERMONTH));
    //PROCACHE=PROCACHE.toFixed(1)
    console.log("PROCACHE",PROCACHE)
    console.log(typeof(PROCACHE))

    var ACTCACHE = ((CUSORD*PEAKORD*720*DECOMPORD)/(1024*1024*HRSPERMONTH));
    //ACTCACHE=ACTCACHE.toFixed(1)
    console.log("ACTCACHE",ACTCACHE)
    console.log(typeof(ACTCACHE))

    var DATACACHE =((CUSORD*100*DECOMPORD)/(1024*1024*HRSPERMONTH));
    //DATACACHE=DATACACHE.toFixed(1)
    console.log("DATACACHE",DATACACHE)
    console.log(typeof(DATACACHE))

    var DYPARCACHE = ((CUSORD*PEAKORD*100*DECOMPORD)/(1024*1024));
    //DYPARCACHE=DYPARCACHE.toFixed(1)
    console.log("DYPARCACHE",DYPARCACHE)
    console.log(typeof(DYPARCACHE))

    var INTDATACACHE = ((AVGELE*CUSORD*0.1)/(1024*1024*HRSPERMONTH))
    console.log("INTDATACACHE",INTDATACACHE)
    console.log(typeof(INTDATACACHE))

    var PEMEM = (PROCACHE+ACTCACHE+DATACACHE+DYPARCACHE+METASIZE);//to add AVM
    //PEMEM=PEMEM.toFixed(1)
    console.log("PEMEM",PEMEM)
    console.log(typeof(PEMEM))

    var UIMEM = ((METASIZE+INTDATACACHE+1024)*(1.2));
    console.log("UIMEM without round to 24",UIMEM)
    UIMEM=Math.ceil(UIMEM/24)*24
    console.log("UIMEM",UIMEM)
    console.log(typeof(UIMEM))

    var ORDERS = ((1.2*CUSORD*(AVGELE*PROD+ORDDUR))/(1024*1024));
    console.log("ORDERS before roundup",ORDERS)
    ORDERS=roundUp(ORDERS,2)
    //ORDERS=ORDERS.toFixed(1)
    console.log("ORDERS",ORDERS)
    console.log(typeof(ORDERS))

    var PROCESSS = ((HRSPERDAY*HRSPERMONTH*3600)*(PEACT*100+APIMSG*250)/(1024*1024*1024));
    console.log("PROCESSS before roundup",PROCESSS)
    PROCESSS=roundUp(PROCESSS,2)
    console.log("PROCESSS",PROCESSS)
    console.log(typeof(PROCESSS))

    var DBSIZE = (ORDERS+PROCESSS)*ORDRET*1.5;
    //DBSIZE=DBSIZE.toFixed(1)
    console.log("DBSIZE",DBSIZE)
    console.log(typeof(DBSIZE))

    var DBCIR = (CUSTOMER*RECSIZE*(1+INCCUST)/(1024*1024));
    //DBCIR=DBCIR.toFixed(1)
    console.log("DBCIR",DBCIR)
    console.log(typeof(DBCIR))

 
    var DBSR = (CUSTOMER*AVGELE*PROD)/(1024*1024);
    //DBSR=DBSR.toFixed(1)
    console.log("DBSR",DBSR)
    console.log(typeof(DBSR))

  

  //print to html
  
  //EOC
   document.getElementById('PEEOC').value = PEEOC;
   document.getElementById('APIEOC').value = APIEOC;
   document.getElementById('DBEOC').value = DBEOC;

   //ECM
   document.getElementById('PEECM').value = PEECM;
   document.getElementById('APIECM').value = APIECM;
   document.getElementById('DBECM').value = DBECM;

   //IWS
   document.getElementById('CPUIWS').value = CPUIWS;
  

   //Hardware
   document.getElementById('PROCACHE').value = PROCACHE;
   document.getElementById('ACTCACHE').value = ACTCACHE;
   document.getElementById('DATACACHE').value = DATACACHE;
   document.getElementById('DYPARCACHE').value = DYPARCACHE;
   document.getElementById('INTDATACACHE').value = INTDATACACHE;
   document.getElementById('PEMEM').value = PEMEM;
   document.getElementById('UIMEM').value = UIMEM;

   document.getElementById('ORDERS').value = ORDERS;
   document.getElementById('PROCESSS').value = PROCESSS;
   document.getElementById('DBSIZE').value = DBSIZE;
   document.getElementById('DBCIR').value = DBCIR;
   document.getElementById('DBSR').value = DBSR;

   console.log("Function ends");
  
    
}

function roundUp(number, digits)
{
    var factor = Math.pow(10,digits);
    return Math.ceil(number*factor) / factor
}

function Reset_Function()
{
    document.getElementById("TakeUserInput").reset();
    console.log("Reset function executed")
}

//Calculate_Size()
//Take_userinput()