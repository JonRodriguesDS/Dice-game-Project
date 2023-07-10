window.onload = function() {
    changeImg();
    
  };
  
  function changeImg() {
    var headingOne = document.querySelector("h1");
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageElements1 = document.getElementsByClassName("img1");
    var imageElements2 = document.getElementsByClassName("img2");
    var imageUrls = [
      "images/dice1.png",
      "images/dice2.png",
      "images/dice3.png",
      "images/dice4.png",
      "images/dice5.png",
      "images/dice6.png"
    ];
    var randomImage1 = imageUrls[randomNumber1 - 1];
    var randomImage2 = imageUrls[randomNumber2 - 1];
  
    for (var i = 0; i < imageElements1.length; i++) {
      imageElements1[i].setAttribute("src", randomImage1);
    }
  
    for (var j = 0; j < imageElements2.length; j++) {
      imageElements2[j].setAttribute("src", randomImage2);
    }

    if(randomNumber1 > randomNumber2){
        headingOne.innerHTML = "Player 1 Wins!"
    }
    else if(randomNumber2 > randomNumber1){
        headingOne.innerHTML = "Player 2 Wins!"
    }
    else{
        headingOne.innerHTML = "It's a Tie!!!"
    }
  }