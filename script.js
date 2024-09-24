const submit = document.querySelector("#submit");
const popup = document.querySelector('.popup');
const link = document.querySelector("#link");
const client = document.querySelector("#client");
const project = document.querySelector("#project");
const reviewer = document.querySelector("#reviewer");
const reviewee = document.querySelector("#reviewee");
const copy = document.querySelector("#copy");

submit.addEventListener("click", () => {
    //TODO add conditional to not do anything unless client & project are filled
    popup.classList.add("show");
    link.value = `https://www.cognitoforms.com/CriterionEdge/InterimPerformanceAssessment?entry={"Client":"${client.value}","Project":"${project.value}","YourEmail":"${reviewer.value}","RevieweeEmail":"${reviewee.value}"}`;    
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(link.value);
    const confirmation = document.createElement("div");
    confirmation.classList.add("confirmation");
    confirmation.textContent = "Copied to clipboard."
    popup.appendChild(confirmation);

    setTimeout(function(){
        popup.classList.remove("show");
        //popup.removeChild(confirmation);
        const confirmations = document.querySelectorAll(".confirmation")
        confirmations.forEach(div => {
            div.remove();
        });
    },7000);
})