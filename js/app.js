$(function () {

    // Muestra el Dropdown con la opciones de perfil en el menu principal:
    showProfileOptions('#btn-dropdown-profile', '#dropdown-profile');

		//Oculta el Dropdown de opciones de perfil:
    autoHide('#dropdown-profile', 'avatar');

		//Muestra los submenus en el menu lateral:
    showNav('.sb-trigger', 'ul#menu li > .submenu');

		//Oculta los submenus en el menu lateral:
    autoHide('ul#menu li > .submenu', 'sb-trigger');

		//Muestra menú lateral cuando se visualiza en móviles:
		showSidebarNav('a#trigger', 'a#close', '0px');

		//Oculta menú lateral cuando se visualiza en móviles:
    showSidebarNav('a#close', 'a#trigger', '-100%');

    //dragAndDropFile('file-drop');

    var t = $('.btn-add-tax');
    var p = $('.pnl-taxes');

    t.click(function () {
        $(this).next(p).toggle();
    });


    //Muestra tab de facturas emitidas en Consultas:
    toggleInvoiceTabs('emited', 'received', '.received', '.emited');

    //Muestra tab de facturas recibidas en Consultas:
    toggleInvoiceTabs('received', 'emited', '.emited', '.received');

    if (parseInt($(window).width()) < 800) {
      // Muestra el Dropdown con las opciones en gráficas de Dashboard en dispositivo pequeño:
      showChartOptions('#dashboard-content .chart-bottom .options .trigger', '.items');

      //Oculta el Dropdown con las opciones en gráficas de Dashboard en dispositivo pequeño:
      autoHide('.items', '.trigger');
      }

    /*
    $('#btn-show-received').on('click', function () {
        $('#btn-show-emited').removeClass('active');
        $('.list.emited').removeClass('active');
        $(this).addClass('active');
        $('.list.received').addClass('active');
    });
    $('#btn-show-emited').on('click', function () {
        $('#btn-show-received').removeClass('active');
        $('.list.received').removeClass('active');
        $(this).addClass('active');
        $('.list.emited').addClass('active');
    });*/

});

//Muestra tabs de facturas emitidas o recibidas en Consultas:
function toggleInvoiceTabs(trigger, btnInactive, listInactive, listActive ){
	$('#btn-show-'+ trigger).on('click', function () {
			$('#btn-show-' + btnInactive).removeClass('active');
			$('.list' + listInactive).removeClass('active');
			$(this).addClass('active');
			$('.list' + listActive).addClass('active');
	});
}


// Muestra el Sidebar cuando esta en dispositivo móvil:

function showSidebarNav(triggerHide, triggerShow, moveSidebar) {
    $(triggerHide).on('click', function () {
        $(this).css('display', 'none');
        $(triggerShow).css('display', 'inline-block');
        $('#sidebar').css('left', moveSidebar);

        return false;
    });
}

// Muestra el Dropdown con la opciones de perfil en el menu principal:

function showProfileOptions(trigger, target) {
    $(trigger).on('click', function () {
        $(this).next($(target)).toggle();

        return false;
    });
}

// Muestra el Dropdown con la opciones en gráficas de Dashboard en dispositivo pequeño:

function showChartOptions(trigger, target) {
    $(trigger).on('click', function () {
        $(this).prev($(target)).toggle();

        return false;
    });
}

//Oculta los elementos automáticamente si no se da click en su "trigger" correspondiente:

function autoHide(t, c) {
    $(document).on('click', function () {
        var d = $(t);
        if ($(this).class != c) {
            d.hide();
        }
    });
}

//Muestra el menu lateral cuando se visualiza en móviles:

function showSidebarMenu(trigger, target, showElement, move) {
    $(trigger).on('click', function () {
        $(this).css('display', 'none');
        $(target).css({ 'left': move });
        $(showElement).css('display', 'block');

        return false;
    });
}

//Muestra los submenus del menu lateral en base a su clase css:

function showNav(trigger, element) {
    $(trigger).on('click', function () {
        $(this).next($(element)).toggle().css('animation', 'dropdownShow 0.25s ease-in-out forwards');

        return false;
    });
}

//Obtiene el año actual:

function getYear(id) {
    var year = (new Date).getFullYear();
    $(id).html(year);
}

//Drag & drop
function dragAndDropFile(id) {
    var dropzone = document.getElementById(id);

    dropzone.ondrop = function () {
        this.className = 'file-drop';

        return false;
    };

    dropzone.ondragover = function () {
        this.className = 'file-drop over';
        return false;
    };

    dropzone.ondragleave = function () {
        this.className = 'file-drop';
        return false;
    };
};
