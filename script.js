// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
    const pdfContainer = document.getElementById('pdf-container');

    // Check if the browser supports PDF.js
    if (!window.pdfjsLib) {
        console.error('PDF.js library is not loaded.');
        return;
    }

    // Check if the browser is iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isIOS && isSafari) {
        // For iOS Safari, use an <iframe> element to render PDF
        const iframe = document.createElement('iframe');
        iframe.src = `https://docs.google.com/viewer?url=${url}&embedded=true`;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none'; // Remove iframe border
        pdfContainer.appendChild(iframe);
    } else {
        // For other browsers, use PDF.js
        window.pdfjsLib.getDocument(url).promise
        .then(function(pdfDoc) {
            // Load the first page
            pdfDoc.getPage(1).then(function(page) {
                // Calculate viewport width based on the device's screen size
                const screenWidth = window.screen.width;
                const aspectRatio = page.getViewport({ scale: 1 }).height / page.getViewport({ scale: 1 }).width;

                const viewportWidth = screenWidth;
                const viewportHeight = screenWidth * aspectRatio;

                // Create a canvas element with the calculated dimensions
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = viewportWidth;
                canvas.height = viewportHeight;

                // Append the canvas to the PDF container
                pdfContainer.appendChild(canvas);

                // Render the PDF page onto the canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: page.getViewport({ scale: 1 }),
                };
                page.render(renderContext).promise.then(function() {
                    console.log('Page rendered');
                }).catch(function(error) {
                    console.error('Error rendering page:', error);
                });
            });
        })
        .catch(function(error) {
            console.error('Error loading PDF:', error);
        });
    }
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astrolabe-sketches.pdf');
