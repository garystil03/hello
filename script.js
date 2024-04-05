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
            // Load the first page
            pdfDoc.getPage(1).then(function(page) {
                // Calculate viewport width and height based on the device's screen size
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                const aspectRatio = 1.4142; // Aspect ratio of A3 paper
                const minScale = Math.min(screenWidth / aspectRatio, screenHeight); // Min scale to fit the A3 paper

                // Limit the scale to avoid exceeding the canvas maximum size
                const maxScale = 1; // Adjust as needed based on device capabilities
                const scale = Math.min(minScale, maxScale);

                const viewport = page.getViewport({ scale });

                // Create a canvas element with the calculated dimensions
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                // Set canvas dimensions to match viewport
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                // Append the canvas to the PDF container
                pdfContainer.appendChild(canvas);

                // Render the PDF page onto the canvas
                page.render({ canvasContext: context, viewport: viewport });
            });
        });
    }
}

// Call the loadPdf function with the URL of your PDF file
loadPdf('astrolabe-sketches.pdf');
