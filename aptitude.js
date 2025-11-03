// const topics = {
//   "time-work": "Time and Work problems focus on efficiency, rate, and combined work calculations.",
//   "quantity-inequality": "Compare quantities using logical reasoning and algebraic analysis.",
//   "caselet-di": "Data Interpretation based on mini-paragraphs or case studies.",
//   "profit-loss": "Covers selling price, cost price, discount, and profit percentage problems.",
//   // ... add other topic details here
// };

// document.querySelectorAll('#topicsList li').forEach(li => {
//   li.addEventListener('click', () => {
//     const topicKey = li.dataset.topic;
//     const content = topics[topicKey] || "Questions for this topic will be added soon.";
//     document.getElementById('topicContent').innerHTML = `
//       <h2>${li.textContent}</h2>
//       <p>${content}</p>
//       <button class="start-btn">Start Practice</button>
//     `;
//   });
// });
<script>
function showMenu() {
  document.getElementById('nav-links').classList.add('show');
}

function hideMenu() {
  document.getElementById('nav-links').classList.remove('show');
}
</script>
