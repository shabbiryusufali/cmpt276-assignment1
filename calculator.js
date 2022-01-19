function meanGrade() {
    var scores = [];
    var totals = [];
    var percents = [];
    scores = document.getElementsByName("score");
    totals = document.getElementsByName("total");
    percents = document.getElementsByName("percent");
    var averageGrade = 0;
    var itemsToDivideBy = 0;
    var alertEmpty = false;
    for (let i = 0; i < scores.length; i++) {

        if ((scores[i].value != 0 || totals[i].value != 0) && (scores[i].value != null && totals[i].value != null)) {
            averageGrade += scores[i].value / totals[i].value;
            console.log("Running average is: " + averageGrade);
            itemsToDivideBy++;
            percents[i].innerHTML = (scores[i].value / totals[i].value) * 100 + "%";
        } else {
            alertEmpty = true;
        }
    }

    if (alertEmpty == true) {
        alert("There is an activity that is either empty or is 0/0");

    }
    averageGrade = averageGrade / itemsToDivideBy;
    document.getElementById("result").innerHTML = "Result = " + averageGrade;
}

function weightedAverage() {
    var scores = [];
    var totals = [];
    var weights = [];
    var percents = [];
    scores = document.getElementsByName("score");
    totals = document.getElementsByName("total");
    weights = document.getElementsByName("weight");
    percents = document.getElementsByName("percent");
    var averageGrade = 0;
    var weightTotal = 0;
    var alertEmpty = false;
    for (let i = 0; i < scores.length; i++) {
        if ((scores[i].value != 0 || totals[i].value != 0) && (scores[i].value != null && totals[i].value != null)) {
            weightTotal += weights[i].value * 1;
            console.log("Weight of current item is: " + weights[i].value);
            averageGrade += (scores[i].value / totals[i].value) * weights[i].value;
            percents[i].innerHTML = (scores[i].value / totals[i].value) * 100 + "%";
            console.log("Running average is: " + averageGrade);
            console.log("Weight Total is: " + weightTotal);
        } else {
            alertEmpty = true;
        }
    }
    if (alertEmpty == true) {
        alert("There is an activity that is either empty or is 0/0");

    }
    console.log("Weight Total is: " + weightTotal);
    averageGrade = averageGrade / weightTotal;
    document.getElementById("result").innerHTML = "Result = " + averageGrade;
}

function addActivity() {
    var calculatorActivities = [];
    calculatorActivities = document.getElementsByName("activity");
    var content = document.getElementById("calculatorFields").innerHTML;
    document.getElementById("calculatorFields").insertAdjacentHTML('beforeend', "<tr name=\"activity\"><td>Activity " + (calculatorActivities.length + 1) + "</td><td>A" + (calculatorActivities.length + 1) + "</td><td><input type=\"number\" name=\"weight\"></td><td><input type=\"number\" name=\"score\">/<input type=\"number\" name=\"total\"></td><td><p name=\"percent\"></p></td></tr>");
}