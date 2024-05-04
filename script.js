document.addEventListener("DOMContentLoaded", function() {
    var TABLE_WIDTH = 1200;

    var table = document.getElementById("myTable");
    table.style.width = TABLE_WIDTH + "px";

    // Helper function to resize images proportionally
    function resizeImageToWidth(image, targetWidth) {
        var aspectRatio = image.naturalWidth / image.naturalHeight;
        var targetHeight = targetWidth / aspectRatio;
        image.width = targetWidth;
        image.height = targetHeight;
    }

    // Row 1
    var row1 = table.insertRow();
    var cell1 = row1.insertCell();
    cell1.textContent = "Row 1 text";
    cell1.style.width = TABLE_WIDTH + "px";

    // Row 2
    var row2 = table.insertRow();
    var cell2_1 = row2.insertCell();
    var cell2_2 = row2.insertCell();
    var cell2_3 = row2.insertCell();
    cell2_1.textContent = "Row 2, Col 1 text";
    cell2_2.textContent = "Row 2, Col 2 text";
    cell2_3.textContent = "Row 2, Col 3 text";
    cell2_1.style.width = "400px";
    cell2_2.style.width = "400px";
    cell2_3.style.width = "400px";

    // Row 3
    var row3 = table.insertRow();
    var cell3_1 = row3.insertCell();
    var cell3_2 = row3.insertCell();
    var cell3_3 = row3.insertCell();
    cell3_1.textContent = "Inspired by the Islamic scholar Abu Ishaq Ibrahim al-Zarqali (b. 1029), I sketched construction lines to create astrolabes for use on each of the eight planets and Pluto, appending his trigonometry calculations with contemporary NASA data and JavaScript. Variation between the digital drawings results from each planet’s unique obliquity to orbit in addition to their distinct rotational and orbital periods.";
    cell3_2.textContent = "Row 3, Col 2 text";
    cell3_3.innerHTML = "Astrolabes for use on Mercury, Venus, Mars ... and even PlutoGary James Stilwell MDastrolabe.sketches@gmail.com https://astrolabe-sketches.site";
    row3.style.fontSize = "30px";
    cell3_1.style.width = "400px";
    cell3_2.style.width = "400px";
    cell3_3.style.width = "400px";

    // Row 4
    var row4 = table.insertRow();
    var cell4_1 = row4.insertCell();
    cell4_1.textContent = "Row 4 text";
    cell4_1.style.width = TABLE_WIDTH + "px";

    // Row 5
    var row5 = table.insertRow();
    var cell5_1 = row5.insertCell();
    cell5_1.textContent = "Row 5 text";
    cell5_1.style.width = TABLE_WIDTH + "px";

    // Row 6
    var row6 = table.insertRow();
    var cell6_1 = row6.insertCell();
    var img6_1 = new Image();
    img6_1.src = "planets/p1.png";
    img6_1.alt = "Planet 1";
    img6_1.onload = function() {
        resizeImageToWidth(img6_1, TABLE_WIDTH);
    };
    cell6_1.appendChild(img6_1);
    cell6_1.style.width = TABLE_WIDTH + "px";

    // Row 7
    var row7 = table.insertRow();
    var cell7_1 = row7.insertCell();
    cell7_1.textContent = "MERCURY";
    row7.style.fontSize = "20px";
    row7.style.fontStyle = "italic";
    cell7_1.style.width = TABLE_WIDTH + "px";

    // Row 8
    var row8 = table.insertRow();
    var cell8_1 = row8.insertCell();
    cell8_1.textContent = "Row 8 text";
    cell8_1.style.width = TABLE_WIDTH + "px";

    // Row 9
    var row9 = table.insertRow();
    var cell9_1 = row9.insertCell();
    var img9_1 = new Image();
    img9_1.src = "planets/p2.png";
    img9_1.alt = "Planet 2";
    img9_1.onload = function() {
        resizeImageToWidth(img9_1, TABLE_WIDTH);
    };
    cell9_1.appendChild(img9_1);
    cell9_1.style.width = TABLE_WIDTH + "px";

    // Row 10
    var row10 = table.insertRow();
    var cell10_1 = row10.insertCell();
    var cell10_2 = row10.insertCell();
    var cell10_3 = row10.insertCell();
    cell10_1.textContent = "Row 10, Col 1 text";
    cell10_2.textContent = "Row 10, Col 2 text";
    cell10_3.textContent = "Row 10, VENUS";
    row10.style.fontSize = "20px";
    row10.style.fontStyle = "italic";
    cell10_1.style.width = "400px";
    cell10_2.style.width = "400px";
    cell10_3.style.width = "400px";

    // Row 11
    var row11 = table.insertRow();
    var cell11_1 = row11.insertCell();
    cell11_1.textContent = "Row 11 text";
    cell11_1.style.width = TABLE_WIDTH + "px";

    // Row 12
    var row12 = table.insertRow();
    var cell12_1 = row12.insertCell();
    var img12_1 = new Image();
    img12_1.src = "planets/p3.png";
    img12_1.alt = "Planet 3";
    img12_1.onload = function() {
        resizeImageToWidth(img12_1, TABLE_WIDTH);
    };
    cell12_1.appendChild(img12_1);
    cell12_1.style.width = TABLE_WIDTH + "px";

    // Row 13
    var row13 = table.insertRow();
    var cell13_1 = row13.insertCell();
    var cell13_2 = row13.insertCell();
    var cell13_3 = row13.insertCell();
    cell13_1.textContent = "Row 13, Col 1 text";
    cell13_2.textContent = "Row 13, Col 2 text";
    cell13_3.textContent = "Row 13, Col 3 text";
    row13.style.fontSize = "20px";
    row13.style.fontStyle = "italic";
    cell13_1.style.width = "400px";
    cell13_2.style.width = "400px";
    cell13_3.style.width = "400px";

// Row 14
var row14 = table.insertRow();
var cell14_1 = row14.insertCell();
cell14_1.textContent = "Row 14 text";
cell14_1.style.width = TABLE_WIDTH + "px";

// Row 15
var row15 = table.insertRow();
var cell15_1 = row15.insertCell();
var img15_1 = new Image();
img15_1.src = "planets/p4.png";
img15_1.alt = "Planet 4";
img15_1.onload = function() {
    resizeImageToWidth(img15_1, TABLE_WIDTH);
};
cell15_1.appendChild(img15_1);
cell15_1.style.width = TABLE_WIDTH + "px";

// Row 16
var row16 = table.insertRow();
var cell16_1 = row16.insertCell();
cell16_1.textContent = "Row 16 text";
row16.style.fontSize = "20px";
row16.style.fontStyle = "italic";
cell16_1.style.width = TABLE_WIDTH + "px";

// Row 17
var row17 = table.insertRow();
var cell17_1 = row17.insertCell();
cell17_1.textContent = "Row 17 text";
cell17_1.style.width = TABLE_WIDTH + "px";

// Row 18
var row18 = table.insertRow();
var cell18_1 = row18.insertCell();
var img18_1 = new Image();
img18_1.src = "planets/p9.png";
img18_1.alt = "Planet 9";
img18_1.onload = function() {
    resizeImageToWidth(img18_1, TABLE_WIDTH);
};
cell18_1.appendChild(img18_1);
cell18_1.style.width = TABLE_WIDTH + "px";

// Row 19
var row19 = table.insertRow();
var cell19_1 = row19.insertCell();
var cell19_2 = row19.insertCell();
var cell19_3 = row19.insertCell();
cell19_1.textContent = "Row 19, Col 1 text";
cell19_2.textContent = "Row 19, Col 2 text";
cell19_3.textContent = "Row 19, Col 3 text";
row19.style.fontSize = "20px";
row19.style.fontStyle = "italic";
cell19_1.style.width = "400px";
cell19_2.style.width = "400px";
cell19_3.style.width = "400px";

// Row 20
var row20 = table.insertRow();
var cell20_1 = row20.insertCell();
cell20_1.textContent = "Row 20 text";
cell20_1.style.width = TABLE_WIDTH + "px";

// Row 21
var row21 = table.insertRow();
var cell21_1 = row21.insertCell();
var cell21_2 = row21.insertCell();
var cell21_3 = row21.insertCell();
cell21_1.textContent = "Row 21, Col 1 text";
cell21_2.textContent = "Row 21, Col 2 text";
cell21_3.textContent = "Row 21, Col 3 text";
row21.style.fontSize = "20px";
cell21_1.style.width = "400px";
cell21_2.style.width = "400px";
cell21_3.style.width = "400px";

// Row 22
var row22 = table.insertRow();
var cell22_1 = row22.insertCell();
cell22_1.textContent = "Row 22 text";
cell22_1.style.width = TABLE_WIDTH + "px";

// Row 23
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
cell23_1.style.width = "171px";
cell23_2.style.width = "171px";
cell23_3.style.width = "171px";
cell23_4.style.width = "171px";
cell23_5.style.width = "171px";
cell23_6.style.width = "171px";
cell23_7.style.width = "171px";

// Row 24
var row24 = table.insertRow();
var cell24_1 = row24.insertCell();
cell24_1.textContent = "Row 24 text";
cell24_1.style.width = TABLE_WIDTH + "px";

// Row 25
var row25 = table.insertRow();
var cell25_1 = row25.insertCell();
var cell25_2 = row25.insertCell();
var cell25_3 = row25.insertCell();
cell25_1.textContent = "Row 25, Col 1 text";
cell25_2.textContent = "Row 25, Col 2 text";
cell25_3.textContent = "Row 25, Col 3 text";
row25.style.fontSize = "20px";
cell25_1.style.width = "400px";
cell25_2.style.width = "400px";
cell25_3.style.width = "400px";

// Row 26
var row26 = table.insertRow();
var cell26_1 = row26.insertCell();
cell26_1.textContent = "Row 26 text";
cell26_1.style.width = TABLE_WIDTH + "px";

// Row 27
var row27 = table.insertRow();
var cell27_1 = row27.insertCell();
cell27_1.textContent = "Row 27 text";
cell27_1.style.width = TABLE_WIDTH + "px";

// Row 28
var row28 = table.insertRow();
var cell28_1 = row28.insertCell();
var cell28_2 = row28.insertCell();
var cell28_3 = row28.insertCell();
cell28_1.textContent = "Row 28, Col 1 text";
cell28_2.textContent = "Row 28, Col 2 text";
cell28_3.textContent = "Row 28, Col 3 text";
row28.style.fontSize = "20px";
cell28_1.style.width = "400px";
cell28_2.style.width = "400px";
cell28_3.style.width = "400px";

// Row 29
var row29 = table.insertRow();
var cell29_1 = row29.insertCell();
cell29_1.textContent = "Row 29 text";
cell29_1.style.width = TABLE_WIDTH + "px";
});


