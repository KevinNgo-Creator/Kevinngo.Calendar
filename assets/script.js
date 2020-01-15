// time
var myClock = document.getElementById("clockDisplay")
var format = moment().format('MMMM Do YYYY, h:mm a')
$("#clockDisplay").html(format)
console.log(format)

var hours = moment().format("HHmm"); 
var first = $("#0900").attr("dataTime")
var firstT = parseInt(first)
var second = $("#1000").attr("dataTime")
var secondT = parseInt(second)
var third = $("#1100").attr("dataTime")
var thirdT = parseInt(third)
var fourth = $("#1200").attr("dataTime")
var fourthT = parseInt(fourth)
var fifth = $("#1300").attr("dataTime")
var fifthT = parseInt(fifth)
var sixth = $("#1400").attr("dataTime")
var sixthT = parseInt(sixth)
var seventh = $("#1500").attr("dataTime")
var seventhT = parseInt(seventh)
var eighth = $("#1600").attr("dataTime")
var eighthT = parseInt(eighth)
var ninth = $("#1700").attr("dataTime")
var ninthT = parseInt(ninth)

    function one(){
        if(firstT <= hours){
            $("#0900").addClass("present")
        }else if (hours < firstT){
            $("#0900").addClass("future")
        }
    } one()
    function oneT(){
        if (firstT+59 < hours) { 
            $("#0900").addClass("past")
    }} oneT()

    function two(){
        if(secondT <= hours){
            $("#1000").addClass("present")
        }else if (hours < secondT){
            $("#1000").addClass("future")
        }
    } two()
    function twoT(){
        if (secondT+59 < hours) { 
            $("#1000").addClass("past")
    }} twoT()

    function three(){
        if(thirdT <= hours){
            $("#1100").addClass("present")
        }else if (hours < thirdT){
            $("#1100").addClass("future")
        }
    } three()
    function threeT(){
        if (thirdT+59 < hours) { 
            $("#1100").addClass("past")
    }} threeT()

    function four(){
        if(fourthT <= hours){
            $("#1200").addClass("present")
        }else if (hours < fourthT){
            $("#1200").addClass("future")
        }
    } four()
    function fourT(){
        if (fourthT+59 < hours) { 
            $("#1200").addClass("past")
    }} fourT()

    function five(){
        if(fifthT <= hours){
            $("#1300").addClass("present")
        }else if (hours < fifthT){
            $("#1300").addClass("future")
        }
    } five()
    function fiveT(){
        if (fifthT+59 < hours) { 
            $("#1300").addClass("past")
    }} fiveT()

    function six(){
        if(sixthT <= hours){
            $("#1400").addClass("present")
        }else if (hours < sixthT){
            $("#1400").addClass("future")
        }
    } six()
    function sixT(){
        if (sixthT+59 < hours) { 
            $("#1400").addClass("past")
    }} sixT()

    function seven(){
        if(seventh <= hours){
            $("#1500").addClass("present")
        }else if (hours < seventhT){
            $("#1500").addClass("future")
        }
    } seven()
    function sevenT(){
        if (seventhT+59 < hours) { 
            $("#1500").addClass("past")
    }} sevenT()

    function eight(){
        if(eighthT <= hours){
            $("#1600").addClass("present")
        }else if (hours < eighthT){
            $("#1600").addClass("future")
        }
    } eight()
    function eightT(){
        if (eighthT+59 < hours) { 
            $("#1600").addClass("past")
    }} eightT()

    function nine(){
        if(ninthT <= hours){
            $("#1700").addClass("present")
        }else if (hours < ninthT){
            $("#1700").addClass("future")
        }
    } nine()
    function nineT(){
        if (ninthT+59 < hours) { 
            $("#1700").addClass("past")
    }} nineT()

$(document).on("click",".saveBtn", handleClick);
function handleClick(e){
    var input1 = document.getElementById('0900').value
    localStorage.setItem("0900", input1)

    var input2 = document.getElementById('1000').value
    localStorage.setItem("1000", input2)

    var input2 = document.getElementById('1100').value
    localStorage.setItem("1100", input2)

    var input3 = document.getElementById('1200').value
    localStorage.setItem("1200", input3)

    var input4 = document.getElementById('1300').value
    localStorage.setItem("1300", input4)

    var input5 = document.getElementById('1400').value
    localStorage.setItem("1400", input5)

    var input6 = document.getElementById('1500').value
    localStorage.setItem("1500", input6)

    var input7 = document.getElementById('1600').value
    localStorage.setItem("1600", input7)

    var input8 = document.getElementById('1700').value
    localStorage.setItem("1700", input8)

}

window.onload = function(){
    var input11 = localStorage.getItem('0900');
    if (input11 !== null) $("#0900").val(input11)

    var input12 = localStorage.getItem('1000');
    if (input12 !== null) $("#1000").val(input12)

    var input13 = localStorage.getItem('1100');
    if (input13 !== null) $("#1100").val(input13)

    var input14 = localStorage.getItem('1200');
    if (input14 !== null) $("#1200").val(input14)

    var input15 = localStorage.getItem('1300');
    if (input15 !== null) $("#1300").val(input15)
    
    var input16 = localStorage.getItem('1400');
    if (input16 !== null) $("#1400").val(input16)

    var input17 = localStorage.getItem('1500');
    if (input17 !== null) $("#1500").val(input17)

    var input18 = localStorage.getItem('1600');
    if (input18 !== null) $("#1600").val(input18)

    var input19 = localStorage.getItem('1700');
    if (input19 !== null) $("#1700").val(input19)
}
