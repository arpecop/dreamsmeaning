window.onerror = function (message, file, line, col, error) {
  
  return false;
};
window.addEventListener('error', function(event) {

  console.log(event);
})
 
