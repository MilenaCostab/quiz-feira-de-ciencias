const questions = [
  {
    text: "Como você geralmente vai à escola ou ao trabalho?",
    category: "Transporte",
    options: [
      { text: "De carro ou moto, sozinho(a)",                pts: 0 },
      { text: "De ônibus ou metrô (transporte público)",     pts: 3 },
      { text: "De bicicleta",                                pts: 4 },
      { text: "A pé",                                        pts: 5 },
    ]
  },
  {
    text: "Quanto tempo você leva no banho, em média?",
    category: "Água",
    options: [
      { text: "Mais de 20 minutos",         pts: 0 },
      { text: "Entre 10 e 20 minutos",      pts: 2 },
      { text: "Entre 5 e 10 minutos",       pts: 4 },
      { text: "Menos de 5 minutos",         pts: 5 },
    ]
  },
  {
    text: "O que você faz com o lixo que produz em casa?",
    category: "Resíduos",
    options: [
      { text: "Jogo tudo em um saco só",                              pts: 0 },
      { text: "Separo às vezes, quando lembro",                       pts: 2 },
      { text: "Separo recicláveis dos orgânicos sempre",              pts: 4 },
      { text: "Separo e levo a pontos de coleta específicos",         pts: 5 },
    ]
  },
  {
    text: "Com que frequência você come carne vermelha?",
    category: "Alimentação",
    options: [
      { text: "Todo dia, em quase todas as refeições",  pts: 0 },
      { text: "Uma vez por dia",                        pts: 1 },
      { text: "Algumas vezes por semana",               pts: 3 },
      { text: "Raramente ou nunca como carne",          pts: 5 },
    ]
  },
  {
    text: "Como você costuma fazer compras de roupa?",
    category: "Consumo",
    options: [
      { text: "Compro frequentemente, sigo as tendências da moda",  pts: 0 },
      { text: "Compro quando preciso, sem muito critério",           pts: 2 },
      { text: "Prefiro brechós e roupas de segunda mão",            pts: 4 },
      { text: "Compro só o necessário e cuido bem das roupas",      pts: 5 },
    ]
  },
  {
    text: "O que você faz quando termina de usar um produto (celular, garrafa, embalagem)?",
    category: "Resíduos",
    options: [
      { text: "Jogo fora normalmente",                    pts: 0 },
      { text: "Tento reaproveitar quando dá",             pts: 2 },
      { text: "Busco pontos de descarte correto",         pts: 4 },
      { text: "Reparo, doo ou reciclo corretamente",      pts: 5 },
    ]
  },
  {
    text: "Você deixa luzes ou aparelhos ligados quando sai do ambiente?",
    category: "Energia",
    options: [
      { text: "Quase sempre, não costumo lembrar",       pts: 0 },
      { text: "Às vezes esqueço",                        pts: 2 },
      { text: "Raramente, costumo desligar",             pts: 4 },
      { text: "Nunca. Sempre verifico antes de sair",    pts: 5 },
    ]
  },
  {
    text: "Qual é sua atitude em relação ao uso de plástico descartável?",
    category: "Consumo",
    options: [
      { text: "Uso normalmente — canudo, sacola, copo plástico",    pts: 0 },
      { text: "Tento reduzir, mas não sempre",                      pts: 2 },
      { text: "Carrego sacola reutilizável e evito canudos",        pts: 4 },
      { text: "Elimino quase totalmente o plástico descartável",    pts: 5 },
    ]
  },
  {
    text: "Como você prefere consumir música, filmes e livros?",
    category: "Consumo Digital",
    options: [
      { text: "Compro CDs, DVDs e livros físicos frequentemente",   pts: 1 },
      { text: "Baixo arquivos online (streaming)",                   pts: 3 },
      { text: "Uso bibliotecas e serviços compartilhados",           pts: 5 },
      { text: "Troco e empresto com amigos",                         pts: 4 },
    ]
  },
  {
    text: "Você compartilha informações sobre meio ambiente ou influencia pessoas ao redor?",
    category: "Engajamento",
    options: [
      { text: "Não, isso não é assunto meu",                           pts: 0 },
      { text: "Às vezes, quando surge o assunto",                      pts: 2 },
      { text: "Sim, costumo compartilhar conteúdos e conversar",       pts: 4 },
      { text: "Sim, e participo de ações, eventos ou grupos",          pts: 5 },
    ]
  },
];


const levels = [
  {
    min: 0, max: 14,
    emoji: "😴",
    level: "Iniciante Ambiental",
    color: "#ff5c5c",
    title: "Hora de despertar!",
    desc: "Seus hábitos ainda têm pouco impacto positivo no meio ambiente — mas a boa notícia é que pequenas mudanças fazem grande diferença. Cada ação conta, e você já deu o primeiro passo ao responder este quiz!",
    tips: [
      "🚿 Reduza seu tempo de banho em 5 minutos e economize até 45 litros por dia.",
      "💡 Desligue as luzes ao sair dos ambientes — é simples e economiza energia.",
      "🛍️ Troque uma sacola plástica por uma ecobag reutilizável.",
      "♻️ Comece separando papel, plástico e vidro do lixo orgânico.",
    ]
  },
  {
    min: 15, max: 24,
    emoji: "🌿",
    level: "Consumidor Consciente",
    color: "#f0e44a",
    title: "Você está no caminho certo!",
    desc: "Você já faz escolhas conscientes em algumas áreas da vida, mas ainda há espaço para melhorar. Com pequenos ajustes nos seus hábitos diários, você pode aumentar bastante seu impacto positivo.",
    tips: [
      "🚲 Experimente ir a pé ou de bicicleta pelo menos uma vez por semana.",
      "🥗 Reduza o consumo de carne vermelha — substitua por leguminosas algumas vezes.",
      "🔌 Desconecte aparelhos da tomada quando não usar — eles consomem energia em standby.",
      "👕 Antes de comprar roupa nova, pense se realmente precisa.",
    ]
  },
  {
    min: 25, max: 34,
    emoji: "🌍",
    level: "Agente de Mudança",
    color: "#00d4aa",
    title: "Parabéns! Você faz a diferença.",
    desc: "Você demonstra um bom nível de consciência ambiental e adota práticas sustentáveis no dia a dia. Seu exemplo inspira pessoas ao redor. Continue assim e amplie seu impacto compartilhando conhecimento!",
    tips: [
      "📢 Compartilhe suas práticas com amigos e familiares — inspire mais pessoas.",
      "🌱 Experimente cultivar uma hortinha em casa ou participar de hortas comunitárias.",
      "📱 Doe ou recicle corretamente eletrônicos antigos que não usa mais.",
      "💧 Instale um redutor de fluxo na torneira para economizar ainda mais água.",
    ]
  },
  {
    min: 35, max: 50,
    emoji: "🌟",
    level: "Guardião do Planeta",
    color: "#39ff8e",
    title: "Incrível! Você é uma referência!",
    desc: "Você possui altíssima consciência ambiental e seus hábitos de consumo são verdadeiramente sustentáveis. Você é um exemplo de que é possível viver bem com responsabilidade ambiental. O planeta agradece!",
    tips: [
      " Lidere ou participe de projetos ambientais na escola ou comunidade.",
      " Considere apoiar reflorestamento ou adotar uma área verde.",
      " Aprofunde seus conhecimentos e compartilhe com o maior número de pessoas.",
      " Engaje-se em questões ambientais na sua comunidade — sua voz importa.",
    ]
  },
];

let current = 0;
let answers = new Array(questions.length).fill(null);


(function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx    = canvas.getContext('2d');
  const particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    particles.push({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      r:     Math.random() * 1.5 + 0.3,
      vx:    (Math.random() - 0.5) * 0.25,
      vy:    (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(57,255,142,${p.alpha})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0)             p.x = canvas.width;
      if (p.x > canvas.width)  p.x = 0;
      if (p.y < 0)             p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();



function startQuiz() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display  = 'block';
  renderQuestion();
}

function renderQuestion() {
  const q     = questions[current];
  const total = questions.length;

  const pct = Math.round((current / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-counter').textContent     = `Questão ${current + 1} de ${total}`;
  document.getElementById('q-percent').textContent     = pct + '%';

  document.getElementById('q-label').textContent =
    `QUESTÃO ${String(current + 1).padStart(2, '0')} · ${q.category.toUpperCase()}`;
  document.getElementById('q-text').textContent = q.text;

  const optDiv  = document.getElementById('options');
  const letters = ['A', 'B', 'C', 'D'];
  optDiv.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn' + (answers[current] === i ? ' selected' : '');
    btn.innerHTML = `
      <span class="opt-letter">${letters[i]}</span>
      <span>${opt.text}</span>
    `;
    btn.addEventListener('click', () => selectOption(i));
    optDiv.appendChild(btn);
  });

  document.getElementById('btn-back').disabled = (current === 0);
  document.getElementById('btn-next').disabled = (answers[current] === null);
  document.getElementById('btn-next').textContent =
    current === total - 1 ? 'Ver Resultado 🏆' : 'Próxima →';

  const card = document.getElementById('q-card');
  card.classList.remove('slide-in');
  void card.offsetWidth; 
  card.classList.add('slide-in');
}

function selectOption(idx) {
  answers[current] = idx;
  document.querySelectorAll('.opt-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
  document.getElementById('btn-next').disabled = false;
}

function goNext() {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}


function goBack() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function showResult() {
  document.getElementById('quiz-screen').style.display   = 'none';
  document.getElementById('result-screen').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const totalPts = answers.reduce((sum, ans, qi) => {
    return sum + (ans !== null ? questions[qi].options[ans].pts : 0);
  }, 0);
  const maxPts = questions.length * 5; 

  const lvl = levels.find(l => totalPts >= l.min && totalPts <= l.max);

  document.getElementById('r-emoji').textContent      = lvl.emoji;
  document.getElementById('r-level').textContent      = lvl.level;
  document.getElementById('r-level').style.color      = lvl.color;
  document.getElementById('r-score-text').textContent =
    `Você fez ${totalPts} de ${maxPts} pontos possíveis`;

  const pct    = totalPts / maxPts;  
  const arcLen = 439.82;             
  setTimeout(() => {
    document.getElementById('gauge-arc').style.strokeDashoffset = arcLen * (1 - pct);
    const deg = -90 + pct * 180;   
    document.getElementById('gauge-needle').style.transform = `rotate(${deg}deg)`;
    document.getElementById('gauge-score').textContent       = totalPts;
  }, 100);
  document.getElementById('gauge-label').textContent = lvl.level;

  document.getElementById('r-title').textContent = lvl.title;
  document.getElementById('r-desc').textContent  = lvl.desc;

  const tipsList = document.getElementById('r-tips');
  tipsList.innerHTML = '';
  lvl.tips.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="icon">${t.slice(0, 2)}</span><span>${t.slice(2)}</span>`;
    tipsList.appendChild(li);
  });

  renderScoreBars(totalPts);
}

function renderScoreBars() {
  const catScores = {};
  const catMax    = {};

  questions.forEach((q, qi) => {
    const cat = q.category;
    if (!catScores[cat]) { catScores[cat] = 0; catMax[cat] = 0; }
    if (answers[qi] !== null) catScores[cat] += q.options[answers[qi]].pts;
    catMax[cat] += 5;
  });

  const colors = ['#39ff8e', '#4af0ff', '#f0e44a', '#00d4aa', '#ff9f5c', '#c084fc'];
  const bars   = document.getElementById('score-bars');
  bars.innerHTML = '';

  Object.keys(catScores).forEach((cat, i) => {
    const ratio = catScores[cat] / catMax[cat];

    const row = document.createElement('div');
    row.className = 'score-row';
    row.innerHTML = `
      <div class="score-row-label">${cat}</div>
      <div class="score-row-track">
        <div class="score-row-fill" style="width:0%; background:${colors[i % colors.length]}"></div>
      </div>
      <div class="score-row-value">${catScores[cat]}/${catMax[cat]}</div>
    `;
    bars.appendChild(row);

    setTimeout(() => {
      row.querySelector('.score-row-fill').style.width = (ratio * 100) + '%';
    }, 200 + i * 100);
  });
}


function resetQuiz() {
  current = 0;
  answers = new Array(questions.length).fill(null);
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('start-screen').style.display  = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}