
      window.onscroll = function() {
        var navbar = document.getElementById('navbar');
        var links = document.querySelectorAll('#navbar-section a');
  
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          navbar.style.backgroundColor = '#333';
          navbar.style.color = '#fff';
          navbar.style.backgroundColor = '#002e6d';
          navbar.style.marginLeft = "-100px";
          navbar.style.height = "140px";
          navbar.style.color = "white";
          changeFontColor('white');
        } else {
          navbar.style.backgroundColor = 'transparent';
          navbar.style.color = '#002e6d';
          changeFontColor('inherit');
        }
      };
  
      function changeFontColor(color) {
        var links = document.querySelectorAll('#navbar-section a');
        links.forEach(function(link) {
          link.style.color = color;
        });
      }