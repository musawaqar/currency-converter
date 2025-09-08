// let url = "https://api.frankfurter.dev/v1/latest?base=inr&symbols=eur"
// let baseUrl = "https://latest.currency-api.pages.dev/v1/currencies/pkr.json"
 let baseUrl = "https://latest.currency-api.pages.dev/v1/currencies"
let dropDOwn = document.querySelectorAll(".dropDown")
let btn = document.querySelector("button")
let from = document.querySelector("#from")
let to = document.querySelector("#to")
let amount = document.querySelector("#amount")
let fromVal =""
let toVal = ""
let ourValue = ""
let ans = ""
let x = ""
let msg = document.querySelector("#result")
for(select of dropDOwn)
{
for (code in currencyList)
{
    let x = document.createElement("option")
     x.value = code
     x.innerText = code
     select.append(x)
}
}
window.addEventListener("DOMContentLoaded", async function() {
  from.value = "USD";
  to.value = "PKR";

  updateFromFlag(currencyList[from.value]);
  updateToFlag(currencyList[to.value]);

  await getData(); 
  changeOutput()        
  //let ourValue = Number(amount.value);
  //let ans = ourValue * x;
  //showAnswer(ans, ourValue);
});

dropDOwn.forEach(function (s) {
s.addEventListener("change",async function apply(event)
{
           //from.value= "USD"
           //to.value="PKR"
           let val = (event.target.value)
           let newVal = (currencyList[val])
           await getData()  
           changeOutput()  
           console.log(val)
               if (s.id === "from") {
                fromVal = val.toLowerCase();
      updateFromFlag(newVal);
    } else if (s.id === "to") {
        toVal = val
      updateToFlag(newVal);}   
         
})
})
btn.addEventListener("click", function yes()
{
 run()
}) 
async function run()
{
//let msg = document.querySelector("#result")
//console.log(fromVal)
//console.log(from.value.toLowerCase())
//console.log(to.value.toLowerCase())
//f = (from.value.toLowerCase())
//t = (to.value.toLowerCase())
//console.log(t)
//let url = `${baseUrl}/${fromVal}.json`
//let url = `${baseUrl}/${f}.json`
//console.log(url)
//let response = await fetch(url)
//let  data = await response.json()
//console.log(data)
//console.log(fromVal)
 // let show = Math.floor((data[f][t]));
 //x = (data[f][t]);
//console.log(x)
//msg.innerText = `1 ${from.value} = ${show} ${to.value} `
await getData()
fetchAmount(ourValue)
finalAns(ans)
showAnswer()
}
async function getData()
{
f = (from.value.toLowerCase())
t = (to.value.toLowerCase())
let url = `${baseUrl}/${f}.json`
let response = await fetch(url)
let  data = await response.json()
x = (data[f][t]);
console.log(x)
}
function changeOutput()
{

msg.innerText = `1 ${from.value} = ${x} ${to.value} `
}
function fetchAmount()
{
 ourValue = (amount.value)
console.log(ourValue)
}
function finalAns()
{
ans = ourValue*x
console.log(ans)
}
function showAnswer()
{
msg.innerText = `${amount.value} ${from.value} =  ${ans} ${to.value} `
}
function updateFromFlag(newVal)
{
    let fromImg = document.querySelector("#from-flag")
    fromImg.src = `https://www.worldometers.info/img/flags/${newVal}-flag.gif`
    
}
function updateToFlag(newVal)
{
    let toImg = document.querySelector("#to-flag")
    toImg.src = `https://www.worldometers.info/img/flags/${newVal}-flag.gif`
}

