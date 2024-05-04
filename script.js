// Specify the location of the PDF.js worker script
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';

// Function to load and render a PDF file
function loadPdf(url) {
  const pdfContainer = document.getElementById('pdf-container');

  // Function to render a PDF page onto a canvas
  function renderPdfPage(page) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match original document dimensions
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
      console.log('Page rendered successfully');
    }).catch(function(error) {
      console.error('Error rendering page:', error);
    });
  }

  // Load the PDF document
  pdfjsLib.getDocument(url).promise
    .then(function(pdfDoc) {
      // Show the PDF container
      pdfContainer.style.display = 'flex';

      // Render the first page
      pdfDoc.getPage(1).then(renderPdfPage);
    })
    .catch(function(error) {
      console.error('Error loading PDF:', error);
    });
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astroSite-38.pdf');
