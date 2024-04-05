// Function to initialize PDF.js and load the PDF file
function loadPdf(url) {
    const pdfContainer = document.getElementById('pdf-container');

    // Check if the browser is iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isIOS && isSafari) {
        // For iOS Safari, use an <embed> element to render PDF
        const embed = document.createElement('embed');
        embed.src = url;
        embed.width = '100%';
        embed.height = '100%';
        pdfContainer.appendChild(embed);
    } else {
        // For other browsers, use PDF.js
        pdfjsLib.getDocument(url).promise
        .then(function(pdfDoc) {
            pdfDoc.getPage(1).then(function(page) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                // Get the device pixel ratio
                const scale = window.devicePixelRatio || 1;

                // Get the viewport of the page
                const viewport = page.getViewport({ scale: 1 });

                // Calculate the canvas dimensions based on the viewport and device pixel ratio
                const canvasWidth = viewport.width * scale;
                const canvasHeight = viewport.height * scale;

                // Set canvas dimensions
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;

                // Set CSS width and height to ensure proper scaling
                canvas.style.width = `${viewport.width}px`;
                canvas.style.height = `${viewport.height}px`;

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
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astrolabe-sketches.pdf');
