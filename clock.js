function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou == 0){
           hou = 12;    
        }
        if(hou > 12){
            hou = hou - 12;
            pe = "PM"
        }
        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minnutes", "seconds", "periods"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        // for(var i = 0; 1 < ids.length; i++)
        // document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        ids.forEach((e,i) => {
          document.getElementById(e).firstChild.nodeValue = values[i];})
        }
// function initClock(){
//     updateClock();
//     window.setInterval("updateClock()",1);
// };
var intervalId = window.setInterval(function(){
    updateClock()
  }, 1000);

function quotation(){
    fetch("https://type.fit/api/quotes").then((response)=> {
    return response.json();
  }).then((data)=> {
      var j = '';
      var k = '';
      for (let i=0; i<1643; i++) {
        task(i);
     }
       
     function task(i) {
       setTimeout(function() {
           // Add tasks to do
           j = data[i]['text'];
            k = data[i]['author']
            data[i]  =`<p id="quote">${j}</p>
            <br>
            <p id="authors">${k}</p>`
            console.log(j)
            console.log(k)
        document.getElementById("quote").innerHTML=j;
        document.getElementById("authors").innerHTML=k;
       }, 10000 * i);
     }
            
  });
}
quotation()