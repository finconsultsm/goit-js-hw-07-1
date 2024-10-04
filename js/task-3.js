const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input",(Event) => {
    const trimmedValue = Event.currentTarget.value.trim();

    nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});

