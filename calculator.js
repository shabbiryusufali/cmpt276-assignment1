document.getElementById("weightedAverage").addEventListener("click", weightedAverage);
document.getElementById("mean").addEventListener("click", meanGrade);
document.getElementById("addActivity").addEventListener("click", addActivity);
document.addEventListener("keyup", updateWindow);
document.addEventListener("click", updateWindow);

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
            percent[0].innerHTML = (scores[i].value / totals[i].value).toFixed(4) * 100 + "%";
        } else {
            alertEmpty = true;
        }
    }

    if (alertEmpty == true) {
        alert("There is at least one activity that is either empty or is 0/0");

    }
    averageGrade = (averageGrade / itemsToDivideBy).toFixed(4) * 1;
    if (Number.isFinite(averageGrade) == false) {
        console.log("ERRORED Average is: " + averageGrade);
        alert('ERROR: ANSWER IS "NOT A NUMBER" OR IS "INFINITE"');
        document.getElementById("result").innerHTML = "ERROR";
        return;
    }
    document.getElementById("result").innerHTML = averageGrade * 100 + "%";
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
            percent[0].innerHTML = (scores[i].value / totals[i].value).toFixed(4) * 100 + "%";
            console.log("Running average is: " + averageGrade);
            console.log("Weight Total is: " + weightTotal);
        } else {
            alertEmpty = true;
        }
    }
    if (alertEmpty == true) {
        alert("There is at least one activity that is either empty or is 0/0");

    }
    console.log("Weight Total is: " + weightTotal);
    averageGrade = (averageGrade / weightTotal).toFixed(4) * 1;
    if (Number.isFinite(averageGrade) == false) {
        console.log("ERRORED Average is: " + averageGrade);
        alert('ERROR: ANSWER IS "NOT A NUMBER" OR IS "INFINITE"');
        document.getElementById("result").innerHTML = "ERROR";
        return;
    }
    document.getElementById("result").innerHTML = averageGrade * 100 + "%";
}

function addActivity() {
    let calculatorActivities = [];
    let activityTable = document.getElementById("calculatorFields");
    calculatorActivities = activityTable.getElementsByTagName("tr");
    document.getElementById("calculatorFields").insertAdjacentHTML('beforeend', "<tr><td><label>Activity " + (calculatorActivities.length + 1) + "</label></td><td><label>A" + (calculatorActivities.length + 1) + "</label></td><td><input type=\"number\" name=\"weight\"></td><td><input type=\"number\" name=\"score\">/<input type=\"number\" name=\"total\"></td><td><p></p></td></tr>");
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
        if (Number.isFinite(activityPercent)) {
            console.log(activityPercent);
            percentToUpdate[0].innerHTML = activityPercent.toFixed(2) + "%";
            console.log("Updated percentages");
        } else {
            percentToUpdate[0].innerHTML = "";
        }
    }

}