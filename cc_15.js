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

}
// Test Cases
addRiskItem("Lost Checks", "High", "Finance");
addRiskItem("Customer Contract Negotiatons", "Medium", "Marketing");
addRiskItem("Employee Retention", "Low", "Human Resources");

//Task 4 - Categorizing Risks by Level
let riskItems = Array.from(document.querySelectorAll(".risk-card"));

function colorByRisk() {
    riskItems.forEach((card) => {
        if (card.textContent.includes(`High`)){
        card.style.backgroundColor = "red";
        card.style.color = "black";
        }
        else if (card.textContent.includes(`Medium`)){
            card.style.backgroundColor = "yellow";
            card.style.color = "black";
        }
        else if (card.textContent.includes(`Low`)){
            card.style.backgroundColor = "green";
            card.style.color = "black";
        }
    });
}
colorByRisk();

//Task 5 Implementing Bulk Updates

riskItems.forEach((card) => {
    const increaseButton = document.createElement("button");
    increaseButton.textContent = "Increase Risk Levels";
    increaseButton.classList.add("increase-button");

    increaseButton.addEventListener("click", function (event) {
        if (card.textContent.includes(`Medium`)){
            card.children[1].textContent = "High"
        }
        else if (card.textContent.includes(`Low`)){
            card.children[1].textContent = ("Medium")
        }
        colorByRisk();

    // Task 6 - Handling Event Propagation
    //Also in remove button
        event.stopPropagation();
    });

    card.appendChild(increaseButton);
})