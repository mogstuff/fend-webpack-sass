function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    const apiKey = '4fc7c2f853c096220e99e961df027e50';

    let url =  'https://api.openweathermap.org/data/2.5/weather?' + 'q=' + formText + ',uk' + '&units=metric' +  '&appid=' + apiKey;


    console.log("::: Form Submitted :::")
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(function(data) {

        console.log('data here:');
        console.log(data);

        let results = document.getElementById('results');

        let h2 = document.createElement('h2');
        h2.innerText = 'Weather Today';

        let h3 = document.createElement('h3');
        h3.innerText = 'Location: ' + data.name;

        let temp = document.createElement('div');
        temp.innerText = 'Temperature (C) : ' + data.main.temp;

        results.appendChild(h2);
        results.appendChild(h3);
        results.appendChild(temp);

    })
}

export { handleSubmit }


