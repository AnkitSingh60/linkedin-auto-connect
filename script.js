// var btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{
//    alert("Hey kiddo")
            // main function to send connect request
            // var connectButton = document.querySelectorAll(".artdeco-button--secondary");
            // for(var i=0; i<1; i=i+1){
            //     setInterval(() => {
            //     Array.from(connectButton).forEach((button) => button.click());
            // }, 4000);
            
            // for(var j=0; j<connectButton.length; j++){
            // setInterval(() => {
            //     var sendButton = document.querySelectorAll(".ml1");
            //  Array.from(sendButton).forEach((button) => button.click());
            //     }, 5000);
            // }
            // }


    
// }

// )


            // main code to send connect request automatically
var connectButton = document.querySelectorAll(".artdeco-button--secondary");
for(var i=0; i<1; i=i+1){
    setInterval(() => {
    Array.from(connectButton).forEach((button) => button.click());
}, 4000);

for(var j=0; j<connectButton.length; j++){
setInterval(() => {
    var sendButton = document.querySelectorAll(".ml1");
 Array.from(sendButton).forEach((button) => button.click());
    }, 5000);
}
}