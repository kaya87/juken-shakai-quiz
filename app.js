// 中学受験 社会(歴史)クイズ アプリロジック
(function () {
  const STORAGE_KEY = "juken-shakai-quiz-best-scores";

  const screens = {
    home: document.getElementById("screen-home"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
  };

  const eraListEl = document.getElementById("era-list");
  const quizTitleEl = document.getElementById("quiz-title");
  const progressEl = document.getElementById("progress");
  const questionTextEl = document.getElementById("question-text");
  const choicesEl = document.getElementById("choices");
  const feedbackEl = document.getElementById("feedback");
  const btnNext = document.getElementById("btn-next");
  const btnBack = document.getElementById("btn-back");
  const resultSummaryEl = document.getElementById("result-summary");
  const resultWrongEl = document.getElementById("result-wrong");
  const btnRetry = document.getElementById("btn-retry");
  const btnHome = document.getElementById("btn-home");

  let state = {
    era: null,
    order: [],
    index: 0,
    correctCount: 0,
    wrongList: [],
    answered: false,
  };

  function loadBestScores() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveBestScore(eraId, score, total) {
    const best = loadBestScores();
    const prev = best[eraId];
    if (!prev || score > prev.score) {
      best[eraId] = { score, total };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(best));
    }
  }

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      screens[key].classList.toggle("hidden", key !== name);
    });
    window.scrollTo(0, 0);
  }

  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderEraList() {
    const best = loadBestScores();
    eraListEl.innerHTML = "";
    QUIZ_DATA.forEach((era) => {
      const card = document.createElement("button");
      card.className = "era-card";
      const b = best[era.id];
      card.innerHTML = `
        <div>
          <div class="era-name">${era.title}</div>
          <div class="era-meta">全${era.questions.length}問</div>
          ${b ? `<div class="era-best">自己ベスト: ${b.score}/${b.total}</div>` : ""}
        </div>
        <div>›</div>
      `;
      card.addEventListener("click", () => startQuiz(era));
      eraListEl.appendChild(card);
    });
  }

  function startQuiz(era) {
    state = {
      era,
      order: shuffle(era.questions.map((_, i) => i)),
      index: 0,
      correctCount: 0,
      wrongList: [],
      answered: false,
    };
    quizTitleEl.textContent = era.title;
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const era = state.era;
    const qIndex = state.order[state.index];
    const q = era.questions[qIndex];

    progressEl.textContent = `${state.index + 1} / ${state.order.length}問`;
    questionTextEl.textContent = q.q;
    feedbackEl.classList.add("hidden");
    btnNext.classList.add("hidden");
    state.answered = false;

    choicesEl.innerHTML = "";
    q.choices.forEach((choiceText, i) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choiceText;
      btn.addEventListener("click", () => selectAnswer(i, q, btn));
      choicesEl.appendChild(btn);
    });
  }

  function selectAnswer(selectedIndex, q, btnEl) {
    if (state.answered) return;
    state.answered = true;

    const buttons = Array.from(choicesEl.children);
    buttons.forEach((b) => (b.disabled = true));

    const isCorrect = selectedIndex === q.answer;
    if (isCorrect) {
      btnEl.classList.add("correct");
      state.correctCount++;
      feedbackEl.textContent = "正解！";
      feedbackEl.className = "feedback correct";
    } else {
      btnEl.classList.add("wrong");
      buttons[q.answer].classList.add("correct");
      feedbackEl.textContent = `不正解… 正解は「${q.choices[q.answer]}」`;
      feedbackEl.className = "feedback wrong";
      state.wrongList.push(q);
    }
    feedbackEl.classList.remove("hidden");
    btnNext.classList.remove("hidden");
    btnNext.textContent =
      state.index + 1 < state.order.length ? "次の問題へ" : "結果を見る";
  }

  function nextQuestion() {
    state.index++;
    if (state.index >= state.order.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function finishQuiz() {
    const total = state.order.length;
    const score = state.correctCount;
    saveBestScore(state.era.id, score, total);

    resultSummaryEl.textContent = `${score} / ${total} 問正解`;
    resultWrongEl.innerHTML = "";

    if (state.wrongList.length === 0) {
      resultWrongEl.innerHTML = `<p style="text-align:center;color:var(--correct);font-weight:600;">全問正解！すごい！</p>`;
    } else {
      const heading = document.createElement("p");
      heading.style.fontWeight = "600";
      heading.style.marginTop = "0";
      heading.textContent = "間違えた問題の復習:";
      resultWrongEl.appendChild(heading);

      state.wrongList.forEach((q) => {
        const item = document.createElement("div");
        item.className = "result-wrong-item";
        item.innerHTML = `
          <div class="rw-q">${q.q}</div>
          <div class="rw-a">正解: ${q.choices[q.answer]}</div>
        `;
        resultWrongEl.appendChild(item);
      });
    }

    showScreen("result");
  }

  btnNext.addEventListener("click", nextQuestion);
  btnBack.addEventListener("click", () => showScreen("home"));
  btnHome.addEventListener("click", () => {
    renderEraList();
    showScreen("home");
  });
  btnRetry.addEventListener("click", () => startQuiz(state.era));

  renderEraList();
  showScreen("home");
})();
