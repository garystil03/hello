document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("myTable");

    // Row 1
    var row1 = table.insertRow();
    var cell1 = row1.insertCell();
    cell1.textContent = "Row 1 text";

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

    // Row 3 (3 columns) - Roboto Light, font size: 30px
    var row3 = table.insertRow();
    var cell3_1 = row3.insertCell();
    var cell3_2 = row3.insertCell();
    var cell3_3 = row3.insertCell();
    cell3_1.textContent = "Row 3, Col 1 text";
    cell3_2.textContent = "Row 3, Col 2 text";
    cell3_3.textContent = "Row 3, Col 3 text";
    row3.style.fontSize = "30px";

    // Row 4 (single column)
    var row4 = table.insertRow();
    var cell4_1 = row4.insertCell();
    cell4_1.textContent = "Row 4 text";

    // Row 5 (single column)
    var row5 = table.insertRow();
    var cell5_1 = row5.insertCell();
    cell5_1.textContent = "Row 5 text";

    // Row 6 (single column) - PNG file reference: p1.png
    var row6 = table.insertRow();
    var cell6_1 = row6.insertCell();
    cell6_1.innerHTML = '<img src="planets/p1.png" alt="Planet 1">';

    // Row 7 (single column) - Roboto Light Italic, font size: 20px
    var row7 = table.insertRow();
    var cell7_1 = row7.insertCell();
    cell7_1.textContent = "Row 7 text";
    row7.style.fontSize = "20px";
    row7.style.fontStyle = "italic";

    // Row 8 (single column)
    var row8 = table.insertRow();
    var cell8_1 = row8.insertCell();
    cell8_1.textContent = "Row 8 text";

    // Row 9 (single column) - PNG file reference: p2.png
    var row9 = table.insertRow();
    var cell9_1 = row9.insertCell();
    cell9_1.innerHTML = '<img src="planets/p2.png" alt="Planet 2">';

    // Row 10 (3 columns) - Roboto Light Italic, font size: 20px
    var row10 = table.insertRow();
    var cell10_1 = row10.insertCell();
    var cell10_2 = row10.insertCell();
    var cell10_3 = row10.insertCell();
    cell10_1.textContent = "Row 10, Col 1 text";
    cell10_2.textContent = "Row 10, Col 2 text";
    cell10_3.textContent = "Row 10, Col 3 text";
    row10.style.fontSize = "20px";
    row10.style.fontStyle = "italic";

    // Row 11 (single column)
    var row11 = table.insertRow();
    var cell11_1 = row11.insertCell();
    cell11_1.textContent = "Row 11 text";

    // Row 12 (single column) - PNG file reference: p3.png
    var row12 = table.insertRow();
    var cell12_1 = row12.insertCell();
    cell12_1.innerHTML = '<img src="planets/p3.png" alt="Planet 3">';

    // Row 13 (3 columns) - Roboto Light Italic, font size: 20px
    var row13 = table.insertRow();
    var cell13_1 = row13.insertCell();
    var cell13_2 = row13.insertCell();
    var cell13_3 = row13.insertCell();
    cell13_1.textContent = "Row 13, Col 1 text";
    cell13_2.textContent = "Row 13, Col 2 text";
    cell13_3.textContent = "Row 13, Col 3 text";
    row13.style.fontSize = "20px";
    row13.style.fontStyle = "italic";

    // Row 14 (single column)
    var row14 = table.insertRow();
    var cell14_1 = row14.insertCell();
    cell14_1.textContent = "Row 14 text";

    // Row 15 (single column) - PNG file reference: p4.png
    var row15 = table.insertRow();
    var cell15_1 = row15.insertCell();
    cell15_1.innerHTML = '<img src="planets/p4.png" alt="Planet 4">';

    // Row 16 (single column) - Roboto Light Italic, font size: 20px
    var row16 = table.insertRow();
    var cell16_1 = row16.insertCell();
    cell16_1.textContent = "Row 16 text";
    row16.style.fontSize = "20px";
    row16.style.fontStyle = "italic";

    // Row 17 (single column)
    var row17 = table.insertRow();
    var cell17_1 = row17.insertCell();
    cell17_1.textContent = "Row 17 text";

    // Row 18 (single column) - PNG file reference: p9.png
    var row18 = table.insertRow();
    var cell18_1 = row18.insertCell();
    cell18_1.innerHTML = '<img src="planets/p9.png" alt="Planet 9">';

    // Row 19 (3 columns) - Roboto Light Italic, font size: 20px
    var row19 = table.insertRow();
    var cell19_1 = row19.insertCell();
    var cell19_2 = row19.insertCell();
    var cell19_3 = row19.insertCell();
    cell19_1.textContent = "Row 19, Col 1 text";
    cell19_2.textContent = "Row 19, Col 2 text";
    cell19_3.textContent = "Row 19, Col 3 text";
    row19.style.fontSize = "20px";
    row19.style.fontStyle = "italic";

    // Row 20 (single column)
    var row20 = table.insertRow();
    var cell20_1 = row20.insertCell();
    cell20_1.textContent = "Row 20 text";

    // Row 21 (3 columns) - Roboto Light, font size: 20px
    var row21 = table.insertRow();
    var cell21_1 = row21.insertCell();
    var cell21_2 = row21.insertCell();
    var cell21_3 = row21.insertCell();
    cell21_1.textContent = "Row 21, Col 1 text";
    cell21_2.textContent = "Row 21, Col 2 text";
    cell21_3.textContent = "Row 21, Col 3 text";
    row21.style.fontSize = "20px";

    // Row 22 (single column)
    var row22 = table.insertRow();
    var cell22_1 = row22.insertCell();
    cell22_1.textContent = "Row 22 text";

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

    // Row 24 (single column)
    var row24 = table.insertRow();
    var cell24_1 = row24.insertCell();
    cell24_1.textContent = "Row 24 text";

    // Row 25 (3 columns) - Roboto Light, font size: 20px
    var row25 = table.insertRow();
    var cell25_1 = row25.insertCell();
    var cell25_2 = row25.insertCell();
    var cell25_3 = row25.insertCell();
    cell25_1.textContent = "Row 25, Col 1 text";
    cell25_2.textContent = "Row 25, Col 2 text";
    cell25_3.textContent = "Row 25, Col 3 text";
    row25.style.fontSize = "20px";

    // Row 26 (single column)
    var row26 = table.insertRow();
    var cell26_1 = row26.insertCell();
    cell26_1.textContent = "Row 26 text";

    // Row 27 (single column)
    var row27 = table.insertRow();
    var cell27_1 = row27.insertCell();
    cell27_1.textContent = "Row 27 text";

    // Row 28 (3 columns) - Roboto Light, font size: 20px
    var row28 = table.insertRow();
    var cell28_1 = row28.insertCell();
    var cell28_2 = row28.insertCell();
    var cell28_3 = row28.insertCell();
    cell28_1.textContent = "Row 28, Col 1 text";
    cell28_2.textContent = "Row 28, Col 2 text";
    cell28_3.textContent = "Row 28, Col 3 text";
    row28.style.fontSize = "20px";

    // Row 29 (single column)
    var row29 = table.insertRow();
    var cell29_1 = row29.insertCell();
    cell29_1.textContent = "Row 29 text";
});
