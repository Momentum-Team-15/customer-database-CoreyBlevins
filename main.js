const container = document.querySelector('section');


function buildGrid(customerArray) {
    for (let person of customerArray) {
        let customerDiv = document.createElement('div');
        let thumbnail = document.createElement('img');
        let name = document.createElement('h2');
        let email = document.createElement('p');
        let addressOne = document.createElement('p');
        let addressTwo = document.createElement('p');
        let birthDay =document.createElement('p');
        let birthDate = document.createElement('p');
        let customerSince = document.createElement('p');
        let enrollDate = document.createElement('p');
        
        thumbnail.src = `${person.picture.large}`;
        name.innerText = `${capitalizeFirstLetter(person.name.first)} ${capitalizeFirstLetter(person.name.last)}`;
        email.innerText = `${person.email}`;
        addressOne.innerText = `${person.location.street.number} ${person.location.street.name}`;
        addressTwo.innerText = `${person.location.city}, ${nameToAbbr(person.location.state)} ${person.location.postcode}`;
        birthDay.innerText = `Birthday:`;
        birthDate.innerText = `${moment(person.dob.date).format('MMM Do YYYY')}`;
        customerSince.innerText = `Customer since:`;
        enrollDate.innerText = `${moment(person.registered.date).format('MMM Do YYYY')}`;
        
        customerDiv.classList.add('person');
        email.classList.add('email');
        addressOne.classList.add('address-one');
        addressTwo.classList.add('address-two');
        birthDay.classList.add('title');
        birthDate.classList.add('birthdate');
        customerSince.classList.add('title');

        customerDiv.appendChild(thumbnail);
        customerDiv.appendChild(name);
        customerDiv.appendChild(email);
        customerDiv.appendChild(addressOne);
        customerDiv.appendChild(addressTwo);
        customerDiv.appendChild(birthDay);
        customerDiv.appendChild(birthDate);
        customerDiv.appendChild(customerSince);
        customerDiv.appendChild(enrollDate);
        container.appendChild(customerDiv);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


buildGrid(customers);