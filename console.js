(function(console) {
  console.log = function(data, filename) {
    if (!data) {
      console.error('Console.save: No data');
      return;
    }
    if (!filename) filename = 'console.json';
    if (typeof data === 'object') {
      data = JSON.stringify(data, undefined, 4);
    }
    const blob = new Blob([data], { type: 'text/json' });
    const e = document.createEvent('MouseEvents');
    const a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    console.warn(a);
  };
})(console);
