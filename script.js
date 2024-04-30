// Specify the location of the PDF.js worker script
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
  const pageContainer = document.querySelector('.page-container');

  // For other browsers, use PDF.js
  pdfjsLib.getDocument(url).promise
  .then(function(pdfDoc) {
    // Load the first page
    pdfDoc.getPage(1).then(function(page) {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas width and height to match original document dimensions
      const viewport = page.getViewport({ scale: 1});
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Append the canvas to the page container
      pageContainer.appendChild(canvas);

      // Render the PDF page onto the canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext).promise.then(function() {
        console.log('Page rendered');
      }).catch(function(error) {
        console.error('Error rendering page:', error);
      });

      // Make the document vertically scrollable if necessary
      if (viewport.height > window.innerHeight) {
        document.body.style.overflowY = 'scroll';
      }
    });
  })
  .catch(function(error) {
    console.error('Error loading PDF:', error);
  });
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astroSite-optimized.pdf');
