function playKey(keyId) {
  const key = document.querySelector(keyId);
  
  if (key && key.localName === 'audio') {
    key.play();
  }
}

const keys = document.querySelectorAll('.tecla');

for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function () {
    playKey(`#som_${keys[i].classList[1]}`);
  };

  keys[i].onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      keys[i].classList.add('ativa');      
    }
  }

  keys[i].onkeyup = function () {
    keys[i].classList.remove('ativa');      
  }
}