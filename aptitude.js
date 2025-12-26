const topics = document.querySelectorAll("#topicsList li");
const pdfViewer = document.getElementById("pdfViewer");
const pdfSection = document.getElementById("pdfSection");
const quizSection = document.getElementById("quizSection");
const quizContainer = document.getElementById("quiz");

// Quiz Data
const quizData = [
  {
    question: "A and B can do a work in 8 days and 12 days respectively. How long will they take together?",
    options: ["4.8 days", "6 days", "7 days", "10 days"],
    answer: "4.8 days",
  },
  {
    question: "A can do a work in 18 days and B in 27 days. They work together for 6 days, then A leaves. How many more days will B take?",
    options: ["9 days", "12 days", "15 days", "18 days"],
    answer: "15 days",
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <h3>${q.question}</h3>
    <ul>
      ${q.options
        .map(
          opt => `<li><button class="option-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button></li>`
        )
        .join("")}
    </ul>
    <div id="result"></div>
  `;
}

function checkAnswer(btn, selected) {
  const q = quizData[currentQuestion];
  const resultDiv = document.getElementById("result");
  document.querySelectorAll(".option-btn").forEach(b => (b.disabled = true));

  if (selected === q.answer) {
    btn.classList.add("correct");
    score++;
    resultDiv.innerHTML = `<p class="correct">✅ Correct!</p>`;
  } else {
    btn.classList.add("wrong");
    resultDiv.innerHTML = `<p class="wrong">❌ Wrong! Correct: ${q.answer}</p>`;
  }

  resultDiv.innerHTML += `<button class="btn" onclick="nextQuestion()">Next ➡️</button>`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = `<h3>🎉 Quiz Completed!</h3><p>Your Score: ${score}/${quizData.length}</p>`;
  }
}

// Handle Topic Clicks
topics.forEach(item => {
  item.addEventListener("click", () => {
    const topic = item.getAttribute("data-topic");
    const pdfPath = item.getAttribute("data-pdf");

    topics.forEach(t => t.classList.remove("active"));
    item.classList.add("active");

    if (topic === "time-work") {
      pdfSection.style.display = "none";
      quizSection.style.display = "block";
      currentQuestion = 0;
      score = 0;
      loadQuestion();
    } else if (pdfPath) {
      quizSection.style.display = "none";
      pdfSection.style.display = "block";
      pdfViewer.src = pdfPath;
      pdfViewer.style.display = "block";
    }
  });
});
 document.querySelectorAll("#topicsList li").forEach(item => {
      item.addEventListener("click", () => {
        const pdfPath = item.dataset.pdf; // e.g. "pdfs/numbers.pdf"
        const viewer = document.getElementById("pdfViewer");
        const title = document.querySelector("#pdfSection h2");

        // Change heading and open the PDF
        title.textContent = item.textContent;
        viewer.src = pdfPath;
      });
    });