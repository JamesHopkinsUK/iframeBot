//chat toggle
function toggleChat() {
    var element = document.getElementById("chatContainer");
    element.classList.toggle("active");
  }

//popup
var popup = document.getElementById("cookie-popup");
function closePopup() {
  popup.style.display = "none";
}

//advert timer
		var countdownTime = 15;
		var timerElement = document.getElementById("timer");
		timerElement.innerHTML = countdownTime;
		var timerCheckbox = document.getElementById("timerCheckbox");
		var countdownInterval;

		function startCountdown() {
			countdownInterval = setInterval(function() {
				countdownTime--;
				timerElement.innerHTML = countdownTime;
				if (countdownTime === 0) {
					clearInterval(countdownInterval);
					showAdvert();
				}
			}, 1000);
		}

		function stopCountdown() {
			clearInterval(countdownInterval);
      countdownTime = 15;
		}

		timerCheckbox.addEventListener("change", function() {
			if (this.checked) {
				startCountdown();
			} else {
				stopCountdown();
			}
		});

//advert
var advert = document.getElementById("advert-popup");
function showAdvert() {
  advert.style.display = "block";
}
function closeAdvert() {
  advert.style.display = "none";
}

    // Add click event listener to accordion titles
    var accordionTitles = document.querySelectorAll('.accordion-title');
    accordionTitles.forEach(function (title) {
      title.addEventListener('click', function () {
        // Toggle display of accordion content
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });

