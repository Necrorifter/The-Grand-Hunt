var i = '' + i + ''

i = 0

// just make sure that variable are global and not inside the local scope of function in order for it to be accessible by other file. You probarly can use return to make it global.

function startGame () {
  $(document).on('click', '.button', function () {
    const button = $(this).val()
    console.log('The Button is ' + button)

    if (button == 'test') {
      console.log('Something happen?')
      test('1')
    };
  })
};

function getMetadataForFileList (fileList) {
  for (const file of fileList) {
    // Not supported in Safari for iOS.
    const name = file.name ? file.name : 'NOT SUPPORTED'
    // Not supported in Firefox for Android or Opera for Android.
    const type = file.type ? file.type : 'NOT SUPPORTED'
    // Unknown cross-browser support.
    const size = file.size ? file.size : 'NOT SUPPORTED'
    console.log({ file, name, type, size })
  }
}

function readImage (file) {
  // Check if the file is an image.
  if (file.type && file.type.indexOf('image') === -1) {
    console.log('File is not an image.', file.type, file)
    return
  }

  const reader = new FileReader()
  reader.addEventListener('load', (event) => {
    img.src = event.target.result
  })
  reader.readAsDataURL(file)
}

function readFile (file) {
  const reader = new FileReader()
  reader.addEventListener('load', (event) => {
    const result = event.target.result
    // Do something with result
  })

  reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100
      console.log(`Progress: ${Math.round(percent)}`)
    }
  })
  reader.readAsDataURL(file)
}
