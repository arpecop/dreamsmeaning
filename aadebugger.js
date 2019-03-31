window.onerror = function (message, file, line, col, error) {
    console.log(message, file, line, col, error);
  return false;
};
window.addEventListener("error", function (e) {
  console.log(e.error.message);
  return false;
})
