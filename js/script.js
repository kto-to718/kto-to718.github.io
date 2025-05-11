document.addEventListener('DOMContentLoaded', function() {
    // Массивы слов и их переводов
    const russianWords = [
        "дом", "кот", "солнце", "вода", "книга", 
        "рука", "город", "день", "ночь", "цветок",
        "школа", "работа", "друг", "семья", "время"
    ];
    
    const englishWords = [
        "house", "cat", "sun", "water", "book",
        "hand", "city", "day", "night", "flower",
        "school", "work", "friend", "family", "time"
    ];

    // Элементы DOM
    const wordCard = document.getElementById('wordCard');
    const wordDisplay = document.getElementById('wordDisplay');
    const translationDisplay = document.getElementById('translationDisplay');
    const refreshButton = document.getElementById('refreshButton');
    const languageToggle = document.getElementById('languageToggle');
    const countLearnWords = document.getElementById('countLearnWords');
    var counter = 0;

    let currentLanguage = 'russian'; // По умолчанию учим с русского на английский
    let currentIndex = -1;

    // Инициализация
    updateWord();

    // Переключение языка
    languageToggle.addEventListener('change', function() {
        currentLanguage = this.checked ? 'english' : 'russian';
        updateWord();
    });

    // Обновление слова
    refreshButton.addEventListener('click', updateWord);

    // Показать/скрыть перевод при клике на карточку
    wordCard.addEventListener('click', function() {
        translationDisplay.classList.toggle('show');
    });

    // Функция обновления слова
    function updateWord() {
        // Скрываем перевод при обновлении слова
        translationDisplay.classList.remove('show');
        // Выбираем случайный индекс, отличный от текущего
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * russianWords.length);
        } while (newIndex === currentIndex && russianWords.length > 1);
        
        currentIndex = newIndex;

        if (currentLanguage === 'russian') {
            wordDisplay.textContent = russianWords[currentIndex];
            translationDisplay.textContent = englishWords[currentIndex];
        } else {
            wordDisplay.textContent = englishWords[currentIndex];
            translationDisplay.textContent = russianWords[currentIndex];
        }
        counter = counter + 1;
        countLearnWords.textContent = 'Количество изученных слов: ' + counter;
        console.log(counter);
    }
});