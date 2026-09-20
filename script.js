// --- 問題データ定義 (五十音順: a, i, u, e, o の5列) ---
const CATEGORIES = {
  boin: { name: "母音(ぼいん)", rows: [
    [
      { kana: "あ", roma: "a" }, { kana: "い", roma: "i" }, { kana: "う", roma: "u" }, { kana: "え", roma: "e" }, { kana: "お", roma: "o" }
    ]
  ]},
  shiin: { name: "子音(しいん)", rows: [
    [
      { kana: "か", roma: "ka" }, { kana: "き", roma: "ki" }, { kana: "く", roma: "ku" }, { kana: "け", roma: "ke" }, { kana: "こ", roma: "ko" }
    ],
    [
      { kana: "さ", roma: "sa" }, { kana: "し", roma: "shi", hebon: "shi", kunrei: "si" }, { kana: "す", roma: "su" }, { kana: "せ", roma: "se" }, { kana: "そ", roma: "so" }
    ],
    [
      { kana: "た", roma: "ta" }, { kana: "ち", roma: "chi", hebon: "chi", kunrei: "ti" }, { kana: "つ", roma: "tsu", hebon: "tsu", kunrei: "tu" }, { kana: "て", roma: "te" }, { kana: "と", roma: "to" }
    ],
    [
      { kana: "な", roma: "na" }, { kana: "に", roma: "ni" }, { kana: "ぬ", roma: "nu" }, { kana: "ね", roma: "ne" }, { kana: "の", roma: "no" }
    ],
    [
      { kana: "は", roma: "ha" }, { kana: "ひ", roma: "hi" }, { kana: "ふ", roma: "fu", hebon: "fu", kunrei: "hu" }, { kana: "へ", roma: "he" }, { kana: "ほ", roma: "ho" }
    ],
    [
      { kana: "ま", roma: "ma" }, { kana: "み", roma: "mi" }, { kana: "む", roma: "mu" }, { kana: "め", roma: "me" }, { kana: "も", roma: "mo" }
    ],
    [
      { kana: "や", roma: "ya" }, { kana: null, roma: null }, { kana: "ゆ", roma: "yu" }, { kana: null, roma: null }, { kana: "よ", roma: "yo" }
    ],
    [
      { kana: "ら", roma: "ra" }, { kana: "り", roma: "ri" }, { kana: "る", roma: "ru" }, { kana: "れ", roma: "re" }, { kana: "ろ", roma: "ro" }
    ],
    [
      { kana: "わ", roma: "wa" }, { kana: null, roma: null }, { kana: null, roma: null }, { kana: null, roma: null }, { kana: "を", roma: "wo" }
    ]
  ]},
  shitsufuji: { name: "しちつふじ", rows: [
    [
      { kana: "し", roma: "shi", hebon: "shi", kunrei: "si" },
      { kana: "ち", roma: "chi", hebon: "chi", kunrei: "ti" },
      { kana: "つ", roma: "tsu", hebon: "tsu", kunrei: "tu" },
      { kana: "ふ", roma: "fu", hebon: "fu", kunrei: "hu" },
      { kana: "じ", roma: "ji", hebon: "ji", kunrei: "zi" }
    ],
    [
      { kana: "ぢ", roma: "ji", hebon: "ji", kunrei: "di" },
      { kana: "づ", roma: "zu", hebon: "zu", kunrei: "du" },
      { kana: null, roma: null }, { kana: null, roma: null }, { kana: null, roma: null }
    ]
  ]},
  yoon: { name: "拗音(ようおん)", rows: [
    [
      { kana: "きゃ", roma: "kya" }, { kana: null, roma: null }, { kana: "きゅ", roma: "kyu" }, { kana: null, roma: null }, { kana: "きょ", roma: "kyo" }
    ],
    [
      { kana: "しゃ", roma: "sha", hebon: "sha", kunrei: "sya" }, { kana: null, roma: null }, { kana: "しゅ", roma: "shu", hebon: "shu", kunrei: "syu" }, { kana: null, roma: null }, { kana: "しょ", roma: "sho", hebon: "sho", kunrei: "syo" }
    ],
    [
      { kana: "ちゃ", roma: "cha", hebon: "cha", kunrei: "tya" }, { kana: null, roma: null }, { kana: "ちゅ", roma: "chu", hebon: "chu", kunrei: "tyu" }, { kana: null, roma: null }, { kana: "ちょ", roma: "cho", hebon: "cho", kunrei: "tyo" }
    ],
    [
      { kana: "にゃ", roma: "nya" }, { kana: null, roma: null }, { kana: "にゅ", roma: "nyu" }, { kana: null, roma: null }, { kana: "にょ", roma: "nyo" }
    ],
    [
      { kana: "ひゃ", roma: "hya" }, { kana: null, roma: null }, { kana: "ひゅ", roma: "hyu" }, { kana: null, roma: null }, { kana: "ひょ", roma: "hyo" }
    ],
    [
      { kana: "みゃ", roma: "mya" }, { kana: null, roma: null }, { kana: "みゅ", roma: "myu" }, { kana: null, roma: null }, { kana: "みょ", roma: "myo" }
    ],
    [
      { kana: "りゃ", roma: "rya" }, { kana: null, roma: null }, { kana: "りゅ", roma: "ryu" }, { kana: null, roma: null }, { kana: "りょ", roma: "ryo" }
    ],
    [
      { kana: "ぎゃ", roma: "gya" }, { kana: null, roma: null }, { kana: "ぎゅ", roma: "gyu" }, { kana: null, roma: null }, { kana: "ぎょ", roma: "gyo" }
    ],
    [
      { kana: "じゃ", roma: "ja", hebon: "ja", kunrei: "zya" }, { kana: null, roma: null }, { kana: "じゅ", roma: "ju", hebon: "ju", kunrei: "zyu" }, { kana: null, roma: null }, { kana: "じょ", roma: "jo", hebon: "jo", kunrei: "zyo" }
    ],
    [
      { kana: "びゃ", roma: "bya" }, { kana: null, roma: null }, { kana: "びゅ", roma: "byu" }, { kana: null, roma: null }, { kana: "びょ", roma: "byo" }
    ],
    [
      { kana: "ぴゃ", roma: "pya" }, { kana: null, roma: null }, { kana: "ぴゅ", roma: "pyu" }, { kana: null, roma: null }, { kana: "ぴょ", roma: "pyo" }
    ]
  ]},
  sokuon: { name: "促音(そくおん)", rows: [
    [
      { kana: "っか", roma: "kka" }, { kana: "っき", roma: "kki" }, { kana: "っく", roma: "kku" }, { kana: "っけ", roma: "kke" }, { kana: "っこ", roma: "kko" }
    ],
    [
      { kana: "っさ", roma: "ssa" }, { kana: "っし", roma: "sshi" }, { kana: "っす", roma: "ssu" }, { kana: "っせ", roma: "sse" }, { kana: "っそ", roma: "sso" }
    ],
    [
      { kana: "った", roma: "tta" }, { kana: "っち", roma: "cchi" }, { kana: "っつ", roma: "ttsu" }, { kana: "って", roma: "tte" }, { kana: "っと", roma: "tto" }
    ],
    [
      { kana: "っぱ", roma: "ppa" }, { kana: "っぴ", roma: "ppi" }, { kana: "っぷ", roma: "ppu" }, { kana: "っぺ", roma: "ppe" }, { kana: "っぽ", roma: "ppo" }
    ]
  ]}
};

// ヘルパー: 全アイテムをフラットに取得する
function getAllCategoryItems() {
  let list = [];
  for(let key in CATEGORIES) {
    CATEGORIES[key].rows.forEach(row => {
      row.forEach(item => {
        if(item && item.kana) list.push(item);
      });
    });
  }
  return list;
}

// --- アプリ状態管理 ---
const DEFAULT_SETTINGS = {
  users: ["プレイヤー1"],
  currentUser: "プレイヤー1",
  system: "hebon", // hebon / kunrei
  level: 1, // 0:二択, 1:三択, 2:仮想キーボード, 3:OSキーボード
  stageSize: 10,
  soundCorrect: "enabled",
  soundIncorrect: "enabled",
  effectCorrect: "colorful",
  effectIncorrect: "shake",
  calendarThreshold: 1
};

let settings = JSON.parse(localStorage.getItem('romaji_settings')) || DEFAULT_SETTINGS;
let historyData = JSON.parse(localStorage.getItem('romaji_history')) || []; 
let userRecords = JSON.parse(localStorage.getItem('romaji_user_records')) || {}; 
let maxRecords = JSON.parse(localStorage.getItem('romaji_max_records')) || {}; 

function saveAll() {
  localStorage.setItem('romaji_settings', JSON.stringify(settings));
  localStorage.setItem('romaji_history', JSON.stringify(historyData));
  localStorage.setItem('romaji_user_records', JSON.stringify(userRecords));
  localStorage.setItem('romaji_max_records', JSON.stringify(maxRecords));
}

// 画面遷移
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  if(screenId === 'screen-top') updateTopInfo();
}

// --- 初期化 & イベントリスナー ---
window.addEventListener('DOMContentLoaded', () => {
  updateTopInfo();
  initSettingsUI();
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
  }
});

// トップ画面更新
function updateTopInfo() {
  const user = settings.currentUser;
  document.getElementById('display-username').innerText = user;
  
  const userHist = historyData.filter(h => h.user === user);
  let streak = 0;
  if(userHist.length > 0) {
    streak = 1; 
    document.getElementById('display-lastplay').innerText = userHist[userHist.length - 1].date;
  } else {
    document.getElementById('display-lastplay').innerText = "なし";
  }
  document.getElementById('display-streak').innerText = streak;
}

// --- 予習 ---
function openYoshiu() {
  showScreen('screen-yoshiu');
  renderRomajiTable('yoshiu-table-container', false);
}

function renderRomajiTable(containerId, withRate = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  for(let key in CATEGORIES) {
    const cat = CATEGORIES[key];
    const groupDiv = document.createElement('div');
    groupDiv.className = 'romaji-table-container';
    groupDiv.innerHTML = `<h4>${cat.name}</h4>`;
    
    const grid = document.createElement('div');
    grid.className = 'romaji-grid';
    
    cat.rows.forEach(row => {
      row.forEach(item => {
        if(!item || !item.kana) {
          const emptyCell = document.createElement('div');
          emptyCell.className = 'romaji-cell empty';
          grid.appendChild(emptyCell);
          return;
        }
        
        let roma = item.roma;
        if(settings.system === 'kunrei' && item.kunrei) roma = item.kunrei;
        else if(settings.system === 'hebon' && item.hebon) roma = item.hebon;
        
        const cell = document.createElement('div');
        cell.className = 'romaji-cell';
        
        let rateHtml = '';
        if(withRate) {
          const rate = getRecentRate(settings.currentUser, item.kana);
          rateHtml = `<span class="rate">${rate >= 0 ? rate + '%' : '-'}</span>`;
        }
        
        cell.innerHTML = `<span class="kana">${item.kana}</span><span class="roma">${roma}</span>${rateHtml}`;
        grid.appendChild(cell);
      });
    });
    groupDiv.appendChild(grid);
    container.appendChild(groupDiv);
  }
}

function getRecentRate(user, kana) {
  if(!userRecords[user] || !userRecords[user][kana]) return -1;
  const arr = userRecords[user][kana];
  const last10 = arr.slice(-10);
  if(last10.length === 0) return -1;
  const correctCount = last10.filter(v => v).length;
  return Math.round((correctCount / last10.length) * 100);
}

// --- プレイ選択 ---
function openPlayMenu() { showScreen('screen-play-menu'); }
function selectPlayMode(mode) {
  currentSession.playMode = mode; 
  if(mode === 'fukushu' || mode === 'until_wrong') {
    startActiveGame();
  } else {
    showScreen('screen-category-menu');
  }
}

function selectCategory(catKey) {
  currentSession.categoryKey = catKey;
  startActiveGame();
}

// --- ゲームセッション制御 ---
let currentSession = {
  playMode: 'yomi',
  categoryKey: 'boin',
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  startTime: 0,
  timerInterval: null,
  elapsedSeconds: 0,
  currentQuestion: null,
  currentInput: ''
};

function startActiveGame() {
  let items = [];
  if(currentSession.playMode === 'fukushu') {
    const uRec = userRecords[settings.currentUser] || {};
    const allItems = getAllCategoryItems();
    allItems.forEach(item => {
      const hist = uRec[item.kana] || [];
      if(hist.length > 0 && !hist[hist.length-1]) {
        items.push(item);
      }
    });
    if(items.length === 0) {
      alert("復習する間違えた問題がありません！");
      showScreen('screen-top');
      return;
    }
  } else if(currentSession.playMode === 'random') {
    items = getAllCategoryItems();
  } else {
    CATEGORIES[currentSession.categoryKey].rows.forEach(row => {
      row.forEach(item => {
        if(item && item.kana) items.push(item);
      });
    });
  }
  
  items.sort(() => Math.random() - 0.5);
  const size = currentSession.playMode === 'until_wrong' ? items.length : Math.min(settings.stageSize, items.length);
  currentSession.questions = items.slice(0, size);
  currentSession.currentIndex = 0;
  currentSession.correctCount = 0;
  currentSession.elapsedSeconds = 0;
  
  showScreen('screen-game');
  currentSession.startTime = Date.now();
  currentSession.timerInterval = setInterval(() => {
    currentSession.elapsedSeconds = Math.floor((Date.now() - currentSession.startTime) / 1000);
    document.getElementById('game-time').innerText = currentSession.elapsedSeconds + '秒';
  }, 1000);
  
  nextQuestion();
}

function nextQuestion() {
  if(currentSession.currentIndex >= currentSession.questions.length) {
    endGame();
    return;
  }
  
  const q = currentSession.questions[currentSession.currentIndex];
  currentSession.currentQuestion = q;
  currentSession.currentInput = '';
  
  document.getElementById('game-progress').innerText = `${currentSession.currentIndex + 1}問目 / 全${currentSession.questions.length}問`;
  const accuracy = currentSession.currentIndex === 0 ? 100 : Math.round((currentSession.correctCount / currentSession.currentIndex) * 100);
  document.getElementById('game-accuracy').innerText = `正解率: ${accuracy}%`;
  
  const targetEl = document.getElementById('question-target');
  let mode = currentSession.playMode;
  if(mode === 'random') mode = Math.random() < 0.5 ? 'yomi' : 'kaki';
  
  let roma = q.roma;
  if(settings.system === 'kunrei' && q.kunrei) roma = q.kunrei;
  else if(settings.system === 'hebon' && q.hebon) roma = q.hebon;
  
  if(mode === 'yomi') {
    targetEl.innerText = q.kana;
    document.getElementById('question-prompt').innerText = '次のひらがなのローマ字は？';
  } else {
    targetEl.innerText = roma;
    document.getElementById('question-prompt').innerText = '次のローマ字のひらがなは？';
  }
  currentSession.activeSubMode = mode;
  
  renderInputArea(mode, roma, q.kana);
}

function renderInputArea(mode, correctRoma, correctKana) {
  const container = document.getElementById('input-area-container');
  container.innerHTML = '';
  
  const level = settings.level;
  
  if(level === 0 || level === 1) {
    const count = level === 0 ? 2 : 3;
    let choices = [mode === 'yomi' ? correctRoma : correctKana];
    
    let allItems = getAllCategoryItems();
    
    while(choices.length < count) {
      let randItem = allItems[Math.floor(Math.random() * allItems.length)];
      let val = mode === 'yomi' ? randItem.roma : randItem.kana;
      if(!choices.includes(val)) choices.push(val);
    }
    choices.sort(() => Math.random() - 0.5);
    
    const choiceDiv = document.createElement('div');
    choiceDiv.className = 'choices-container';
    choices.forEach(val => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerText = val;
      btn.onclick = () => checkAnswer(val, mode === 'yomi' ? correctRoma : correctKana);
      choiceDiv.appendChild(btn);
    });
    container.appendChild(choiceDiv);
    
  } else {
    const display = document.createElement('div');
    display.className = 'input-display';
    display.id = 'user-input-display';
    container.appendChild(display);
    
    if(level === 2) {
      const vk = document.createElement('div');
      vk.className = 'virtual-keyboard';
      const keys = mode === 'yomi' ? ['a', 'i', 'u', 'e', 'o', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'sh', 'ch', 'ts', 'fu'] : [correctKana];
      let row = document.createElement('div');
      row.className = 'vk-row';
      keys.forEach((k, idx) => {
        const kb = document.createElement('button');
        kb.className = 'vk-key';
        kb.innerText = k;
        kb.onclick = () => {
          currentSession.currentInput += k;
          document.getElementById('user-input-display').innerText = currentSession.currentInput;
          checkAnswer(currentSession.currentInput, mode === 'yomi' ? correctRoma : correctKana, true);
        };
        row.appendChild(kb);
        if((idx+1) % 5 === 0) {
          vk.appendChild(row);
          row = document.createElement('div');
          row.className = 'vk-row';
        }
      });
      vk.appendChild(row);
      container.appendChild(vk);
    } else {
      const input = document.createElement('input');
      input.type = 'text';
      input.style.marginTop = '20px';
      input.autofocus = true;
      input.oninput = (e) => {
        checkAnswer(e.target.value, mode === 'yomi' ? correctRoma : correctKana, true);
      };
      container.appendChild(input);
      setTimeout(() => input.focus(), 100);
    }
  }
}

function checkAnswer(userAns, correctAns, isPartial = false) {
  if(isPartial && userAns !== correctAns && !correctAns.startsWith(userAns)) {
    handleAnswerResult(false, correctAns);
    return;
  }
  if(userAns === correctAns) {
    handleAnswerResult(true, correctAns);
  }
}

function handleAnswerResult(isCorrect, correctAns) {
  clearInterval(currentSession.timerInterval);
  const q = currentSession.currentQuestion;
  
  if(!userRecords[settings.currentUser]) userRecords[settings.currentUser] = {};
  if(!userRecords[settings.currentUser][q.kana]) userRecords[settings.currentUser][q.kana] = [];
  userRecords[settings.currentUser][q.kana].push(isCorrect);
  
  playEffectAndSound(isCorrect);
  
  if(isCorrect) {
    currentSession.correctCount++;
    currentSession.currentIndex++;
    setTimeout(() => {
      currentSession.timerInterval = setInterval(() => {
        currentSession.elapsedSeconds = Math.floor((Date.now() - currentSession.startTime) / 1000);
        document.getElementById('game-time').innerText = currentSession.elapsedSeconds + '秒';
      }, 1000);
      nextQuestion();
    }, 600);
  } else {
    if(currentSession.playMode === 'until_wrong') {
      alert(`不正解！正解は ${correctAns} でした。\n最高記録をチェックします。`);
      endGame();
    } else {
      currentSession.currentIndex++;
      setTimeout(() => {
        currentSession.timerInterval = setInterval(() => {
          currentSession.elapsedSeconds = Math.floor((Date.now() - currentSession.startTime) / 1000);
          document.getElementById('game-time').innerText = currentSession.elapsedSeconds + '秒';
        }, 1000);
        nextQuestion();
      }, 1000);
    }
  }
}

function playEffectAndSound(isCorrect) {
  const overlay = document.getElementById('effect-overlay');
  overlay.innerHTML = '';
  
  if(isCorrect) {
    if(settings.effectCorrect === 'colorful') {
      for(let i=0; i<30; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + '%';
        c.style.background = ['red','blue','green','yellow','purple'][Math.floor(Math.random()*5)];
        c.style.animationDuration = (Math.random()*0.5 + 0.5) + 's';
        overlay.appendChild(c);
      }
    }
  } else {
    if(settings.effectIncorrect === 'shake') {
      document.getElementById('app').classList.add('shake');
      setTimeout(() => document.getElementById('app').classList.remove('shake'), 300);
    } else if(settings.effectIncorrect === 'red') {
      document.getElementById('app').classList.add('flash-red');
      setTimeout(() => document.getElementById('app').classList.remove('flash-red'), 300);
    }
  }
  saveAll();
}

function endGame() {
  clearInterval(currentSession.timerInterval);
  showScreen('screen-result');
  
  const total = currentSession.questions.length;
  const correct = currentSession.correctCount;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  
  document.getElementById('result-summary').innerHTML = `
    <h3>プレイ終了！</h3>
    <p>出題数: ${total}問</p>
    <p>正解数: ${correct}問</p>
    <p>正解率: ${accuracy}%</p>
    <p>かかった時間: ${currentSession.elapsedSeconds}秒</p>
  `;
  
  const now = new Date();
  const dateStr = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
  historyData.push({
    date: dateStr,
    timestamp: now.getTime(),
    user: settings.currentUser,
    mode: currentSession.playMode,
    stage: currentSession.categoryKey,
    total: total,
    correct: correct,
    accuracy: accuracy,
    time: currentSession.elapsedSeconds
  });
  
  if(currentSession.playMode === 'until_wrong') {
    if(!maxRecords[settings.currentUser]) maxRecords[settings.currentUser] = 0;
    if(correct > maxRecords[settings.currentUser]) {
      maxRecords[settings.currentUser] = correct;
      alert(`新記録達成！ 間違えるまでモードで ${correct}問正解！`);
    }
  }
  
  saveAll();
}

// --- 履歴画面 ---
let historyViewMode = 'month'; 
let historyOffset = 0;

function openHistory() {
  showScreen('screen-history');
  renderHistoryUI();
}

function renderHistoryUI() {
  const container = document.getElementById('history-content');
  const userHist = historyData.filter(h => h.user === settings.currentUser);
  
  let totalTime = userHist.reduce((acc, cur) => acc + cur.time, 0);
  let totalAnswers = userHist.reduce((acc, cur) => acc + cur.total, 0);
  let maxUntilWrong = maxRecords[settings.currentUser] || 0;
  
  let html = `
    <div class="result-card">
      <p>トータルプレイ時間: ${Math.floor(totalTime/60)}分 ${totalTime%60}秒</p>
      <p>トータル回答数: ${totalAnswers}問</p>
      <p>「間違えるまで」最高記録: ${maxUntilWrong}問</p>
    </div>
    <div class="history-controls">
      <button class="btn secondary" onclick="shiftHistoryPeriod(-1)">◁</button>
      <span id="history-period-label">${historyViewMode === 'month' ? '今月' : '直近1週間'}</span>
      <button class="btn secondary" onclick="shiftHistoryPeriod(1)">▷</button>
    </div>
    <div class="calendar-grid" id="history-calendar"></div>
    <div class="history-list">
      <h4>プレイ詳細履歴</h4>
  `;
  
  userHist.slice().reverse().forEach(h => {
    html += `<div class="history-item">
      <span>${h.date} [${h.mode}]</span>
      <span>${h.correct}/${h.total} (${h.accuracy}%) ${h.time}秒</span>
    </div>`;
  });
  html += `</div>`;
  
  container.innerHTML = html;
  renderCalendar();
}

function shiftHistoryPeriod(dir) {
  historyOffset += dir;
  renderCalendar();
}

function renderCalendar() {
  const calGrid = document.getElementById('history-calendar');
  if(!calGrid) return;
  calGrid.innerHTML = '';
  
  ['日','月','火','水','木','金','土'].forEach(d => {
    const dh = document.createElement('div');
    dh.className = 'cal-header';
    dh.innerText = d;
    calGrid.appendChild(dh);
  });
  
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + historyOffset;
  
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  for(let i=0; i<firstDay; i++) {
    calGrid.appendChild(document.createElement('div'));
  }
  
  const userHist = historyData.filter(h => h.user === settings.currentUser);
  
  for(let d=1; d<=daysInMonth; d++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'cal-day';
    dayDiv.innerText = d;
    
    const dateStrCheck = `${year}/${month+1}/${d}`;
    const count = userHist.filter(h => h.date.startsWith(dateStrCheck)).length;
    if(count >= settings.calendarThreshold) {
      dayDiv.classList.add('played');
    }
    calGrid.appendChild(dayDiv);
  }
}

// --- 設定画面 ---
function openSettings() {
  showScreen('screen-settings');
  initSettingsUI();
}

function initSettingsUI() {
  const userSelect = document.getElementById('setting-user-select');
  userSelect.innerHTML = '';
  settings.users.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.innerText = u;
    if(u === settings.currentUser) opt.selected = true;
    userSelect.appendChild(opt);
  });
  
  document.getElementById('setting-system').value = settings.system;
  document.getElementById('setting-level').value = settings.level;
  document.getElementById('setting-stagesize').value = settings.stageSize;
}

function changeUser() {
  settings.currentUser = document.getElementById('setting-user-select').value;
  saveAll();
  updateTopInfo();
}

function addNewUser() {
  const name = prompt("新しいユーザー名を入力してください:");
  if(name && name.trim() !== "") {
    const trimmed = name.trim();
    if(settings.users.includes(trimmed)) {
      alert("既に存在するユーザー名です。");
      return;
    }
    settings.users.push(trimmed);
    settings.currentUser = trimmed;
    saveAll();
    initSettingsUI();
    updateTopInfo();
    alert(`ユーザー「${trimmed}」を追加しました。`);
  }
}

function renameUser() {
  const old = settings.currentUser;
  const newName = prompt("新しいユーザー名を入力してください:", old);
  if(newName && newName.trim() !== "") {
    const trimmed = newName.trim();
    if(trimmed === old) return;
    if(settings.users.includes(trimmed)) {
      alert("既に存在するユーザー名です。");
      return;
    }
    settings.users = settings.users.map(u => u === old ? trimmed : u);
    settings.currentUser = trimmed;
    if(userRecords[old]) {
      userRecords[trimmed] = userRecords[old];
      delete userRecords[old];
    }
    if(maxRecords[old]) {
      maxRecords[trimmed] = maxRecords[old];
      delete maxRecords[old];
    }
    historyData.forEach(h => {
      if(h.user === old) h.user = trimmed;
    });
    saveAll();
    initSettingsUI();
    updateTopInfo();
    alert(`ユーザー名を「${trimmed}」に変更しました。`);
  }
}

function deleteUser() {
  if(settings.users.length <= 1) {
    alert("最後のユーザーは削除できません。");
    return;
  }
  if(confirm(`ユーザー「${settings.currentUser}」を削除しますか？`)) {
    const target = settings.currentUser;
    settings.users = settings.users.filter(u => u !== target);
    settings.currentUser = settings.users[0];
    delete userRecords[target];
    delete maxRecords[target];
    saveAll();
    initSettingsUI();
    updateTopInfo();
    alert(`ユーザー「${target}」を削除しました。`);
  }
}

function updateSettingsFromUI() {
  settings.system = document.getElementById('setting-system').value;
  settings.level = parseInt(document.getElementById('setting-level').value);
  settings.stageSize = parseInt(document.getElementById('setting-stagesize').value);
  saveAll();
}

function exportData() {
  const data = { settings, historyData, userRecords, maxRecords };
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'romaji_master_backup.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if(data.settings) settings = data.settings;
      if(data.historyData) historyData = data.historyData;
      if(data.userRecords) userRecords = data.userRecords;
      if(data.maxRecords) maxRecords = data.maxRecords;
      saveAll();
      initSettingsUI();
      updateTopInfo();
      alert("データを復元しました！");
    } catch(err) {
      alert("ファイルの読み込みに失敗しました。");
    }
  };
  reader.readAsText(file);
}

// --- ランキング画面 ---
function openRanking() {
  showScreen('screen-ranking');
  const container = document.getElementById('ranking-container');
  container.innerHTML = '';
  
  settings.users.forEach(user => {
    const userHist = historyData.filter(h => h.user === user);
    let totalPlays = userHist.length;
    let totalCorrect = userHist.reduce((acc, cur) => acc + cur.correct, 0);
    let totalAnswers = userHist.reduce((acc, cur) => acc + cur.total, 0);
    let accuracy = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = 'ranking-item';
    card.innerHTML = `
      <div>
        <strong>${user}</strong>
        <p style="font-size:0.8rem; color:var(--text-light)">プレイ回数: ${totalPlays}回 / 正答率: ${accuracy}%</p>
      </div>
      <div>
        <span style="font-size:1.25rem; font-weight:bold; color:var(--primary)">${totalCorrect} 正解</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- プロフィール詳細 (弱点確認) ---
function openProfileDetail() {
  showScreen('screen-profile-detail');
  document.getElementById('profile-detail-title').innerText = `${settings.currentUser} の弱点分析`;
  renderRomajiTable('profile-table-container', true);
}