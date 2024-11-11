// Отримуємо елемент поля введення дати
const dateInput = document.getElementById('dateInput');
// Отримуємо елемент календаря
const calendar = document.getElementById('calendar');
// Отримуємо контейнер для відображення днів
const daysContainer = document.getElementById('daysContainer');
// Отримуємо елемент для відображення місяця та року
const monthYearDisplay = document.getElementById('monthYearDisplay');

// Змінна для збереження обраної дати
let selectedDate = null;
// Змінна для збереження поточної дати
let currentDate = new Date();

// Функція для відкриття/закриття календаря
function toggleCalendar() {
  // Перемикаємо видимість календаря
  calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
  // Викликаємо функцію для відображення календаря
  renderCalendar();
}

// Функція для очищення обраної дати
function clearDate() {
  // Очищуємо обрану дату
  selectedDate = null;
  // Очищуємо значення у полі введення дати
  dateInput.value = '';
  // Закриваємо календар
  toggleCalendar();
}

// Функція для переходу на попередній місяць
function prevMonth() {
  // Зменшуємо місяць на 1
  currentDate.setMonth(currentDate.getMonth() - 1);
  // Оновлюємо відображення календаря
  renderCalendar();
}

// Функція для переходу на наступний місяць
function nextMonth() {
  // Збільшуємо місяць на 1
  currentDate.setMonth(currentDate.getMonth() + 1);
  // Оновлюємо відображення календаря
  renderCalendar();
}

// Функція для переходу на попередній рік
function prevYear() {
  // Зменшуємо рік на 1
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  // Оновлюємо відображення календаря
  renderCalendar();
}

// Функція для переходу на наступний рік
function nextYear() {
  // Збільшуємо рік на 1
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  // Оновлюємо відображення календаря
  renderCalendar();
}

// Функція для відображення календаря
function renderCalendar() {
  // Очищуємо контейнер днів
  daysContainer.innerHTML = '';
  // Отримуємо поточний місяць
  const month = currentDate.getMonth();
  // Отримуємо поточний рік
  const year = currentDate.getFullYear();
  // Визначаємо день тижня першого дня місяця
  const firstDay = new Date(year, month, 1).getDay();
  // Визначаємо останній день місяця
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  // Відображаємо рік та місяць у форматі YYYY-MM
  monthYearDisplay.textContent = `${year}-${String(month + 1).padStart(2, '0')}`;
  
  // Додаємо порожні елементи для вирівнювання початку місяця
  for (let i = 0; i < firstDay; i++) {
    daysContainer.appendChild(document.createElement('span'));
  }
  
  // Додаємо елементи для кожного дня місяця
  for (let day = 1; day <= lastDate; day++) {
    // Створюємо елемент для відображення дня
    const dayElem = document.createElement('span');
    // Встановлюємо текст для дня
    dayElem.textContent = day;
    
    // Виділяємо обраний день, якщо він відповідає обраній даті
    if (selectedDate && selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day) {
      dayElem.classList.add('selected');
    }

    // Додаємо обробник події для вибору дати при натисканні на день
    dayElem.onclick = () => selectDate(new Date(year, month, day));
    // Додаємо елемент дня до контейнера
    daysContainer.appendChild(dayElem);
  }
}

// Функція для вибору дати
function selectDate(date) {
  // Зберігаємо обрану дату
  selectedDate = date;
  // Встановлюємо значення у полі введення дати у форматі YYYY-MM-DD
  dateInput.value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  // Закриваємо календар
  toggleCalendar();
}

// Закриваємо календар при натисканні поза його межами
window.onclick = (e) => {
  // Перевіряємо, чи натиснуто поза межами контейнера календаря
  if (!e.target.closest('.calendar-container')) {
    calendar.style.display = 'none';
  }
};
