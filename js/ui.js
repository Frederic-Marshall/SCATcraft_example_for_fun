
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#gamerules-table tbody tr');
    rows.forEach(row => {
        const value = row.cells[2].textContent;
        const type = row.cells[3].textContent;
        if (type == 'int') {
            row.cells[2].style.background = '#707c3c';
        } else if (type == 'bool') {
            if (value == 'true') {
                row.cells[2].style.background = '#2d5e3e';
            } else {
                row.cells[2].style.background = '#5e2d2d';
            }
        }
    });
});