const reward = 0.010;

setTimeout(function(){

document.getElementById("claimBtn").disabled=false;
document.getElementById("claimBtn").innerHTML="🎁 Mükafatı Al";

},30000);

document.getElementById("claimBtn").onclick=function(){

localStorage.setItem("rewardClaimed","1");

window.location.href="index.html";

};
