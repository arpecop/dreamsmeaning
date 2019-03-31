
    var console = {};
    var key = 0;
 console.log = function(log) {
  window.postMessage( JSON.stringify({log,type:typeof(log),line:true,key:key.toString(),odd:key % 2 == 0}));
  key++;
 };
 console.debug = console.log;
 console.info = console.log;
 console.warn = console.log;
 console.error = console.log;
 window.console = console;

window.onerror = function (message, file, line, col, error) {
  
  return false;
};
window.addEventListener('error', function(event) {

  console.log(event);
})
 
