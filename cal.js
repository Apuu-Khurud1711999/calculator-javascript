let history = '';

      //function that display value 
      function dis(val) {
        document.getElementById("result").value += val;

       addToHistory(val);
      }

      //function that evaluates the digit and return result 
      function solve() {
        try{
       let x = document.getElementById("result").value;
        let y = eval(x);
        document.getElementById("result").value = y;

        addToHistory('=' + y);
      }
      catch(e){
        c('Error')
      }
      }

      //function that clear the display 
      function clr() {
        document.getElementById("result").value = "";

        addToHistory(' ');
      }

      function addToHistory(value) {
        history += value;
        document.getElementById('history').innerText = history;
       }

      /*  function e() { 
        try { 
            c(eval(document.getElementById("d").value)) 
        } 
        catch(e) {
            c('Error') 
        } 
        } */

        function back() {
          //delete last letter function.
          var value = document.getElementById("result").value;
          document.getElementById("d").value = value.substr(0, value.length - 1);
         
          
      }

      function c(val) {
        document.getElementById("result").value=val;
    }

    function math(val) {
        document.getElementById("result").value+=val;
    }