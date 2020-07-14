function myScope() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');

    const people = [];

    function receiveFormEvent(event) {
        event.preventDefault();

        const firstName = form.querySelector('.first_name');
        const lastName = form.querySelector('.last_name');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const valueFirstName = firstName.value;
        const valueLastName = lastName.value;
        const valueWeight = weight.value;
        const valueHeight = height.value;

        people.push({
            valueFirstName,
            valueLastName,
            valueWeight,
            valueHeight
        });

        console.log(people);

        res.innerHTML += `<p>${valueFirstName} ${valueLastName} ${valueWeight} ${valueHeight}</p>`;
    }

    form.addEventListener("submit", receiveFormEvent);
}

myScope();