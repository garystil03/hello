// Specify the location of the PDF.js worker script
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
  const pdfContainer = document.getElementById('pdf-container');

  // Function to load PDF content
  function loadPdfContent(pdfDoc) {
    // Load the first page
    pdfDoc.getPage(1).then(function(page) {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas width and height to match original document dimensions
      const viewport = page.getViewport({ scale: 1});
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Append the canvas to the PDF container
      pdfContainer.appendChild(canvas);

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
        pdfContainer.style.overflowY = 'scroll';
      }
    });
  }

  // For other browsers, use PDF.js
  pdfjsLib.getDocument(url).promise
  .then(function(pdfDoc) {
    // Show the PDF container
    pdfContainer.style.display = 'flex';
    // Load PDF content
    loadPdfContent(pdfDoc);
  })
  .catch(function(error) {
    console.error('Error loading PDF:', error);
  });
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astroSite38.pdf');
