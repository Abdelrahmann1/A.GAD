document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("productQuantity");
  const colorButtons = document.querySelectorAll(".btn-size");
  const colorInput = document.getElementById("productColor");
  const form = document.getElementById("orderForm");
  const productDetailImage = document.getElementById("product-detail-img");
  const carouselItems = document.querySelectorAll(".carousel-item .col-4 img");
  const diss_in = document.querySelectorAll(".dis-in");

  // Set default color to 'أبيض'
  colorInput.value = "أبيض";
  document
    .querySelector('.btn-size[data-color="أبيض"]')
    .classList.add("selected");

  function updateProductImages(color) {
    const imageCount = 11;
    productDetailImage.src = `assets/img/${color}/1.jpeg`;
    // console.log(productDetailImage.src);
    carouselItems.forEach((img, index) => {
      index++;
      // console.log(index);
      if (index <= imageCount) {
        img.src = `assets/img/${color}/${index + 1}.jpeg`;
        img.parentElement.style.display = "block"; // Show image
      } else {
        img.parentElement.style.display = "none"; // Hide image
      }
    });
  }

  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      colorInput.value = this.getAttribute("data-color");
      colorButtons.forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected");
      updateProductImages(colorInput.value === "أبيض" ? "white" : "black");
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    if (colorInput.value === "") {
      alert("يرجى اختيار اللون.");
      event.preventDefault();
      return;
    }
    const phoneNumber = document.getElementById("phone").value.trim();
    
    // Regex pattern for 10-digit phone number
    const pattern = /^01\d{9}$/;
    
    // Validate phone number and update message
    const isValid = pattern.test(phoneNumber);
    // Return validation status
    if (!isValid) {
      alert("برجاء ادخال الرقم بشكل صحيح");
      return;
    }
    if (document.getElementById("phone2").value) {
      const phoneNumber2 = document.getElementById("phone2").value.trim();
      const isValid2 = pattern.test(phoneNumber2);
      if (!isValid2) {
        alert("برجاء ادخال الرقم الثاني بشكل صحيح");
        return;
      }
    }
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    
    hours = String(hours).padStart(2, '0');
    
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    
    const formData = new FormData(form);
    
    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    
    });
    data["productColor"] = colorInput.value;
    data["Date"] = formattedDate;
    get_to_dash_order(data);
  });
});

function setupCountdown(campaignSelector) {
  var second = 1000; // 1000 milliseconds in a second
  var minute = second * 60;
  var hour = minute * 60;
  var countdownTime = 24 * hour; // 24 hours in milliseconds

  // Set the end time once, based on the current time
  var endTime = new Date().getTime() + countdownTime;

  function calculateRemaining() {
    var now = new Date().getTime();
    return endTime - now;
  }

  function countdown() {
    var gap = calculateRemaining();

    var textHour = Math.floor(gap / hour);
    var textMinute = Math.floor((gap % hour) / minute);
    var textSecond = Math.floor((gap % minute) / second);

    if (document.querySelector(campaignSelector + " .timer")) {
      document.querySelector(campaignSelector + " .hour").innerText = textHour;
      document.querySelector(campaignSelector + " .minute").innerText =
        textMinute;
      document.querySelector(campaignSelector + " .second").innerText =
        textSecond;
    }

    if (gap <= 0) {
      clearInterval(interval);
      document.querySelector(campaignSelector + " .timer").innerText =
        "EXPIRED";
    }
  }

  countdown(); // Initialize the countdown
  var interval = setInterval(countdown, 1000); // Update every second
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (!document.querySelectorAll || !document.body.classList) {
    return;
  }

  setupCountdown(".campaign-0"); // Start the countdown
});

const row = document.getElementById("move-this-row");
const container2 = document.getElementById("feed-backmobile-here");
const container = row.parentElement;
function moveRowToBottom() {
  if (window.innerWidth <= 991) {
    // Check if the screen width is 768px or less
    if (row.parentElement && row.parentElement !== container2) {
      container.removeChild(row); // Remove the row from its current position
      container2.appendChild(row);
    }
  } else {
    // Check if the screen width is 768px or less
    if (row.parentElement && row.parentElement !== container) {
      container.appendChild(row);
      container2.removeChild(row); // Remove the row from its current position
    }
  }
}
window.addEventListener("resize", moveRowToBottom);
moveRowToBottom();

document.querySelectorAll('.carousel-img').forEach(function(element) {
  element.addEventListener('click', function(event) {
      event.preventDefault();
      var newSrc = this.querySelector('img').getAttribute('src');
      document.getElementById('product-detail-img').setAttribute('src', newSrc);
  });
});