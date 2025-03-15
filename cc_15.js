// Task 1 - Creating Base Structure
//Completed in HTML


// Task 2 - Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department) {
    const riskContainer = document.getElementById("riskDashboard");

    const riskCard = document.createElement("div");
    riskCard.setAttribute("class","risk-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = riskName;

    const levelElement = document.createElement("p");
    levelElement.textContent = riskLevel;

    const departmentElement = document.createElement("span");
    departmentElement.textContent = department;
}
// Test Cases
addRiskItem("Lost Checks", "High", "Finance");
addRiskItem("Customer Contract Negotiatons", "Medium", "Marketing");
addRiskItem("Employee Retention", "Low", "Human Resources");


//Task 3 - Removing Risk Items

const removeButton = document.createElement("button");
removeButton.textContent = "Resolve";
removeButton.classList.add("remove-button");

removeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    riskContainer.removeChild(riskCard);
});

// Adding Elements to Risk Card

riskCard.appendChild(nameElement);
riskCard.appendChild(levelElement);
riskCard.appendChild(removeButton);
riskCard.appendChild(departmentElement);

//Add Card to Container

riskContainer.appendChild(riskCard);