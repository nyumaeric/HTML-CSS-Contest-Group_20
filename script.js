    // JavaScript to change the navbar color on scroll
    window.onscroll = function() {
        var navbar = document.getElementById('navbar');
  
        // Change the background color when the user scrolls down
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          navbar.style.backgroundColor = '#002e6d';
          navbar.style.marginLeft = "-100px";
          navbar.style.height = "140px";
          navbar.style.color = "white";
          

        } else {
          navbar.style.backgroundColor = 'transparent';
        }

      };