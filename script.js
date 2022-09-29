function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  

  function startTime(){
  var todayDate = new Date();
 
        //Gets the Date Values
        var dd = ("0" + todayDate.getDate()).slice(-2);
        var mm = ("0" + (todayDate.getMonth() + 1)).slice(-2);
        var yyyy = todayDate.getFullYear();
        document.getElementById('currentDate').innerHTML = mm + "/" + dd + "/" + yyyy;
    
 
        //Gets the Time Values
        var hh = ("0" + todayDate.getHours()).slice(-2);
        var min = ("0" + todayDate.getMinutes()).slice(-2);
        var ss = ("0" + todayDate.getSeconds()).slice(-2);
        document.getElementById('currentTime').innerHTML = hh + ":" + min + ":" + ss;
        t = setTimeout(function() {
            startTime()
          }, 500);
 
        //Sets the Current Data
        var currentMonth = ("0" + (todayDate.getMonth() + 1)).slice(-2);
        var currentHour = (("0" + todayDate.getHours()).slice(-2)) * 100;
  }
  startTime();