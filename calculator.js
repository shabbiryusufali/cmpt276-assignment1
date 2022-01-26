function meanGrade() {
    let activityTable = document.getElementById("calculatorFields");
    let arrayOfActivities = activityTable.getElementsByTagName("tr");
    let scores = document.getElementsByName("score");
    let totals = document.getElementsByName("total");
    let averageGrade = 0;
    let itemsToDivideBy = 0;
    let alertEmpty = false;
    for (let i = 0; i < scores.length; i++) {
        let percent = arrayOfActivities[i].getElementsByTagName("p");
        if ((scores[i].value != 0 || totals[i].value != 0) && (scores[i].value != null && totals[i].value != null)) {
            averageGrade += scores[i].value / totals[i].value;
            console.log("Running average is: " + averageGrade);
            itemsToDivideBy++;
            percent[0].innerHTML = (scores[i].value / totals[i].value) * 100 + "%";
        } else {
            alertEmpty = true;
        }
    }

    if (alertEmpty == true) {
        alert("There is an activity that is either empty or is 0/0");

    }
    averageGrade = averageGrade / itemsToDivideBy;
    document.getElementById("result").innerHTML = "Result = " + averageGrade * 100 + "%";
}

function weightedAverage() {
    let activityTable = document.getElementById("calculatorFields");
    let arrayOfActivities = activityTable.getElementsByTagName("tr");
    let scores = document.getElementsByName("score");
    let totals = document.getElementsByName("total");
    let weights = document.getElementsByName("weight");
    let averageGrade = 0;
    let weightTotal = 0;
    let alertEmpty = false;
    for (let i = 0; i < scores.length; i++) {
        let percent = arrayOfActivities[i].getElementsByTagName("p");
        if ((scores[i].value != 0 || totals[i].value != 0) && (scores[i].value != null && totals[i].value != null)) {
            weightTotal += weights[i].value * 1;
            console.log("Weight of current item is: " + weights[i].value);
            averageGrade += (scores[i].value / totals[i].value) * weights[i].value;
            percent[0].innerHTML = (scores[i].value / totals[i].value) * 100 + "%";
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
    document.getElementById("result").innerHTML = "Result = " + averageGrade * 100 + "%";
}

function addActivity() {
    let calculatorActivities = [];
    let activityTable = document.getElementById("calculatorFields");
    calculatorActivities = activityTable.getElementsByTagName("tr");
    document.getElementById("calculatorFields").insertAdjacentHTML('beforeend', "<tr><td><label>Activity " + (calculatorActivities.length + 1) + "</label></td><td><label>A" + (calculatorActivities.length + 1) + "</label></td><td><input type=\"number\" name=\"weight\"></td><td><input type=\"number\" name=\"score\" onkeyup=\"updateWindow()\">/<input type=\"number\" name=\"total\" onkeyup=\"updateWindow()\"></td><td><p></p></td></tr>");
}

function updateWindow() {
    let activityTable = document.getElementById("calculatorFields");
    let arrayOfActivities = activityTable.getElementsByTagName("tr");
    console.log("Updating Percent");
    updatePercentage(arrayOfActivities);
}

function updatePercentage(arrayOfActivities) {
    for (let i = 0; i < arrayOfActivities.length; i++) {
        let arrayOfInputs = arrayOfActivities[i].getElementsByTagName("input");
        let activityPercent = 100 * (arrayOfInputs[1].value / arrayOfInputs[2].value);
        let percentToUpdate = arrayOfActivities[i].getElementsByTagName("p");
        if (isFinite(activityPercent)) {
            console.log(activityPercent);
            percentToUpdate[0].innerHTML = activityPercent + "%";
            console.log("Updated percentages");
        } else {
            percentToUpdate[0].innerHTML = "";
        }
    }

}