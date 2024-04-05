// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
    pdfjsLib.getDocument(url).promise
    .then(function(pdfDoc) {
        pdfDoc.getPage(1).then(function(page) {
            const pdfContainer = document.getElementById('pdf-container');
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // Get the device pixel ratio
            const scale = window.devicePixelRatio || 1;

            // Get the viewport of the page at 100% scale
            const viewport = page.getViewport({ scale: 1 });

            // Set canvas dimensions scaled by the device pixel ratio
            canvas.width = viewport.width * scale;
            canvas.height = viewport.height * scale;

            // Scale the context to match the device pixel ratio
            context.scale(scale, scale);

            pdfContainer.appendChild(canvas);
            page.render({ canvasContext: context, viewport: viewport });
        });
    })
    .catch(function(error) {
        console.error('Error loading PDF:', error);
    });
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astrolabe-sketches.pdf');
