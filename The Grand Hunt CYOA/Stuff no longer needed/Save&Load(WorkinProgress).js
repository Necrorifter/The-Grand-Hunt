function getMetadataForFileList(fileList) {
  for (const file of fileList) {
    // Not supported in Safari for iOS.
    const name = file.name ? file.name : 'NOT SUPPORTED';
    // Not supported in Firefox for Android or Opera for Android.
    const type = file.type ? file.type : 'NOT SUPPORTED';
    // Unknown cross-browser support.
    const size = file.size ? file.size : 'NOT SUPPORTED';
    console.log({file, name, type, size});
  }
}

function readImage(file) {
  // Check if the file is an image.
  if (file.type && file.type.indexOf('image') === -1) {
    console.log('File is not an image.', file.type, file);
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
      img.src = event.target.result;
    });
  reader.readAsDataURL(file);
}

function readFile(file) {
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    const result = event.target.result;
    // Do something with result
  });

  reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });
  reader.readAsDataURL(file);
}


//Work in Progress for loading and read file, try save as html file and read that, then do same for text file. Use $.get( url [, data ] [, success ] [, dataType ] ) for capture data from URL.
var HTML_FILE_URL = '/whatever/html/file.html';

$(document).ready(function() {
    $.get(HTML_FILE_URL, function(data) {
        var fileDom = $(data);
        fileDom.find('h2').each(function() {
            alert($(this).text());
        });
    });
});