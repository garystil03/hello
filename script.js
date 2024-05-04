document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("myTable");

    // Set minimum row height to 30 pixels
    table.style.minHeight = "30px";

    // Row 1
    var row1 = table.insertRow();
    var cell1 = row1.insertCell();
    cell1.textContent = "Row 1 text";
    row1.style.minHeight = "30px";

    // Row 2 (3 columns) - Roboto Light Italic, font size: 20px
    var row2 = table.insertRow();
    var cell2_1 = row2.insertCell();
    var cell2_2 = row2.insertCell();
    var cell2_3 = row2.insertCell();
    cell2_1.textContent = "Row 2, Col 1 text";
    cell2_2.textContent = "Row 2, Col 2 text";
    cell2_3.textContent = "Row 2, Col 3 text";
    row2.style.fontSize = "20px";
    row2.style.fontStyle = "italic";
    row2.style.minHeight = "30px";

    // Row 3 (3 columns) - Roboto Light, font size: 30px
    var row3 = table.insertRow();
    var cell3_1 = row3.insertCell();
    var cell3_2 = row3.insertCell();
    var cell3_3 = row3.insertCell();
    cell3_1.textContent = "Inspired by the Islamic scholar Abu Ishaq Ibrahim al-Zarqali (b. 1029), I sketched construction lines to create astrolabes for use on each of the eight planets and Pluto, appending his trigonometry calculations with contemporary NASA data and JavaScript. Variation between the digital drawings results from each planet’s unique obliquity to orbit in addition to their distinct rotational and orbital periods.";
    cell3_2.textContent = "Row 3, Col 2 text";
    cell3_3.textContent = "Astrolabes for use on Mercury, Venus, Mars ... and even Pluto\nGary James Stilwell MD\nastrolabe.sketches@gmail.com https://astrolabe-sketches.site";
    row3.style.fontSize = "30px";
    row3.style.minHeight = "30px";

    // Rows 4 to 29
    for (var i = 4; i <= 29; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.textContent = `Row ${i} text`;
        row.style.minHeight = "30px";
    }

    // Row 6 (single column) - PNG file reference: p1.png
    var row6 = table.insertRow();
    var cell6_1 = row6.insertCell();
    cell6_1.innerHTML = '<img src="planets/p1.png" alt="Planet 1" style="max-width: 2000px; height: auto;">';
    row6.style.minHeight = "30px";

    // Row 9 (single column) - PNG file reference: p2.png
    var row9 = table.insertRow();
    var cell9_1 = row9.insertCell();
    cell9_1.innerHTML = '<img src="planets/p2.png" alt="Planet 2" style="max-width: 2000px; height: auto;">';
    row9.style.minHeight = "30px";

    // Row 12 (single column) - PNG file reference: p3.png
    var row12 = table.insertRow();
    var cell12_1 = row12.insertCell();
    cell12_1.innerHTML = '<img src="planets/p3.png" alt="Planet 3" style="max-width: 2000px; height: auto;">';
    row12.style.minHeight = "30px";

    // Row 15 (single column) - PNG file reference: p4.png
    var row15 = table.insertRow();
    var cell15_1 = row15.insertCell();
    cell15_1.innerHTML = '<img src="planets/p4.png" alt="Planet 4" style="max-width: 2000px; height: auto;">';
    row15.style.minHeight = "30px";

    // Row 18 (single column) - PNG file reference: p9.png
    var row18 = table.insertRow();
    var cell18_1 = row18.insertCell();
    cell18_1.innerHTML = '<img src="planets/p9.png" alt="Planet 9" style="max-width: 2000px; height: auto;">';
    row18.style.minHeight = "30px";

    // Row 21 (3 columns) - Roboto Light, font size: 20px
    var row21 = table.insertRow();
    var cell21_1 = row21.insertCell();
    var cell21_2 = row21.insertCell();
    var cell21_3 = row21.insertCell();
    cell21_1.textContent = "Row 21, Col 1 text";
    cell21_2.textContent = "Row 21, Col 2 text";
    cell21_3.textContent = "Row 21, Col 3 text";
    row21.style.fontSize = "20px";
    row21.style.minHeight = "30px";

    // Row 23 (7 columns) - Roboto Light, font size: 30px
    var row23 = table.insertRow();
    var cell23_1 = row23.insertCell();
    var cell23_2 = row23.insertCell();
    var cell23_3 = row23.insertCell();
    var cell23_4 = row23.insertCell();
    var cell23_5 = row23.insertCell();
    var cell23_6 = row23.insertCell();
    var cell23_7 = row23.insertCell();
    cell23_1.textContent = "Row 23, Col 1 text";
    cell23_2.textContent = "Row 23, Col 2 text";
    cell23_3.textContent = "Row 23, Col 3 text";
    cell23_4.textContent = "Row 23, Col 4 text";
    cell23_5.textContent = "Row 23, Col 5 text";
    cell23_6.textContent = "Row 23, Col 6 text";
    cell23_7.textContent = "Row 23, Col 7 text";
    row23.style.fontSize = "30px";
    row23.style.minHeight = "30px";
});
