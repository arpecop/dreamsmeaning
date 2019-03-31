window.onerror = function (message, file, line, col, error) {
  key++;
   
  return false;
};
window.addEventListener("error", function (e) {
  alert(e.error.message);
 
  return false;
})
