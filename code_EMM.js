
/*
Author: Sneha Wadhwa
	Description: Calculate the sizing parameters for F-EMM systems
	Built in: June 2017
*/

function Calculate_Size()
{   
    var FormLink = document.forms["TakeUserInput"]
    //get references in js
    console.log("Function starts")

    
    var ARCINC = document.getElementById("ARCINC").value;
    var COMPR = document.getElementById("COMPR").value;
    var BUFF = document.getElementById("BUFF").value;
    var CDRSIZE = document.getElementById("CDRSIZE").value;
    var RAID = document.getElementById("RAID").value;
    var NOCDRDUP = document.getElementById("NOCDRDUP").value;

    var NODRCON = document.getElementById("NODRCON").value;
    var DRSIZE = document.getElementById("DRSIZE").value;
    var TABSIZE = document.getElementById("TABSIZE").value;
    var RAMSIZE = document.getElementById("RAMSIZE").value;
    var MMHOURS = document.getElementById("MMHOURS").value;
    var ADDLOAD = document.getElementById("ADDLOAD").value;
    var EMMSTORE1 = document.getElementById("EMMSTORE1").value;
    var SPARESTORE1 = document.getElementById("SPARESTORE1").value;

    var CDRPERCALL = document.getElementById("CDRPERCALL").value;
    var CALLCOUNT = document.getElementById("CALLCOUNT").value;
    var SMSCOUNT = document.getElementById("SMSCOUNT").value;
    var SIZEPERCALLCS = document.getElementById("SIZEPERCALLCS").value;
    var SIZEPERSMSCS = document.getElementById("SIZEPERSMSCS").value;
    var SUBSCOUNTCS = document.getElementById("SUBSCOUNTCS").value;
    var SUBSCOUNTCS = document.getElementById("SUBSCOUNTCS").value;


    var CDRPERSUBS = document.getElementById("CDRPERSUBS").value;
    var CDRSIZE = document.getElementById("CDRSIZE").value;
    var SUBSCOUNTSN = document.getElementById("SUBSCOUNTSN").value;


    var ATTSUBS = document.getElementById("ATTSUBS").value;
    var ACTSUBS = document.getElementById("ACTSUBS").value;
    var PDPSUBS = document.getElementById("PDPSUBS").value;
    var CDRPERHR = document.getElementById("CDRPERHR").value;
    var SMSCOUNTPS = document.getElementById("SMSCOUNTPS").value;
    var SIZEPDP = document.getElementById("SIZEPDP").value;
    var CDRSIZEPERSMSMPS = document.getElementById("CDRSIZEPERSMSMPS").value;
    var SUBSCOUNTPS = document.getElementById("SUBSCOUNTPS").value;


    //var EMMCAP = document.getElementById("EMMCAP").value;
    var FTFTMO = document.getElementById("FTFTMO").value;
    var FTFTMOTOT = document.getElementById("FTFTMOTOT").value;
    var FTFRA = document.getElementById("FTFRA").value;
    var FTFRATOT = document.getElementById("FTFRATOT").value;
    var FTFRSL = document.getElementById("FTFRSL").value;
    var FTFRSLTOT = document.getElementById("FTFRSLTOT").value;
    var CMERIC = document.getElementById("CMERIC").value;
    var CMERICTOT = document.getElementById("CMERICTOT").value;
    var FTFERIC = document.getElementById("FTFERIC").value;
    var FTFERICTOT = document.getElementById("FTFERICTOT").value;
    var FRD = document.getElementById("FRD").value;
    var FRDTOT = document.getElementById("FRDTOT").value;
    var EVNOTIF = document.getElementById("EVNOTIF").value;
    var EVNOTIFTOT = document.getElementById("EVNOTIFTOT").value;
    var SOFTMO = document.getElementById("SOFTMO").value;
    var SOFTMOTOT = document.getElementById("SOFTMOTOT").value;
    var SOFERIC = document.getElementById("SOFERIC").value;
    var SOFERICTOT = document.getElementById("SOFERICTOT").value;
    var MBC = document.getElementById("MBC").value;
    var MBCTOT = document.getElementById("MBCTOT").value;
    var HAWK = document.getElementById("HAWK").value;
    var HAWKTOT = document.getElementById("HAWKTOT").value;
    var SAPC = document.getElementById("SAPC").value;
    var SAPCTOT = document.getElementById("SAPCTOT").value;
    

    //Circuit switched

    var CDRDAYCS= ((SUBSCOUNTCS*CALLCOUNT*CDRPERCALL)+(SUBSCOUNTCS*SMSCOUNT)).toFixed(1)
    CDRDAYCS=Number(CDRDAYCS)
    //CDRDAYCS=CDRDAYCS.toFixed(1)
    console.log("CDRDAYCS",CDRDAYCS)
    console.log(typeof(CDRDAYCS))
    //var PEAKEMM7CS = (((SUBSCOUNTCS*CALLCOUNT*CDRPERCALL*SIZEPERCALLCS/1024+SUBSCOUNTCS*SMSCOUNT*SIZEPERSMSCS/1024)/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1);
    //PEAKEMM7CS=PEAKEMM7CS.toFixed(1)
    //PEAKEMM7CS=Number(PEAKEMM7CS)
    //console.log("PEAKEMM7CS",PEAKEMM7CS)
    //console.log(typeof(PEAKEMM7CS))
    var PEAKEMM8CS = ((CDRDAYCS/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1);
    //PEAKEMM8CS=PEAKEMM8CS.toFixed(1)
    PEAKEMM8CS=Number(PEAKEMM8CS)
    console.log("PEAKEMM8CS",PEAKEMM8CS)
    console.log(typeof(PEAKEMM8CS))

    //Packet switched
    var CDRDAYPS = (SUBSCOUNTPS*((ATTSUBS/100)*(ACTSUBS/100)*PDPSUBS*CDRPERHR*24+SMSCOUNTPS*SUBSCOUNTPS)).toFixed(1);
    //CDRDAYPS=CDRDAYPS.toFixed(1)
    CDRDAYPS=Number(CDRDAYPS)
    console.log("CDRDAYPS",CDRDAYPS)
    console.log(typeof(CDRDAYPS))
    //var PEAKEMM7PS = (((SUBSCOUNTPS*((ATTSUBS/100)*(ACTSUBS/100))*PDPSUBS*CDRPERHR*24*SIZEPDP/1024+SMSCOUNTPS*SUBSCOUNTPS*CDRSIZEPERSMSMPS/1024)/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1);
    //PEAKEMM7PS=PEAKEMM7PS.toFixed(1)
   // PEAKEMM7PS=Number(PEAKEMM7PS)
    //console.log("PEAKEMM7PS",PEAKEMM7PS)
    //console.log(typeof(PEAKEMM7PS))
    var PEAKEMM8PS = ((CDRDAYPS/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1);
    PEAKEMM8PS=Number(PEAKEMM8PS)
    //PEAKEMM8PS=PEAKEMM8PS.toFixed(1)
    console.log("PEAKEMM8PS",PEAKEMM8PS)
    console.log(typeof(PEAKEMM8PS))

    //Service Network
    var CDRDAYSN = (SUBSCOUNTSN*CDRPERSUBS).toFixed(1);
    CDRDAYSN=Number(CDRDAYSN)
    //CDRDAYSN=CDRDAYSN.toFixed(1)
    console.log("CDRDAYSN",CDRDAYSN)
    console.log(typeof(CDRDAYSN))
    //var PEAKEMM7SN = ((((SUBSCOUNTSN*CDRPERSUBS*CDRSIZE)/1024)/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1);
  
    //var PEAKEMM7SN = (((SUBSCOUNTSN*CDRPERSUBS*CDRSIZE/1024)/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1)

    //PEAKEMM7SN=Number(PEAKEMM7SN)
    //PEAKEMM7SN=PEAKEMM7SN.toFixed(1)
    //console.log("PEAKEMM7SN",PEAKEMM7SN)
    //console.log(typeof(PEAKEMM7SN))
    var PEAKEMM8SN = ((CDRDAYSN/(MMHOURS*3600))*(1+ADDLOAD/100)).toFixed(1);
    PEAKEMM8SN=Number(PEAKEMM8SN)
    //PEAKEMM8SN=PEAKEMM8SN.toFixed(1)
    console.log("PEAKEMM8SN",PEAKEMM8SN)
    console.log(typeof(PEAKEMM8SN))

    //Total Software
    var TOTCDRDAY =(CDRDAYCS + CDRDAYPS + CDRDAYSN);
    //TOTCDRDAY=TOTCDRDAY.toFixed(1)
    console.log("TOTCDRDAY",TOTCDRDAY)
    console.log(typeof(TOTCDRDAY))
    //var TOTPEAKEMM7 = (PEAKEMM7CS + PEAKEMM7PS + PEAKEMM7SN);
    //TOTPEAKEMM7=TOTPEAKEMM7.toFixed(1)
    //console.log("TOTPEAKEMM7",TOTPEAKEMM7)
    //console.log(typeof(TOTPEAKEMM7))
    var TOTPEAKEMM8 = (PEAKEMM8CS + PEAKEMM8PS + PEAKEMM8SN).toFixed(1);
    //TOTPEAKEMM8=TOTPEAKEMM8.toFixed(1)
    console.log("TOTPEAKEMM8",TOTPEAKEMM8)
    console.log(typeof(TOTPEAKEMM8))

    //RAM
    var ARCHREQ = (RAMSIZE*1024).toFixed(1);
    //ARCHREQ=ARCHREQ.toFixed(1)
    ARCHREQ=Number(ARCHREQ)
    console.log("ARCHREQ",ARCHREQ)
    console.log(typeof(ARCHREQ))
    var LOGREQ = (Number(((NOCDRDUP*22)+(NODRCON*DRSIZE))/(1024*1024)+TABSIZE)).toFixed(1);
    //LOGREQ=LOGREQ.toFixed(1)
    LOGREQ=Number(LOGREQ)
    console.log("LOGREQ",LOGREQ)
    console.log(typeof(LOGREQ))
    var TOTRAM = ((ARCHREQ+LOGREQ)/1024).toFixed(1);
    TOTRAM=Number(TOTRAM)
   // TOTRAM=TOTRAM.toFixed(1)
    console.log("TOTRAM",TOTRAM)
    console.log(typeof(TOTRAM))

    //Storage
    var ARCHSTORE = ((ARCINC*TOTCDRDAY*COMPR*CDRSIZE)/(1024*1024*1024)).toFixed(1);
    //ARCHSTORE=ARCHSTORE.toFixed(1)
    ARCHSTORE=Number(ARCHSTORE)
    console.log("ARCHSTORE",ARCHSTORE)
    console.log(typeof(ARCHSTORE))
    var BUFFSTORE = ((BUFF*TOTCDRDAY*CDRSIZE)/(1024*1024*1024)).toFixed(1);
    //BUFFSTORE=BUFFSTORE.toFixed(1)
    BUFFSTORE=Number(BUFFSTORE)
    console.log("BUFFSTORE",BUFFSTORE)
    console.log(typeof(BUFFSTORE))
    //var EMMSTORE value taken before
    var EMMSTORE=(EMMSTORE1*1).toFixed(1);
    //EMMSTORE=EMMSTORE.toFixed(1)
    EMMSTORE=Number(EMMSTORE)
    console.log("EMMSTORE",EMMSTORE)
    console.log(typeof(EMMSTORE))

    //console.log(document.getElementById('EMMSTORE').value);

    //var SPARESTORE value taken before
    //SPARESTORE=SPARESTORE.toFixed(1)
    var SPARESTORE = (SPARESTORE1*1).toFixed(1)
    SPARESTORE=Number(SPARESTORE)
    console.log("SPARESTORE",SPARESTORE)
    console.log(typeof(SPARESTORE))


    var TOTSTORAGE= ((ARCHSTORE+BUFFSTORE+EMMSTORE+SPARESTORE)*RAID/1024).toFixed(1);
    TOTSTORAGE=Number(TOTSTORAGE)
    //TOTSTORAGE=TOTSTORAGE.toFixed(1)
    console.log("TOTSTORAGE",TOTSTORAGE)
    console.log(typeof(TOTSTORAGE))

    //Blades

    var FTFTMOSIZE= FTFTMOTOT/1024 ;
    FTFTMOSIZE=Number(FTFTMOSIZE)
    console.log("FTFTMOSIZE",FTFTMOSIZE)
    console.log(typeof(FTFTMOSIZE))
    var FTFTMONO= FTFTMOSIZE/(24*60*60*FTFTMO) ;
    FTFTMONO=Math.ceil(Number(FTFTMONO))
    console.log("FTFTMONO",FTFTMONO)
    console.log(typeof(FTFTMONO))

    var FTFRASIZE= FTFRATOT/1024 ;
    FTFRASIZE=Number(FTFRASIZE)
    console.log("FTFRASIZE",FTFRASIZE)
    console.log(typeof(FTFRASIZE))
    var FTFRANO= FTFRASIZE/(24*60*60*FTFRA) ;
    FTFRANO=Math.ceil(Number(FTFRANO))
    console.log("FTFRANO",FTFRANO)
    console.log(typeof(FTFRANO))


    var FTFRSLSIZE= FTFRSLTOT/1024 ;
    FTFRSLSIZE=Number(FTFRSLSIZE)
    console.log("FTFRSLSIZE",FTFRSLSIZE)
    console.log(typeof(FTFRSLSIZE))
    var FTFRSLNO= FTFRSLSIZE/(24*60*60*FTFRSL) ;
    FTFRSLNO=Math.ceil(Number(FTFRSLNO))
    console.log("FTFRSLNO",FTFRSLNO)
    console.log(typeof(FTFRSLNO))


    var CMERICSIZE= CMERICTOT/1024 ;
    CMERICSIZE=Number(CMERICSIZE)
    console.log("CMERICSIZE",CMERICSIZE)
    console.log(typeof(CMERICSIZE))
    var CMERICNO= CMERICSIZE/(24*60*60*CMERIC) ;
    CMERICNO=Math.ceil(Number(CMERICNO))
    console.log("CMERICNO",CMERICNO)
    console.log(typeof(CMERICNO))

    var FTFERICSIZE= FTFERICTOT/1024 ;
    FTFERICSIZE=Number(FTFERICSIZE)
    console.log("FTFERICSIZE",FTFERICSIZE)
    console.log(typeof(FTFERICSIZE))
    var FTFERICNO= FTFERICSIZE/(24*60*60*FTFERIC) ;
    FTFERICNO=Math.ceil(Number(FTFERICNO))
    console.log("FTFERICNO",FTFERICNO)
    console.log(typeof(FTFERICNO))

    var FRDSIZE= FRDTOT/1024 ;
    FRDSIZE=Number(FRDSIZE)
    console.log("FRDSIZE",FRDSIZE)
    console.log(typeof(FRDSIZE))
    var FRDNO= FRDSIZE/(24*60*60*FRD) ;
    FRDNO=Math.ceil(Number(FRDNO))
    console.log("FRDNO",FRDNO)
    console.log(typeof(FRDNO))

    var EVNOTIFSIZE= EVNOTIFTOT/1024 ;
    EVNOTIFSIZE=Number(EVNOTIFSIZE)
    console.log("EVNOTIFSIZE",EVNOTIFSIZE)
    console.log(typeof(EVNOTIFSIZE))
    var EVNOTIFNO= EVNOTIFSIZE/(24*60*60*EVNOTIF) ;
    EVNOTIFNO=Math.ceil(Number(EVNOTIFNO))
    console.log("EVNOTIFNO",EVNOTIFNO)
    console.log(typeof(EVNOTIFNO))

    var SOFTMOSIZE= SOFTMOTOT/1024 ;
    SOFTMOSIZE=Number(SOFTMOSIZE)
    console.log("SOFTMOSIZE",SOFTMOSIZE)
    console.log(typeof(SOFTMOSIZE))
    var SOFTMONO= SOFTMOSIZE/(24*60*60*SOFTMO) ;
    SOFTMONO=Math.ceil(Number(SOFTMONO))
    console.log("SOFTMONO",SOFTMONO)
    console.log(typeof(SOFTMONO))

    var SOFERICSIZE= SOFERICTOT/1024 ;
    SOFERICSIZE=Number(SOFERICSIZE)
    console.log("SOFERICSIZE",SOFERICSIZE)
    console.log(typeof(SOFERICSIZE))
    var SOFERICNO= SOFERICSIZE/(24*60*60*SOFERIC) ;
    SOFERICNO=Math.ceil(Number(SOFERICNO))
    console.log("SOFERICNO",SOFERICNO)
    console.log(typeof(SOFERICNO))


    var MBCSIZE= MBCTOT/1024 ;
    MBCSIZE=Number(MBCSIZE)
    console.log("MBCSIZE",MBCSIZE)
    console.log(typeof(MBCSIZE))
    var MBCNO= MBCSIZE/(24*60*60*MBC) ;
    MBCNO=Math.ceil(Number(MBCNO))
    console.log("MBCNO",MBCNO)
    console.log(typeof(MBCNO))


    var HAWKSIZE= HAWKTOT/1024 ;
    HAWKSIZE=Number(HAWKSIZE)
    console.log("HAWKSIZE",HAWKSIZE)
    console.log(typeof(HAWKSIZE))
    var HAWKNO= HAWKSIZE/(24*60*60*HAWK) ;
    HAWKNO=Math.ceil(Number(HAWKNO))
    console.log("HAWKNO",HAWKNO)
    console.log(typeof(HAWKNO))

    var SAPCSIZE= SAPCTOT/1024 ;
    SAPCSIZE=Number(SAPCSIZE)
    console.log("SAPCSIZE",SAPCSIZE)
    console.log(typeof(SAPCSIZE))
    var SAPCNO= SAPCSIZE/(24*60*60*SAPC) ;
    SAPCNO=Math.ceil(Number(SAPCNO))
    console.log("SAPCNO",SAPCNO)
    console.log(typeof(SAPCNO))

    var TOTBLADES= FTFTMONO + FTFRANO + FTFRSLNO + CMERICNO + FTFERICNO + FRDNO +  EVNOTIFNO + SOFTMONO + SOFERICNO +  MBCNO + HAWKNO + SAPCNO
    console.log("TOTBLADES",TOTBLADES)
    console.log(typeof(TOTBLADES))






  //print to html
  
  //Circuit Switched
   document.getElementById('CDRDAYCS').value = CDRDAYCS;
   //document.getElementById('PEAKEMM7CS').value = PEAKEMM7CS;
   document.getElementById('PEAKEMM8CS').value = PEAKEMM8CS;

   //Packet Switched
   document.getElementById('CDRDAYPS').value = CDRDAYPS;
   //document.getElementById('PEAKEMM7PS').value = PEAKEMM7PS;
   document.getElementById('PEAKEMM8PS').value = PEAKEMM8PS;

   //Service Network
   document.getElementById('CDRDAYSN').value = CDRDAYSN;
   //document.getElementById('PEAKEMM7SN').value = PEAKEMM7SN;
   document.getElementById('PEAKEMM8SN').value = PEAKEMM8SN;

   //Total Software
   document.getElementById('TOTCDRDAY').value = TOTCDRDAY;
   //document.getElementById('TOTPEAKEMM7').value = TOTPEAKEMM7;
   document.getElementById('TOTPEAKEMM8').value = TOTPEAKEMM8;

   //RAM
   document.getElementById('ARCHREQ').value = ARCHREQ;
   document.getElementById('LOGREQ').value = LOGREQ;
   document.getElementById('TOTRAM').value = TOTRAM;

   //STORAGE
   document.getElementById('ARCHSTORE').value = ARCHSTORE;
   document.getElementById('BUFFSTORE').value = BUFFSTORE;
   document.getElementById('EMMSTORE').value = EMMSTORE;
   document.getElementById('SPARESTORE').value = SPARESTORE;
   document.getElementById('TOTSTORAGE').value = TOTSTORAGE;


   //Blades

   document.getElementById('FTFTMOSIZE').value = FTFTMOSIZE;
   document.getElementById('FTFTMONO').value = FTFTMONO;
   document.getElementById('FTFRASIZE').value = FTFRASIZE;
   document.getElementById('FTFRANO').value = FTFRANO;
   document.getElementById('FTFRSLSIZE').value = FTFRSLSIZE;
   document.getElementById('FTFRSLNO').value = FTFRSLNO;
   document.getElementById('CMERICSIZE').value = CMERICSIZE;
   document.getElementById('CMERICNO').value = CMERICNO;
   document.getElementById('FTFERICSIZE').value = FTFERICSIZE;
   document.getElementById('FTFERICNO').value = FTFERICNO;
    document.getElementById('FRDSIZE').value = FRDSIZE;
   document.getElementById('FRDNO').value = FRDNO;
   document.getElementById('EVNOTIFSIZE').value = EVNOTIFSIZE;
   document.getElementById('EVNOTIFNO').value = EVNOTIFNO;
   document.getElementById('SOFTMOSIZE').value = SOFTMOSIZE;
   document.getElementById('SOFTMONO').value = SOFTMONO;
   document.getElementById('SOFERICSIZE').value = SOFERICSIZE;
   document.getElementById('SOFERICNO').value = SOFERICNO;
   document.getElementById('MBCSIZE').value = MBCSIZE;
   document.getElementById('MBCNO').value = MBCNO;
    document.getElementById('HAWKSIZE').value = HAWKSIZE;
   document.getElementById('HAWKNO').value = HAWKNO;
   document.getElementById('SAPCSIZE').value = SAPCSIZE;
   document.getElementById('SAPCNO').value = SAPCNO;
   document.getElementById('TOTBLADES').value = TOTBLADES;
   console.log("Function ends");
  
    
}


function Reset_Function()
{
    document.getElementById("TakeUserInput").reset();
    console.log("Reset function executed")
}

//Calculate_Size()
//Take_userinput()