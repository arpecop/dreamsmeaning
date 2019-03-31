window.onerror = function (message, file, line, col, error) {
  key++;
   
  return false;
};
window.addEventListener("error", function (e) {
 
  console.log(e.error.message);
  return false;
})
