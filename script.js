const dateInput = document.getElementById('dateInput');
const calendar = document.getElementById('calendar');
const daysContainer = document.getElementById('daysContainer');
const monthYearDisplay = document.getElementById('monthYearDisplay');

let selectedDate = null;
let currentDate = new Date();

function toggleCalendar() {
  calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
  renderCalendar();
}

function clearDate() {
  selectedDate = null;
  dateInput.value = '';
  toggleCalendar();
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function prevYear() {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  renderCalendar();
}

function nextYear() {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  renderCalendar();
}

function renderCalendar() {
  daysContainer.innerHTML = '';
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  monthYearDisplay.textContent = `${year}-${String(month + 1).padStart(2, '0')}`;
  
  for (let i = 0; i < firstDay; i++) {
    daysContainer.appendChild(document.createElement('span'));
  }
  
  for (let day = 1; day <= lastDate; day++) {
    const dayElem = document.createElement('span');
    dayElem.textContent = day;
    
    if (selectedDate && selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day) {
      dayElem.classList.add('selected');
    }

    dayElem.onclick = () => selectDate(new Date(year, month, day));
    daysContainer.appendChild(dayElem);
  }
}

function selectDate(date) {
  selectedDate = date;
  dateInput.value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  toggleCalendar();
}

window.onclick = (e) => {
  if (!e.target.closest('.calendar-container')) {
    calendar.style.display = 'none';
  }
};
