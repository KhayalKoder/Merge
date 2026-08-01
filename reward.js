const reward = 0.005;

setTimeout(function(){

    document.getElementById("claimBtn").disabled = false;
    document.getElementById("claimBtn").innerHTML = "🎁 Mükafatı Al";

}, 30000);

document.getElementById("claimBtn").onclick = function(){

    localStorage.setItem("rewardClaimed", "1");
    localStorage.setItem("rewardAmount", reward.toFixed(3));

    window.location.href = "index.html";

};
