function playKey(keyClass) {
  document.querySelector(keyClass).play();
}

const keys = document.querySelectorAll('.tecla');

for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function () {
    playKey(`#som_${keys[i].classList[1]}`);
  };
  
}