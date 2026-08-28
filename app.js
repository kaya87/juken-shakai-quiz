// 中学受験 社会クイズ アプリロジック(歴史・地理・公民 共通)
(function () {
  const STORAGE_KEY = "juken-shakai-quiz-best-scores";

  const screens = {
    home: document.getElementById("screen-home"),
    randomSetup: document.getElementById("screen-random-setup"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
  };

  const subjectTabsEl = document.getElementById("subject-tabs");
  const eraListEl = document.getElementById("era-list");
  const btnOpenRandom = document.getElementById("btn-open-random");
  const btnRandomBack = document.getElementById("btn-random-back");
  const unitChecklistEl = document.getElementById("unit-checklist");
  const countButtonsEl = document.getElementById("count-buttons");
  const btnSelectAll = document.getElementById("btn-select-all");
  const btnSelectNone = document.getElementById("btn-select-none");
  const btnStartRandom = document.getElementById("btn-start-random");
  const quizTitleEl = document.getElementById("quiz-title");
  const progressEl = document.getElementById("progress");
  const questionDataEl = document.getElementById("question-data");
  const questionTextEl = document.getElementById("question-text");
  const choicesEl = document.getElementById("choices");
  const feedbackEl = document.getElementById("feedback");
  const btnNext = document.getElementById("btn-next");
  const btnBack = document.getElementById("btn-back");
  const resultSummaryEl = document.getElementById("result-summary");
  const resultWrongEl = document.getElementById("result-wrong");
  const btnRetry = document.getElementById("btn-retry");
  const btnHome = document.getElementById("btn-home");

  let currentSubject = SUBJECTS.find((s) => s.data.length > 0) || SUBJECTS[0];
  let selectedCount = 10;

  let state = {
    era: null,
    order: [],
    index: 0,
    correctCount: 0,
    wrongList: [],
    answered: false,
    isRandom: false,
  };

  function loadBestScores() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function scoreKey(subjectId, eraId) {
    return `${subjectId}:${eraId}`;
  }

  function saveBestScore(subjectId, eraId, score, total) {
    const best = loadBestScores();
    const key = scoreKey(subjectId, eraId);
    const prev = best[key];
    if (!prev || score > prev.score) {
      best[key] = { score, total };
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

  function renderSubjectTabs() {
    subjectTabsEl.innerHTML = "";
    SUBJECTS.forEach((subject) => {
      const btn = document.createElement("button");
      btn.className =
        "subject-tab" + (subject.id === currentSubject.id ? " active" : "");
      btn.textContent = subject.label;
      btn.disabled = subject.data.length === 0;
      if (subject.data.length === 0) btn.title = "準備中";
      btn.addEventListener("click", () => {
        currentSubject = subject;
        renderSubjectTabs();
        renderEraList();
      });
      subjectTabsEl.appendChild(btn);
    });
  }

  function renderEraList() {
    const best = loadBestScores();
    eraListEl.innerHTML = "";
    currentSubject.data.forEach((era) => {
      const card = document.createElement("button");
      card.className = "era-card";
      const b = best[scoreKey(currentSubject.id, era.id)];
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
      isRandom: false,
    };
    quizTitleEl.textContent = `${currentSubject.label} / ${era.title}`;
    showScreen("quiz");
    renderQuestion();
  }

  // --- ランダム出題 ---

  function renderRandomSetup() {
    unitChecklistEl.innerHTML = "";
    currentSubject.data.forEach((era) => {
      const label = document.createElement("label");
      label.className = "unit-check-item";
      label.innerHTML = `
        <input type="checkbox" value="${era.id}" checked />
        <span>${era.title}</span>
        <span class="unit-check-count">${era.questions.length}問</span>
      `;
      unitChecklistEl.appendChild(label);
    });

    countButtonsEl.innerHTML = "";
    [10, 20, "all"].forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "count-btn" + (c === selectedCount ? " active" : "");
      btn.textContent = c === "all" ? "全問" : `${c}問`;
      btn.addEventListener("click", () => {
        selectedCount = c;
        Array.from(countButtonsEl.children).forEach((b) =>
          b.classList.remove("active")
        );
        btn.classList.add("active");
      });
      countButtonsEl.appendChild(btn);
    });
  }

  function getCheckedEraIds() {
    return Array.from(
      unitChecklistEl.querySelectorAll("input[type=checkbox]:checked")
    ).map((el) => el.value);
  }

  function startRandomQuiz() {
    const checkedIds = getCheckedEraIds();
    const pool = [];
    currentSubject.data
      .filter((era) => checkedIds.includes(era.id))
      .forEach((era) => {
        era.questions.forEach((q) => pool.push(q));
      });

    if (pool.length === 0) return;

    const shuffledPool = shuffle(pool);
    const count =
      selectedCount === "all"
        ? shuffledPool.length
        : Math.min(selectedCount, shuffledPool.length);
    const picked = shuffledPool.slice(0, count);

    const virtualEra = {
      id: "random-" + Date.now(),
      title: "🎲 ランダムミックス",
      questions: picked,
    };

    state = {
      era: virtualEra,
      order: picked.map((_, i) => i),
      index: 0,
      correctCount: 0,
      wrongList: [],
      answered: false,
      isRandom: true,
    };
    quizTitleEl.textContent = `${currentSubject.label} / 🎲 ランダム(${picked.length}問)`;
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const era = state.era;
    const qIndex = state.order[state.index];
    const q = era.questions[qIndex];

    progressEl.textContent = `${state.index + 1} / ${state.order.length}問`;
    if (q.data) {
      questionDataEl.innerHTML = q.data;
      questionDataEl.classList.remove("hidden");
    } else {
      questionDataEl.innerHTML = "";
      questionDataEl.classList.add("hidden");
    }
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
    let mainText;
    if (isCorrect) {
      btnEl.classList.add("correct");
      state.correctCount++;
      mainText = "正解！";
      feedbackEl.className = "feedback correct";
    } else {
      btnEl.classList.add("wrong");
      buttons[q.answer].classList.add("correct");
      mainText = `不正解… 正解は「${q.choices[q.answer]}」`;
      feedbackEl.className = "feedback wrong";
      state.wrongList.push(q);
    }
    feedbackEl.innerHTML = q.explain
      ? `<div>${mainText}</div><div class="feedback-explain">${q.explain}</div>`
      : mainText;
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
    if (!state.isRandom) {
      saveBestScore(currentSubject.id, state.era.id, score, total);
    }

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
          ${q.data ? `<div class="rw-data">${q.data}</div>` : ""}
          <div class="rw-q">${q.q}</div>
          <div class="rw-a">正解: ${q.choices[q.answer]}</div>
          ${q.explain ? `<div class="rw-explain">${q.explain}</div>` : ""}
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
  btnRetry.addEventListener("click", () => {
    if (state.isRandom) {
      startRandomQuiz();
    } else {
      startQuiz(state.era);
    }
  });

  btnOpenRandom.addEventListener("click", () => {
    renderRandomSetup();
    showScreen("randomSetup");
  });
  btnRandomBack.addEventListener("click", () => showScreen("home"));
  btnSelectAll.addEventListener("click", () => {
    unitChecklistEl
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = true));
  });
  btnSelectNone.addEventListener("click", () => {
    unitChecklistEl
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  });
  btnStartRandom.addEventListener("click", startRandomQuiz);

  renderSubjectTabs();
  renderEraList();
  showScreen("home");
})();
