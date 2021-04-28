//Set Timeout

// setTimeout(() => {
//    alert("hello");
// }, 2000);


//Set Interval
//interval degerine göre interval 2 olsun
//2 saniyede bir çalıştırır






//Clear Interval

let i=0;
let value=setInterval(() => {
    console.log(i+++":hoşgeldin");
},1000);

document.getElementById("btnOf").addEventListener("click",function(){
    clearInterval(value);
});











//Progress bar uygulaması
move();

function move() { 
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        //clearInterval(id);
        width=0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }





  move();

function move() { 
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        //clearInterval(id);
        width=0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }






  move2();

function move2() { 
    var elem = document.getElementById("myBar2");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        //clearInterval(id);
        width=0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }










  move3();

function move3() { 
    var elem = document.getElementById("myBar3");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        //clearInterval(id);
        width=0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }

















  move4();

function move4() { 
    var elem = document.getElementById("myBar4");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        //clearInterval(id);
        width=0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }




  move5();

function move5() { 
    var elem = document.getElementById("myBar5");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        //clearInterval(id);
        width=0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }