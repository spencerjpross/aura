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

}
startTime();

function Menu(e) {
    let list = document.querySelector('ul');

  e.name === 'menu' ? (e.name = "close" ,list.classList.
  add('top-[80px]') ,list.classList.add('opacity-100'))
  : (e.name = "menu" ,list.classList.remove('top-[80px]') ,
  list.classList.remove('opacity-100'))
};