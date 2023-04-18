"use strict";

bindPreview("cardholder", "Name");
bindPreview("card-number", "0000 1234 5678 9101");
bindPreview("month", "MM");
bindPreview("year", "YY");
bindPreview("cvc", "000");

//function for further consolidating the code
function bindPreview(formFieldSelector, defaultValue) {
  const formField = document.querySelector("#" + formFieldSelector);
  formField.addEventListener("input", (e) => {
    previewCardField(
      e.target.value,
      defaultValue,
      "#preview-" + formFieldSelector
    );
  });
}

//Function which consolidates the upper code
function previewCardField(inputValue, defaultValue, previewSelector) {
  let currentValue = inputValue;
  if (currentValue === "") {
    currentValue = defaultValue;
  }
  const previewElement = document.querySelector(previewSelector);
  previewElement.innerText = currentValue;
}

//Function to toggle Thank-You-Section
const thankYouSection = document.querySelector(".thank-you-section");
const formContainer = document.querySelector(".form-container");

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  thankYouSection.style.display = "block";
  formContainer.style.display = "none";
});
