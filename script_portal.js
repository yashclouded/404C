const alias = localStorage.getItem("currentAlias") || "Anonymous";
const storedCode = localStorage.getItem("currentCode");
document.getElementById(
  "welcome"
).textContent = `Agent ${alias}, please confirm your code.`;

const riddles = [
  {
    q: `I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?`,
    a: `echo`,
  },
  {
    q: `What can run but never walks, has a mouth but never talks?`,
    a: `river`,
  },
  {
    q: `I’m light as a feather, yet the strongest person can't hold me for five minutes.`,
    a: `breath`,
  },
  { q: `The more of this there is, the less you see.`, a: `darkness` },
  { q: `I have keys but no locks, space but no room.`, a: `keyboard` },
  { q: `What gets wetter while it dries?`, a: `towel` },
  { q: `I shave every day, but my beard stays the same.`, a: `barber` },
  {
    q: `I’m found in socks, scarves and mittens; and often in the paws of playful kittens.`,
    a: `yarn`,
  },
  { q: `I have branches, but no fruit, trunk or leaves.`, a: `bank` },
  { q: `What can you keep after giving it to someone?`, a: `word` },
];

let picked;
function verifyCode() {
  const userCode = document.getElementById("codeInput").value.trim();
  if (userCode === storedCode) {
    document.getElementById("codeError").textContent = "";
    startRiddle();
  } else {
    document.getElementById("codeError").textContent = "❌ Incorrect code!";
  }
}

function startRiddle() {
  picked = riddles[Math.floor(Math.random() * riddles.length)];
  document.getElementById("riddleText").textContent = `Riddle: ${picked.q}`;
  document.getElementById("riddleBox").style.display = "block";
}

function liveType() {
  const val = document.getElementById("answerInput").value;
  document.getElementById("live").textContent = `You've typed: ${val}`;
}

function checkAnswer() {
  const ans = document.getElementById("answerInput").value.trim().toLowerCase();
  const res = document.getElementById("result");
  if (ans === "") {
    res.textContent = "Type an answer!";
    res.style.color = "red";
    return;
  }

  if (ans.includes(picked.a)) {
    res.textContent = `✅ Agent ${storedCode} escaped!`;
    res.style.color = "lime";
    logEscape();
  } else {
    res.textContent = "❌ Wrong answer. Cyberspace tightens its grip…";
    res.style.color = "red";
  }
}

function logEscape() {
  const data = JSON.parse(localStorage.getItem("escapedAgents") || "[]");
  data.push({ alias, code: storedCode, time: new Date().toLocaleString() });
  localStorage.setItem("escapedAgents", JSON.stringify(data));
  const link = document.createElement("a");

  link.href = "escaped.html";
  link.textContent = "➡ View Escaped Agents Leaderboard";
  link.style.display = "block";
  link.style.marginTop = "20px";
  link.style.color = "cyan";
  document.querySelector(".terminal").appendChild(link);
}
