//compares character in a string and returns false if the 4 consecutive character in a alphanumeric string is sequential eg:abcd or 1234

// function init(){
var btn = document.getElementById("btn")
var txb = document.getElementById("txb")


btn.addEventListener("click", ()=>{
   let str = txb.value;
   let str1 = str.toUpperCase()
   let c=[];
   let st = [...str1]
   console.log(st)
      st.forEach(char1=>{
        c.push(char1.charCodeAt(0))
      })
      console.log(c)
      for(i=0;i<=c.length;i++){
        if (c[i+1]===c[i]+1&&c[i+2]===c[i]+2&&c[i+3]===c[i]+3){
          window.alert("False")
          break;
        }
        else window.alert("True")
        break;
      }
    
})
// }
// document.addEventListener("DOMContentLoaded", init)