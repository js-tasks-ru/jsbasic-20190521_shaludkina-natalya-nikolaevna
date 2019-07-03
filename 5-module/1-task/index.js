'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    for ( let i = 1; i < table.rows.length; i++ ) {

        let row = table.rows[i];

        if ( row.cells[1].textContent < 18 ) {
            table.rows[i].style = "text-decoration: line-through";
        }

        if ( row.cells[2].innerHTML === 'm' ) {
            table.rows[i].classList.add("male");
        } else ( table.rows[i].classList.add("female") );

        if ( row.cells[3].getAttribute('data-available') === 'true' ) {
            table.rows[i].classList.add('available');
        } else if ( row.cells[3].getAttribute('data-available') === 'false' ) {
            table.rows[i].classList.add('unavailable');
        } else ( table.rows[i].setAttribute('hidden', 'true') );

    }

    return table;
}