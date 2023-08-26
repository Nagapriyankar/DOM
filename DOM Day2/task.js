

const countrydd = document.getElementById('countryDrop')
const statedd = document.getElementById('stateDrop')
const citydd = document.getElementById('cityDrop')


const states = {
    india: ['TN', 'Kerela', 'Andhra', 'Karnataka', 'Maharastra', 'UP'],
    usa: ['california','newyork','toronto','northeast']
}

populateState = (statedd, data) => {
    statedd.innerHTML = ''
    let option = document.createElement('option')
    option.text = '--select state--'
    statedd.appendChild(option)

    data.forEach(state => {
        let option = document.createElement('option')
        option.value = state
        option.textContent =  state
        statedd.appendChild(option)
    });
}


countrydd.addEventListener('change', function () { 
    statedd.removeAttribute('disabled')
    populateState(statedd,states[countrydd.value])
})



const districts = {
    TN: ['madurai','chennai','Trichy'],
    Kerela: ['kollam','tvm','cochi'],
    Andhra: ['tirupati','reigunda'],
    Krnataka: ['banglore','coorg']
}

populateDistrict = (citydd, data) => { 
    citydd.innerHTML = ''
    let option = document.createElement('option')
    option.text = '--select city--'
    citydd.appendChild(option)

    data.forEach((city) => { 
        let option = document.createElement('option')
        option.value = city
        option.textContent = city
        citydd.appendChild(option)
    })
}

statedd.addEventListener('change', function () { 
    citydd.removeAttribute('disabled')
    populateDistrict(citydd, districts[statedd.value] )
})