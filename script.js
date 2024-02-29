document.addEventListener("DOMContentLoaded", function () {
  var estrofes = document.querySelectorAll(".estrofe");
  var startButton = document.getElementById("startButton");

  function showPoem() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("poem").classList.remove("hidden");
    showEstrofe(0);
  }

  function showEstrofe(index) {
    estrofes.forEach(function (estrofe) {
      estrofe.classList.add("hidden");
    });
    estrofes[index].classList.remove("hidden");

    if (index === estrofes.length - 1) {
      var poemContainer = document.getElementById("poem");
      var refreshButton = document.createElement("button");
      refreshButton.textContent = "Recomeçar";
      refreshButton.classList.add("button");
      refreshButton.onclick = function () {
        location.reload();
      };
      poemContainer.appendChild(refreshButton);
    } else {
      var existingButton = document.querySelector(".refresh-button");
      if (existingButton) {
        existingButton.remove();
      }
    }

    index++;
    document.onclick = function () {
      if (index < estrofes.length) {
        showEstrofe(index);
        index++;
      } else {
        document.onclick = null;
      }
    };
  }

  startButton.addEventListener("click", showPoem);
});
