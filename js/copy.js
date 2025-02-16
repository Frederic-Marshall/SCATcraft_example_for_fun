
// Для копирования в буфер обмена
// Биомы
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#biomes-table tbody tr');
    rows.forEach(row => {
        const structureId = row.cells[1].textContent;
        row.addEventListener('click', () => {
            if (structureId) {
                const command = `locate biome ${structureId}`;
                
                navigator.clipboard.writeText(command).then(() => {
                    window.showNotification(`Скопировано: <span class="command">/${command}</span>`);
                }).catch(err => {
                    console.error('Не удалось скопировать текст: ', err);
                    window.showNotification('Не удалось скопировать текст. Пожалуйста, попробуйте ещё раз.');
                });
            }
        });
    });
});
// Структуры
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#structures-table tbody tr');
    rows.forEach(row => {
        const structureId = row.cells[1].textContent;
        row.addEventListener('click', () => {
            if (structureId) {
                const command = `locate structure ${structureId}`;

                navigator.clipboard.writeText(command).then(() => {
                    window.showNotification(`Скопировано: <span class="command">/${command}</span>`);
                }).catch(err => {
                    console.error('Не удалось скопировать текст: ', err);
                    window.showNotification('Не удалось скопировать текст. Пожалуйста, попробуйте ещё раз.');
                });
            }
        });
    });
});
// Руды
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#ores-table tbody tr');
    rows.forEach(row => {
        const structureId = row.cells[1].textContent;
        row.addEventListener('click', () => {
            if (structureId) {
                const command = `give @p ${structureId} 1`;

                navigator.clipboard.writeText(command).then(() => {
                    window.showNotification(`Скопировано: <span class="command">/${command}</span>`);
                }).catch(err => {
                    console.error('Не удалось скопировать текст: ', err);
                    window.showNotification('Не удалось скопировать текст. Пожалуйста, попробуйте ещё раз.');
                });
            }
        });
    });
});
// Эффекты
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#effects-table tbody tr');
    rows.forEach(row => {
        const structureId = row.cells[1].textContent;
        row.addEventListener('click', () => {
            if (structureId) {
                const command = `effect give @p minecraft:${structureId} infinite`;

                navigator.clipboard.writeText(command).then(() => {
                    window.showNotification(`Скопировано: <span class="command">/${command}</span>`);
                }).catch(err => {
                    console.error('Не удалось скопировать текст: ', err);
                    window.showNotification('Не удалось скопировать текст. Пожалуйста, попробуйте ещё раз.');
                });
            }
        });
    });
});






