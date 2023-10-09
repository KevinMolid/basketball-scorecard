let homeScore = 0
let guestScore = 0
let period = 1

let homeText = document.getElementById("home-score")
let guestText = document.getElementById("guest-score")
let periodText = document.getElementById("period-p")

let homeName = document.getElementById("home-name")
let guestName = document.getElementById("guest-name")

function plusHome(amount) {
  homeScore += amount
  homeText.textContent = homeScore
}

function plusGuest(amount) {
  guestScore += amount
  guestText.textContent = guestScore
}

function plusPeriod() {
  period += 1
  periodText.textContent = period
}

function resetGame() {
  homeScore = 0
  guestScore = 0
  homeText.textContent = homeScore
  guestText.textContent = guestScore
  homeName.value = ""
  guestName.value = ""
  period = 1
  periodText.textContent = period
}