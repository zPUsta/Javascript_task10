





let count = 1;
let increasing = true;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    if (increasing === true) {
        if (count <= 10) {
            btn.textContent = `Click me ${count++}`;
            if(count === 10){
                increasing =false;
            }
           
        }
    }
  
    else {
        if (count >=1) {
            btn.textContent = `Click me ${count--}`;
        if(count === 1)
increasing = false;
        }
    }
});