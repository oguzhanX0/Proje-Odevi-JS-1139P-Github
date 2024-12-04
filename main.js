let teamAScore = 0;
let teamBScore = 0;

const teamAScoreElement = document.getElementById("teamA-score");
const teamBScoreElement = document.getElementById("teamB-score");

function increaseScoreA() {
  teamAScore = teamAScore + 1;
  teamAScoreElement.innerHTML = teamAScore;
}

function decreaseScoreA() {
  if (teamAScore > 0) {
    teamAScore = teamAScore - 1;
  }
  teamAScoreElement.innerHTML = teamAScore;
}

function increaseScoreB() {
  teamBScore = teamBScore + 1;
  teamBScoreElement.innerHTML = teamBScore;
}

function decreaseScoreB() {
  if (teamBScore > 0) {
    teamBScore = teamBScore - 1;
  }
  teamBScoreElement.innerHTML = teamBScore;
}

function changeScoreA() {
  const newScore = prompt("Sadece sayı giriniz");
  if (newScore != Number(newScore),(newScore < 0)) {
    alert("Sistemin bozuldu !!!!");
  } else {
    teamAScore = Number(newScore);
    teamAScoreElement.innerHTML = teamAScore;
  }
}

function changeScoreB() {
    const newScore = prompt("Sadece sayı giriniz");
    if (newScore != Number(newScore),(newScore < 0)) {
      alert("Sistemin bozuldu !!!!");
    }
    else {
        teamBScore = Number(newScore);
        teamBScoreElement.innerHTML = teamBScore;
    }
  }

function changeNameA() {
  const newName = prompt("Takımın ismi ne olsun");
  if (newName) {
    document.getElementById("teamA-name").innerHTML = newName;
  }
}

function changeNameB() {
  const newName = prompt("Takımın ismi ne olsun");
  if (newName) {
    document.getElementById("teamB-name").innerHTML = newName;
  }
}
