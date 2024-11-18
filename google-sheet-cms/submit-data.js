(function () {
  const apiKey = "YOUR_YOUTUBE_API_KEY";

  // YouTube Search Functionality
  function setupYouTubeSearch() {
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.getElementById("results");

    searchButton.addEventListener("click", () => {
      const query = document.getElementById("songSearch").value.trim();
      if (!query) return;

      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayResults(data.items))
        .catch(error => console.error("Error fetching YouTube data:", error));
    });

    function displayResults(results) {
      resultsContainer.innerHTML = "";

      results.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.style.marginBottom = "1rem";
        videoElement.innerHTML = `
          <img src="${video.snippet.thumbnails.default.url}" alt="${video.snippet.title}" style="margin-right: 10px;" />
          <span>${video.snippet.title}</span>
          <button onclick="selectSong('${video.id.videoId}', '${video.snippet.title}')">Select</button>
        `;
        resultsContainer.appendChild(videoElement);
      });
    }
  }

  // Called when the user selects a song from the search results
  window.selectSong = function (videoId, title) {
    const songInput = document.getElementById("songSearch");
    songInput.value = `https://www.youtube.com/watch?v=${videoId}`;
    alert(`You selected: ${title}`);
  };

  // Get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function (k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
      } else if (elements[k].length > 0) { // special case for Edge's HTML collection
        return elements[k].item(0).name;
      }
    }).filter(function (item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];
      formData[name] = element.value;

      if (element.length) { // when our element has multiple items, get their values
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });

    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses";
    formData.formGoogleSendEmail = form.dataset.email || "";

    return { data: formData, honeypot: honeypot };
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    if (formData.honeypot) return false; // If a honeypot field is filled, assume it was done by a spam bot

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        var formElements = form.querySelector(".form-elements");
        if (formElements) formElements.style.display = "none"; // hide form
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) thankYouMessage.style.display = "block";
      }
    };

    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join("&");
    xhr.send(encoded);
  }

  function loaded() {
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }

    setupYouTubeSearch();
  }

  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
