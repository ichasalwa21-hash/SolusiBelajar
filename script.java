document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});

function openModal(title, badge, concept, formula, tips) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-badge').innerText = badge;
    document.getElementById('modal-concept').innerText = concept;
    document.getElementById('modal-formula').innerText = formula;
    document.getElementById('modal-tips').innerText = tips;
    
    document.getElementById('summary-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('summary-modal').classList.add('hidden');
}


function filterKelas(kelas) {
    const cards = document.querySelectorAll('.materi-card');
    cards.forEach(card => {
        if (kelas === 'all' || card.classList.contains('kelas-' + kelas)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}


let timeLeft = 25 * 60;
let timerId = null;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer-display').innerText = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId !== null) return;
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            alert("Waktu belajar selesai! Saatnya istirahat 5 menit.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text === '') return;

    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.className = "flex items-center justify-between p-3 bg-white/90 rounded-xl text-sm border border-slate-100";
    li.innerHTML = `
        <span class="text-slate-700">${text}</span>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-red-500"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
    `;
    ul.appendChild(li);
    input.value = '';
    
    if (window.lucide) {
        lucide.createIcons();
    }
}
