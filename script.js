function generateMarksSheet() {
    var totalMarks = 100;
    var obtMarks1 = Number(document.getElementById('english').value);
    var obtMarks2 = Number(document.getElementById('urdu').value);
    var obtMarks3 = Number(document.getElementById('math').value);

    var perc1 = (obtMarks1 / totalMarks) * 100;
    var perc2 = (obtMarks2 / totalMarks) * 100;
    var perc3 = (obtMarks3 / totalMarks) * 100;
    var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
    var totalPerc = (totalObtMarks / (totalMarks * 3)) * 100;

    var resultHTML = `
        <table border="1">
            <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>English</td>
                <td>${totalMarks}</td>
                <td>${obtMarks1}</td>
                <td>${perc1.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Urdu</td>
                <td>${totalMarks}</td>
                <td>${obtMarks2}</td>
                <td>${perc2.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${totalMarks}</td>
                <td>${obtMarks3}</td>
                <td>${perc3.toFixed(2)}%</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalMarks * 3}</strong></td>
                <td><strong>${totalObtMarks}</strong></td>
                <td><strong>${totalPerc.toFixed(2)}%</strong></td>
            </tr>
        </table>
    `;

    document.getElementById("result").innerHTML = resultHTML;
    document.querySelector('.con-2').style.display = 'block';
}

function reset() {
    document.getElementById("result").innerHTML = "";
    document.querySelector('.con-2').style.display = 'none';
}