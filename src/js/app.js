const useFormData = document.getElementById("useFormData");

useFormData.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("textEmail").value = "";
});
