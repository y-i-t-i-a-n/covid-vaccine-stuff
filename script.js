// GLOBAL VARIABLES

var next = 1

// GENERAL

setInterval(() => {
  next = Background.setNextImage()
  $("#html-tag").css({
    background: `rgb(34, 128, 215) url("images/background${next}.jpg") no-repeat fixed center center / cover`
  })
}, 30000)

// EVENTS

window.onload = () => {
  setTimeout(() => $("#loading").fadeOut(1000), 2000)
}

$("#qna").click(() => CSSEffects.qnaClick())

$("#material").click(() => CSSEffects.materialClick())

$("#stats").click(() => CSSEffects.statsClick())

// OBJECTS

const Background = {
  setNextImage: () => {
    switch(next) {
      case 1: return 2
      case 2: return 3
      case 3: return 4
      case 4: return 1
      default: return 1
    }
  }
}

const Hide = {
  mainMenu: () => $("#content").slideUp(750),
  materialMenu: () => $("#material-pane").slideUp(750),
  statsMenu: () => $("#stats-pane").slideUp(750)
}

const Show = {
  mainMenu: () => $("#content").slideDown(750),
  materialMenu: () => $("#material-pane").slideDown(750),
  statsMenu: () => $("#stats-pane").slideDown(750)
}

const CSSEffects = {
  qnaClick: () => {
    Hide.statsMenu()
    Hide.materialMenu()
    Show.mainMenu()
  },
  materialClick: () => {
    Hide.mainMenu()
    Hide.statsMenu()
    Show.materialMenu()
  },
  statsClick: () => {
    Hide.mainMenu()
    Hide.materialMenu()
    Show.statsMenu()
  },
  rotateArrow: jQueryElement => {
    if(jQueryElement.css("transform") == "matrix(-1, 0, 0, -1, 0, 0)") jQueryElement.css({ transform: "rotate(0deg)" })
    else jQueryElement.css({ transform: "rotate(180deg)" })
  },
  qnaUpDown: jQueryThis => {
    $(jQueryThis).prev().slideToggle('slow')
    CSSEffects.rotateArrow($(jQueryThis).children(':first'))
  }
}