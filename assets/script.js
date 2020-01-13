var t0900 = document.getElementsByName('one')
// Render Time
function renderTime(){
    var mydate = new Date();
    var year = mydate.getYear()
        if(year < 1000){
            year += 1900
        }    
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
// Date

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h ==24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }

        if(h < 10){
            h = "0" + h;
        }

        if(m < 10){
            m = "0" + m;
        }
        
        if(s < 10){
            s = "0" + s;
        }
    
    var myClock = document.getElementById("clockDisplay")
    myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " - " +h+ ":" +m+ ":" +s;
    myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " - " +h+ ":" +m+ ":" +s;
    setTimeout("renderTime()", 1000);
}
    const table = document.querySelector('#time-table')
    const times = [0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700]
    const timeSlots = times.map(time => {
    return `<div class="col-md-1"></div>
            <div class="col-md-2" class="${time}">${time}</div>
            <div class="col-md-6" style="padding: 0px;">
                <input class="text" id="text ${time}" type ="text" disabled><p></p></input></div>
            <div class="col-md-2">
                <button class="saveBtn" id="${time}" type="button">Unlock/Save</button></div>
            <div class="col-md-1"></div>`
        })

table.innerHTML = timeSlots.join(" ")

$(document).on('click', localStore());
    function localStore(){
        // var inputField = document.getElementById("text");
        // localStorage.setItem("text", inputField)
        console.log("true")
    }
//     function persistInput(input){
//         var key = "input-" + localStorage.second;
//         var storedValue = localStorage.getItem(key);
//         if (storedValue)
//             input.value = storedValue;
//         input.addEventListener('input', function(){
//             localStorage.setItem(key, input.value);
//         });
//     }
//     var inputElement = document.getElementById("times");
//         persistInput(inputElement);

//   const text = document.querySelector(`#text-${event.target.id}`)

// //input box
//     var realTime = parseInt(h+""+m)
//     console.log(realTime)
//     var scheduleTime = parseInt($(".time").text());
//     console.logs()

//     function presentTime(){
//         if( timeLine <= realTime){
//             $("#0900").css({"background-color":"#ff6961"});
//         }
//     } presentTime()
