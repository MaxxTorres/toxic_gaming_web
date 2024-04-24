
//JS Libraries
new Glide('.glide', {
  type: 'carousel',
  autoplay: 2000,
  startAt: 0,
  perView: 3
}).mount();
//-------------

let chatButton = document.getElementById("chat_button");
let chatBox = document.getElementById("chat_box");
let enterButton = document.getElementById("enter_button");
let inputMessage = document.getElementById("user_chat");
let chatLine1 = document.getElementById("chat_line1");
let chatLine2 = document.getElementById("chat_line2");
let chatLine3 = document.getElementById("chat_line3");
let botRepliesBad = ["ur garbage","uninstall the game plz",
                  "are u r*tarded","go f*k urself",
                  "stfu idiot","actually braindead"];
let botRepliesGood = ["i just need to touch grass sorry",
                      "sorry lets just have fun",
                      "nvm we all make mistakes sorry",
                      "im just lonely sorry"];

let menuButton = document.getElementById("menu");
let menuBox = document.getElementById("menu_box");

let body = document.getElementsByTagName("body");

chatButton.addEventListener("click", function(){
  if (chatBox.style.display == "flex") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "flex";
  }
});

menuButton.addEventListener("click", function(){
  if (menuBox.style.display == "none") {
    menuBox.style.display = "flex";
  } else {
    menuBox.style.display = "none";
  }
});

enterButton.addEventListener("click", function(){
  let userMessage = "<span style='color:gray'>You: </span>" + inputMessage.value;
  let botReplyBad = "<span style='color:gray'>xXGamer69Xx: </span>"  + botRepliesBad[Math.floor(Math.random()*botRepliesBad.length)];
  let botReplyGood = "<span style='color:gray'>xXGamer69Xx: </span>"  + botRepliesGood[Math.floor(Math.random()*botRepliesGood.length)];

  if(chatLine1.innerText.length == 0) {
    chatLine1.innerHTML = userMessage;

    setTimeout(function() {
      chatLine2.innerHTML = botReplyBad;
    }, 1000);

    setTimeout(function() {
      chatLine3.innerHTML = botReplyGood;
    }, 3000);
  } 
  else {
    chatLine1.innerHTML = chatLine2.innerHTML;
    chatLine2.innerHTML = chatLine3.innerHTML;
    chatLine3.innerHTML = userMessage;

    setTimeout(function() {
      chatLine1.innerHTML = chatLine2.innerHTML;
      chatLine2.innerHTML = chatLine3.innerHTML;
      chatLine3.innerHTML = botReplyBad;
    }, 1000);

    setTimeout(function() {
      chatLine1.innerHTML = chatLine2.innerHTML;
      chatLine2.innerHTML = chatLine3.innerHTML;
      chatLine3.innerHTML = botReplyGood;
    }, 3000);
  }
})