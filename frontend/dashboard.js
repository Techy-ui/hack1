const simulateBtn = document.getElementById("simulateBtn");
const stabilityCard = document.getElementById("stabilityCard");
const insight = document.getElementById("insight");

const ctx = document.getElementById("resultChart").getContext("2d");

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Focus Level Over Time",
      data: [],
      borderColor: "#2563eb",
      fill: false,
      tension: 0.4
    }]
  }
});

simulateBtn.addEventListener("click", () => {
  const study = parseFloat(document.getElementById("study").value);
  const sleep = parseFloat(document.getElementById("sleep").value);
  const focus = parseFloat(document.getElementById("focus").value);
  const stress = parseFloat(document.getElementById("stress").value);

  // ----- SIMPLE LOGIC (TEMP, BACKEND LATER) -----
  let stability = "Stable";

  if (stress > 0.7 && sleep < 0.4) {
    stability = "Burnout";
  } else if (stress > 0.5) {
    stability = "Warning";
  }

  updateStability(stability);
  generateGraph(focus);
});

/* UPDATE STABILITY CARD */
function updateStability(state) {
  stabilityCard.className = "stability";

  if (state === "Stable") {
    stabilityCard.classList.add("stable");
    stabilityCard.innerText = "🟢 Stable";
    insight.innerText = "Your routine is balanced and stable.";
  }

  if (state === "Warning") {
    stabilityCard.classList.add("warning");
    stabilityCard.innerText = "🟡 Warning";
    insight.innerText = "Stress is increasing. Small changes recommended.";
  }

  if (state === "Burnout") {
    stabilityCard.classList.add("burnout");
    stabilityCard.innerText = "🔴 Burnout Risk";
    insight.innerText = "High stress and low recovery detected.";
  }
}

/* GENERATE DUMMY GRAPH */
function generateGraph(startValue) {
  const days = [];
  const values = [];

  let val = startValue;

  for (let i = 1; i <= 7; i++) {
    days.push("Day " + i);
    val = Math.max(0, Math.min(1, val + (Math.random() - 0.4) * 0.2));
    values.push(val.toFixed(2));
  }

  chart.data.labels = days;
  chart.data.datasets[0].data = values;
  chart.update();
}
