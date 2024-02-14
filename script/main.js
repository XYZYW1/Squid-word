// Animation Timeline up to "Will you be my valentine?" button
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  var wouldbe = '';
  for (const c of hbd.innerHTML.split("")) {
    if(c != ' ') wouldbe += '<span id="nonspace" style="color: white">'+ c +'</span>';
    else wouldbe += '<span style="color: black">-<span>';
  }
  hbd.innerHTML = wouldbe;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl1 = new TimelineMax();

  tl1.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, 
    {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      1.5,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      1.5,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      1.5,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    ).staggerFromTo(
      ".wish-hbd span#nonspace",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    ).staggerFromTo(
      "#yes_btn",
      0.2,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      0.1
    ).staggerFromTo(
      "#no_btn",
      0.2,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      0.1
    );
    
    var noCount = 0;

    // yes/no buttons
    const yesBtn = document.getElementById("yes_btn");
    yesBtn.addEventListener("click", () => {
      document.getElementById("imagePath").src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
      animationTimeline2();
      yesBtn.addEventListener("click", () => {});
      noBtnBtn.addEventListener("click", () => {});
    });

    const getNoButtonText = (noCount) => {
      const phrases = [
        "No",
        "No you didn't.",
        "Why are you clicking no!",
        "What if I asked really nicely?",
        "Pretty please",
        "Pretty please with Rocky Mountain ice cream and a cherry on top?",
        "Ok how about  Pistachio ice cream with a cherry on top?",
        "PLEASE BABY WTH",
        "But :(",
        "I am going to die",
        "Yep im dead",
        "ok ur talking to ethan's ghost",
        "please babe",
        ":((((",
        "PRETTY PLEASE",
        "S'il vous plaît",
        "No :(",
      ];
  
      return phrases[Math.min(noCount, phrases.length - 1)];
    };
    const noBtn = document.getElementById("no_btn");
    noBtn.addEventListener("click", () => {
      noCount++;
      noBtn.innerHTML = getNoButtonText(noCount);
      yesBtn.style.fontSize = (noCount * 20 + 16).toString()+"px";
      console.log(noCount * 20 + 16)
      console.log(yesBtn.style.fontSize)
    });
};

const animationTimeline2 = () => {
  // Add elements to HTML

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const tl2 = new TimelineMax();
  tl2.to(".container", 0.1, {
    visibility: "visible",
  }).staggerTo(  // fireworks
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {  // make that stuff disappear
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .to(
      ".nine", 0.1, {
        visibility: "visible",
      }
    ).staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );


  // Restart Animation on click
  const replayBtn = document.getElementById("replay");
  replayBtn.addEventListener("click", () => {
    document.getElementsByClassName("nine")[0].style.visibility = "hidden";
    //animationTimeline();  TODO: goofed up, recursion solution doesn't work, lags out computer
    location.reload();
  });
};


animationTimeline();


// cuz my man like the funky background
var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
