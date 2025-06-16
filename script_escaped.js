const tbody = document.querySelector("#scoreTable tbody");
const data = JSON.parse(localStorage.getItem("escapedAgents") || "[]");
if (!data.length) {
  tbody.innerHTML = '<tr><td colspan="4">No one has escaped… yet.</td></tr>';
} else {
  data.forEach((agent, i) => {
    const row = tbody.insertRow();
    row.innerHTML = `<td>${i + 1}</td><td>${agent.alias}</td><td>${
      agent.code
    }</td><td>${agent.time}</td>`;
  });
}
