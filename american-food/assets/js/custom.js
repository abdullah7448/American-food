
//mmenu
document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#menu" )
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( 'a[href="#menu"]' )
            .addEventListener( 'click', ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);


