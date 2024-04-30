// Specify the location of the PDF.js worker script
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
  const pdfContainer = document.getElementById('pdf-container');

  // For other browsers, use PDF.js
  pdfjsLib.getDocument(url).promise
  .then(function(pdfDoc) {
    // Load the first page (since it's a single-page document)
    pdfDoc.getPage(1).then(function(page) {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas width and height to match the container's dimensions
      const containerWidth = pdfContainer.clientWidth;
      const containerHeight = window.innerHeight; // Adjust as needed
      const viewport = page.getViewport({ scale: 1 });
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      canvas.width = containerWidth;
      canvas.height = containerHeight;

      // Append the canvas to the PDF container
      pdfContainer.appendChild(canvas);

      // Render the PDF page onto the canvas
      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport,
      };
      page.render(renderContext).promise.then(function() {
        console.log('Page rendered');
      }).catch(function(error) {
        console.error('Error rendering page:', error);
      });

      // Make the document vertically scrollable if necessary
      if (scaledViewport.height > containerHeight) {
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
