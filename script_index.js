function genCode() {
  const aliasEl = document.getElementById("alias");
  const display = document.getElementById("codeDisplay");
  const link = document.getElementById("proceedLink");
  const alias = aliasEl.value.trim();
  if (!alias) {
    alert("Alias required!");
    return;
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rand = (n) => letters[Math.floor(Math.random() * letters.length)];
  const code = `${rand()}${rand()}${rand()}-${Math.floor(
    100 + Math.random() * 900
  )}`;

  localStorage.setItem("currentAlias", alias);
  localStorage.setItem("currentCode", code);

  display.textContent = `Agent ${alias}, your code is: ${code}`;
  link.href = `portal.html`;
  link.style.display = "inline-block";
}
