document.addEventListener('DOMContentLoaded', function() {
  
});
function changeBackgroundColour () {
   let items =  document.getElementsByClassName('individualsPost')
    for (var i = 0; i < items.length; i++) {
        individualsPost[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 25})`
        
    }
    }