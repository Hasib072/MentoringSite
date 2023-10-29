
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    let SubMenu = document.getElementById("sub-menu");

        function showMenu(){
            SubMenu.classList.toggle("show-submenu");
        }