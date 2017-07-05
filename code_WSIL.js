
/*
Author: Sneha Wadhwa
	Description: Calculate the sizing parameters for F-EMM systems
	Built in: June/July 2017
*/


function Calculate_Size()
{   
    var FormLink = document.forms["TakeUserInput"]
    //get references in js
    console.log("Function starts")
    console.log("Dev starts")
    
    var TACBWN = document.getElementById("TACBWN").value;
    var TEMSSN = document.getElementById("TEMSSN").value;
    var TACPDN = document.getElementById("TACPDN").value;
    var TBEEBN = document.getElementById("TBEEBN").value;
    var TAMBPMN = document.getElementById("TAMBPMN").value;
    var TAPIEN = document.getElementById("TAPIEN").value;
    var THAWKN = document.getElementById("THAWKN").value;
    var TAMBPMADDN = document.getElementById("TAMBPMADDN").value;
    var TADMINN = document.getElementById("TADMINN").value;
    var LGFRAMEN = document.getElementById("LGFRAMEN").value;
    var LGREGFN = document.getElementById("LGREGFN").value;
    var DBN = document.getElementById("DBN").value;

    var TACBWC = document.getElementById("TACBWC").value;
    var TEMSSC = document.getElementById("TEMSSC").value;
    var TACPDC = document.getElementById("TACPDC").value;
    var TBEEBC = document.getElementById("TBEEBC").value;
    var TAMBPMC = document.getElementById("TAMBPMC").value;
    var TAPIEC = document.getElementById("TAPIEC").value;
    var THAWKC = document.getElementById("THAWKC").value;
    var TAMBPMADDC = document.getElementById("TAMBPMADDC").value;
    var TADMINC = document.getElementById("TADMINC").value;
    var LGFRAMEC = document.getElementById("LGFRAMEC").value;
    var LGREGFC = document.getElementById("LGREGFC").value;
    var DBC = document.getElementById("DBC").value;

    var TACBWG = document.getElementById("TACBWG").value;
    var TEMSSG = document.getElementById("TEMSSG").value;
    var TACPDG = document.getElementById("TACPDG").value;
    var TBEEBG = document.getElementById("TBEEBG").value;
    var TAMBPMG = document.getElementById("TAMBPMG").value;
    var TAPIEG = document.getElementById("TAPIEG").value;
    var THAWKG = document.getElementById("THAWKG").value;
    var TAMBPMADDG = document.getElementById("TAMBPMADDG").value;
    var TADMING = document.getElementById("TADMING").value;
    var LGFRAMEG = document.getElementById("LGFRAMEG").value;
    var LGREGFG = document.getElementById("LGREGFG").value;
    var DBG = document.getElementById("DBG").value;


    console.log("Prod starts")

    var PTACBWN = document.getElementById("PTACBWN").value;
    var PTEMSSN = document.getElementById("PTEMSSN").value;
    var PTACPDN = document.getElementById("PTACPDN").value;
    var PTBEEBN = document.getElementById("PTBEEBN").value;
    var PTAMBPMN = document.getElementById("PTAMBPMN").value;
    var PTAPIEN = document.getElementById("PTAPIEN").value;
    var PTHAWKN = document.getElementById("PTHAWKN").value;
    var PTAMBPMADDN = document.getElementById("PTAMBPMADDN").value;
    var PTADMINN = document.getElementById("PTADMINN").value;
    var PLGFRAMEN = document.getElementById("PLGFRAMEN").value;
    var PLGREGFN = document.getElementById("PLGREGFN").value;
    var PDBN = document.getElementById("PDBN").value;

    var PTACBWC = document.getElementById("PTACBWC").value;
    var PTEMSSC = document.getElementById("PTEMSSC").value;
    var PTACPDC = document.getElementById("PTACPDC").value;
    var PTBEEBC = document.getElementById("PTBEEBC").value;
    var PTAMBPMC = document.getElementById("PTAMBPMC").value;
    var PTAPIEC = document.getElementById("PTAPIEC").value;
    var PTHAWKC = document.getElementById("PTHAWKC").value;
    var PTAMBPMADDC = document.getElementById("PTAMBPMADDC").value;
    var PTADMINC = document.getElementById("PTADMINC").value;
    var PLGFRAMEC = document.getElementById("PLGFRAMEC").value;
    var PLGREGFC = document.getElementById("PLGREGFC").value;
    var PDBC = document.getElementById("PDBC").value;

    var PTACBWG = document.getElementById("PTACBWG").value;
    var PTEMSSG = document.getElementById("PTEMSSG").value;
    var PTACPDG = document.getElementById("PTACPDG").value;
    var PTBEEBG = document.getElementById("PTBEEBG").value;
    var PTAMBPMG = document.getElementById("PTAMBPMG").value;
    var PTAPIEG = document.getElementById("PTAPIEG").value;
    var PTHAWKG = document.getElementById("PTHAWKG").value;
    var PTAMBPMADDG = document.getElementById("PTAMBPMADDG").value;
    var PTADMING = document.getElementById("PTADMING").value;
    var PLGFRAMEG = document.getElementById("PLGFRAMEG").value;
    var PLGREGFG = document.getElementById("PLGREGFG").value;
    var PDBG = document.getElementById("PDBG").value;

    console.log("Calculation starts")



    //Development

    var TACBWTC=TACBWC*TACBWN
    var TACBWTG=TACBWG*TACBWN

    var TEMSSTC=TEMSSC*TEMSSN
    var TEMSSTG=TEMSSG*TEMSSN

    var TACPDTC=TACPDC*TACPDN
    var TACPDTG=TACPDG*TACPDN

    var TBEEBTC=TBEEBC*TBEEBN
    var TBEEBTG=TBEEBG*TBEEBN

    var TAMBPMTC=TAMBPMC*TAMBPMN
    var TAMBPMTG=TAMBPMG*TAMBPMN

    var TAPIETC=TAPIEC*TAPIEN
    var TAPIETG=TAPIEG*TAPIEN

    var THAWKTC=THAWKC*THAWKN
    var THAWKTG=THAWKG*THAWKN

    var TAMBPMADDTC=TAMBPMADDC*TAMBPMADDN
    var TAMBPMADDTG=TAMBPMADDC*TAMBPMADDN

    var TADMINTC=TADMINC*TADMINN
    var TADMINTG=TADMING*TADMINN

    var LGFRAMETC=LGFRAMEC*LGFRAMEN
    var LGFRAMETG=LGFRAMEG*LGFRAMEN

    var LGREGFTC=LGREGFC*LGREGFN
    var LGREGFTG=LGREGFG*LGREGFN

    var DBTC=DBC*DBN
    var DBTG=DBG*DBN

    var DEVCORE1=TACBWTC+TEMSSTC+TACPDTC+TBEEBTC+TAMBPMTC+TAMBPMADDTC
    DEVCORE1=(Math.ceil(DEVCORE1/8)*8)
    var DEVCORE2=TAPIETC+THAWKTC+TADMINTC+LGFRAMETC+LGREGFTC+DBTC
    DEVCORE2=(Math.ceil(DEVCORE2/8)*8)
    var MAXDEVCORE=Math.max(DEVCORE1,DEVCORE2)
    
    var DEVGB1=TACBWTG+TEMSSTG+TACPDTG+TBEEBTG+TAMBPMTG+TAMBPMADDTG
    DEVGB1=(Math.ceil(DEVGB1/32)*32)
    var DEVGB2=TAPIETG+THAWKTG+TADMINTG+LGFRAMETG+LGREGFTG+DBTG
    DEVGB2=(Math.ceil(DEVGB2/32)*32)
    var MAXDEVGB=Math.max(DEVGB1,DEVGB2)

    //Production
    var PTACBWTC=PTACBWC*PTACBWN
    var PTACBWTG=PTACBWG*PTACBWN

    var PTEMSSTC=PTEMSSC*PTEMSSN
    var PTEMSSTG=PTEMSSG*PTEMSSN

    var PTACPDTC=PTACPDC*PTACPDN
    var PTACPDTG=PTACPDG*PTACPDN

    var PTBEEBTC=PTBEEBC*PTBEEBN
    var PTBEEBTG=PTBEEBG*PTBEEBN
    
    var PTAMBPMTC=PTAMBPMC*PTAMBPMN
    var PTAMBPMTG=PTAMBPMG*PTAMBPMN

    var PTAPIETC=PTAPIEC*PTAPIEN
    var PTAPIETG=PTAPIEG*PTAPIEN

    var PTHAWKTC=PTHAWKC*PTHAWKN
    var PTHAWKTG=PTHAWKG*PTHAWKN

    var PTAMBPMADDTC=PTAMBPMADDC*PTAMBPMADDN
    var PTAMBPMADDTG=PTAMBPMADDC*PTAMBPMADDN

    var PTADMINTC=PTADMINC*PTADMINN
    var PTADMINTG=PTADMING*PTADMINN

    var PLGFRAMETC=PLGFRAMEC*PLGFRAMEN
    var PLGFRAMETG=PLGFRAMEG*PLGFRAMEN

    var PLGREGFTC=PLGREGFC*PLGREGFN
    var PLGREGFTG=PLGREGFG*PLGREGFN

    var PDBTC=PDBC*PDBN
    var PDBTG=PDBG*PDBN

    var PRODCORE1=PTACBWTC+PTACPDTC+PTHAWKTC+PTAMBPMADDTC+PTADMINTC+PLGREGFTC
    PRODCORE1=(Math.ceil(PRODCORE1/8)*8)
    var PRODCORE2=PTACBWTC+PTACPDTC+PTBEEBTC+PTAMBPMTC+PTAMBPMADDTC+PLGFRAMETC
    PRODCORE2=(Math.ceil(PRODCORE1/8)*8)
    var PRODCORE3=PTACBWTC+PTEMSSTC+PTAMBPMTC+PLGREGFTC
    PRODCORE3=(Math.ceil(PRODCORE1/8)*8)
    var PRODCORE4=PTACBWTC+PTACPDTC+PTBEEBTC+PTAMBPMTC+PTAMBPMADDTC+PLGFRAMETC+PLGREGFTC
    PRODCORE4=(Math.ceil(PRODCORE1/8)*8)

    var PRODGB1=PTACBWTG+PTACPDTG+PTHAWKTG+PTAMBPMADDTG+PTADMINTG+PLGREGFTG
    PRODGB1=(Math.ceil(PRODGB1/32)*32)
    var PRODGB2=PTACBWTG+PTACPDTG+PTBEEBTG+PTAMBPMTG+PTAMBPMADDTG+PLGFRAMETG
    PRODGB2=(Math.ceil(PRODGB2/32)*32)
    var PRODGB3=PTACBWTG+PTEMSSTG+PTAMBPMTG+PLGREGFTG
    PRODGB3=(Math.ceil(PRODGB3/32)*32)
    var PRODGB4=PTACBWTG+PTACPDTG+PTBEEBTG+PTAMBPMTG+PTAMBPMADDTG+PLGFRAMETG+PLGREGFTG
    PRODGB4=(Math.ceil(PRODGB4/32)*32)

    var MAXPRODCORE=Math.max(PRODCORE1,PRODCORE2,PRODCORE3,PRODCORE4)
    var MAXPRODGB=Math.max(PRODGB1,PRODGB2,PRODGB3,PRODGB4)
    

   
    //print to html
  
    //Development

   document.getElementById('TACBWTC').value = TACBWTC;
   document.getElementById('TACBWTG').value = TACBWTG;
   document.getElementById('TEMSSTC').value = TEMSSTC;
   document.getElementById('TEMSSTG').value = TEMSSTG;
   document.getElementById('TACPDTC').value = TACPDTC;
   document.getElementById('TACPDTG').value = TACPDTG;
   document.getElementById('TBEEBTC').value = TBEEBTC;
   document.getElementById('TBEEBTG').value = TBEEBTG;
   document.getElementById('TAMBPMTC').value = TAMBPMTC;
   document.getElementById('TAMBPMTG').value = TAMBPMTG;
   document.getElementById('TAPIETC').value = TAPIETC;
   document.getElementById('TAPIETG').value = TAPIETG;
   document.getElementById('THAWKTC').value = THAWKTC;
   document.getElementById('THAWKTG').value = THAWKTG;
   document.getElementById('TAMBPMADDTC').value = TAMBPMADDTC;
   document.getElementById('TAMBPMADDTG').value = TAMBPMADDTG;
   document.getElementById('TADMINTC').value = TADMINTC;
   document.getElementById('TADMINTG').value = TADMINTG;
   document.getElementById('LGFRAMETC').value = LGFRAMETC;
   document.getElementById('LGFRAMETG').value = LGFRAMETG;
   document.getElementById('LGREGFTC').value = LGREGFTC;
   document.getElementById('LGREGFTG').value = LGREGFTG;
   document.getElementById('DBTC').value = DBTC;
   document.getElementById('DBTG').value = DBTG;


   document.getElementById('DEVCORE1').value = DEVCORE1;
   document.getElementById('DEVCORE2').value = DEVCORE2;
   document.getElementById('DEVGB1').value = DEVGB1;
   document.getElementById('DEVGB2').value = DEVGB2;
   
   document.getElementById('MAXDEVGB').value = MAXDEVGB;
   document.getElementById('MAXDEVCORE').value = MAXDEVCORE;


   document.getElementById('PTACBWTC').value = PTACBWTC;
   document.getElementById('PTACBWTG').value = PTACBWTG;
   document.getElementById('PTEMSSTC').value = PTEMSSTC;
   document.getElementById('PTEMSSTG').value = PTEMSSTG;
   document.getElementById('PTACPDTC').value = PTACPDTC;
   document.getElementById('PTACPDTG').value = PTACPDTG;
   document.getElementById('PTBEEBTC').value = PTBEEBTC;
   document.getElementById('PTBEEBTG').value = PTBEEBTG;
   document.getElementById('PTAMBPMTC').value = PTAMBPMTC;
   document.getElementById('PTAMBPMTG').value = PTAMBPMTG;
   document.getElementById('PTAPIETC').value = PTAPIETC;
   document.getElementById('PTAPIETG').value = PTAPIETG;
   document.getElementById('PTHAWKTC').value = PTHAWKTC;
   document.getElementById('PTHAWKTG').value = PTHAWKTG;
   document.getElementById('PTAMBPMADDTC').value = PTAMBPMADDTC;
   document.getElementById('PTAMBPMADDTG').value = PTAMBPMADDTG;
   document.getElementById('PTADMINTC').value = PTADMINTC;
   document.getElementById('PTADMINTG').value = PTADMINTG;
   document.getElementById('PLGFRAMETC').value = PLGFRAMETC;
   document.getElementById('PLGFRAMETG').value = PLGFRAMETG;
   document.getElementById('PLGREGFTC').value = PLGREGFTC;
   document.getElementById('PLGREGFTG').value = PLGREGFTG;
   document.getElementById('PDBTC').value = PDBTC;
   document.getElementById('PDBTG').value = PDBTG;

   document.getElementById('PRODCORE1').value = PRODCORE1;
   document.getElementById('PRODCORE2').value = PRODCORE2;
   document.getElementById('PRODCORE3').value = PRODCORE3;
   document.getElementById('PRODCORE4').value = PRODCORE4;
   document.getElementById('PRODGB1').value = PRODGB1;
   document.getElementById('PRODGB2').value = PRODGB2;
   document.getElementById('PRODGB3').value = PRODGB3;
   document.getElementById('PRODGB4').value = PRODGB4;

   document.getElementById('MAXPRODGB').value = MAXPRODGB;
   document.getElementById('MAXPRODCORE').value = MAXPRODCORE;

   console.log("Function ends");
  
    
}


function Reset_Function()
{
    document.getElementById("TakeUserInput").reset();
    console.log("Reset function executed")
}
