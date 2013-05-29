function menu_click() {
 $('div#detailsPane').html(this.id);
}
function inicializar() {
 $('div#menu img').click(menu_click);
}

$(document).ready(inicializar);