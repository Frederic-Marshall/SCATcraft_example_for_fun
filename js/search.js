// Поиск
// Транслитерация
function convertKeyboardLayout(text) {
    const layoutMap = {
        'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ', 'p': 'з', '[': 'х', ']': 'ъ',
        'a': 'ф', 's': 'ы', 'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о', 'k': 'л', 'l': 'д', ';': 'ж', "'": 'э',
        'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т', 'm': 'ь', ',': 'б', '.': 'ю'
    };
    return text.replace(/[a-zA-Z\[\];'\.,]/g, match => {
        return layoutMap[match] || match;
    });
}
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value.toLowerCase();
    const tables = ['biomes-table', 'structures-table', 'ores-table', 'gamerules-table', 'mobs-table', 'effects-table'];
    const noResultsMessage = document.getElementById('no-results');
    const titles = document.getElementsByTagName('h2');
    console.log(titles)
    tables.forEach(tableId => {
        document.getElementById(tableId).style.display = 'none';
    });

    let foundMatch = false;

    tables.forEach(tableId => {
        const match = tableId === 'mobs-table'
            ? filterTableMobs(query, tableId)
            : filterTable(query, tableId);

        if (match) {
            document.getElementById(tableId).style.display = 'table';
            foundMatch = true;
        }
    });

    if (!foundMatch) {
        noResultsMessage.style.display = 'block';
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.display = 'none';
        }
    } else {
        noResultsMessage.style.display = 'none';
    }
});

// Функция поиска по обычным таблицам
function filterTable(query, tableId) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    const convertedQuery = convertKeyboardLayout(query);
    let foundMatch = false;
    console.log(convertedQuery)

    for (let i = 1; i < rows.length; i++) {
        const firstCell = rows[i].getElementsByTagName('td')[0];

        if (firstCell) {
            const cellText = firstCell.textContent.toLowerCase();
            const convertedText = convertKeyboardLayout(cellText);

            const match = cellText.includes(query) || convertedText.includes(convertedQuery);
            rows[i].style.display = match ? '' : 'none';

            if (match) foundMatch = true;
        }
    }

    return foundMatch;
}
// Функция поиска по таблице мобов
function filterTableMobs(query, tableId) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    const convertedQuery = convertKeyboardLayout(query.toLowerCase());
    let foundMatch = false;

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length < 3) continue;

        const nameCell = cells[0].textContent.toLowerCase();
        const lootCell = cells[2].textContent.toLowerCase();
        const convertedNameCell = convertKeyboardLayout(nameCell);
        const convertedLootCell = convertKeyboardLayout(lootCell);

        const match =
            nameCell.includes(query) ||
            lootCell.includes(query) ||
            convertedNameCell.includes(convertedQuery) ||
            convertedLootCell.includes(convertedQuery);

        rows[i].style.display = match ? '' : 'none';

        if (match) foundMatch = true;
    }

    return foundMatch;
}
// function filterTable(query, tableId) {
//     const table = document.getElementById(tableId);
//     const rows = table.getElementsByTagName('tr');
//     const convertedQuery = convertKeyboardLayout(query.toLowerCase());
//     let foundMatch = false;

//     for (let i = 1; i < rows.length; i++) {
//         const cells = rows[i].getElementsByTagName('td');
//         if (cells.length < 3) continue;

//         const nameCell = cells[0].textContent.toLowerCase();
//         const lootCell = cells[2].textContent.toLowerCase();
//         const convertedNameCell = convertKeyboardLayout(nameCell);
//         const convertedLootCell = convertKeyboardLayout(lootCell);

//         const match =
//             nameCell.includes(query) ||
//             lootCell.includes(query) ||
//             convertedNameCell.includes(convertedQuery) ||
//             convertedLootCell.includes(convertedQuery);

//         rows[i].style.display = match ? '' : 'none';

//         if (match) foundMatch = true;
//     }

//     return foundMatch;
// }
// Функция "Очистить поиск"
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-button');
    const tables = ['biomes-table', 'structures-table', 'ores-table', 'gamerules-table', 'mobs-table', 'effects-table'];
    const noResultsMessage = document.getElementById('no-results');
    const titles = document.getElementsByTagName('h2');

    // Клик по кнопке очистки
    clearButton.addEventListener('click', function () {
        searchInput.value = '';

        // Показываем все таблицы
        tables.forEach(tableId => {
            document.getElementById(tableId).style.display = 'table';
            const rows = document.querySelectorAll(`#${tableId} tr`);
            rows.forEach(row => row.style.display = '');
        });

        // Показываем заголовки
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.display = 'block';
        }

        // Скрываем сообщение "Ничего не найдено"
        noResultsMessage.style.display = 'none';
    });
});