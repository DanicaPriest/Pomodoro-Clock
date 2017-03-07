$(document).ready(function(){
  var wt = 25;
  var bt = 5;
 var cdNum;
  var timerId;
  var breakTimerId;
  var breakId;
  var chgClrsId;
  var position = 0;
  var paused = false;
  var started = false;
  var muted = false;
  $("#wtminus").click(function(){ 
    if (wt === 1){
     return wt = 1
    }else{
      wt--;
    }
    $("#wtnum").html(wt)});
  $("#btminus").click(function(){ 
    if (bt === 1){
     return bt = 1
    }else{
      bt--;
    }
    $("#btnum").html(bt)});
  $("#wtplus").click(function(){ 
    if (wt >= 90){
     return wt = 90
    }else{
      wt++;
    }
    $("#wtnum").html(wt)});
  
  $("#btplus").click(function(){ 
    if (bt >= 60){
     return bt = 60
    }else{
      bt++;
    }
    $("#btnum").html(bt)});
    
   var ripenClrs =["rgb(102, 255, 102)","rgb(117, 255, 102)", "rgb(137, 255, 102)","rgb(157, 255, 102)","rgb(177, 255, 102)","rgb(185, 255, 102)","rgb(204, 255, 102)","rgb(219, 255, 102)", "rgb(239, 255, 102)","rgb(245, 255, 102)","rgb(255, 255, 102)","rgb(255, 235, 102)", "rgb(255, 226, 92)", "rgb(255, 210, 83)", "rgb(255, 191, 70)","rgb(255, 181, 62)", "rgb(255, 173, 58)", "rgb(255, 154, 58)", "rgb(255, 154, 44)", "rgb(255, 142, 31)", "rgb(255, 132, 31)","rgb(255, 112, 31)", "rgb(255, 92, 31)", "rgb(255, 73, 31)","rgb(255, 73, 17)","rgb(255, 73, 5)", "rgb(255, 73, 0)", "rgb(255, 50, 0)", "rgb(255, 22, 0)", "rgb(255, 0, 0)"];
  function chgClrs(){
     
     $("#timer").css("background-color", ripenClrs[position]);
      if (position < ripenClrs.length){
         position++;
      }
           
           };
        
  function done (){
    var audio = document.getElementById("audio");
            audio.play();position = 0;
                           $("#timer").css("background-color", ripenClrs[position]);
  };
  function startBreak (){
    clearInterval(timerId);
     clearInterval(chgClrsId);
      breakId=                setInterval(function(){
        chgClrs() }, bt * 60000/ ripenClrs.length - position);
              
                  cdNum = bt * 60;
      breakTimerId=
      setInterval(function(){
       $("#workOrBreak").html("Break");
        $("#timerText").html(cdNum + " sec");
  if (cdNum == 0){done();
                 startWork();}
    else{
    cdNum--  }}, 1000);
                          
  };
        function startWork (){
         clearInterval(breakTimerId);
     clearInterval(breakId); $("#workOrBreak").html("Work");
        $("#timer").css("background-color", ripenClrs[position])
     chgClrsId = setInterval(function(){
        chgClrs() }, wt * 60000/ ripenClrs.length - position); cdNum = wt * 60;
      timerId=
      setInterval(function(){
        $("#workOrBreak").html("Work");
        $("#timerText").html(cdNum + " sec");
  if (cdNum == 0){done();
    startBreak ();
    
  }else{
    cdNum--  }}, 1000);
  }  ;    
      
  
   
      
     
   
  
    $("#playbtn").click(function(){
      if (!paused){
       $("#timer").css("background-color", ripenClrs[position])
     chgClrsId = setInterval(function(){
        chgClrs() }, wt * 60000/ ripenClrs.length - position); if (!started){cdNum = wt * 60;
                                                                            $("#workOrBreak").html("Work");} 
      timerId=
      setInterval(function(){
        
        $("#timerText").html(cdNum + " sec");
        $("#playbtn").attr("src", "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-media/002999-simple-red-glossy-icon-media-a-media27-pause-sign.png");
        paused = true;
        started = true;
  if (cdNum == 0){done();
    startBreak();
    
  }else{
    cdNum--  }}, 1000);} else{
        clearInterval(chgClrsId);
      clearInterval(breakId);
      clearInterval(timerId);
      clearInterval(breakTimerId);
        paused = false;
        $("#playbtn").attr("src", "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-arrows/009670-simple-red-glossy-icon-arrows-triangle-solid-right.png");
      }
  }      
    );
  
    $("#resetbtn").click(function(){
     clearInterval(chgClrsId);
      clearInterval(breakId);
      clearInterval(timerId);
      clearInterval(breakTimerId);
      cdNum= wt * 60;
      position = 0;
      $("#timer").css("background-color", ripenClrs[position])
      $("#workOrBreak").html(" ");
  $("#timerText").html(" ");
      started = false;
      $("#playbtn").attr("src", "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-arrows/009670-simple-red-glossy-icon-arrows-triangle-solid-right.png");
    });
  $("#soundbtn").click(function(){
    if (!muted){
      $("#audio").attr("src", " ");
      $("#soundbtn").attr("src", "https://dl.dropbox.com/s/s8ubv1zvpn4reij/nosound.png?dl=0");
      muted = true
    }else{
      $("#audio").attr("src", " http://www.trekcore.com/audio/computer/hailingfrequencies_open1.mp3");
      $("#soundbtn").attr("src", "https://dl.dropbox.com/s/nznmwkbmgwtcwki/sound.png?dl=0")
      muted = false
    }
  })
  
  })
/*function countdown(cdNum, val){
  if (cdNum > 60){
    min = val;
    sec = 00;
    if( sec == 00){
      if (min == 0){
        done();
      }else{
      min--;
      sec = 60;}
    }
  }
  else{
    
  }
}*/