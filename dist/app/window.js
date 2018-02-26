var menubar = new nw.Menu({
    type: 'menubar'
});

var fileMenu = new nw.Menu();
var configMenu = new nw.Menu();

fileMenu.append(new nw.MenuItem({
    label: 'Fechar',
    click: function () {
        window.close();
    }
}));
configMenu.append(new nw.MenuItem({
    label: 'Importador',
    click: function(){        
        menu_render.login();
    }
}));
configMenu.append(new nw.MenuItem({
    label: 'Adiciona REP',
    click: function(){        
        loginModal();
    }
}));


/*var openRecentMenu = new nw.Menu();
 
 openRecentMenu.append(new nw.MenuItem({
 label: 'Recente File X',
 click: function () {
 alert('Clicked to open a recent file');
 }
 }));*/


menubar.append(new nw.MenuItem({label: 'Arquivo', submenu: fileMenu}));
menubar.append(new nw.MenuItem({label: 'Configurações', submenu: configMenu}));
//fileMenu.append(new nw.MenuItem({label: 'Open Recent File', submenu: openRecentMenu}));

var win = nw.Window.get();
win.menu = menubar;


var tray = new nw.Tray({
    icon: 'bootstrap/dist/img/logo-softalert.png',
    title: 'My App Tray'
});

var menu = new nw.Menu();
menu.append(new nw.MenuItem({
    label: 'Do something'
}));

tray.menu = menu;
var gui = require('nw.gui');

// Reference to window and tray
var win = gui.Window.get();
//win.enterFullscreen();
var tray;

// Get the minimize event
win.on('minimize', function () {
    // Hide window
    //this.close();

    // Show tray
    tray = new gui.Tray({icon: 'icon.png'});

    // Show window and remove tray when clicked
    tray.on('click', function () {
        win.show();
        this.remove();
        tray = null;
    });

});
onload = function(){
    win.show();
    win.maximize();
}


