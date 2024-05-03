// Specify the location of the PDF.js worker script
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
  const pdfContainer = document.getElementById('pdf-container');
  const loadingIndicator = document.getElementById('loading-indicator');

  // Function to load PDF content
  function loadPdfContent(pdfDoc) {
    // Load the first page
    pdfDoc.getPage(1).then(function(page) {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas width and height to match original document dimensions
      const viewport = page.getViewport({ scale: 1 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Center canvas horizontally
      canvas.style.margin = '0 auto';

      // Append the canvas to the PDF container
      pdfContainer.appendChild(canvas);

      // Render the PDF page onto the canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext).promise.then(function() {
        console.log('Page rendered');
        // Hide loading indicator once rendering is complete
        loadingIndicator.style.display = 'none';
      }).catch(function(error) {
        console.error('Error rendering page:', error);
      });
    });
  }

  // Show loading indicator
  loadingIndicator.style.display = 'block';

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
    // Hide loading indicator on error
    loadingIndicator.style.display = 'none';
  });
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astroSite.pdf');
