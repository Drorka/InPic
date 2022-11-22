var gQuest = createQuests()

var gCurrQuestIdx = 0

function initGame() {
  renderQuest()
  return console.log('game on')
}

function createQuests() {
  gQuest = [
    { id: 1, opts: ['A Fly', 'Giraffes'], correctOptIdx: 0 },
    { id: 2, opts: ['Fish', 'Hippo'], correctOptIdx: 0 },
    { id: 3, opts: ['Tardigrade', 'A Leaf'], correctOptIdx: 0 },
  ]
  return gQuest
}

function renderQuest() {
  var strHTML = ''
  strHTML += `<img src="img/${gCurrQuestIdx}.jpg" height="400px" width="500px">`

  var elQuestion = document.querySelector('.question')
  elQuestion.innerHTML = strHTML

  var strHTMLAnsr = ''
  for (var i = 0; i < gQuest[gCurrQuestIdx].opts.length; i++) {
    strHTMLAnsr += `<button onclick="checkAnswer(${i})" class="answers answer1">${gQuest[gCurrQuestIdx].opts[i]}</button>`
  }

  var elAnsrs = document.querySelector('.answers-div')
  elAnsrs.innerHTML = strHTMLAnsr
}

function checkAnswer(optIdx) {
  //   console.log('optIdx', optIdx)

  if (optIdx === gQuest[gCurrQuestIdx].correctOptIdx) {
    console.log('right!')
    gCurrQuestIdx++
    console.log(gCurrQuestIdx)
    if (gCurrQuestIdx === gQuest.length) {
      console.log('finish him')
      //   gCurrQuestIdx = 0
      winAndStartOver()
      return
    }
    renderQuest()
  } else {
    console.log('try again')

    var strHTML = ''
    strHTML += `<img src="img/${gCurrQuestIdx}1.png" height="400px" width="500px">`

    var elQuestion = document.querySelector('.question')
    elQuestion.innerHTML = strHTML
  }
}

function winAndStartOver() {
  var strHTMLWin = ''
  strHTMLWin += '<img src="img/winner.jpg" height="400px" width="500px">'

  var elQuestion = document.querySelector('.question')
  console.log('elQuestion1', elQuestion)

  elQuestion.innerHTML = strHTMLWin

  var strHTMLStrtOver = ''
  strHTMLStrtOver += `<button onclick="renderQuest()" class="answers answer1">Start Over</button>`

  var elAnsers = document.querySelector('.answers-div')
  elAnsers.innerHTML = strHTMLStrtOver

  console.log('you won!')
  gCurrQuestIdx = 0
}
