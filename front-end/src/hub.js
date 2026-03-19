const messagebtn = document.querySelector('.message');
messagebtn.addEventListener('click', function() {
  this.classList.add('clicked');
    window.location.href = 'chat.html';

});


