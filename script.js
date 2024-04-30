// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
  const pdfContainer = document.getElementById('pdf-container');

  // For other browsers, use PDF.js
  pdfjsLib.getDocument(url).promise
  .then(function(pdfDoc) {
    // Load the first page
    pdfDoc.getPage(1).then(function(page) {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas width and height to match original document dimensions
      const viewport = page.getViewport({ scale: 1 });
      const scale = pdfContainer.clientWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      // Append the canvas to the PDF container
      pdfContainer.appendChild(canvas);

      // Render the PDF page onto the canvas
      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport,
        // Adjust the rendering settings as needed
        // For example, you can increase the quality by setting 'renderingIntent' to 'default' or 'high-quality'
        // See: https://mozilla.github.io/pdf.js/api/draft/global.html#RenderingIntent
        // More options can be found in the PDF.js documentation
        renderingIntent: 'default', // or 'high-quality'
      };

      page.render(renderContext).promise.then(function() {
        console.log('Page rendered');
      }).catch(function(error) {
        console.error('Error rendering page:', error);
      });

      // Make the document vertically scrollable if necessary
      if (scaledViewport.height > window.innerHeight) {
        document.body.style.overflowY = 'scroll';
      }
    });
  })
  .catch(function(error) {
    console.error('Error loading PDF:', error);
  });
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astroSite.pdf');
