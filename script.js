/**
 * Represents a collection of sidebar items.
 * @type {NodeList}
 */
const sidebarItems = document.querySelectorAll('.sidebar .item');
/**
 * Represents a collection of table rows.
 * @type {NodeListOf<HTMLTableRowElement>}
 */
const tableRows = document.querySelectorAll('.main table tbody tr');
/**
 * The menu button element.
 * @type {HTMLElement}
 */
const menuBtn = document.getElementById('menu-btn');
/**
 * Represents the left section of the file sharing platform UI.
 * @type {HTMLElement}
 */
const leftSection = document.querySelector('.left-section');

let isMenuOpen = false;
/**
 * Adds click event listeners to sidebar items.
 * When a sidebar item is clicked, it becomes active and other items are deactivated.
 * @param {Event} event - The click event.
 */
sidebarItems.forEach(sideItem => {
    sideItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});
/**
 * Adds click event listeners to table rows.
 * When a table row is clicked, it becomes selected and other rows are deselected.
 * @param {Event} event - The click event.
 */
tableRows.forEach(tableTr => {
    tableTr.addEventListener('click', () => {
        tableRows.forEach(item => {
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
});
/**
 * Toggles the left section of the file sharing platform UI when the menu button is clicked.
 * If the menu is closed, it opens the left section. If the menu is open, it closes the left section.
 * @param {Event} event - The click event.
 */
menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        leftSection.style.left = '0';
    } else {
        leftSection.style.left = '-160px';
    }
    isMenuOpen = !isMenuOpen;
});
