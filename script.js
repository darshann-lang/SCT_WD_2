
      let q = document.getElementById("ques");
      let a = document.getElementById("ans");

      function add(x) {
        q.value += x;
      }

      function clr() {
        q.value = "";
        a.value = "";
      }

      function back() {
        q.value = q.value.slice(0, -1);
      }

      function solve() {
        // Logic: Calculate 'q' and show result in 'a'
        a.value = eval(q.value);
      }
  