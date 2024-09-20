const submit = document.querySelector("#submit");
const popup = document.querySelector('.popup');
const link = document.querySelector("#link");
const client = document.querySelector("#client");
const project = document.querySelector("#project");
const copy = document.querySelector("#copy");

submit.addEventListener("click", () => {
    popup.classList.add("show");
    link.value = `https://www.cognitoforms.com/CriterionEdge/InterimPerformanceAssessment?entry={"Client":"${client.value}","Project":"${project.value}"}`;

    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(link.value);
        const confirmation = document.createElement("div");
        confirmation.classList.add("confirmation");
        confirmation.textContent = "Copied to clipboard."
        popup.appendChild(confirmation);

        setTimeout(function(){
            popup.classList.remove("show");
        },7000);
    })
})