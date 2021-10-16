// default data
let setdata = async ()=>
{
    let city = "dewas";
    try {
        let a = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad7e860e7126ffa38730665cafa9eac0`);
        let b = await a.json();
        let array = [b];

        let atm = document.getElementById("atm");
        atm.innerHTML = array[0].weather[0].main;
        
        let city_name = document.getElementById("city");
        updatename = String(city)
        city_name.innerHTML = updatename.toUpperCase();

        let temp = document.getElementById("temp");
        temp.innerHTML = Math.round(array[0].main.temp-273);

        let speed = document.getElementById("speed");
        speed.innerHTML = array[0].wind.speed;

        let pressure = document.getElementById("pressure");
        pressure.innerHTML = array[0].main.pressure;

        let humidity = document.getElementById("humidity");
        humidity.innerHTML = array[0].main.humidity;
        
        let icon = document.getElementById("icon");
        if(atm.innerHTML == "Clear")
        {
        icon.innerHTML = `<i class="fas fa-sun"></i>`
        }
        else if(atm.innerHTML == "Clouds")
        {
            icon.innerHTML = `<i class="fas fa-cloud"></i>`
        }
        else if(atm.innerHTML == "Haze")
        {
            icon.innerHTML = `<i class="fas fa-smog"></i>`
        }
        else if(atm.innerHTML == "Rain")
        {
            icon.innerHTML = `<i class="fas fa-cloud-sun-rain"></i>`
        }
        else if(atm.innerHTML == "Snow")
        {
            icon.innerHTML = `<i class="fas fa-snowman"></i>`
        }
        else if(atm.innerHTML == "Drizzle")
        {
            icon.innerHTML = `<i class="fas fa-cloud-sun-rain"></i>`
        }
        else
        {
            icon.innerHTML = `<i class="fas fa-sun"></i>`
        }
    } 
    catch (error) {
        alert("Please enter valid city name");
    }
}
 setdata();

// new updated data

let getdata = async ()=>
{
    let city = document.getElementById("inp").value;
    console.log(city);
    if(city == "")
    {
        alert("Please enter city name");
    }
    else{
    try {
        let a = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad7e860e7126ffa38730665cafa9eac0`);
        let b = await a.json();
        let array = [b];

        let atm = document.getElementById("atm");
        atm.innerHTML = array[0].weather[0].main;
        
        let city_name = document.getElementById("city");
        updatename = String(city)
        city_name.innerHTML = updatename.toUpperCase();

        let temp = document.getElementById("temp");
        temp.innerHTML = Math.round(array[0].main.temp-273);

        let speed = document.getElementById("speed");
        speed.innerHTML = array[0].wind.speed;

        let pressure = document.getElementById("pressure");
        pressure.innerHTML = array[0].main.pressure;

        let humidity = document.getElementById("humidity");
        humidity.innerHTML = array[0].main.humidity;
        
        let icon = document.getElementById("icon");
        if(atm.innerHTML == "Clear")
        {
        icon.innerHTML = `<i class="fas fa-sun"></i>`
        }
        else if(atm.innerHTML == "Clouds")
        {
            icon.innerHTML = `<i class="fas fa-cloud"></i>`
        }
        else if(atm.innerHTML == "Haze")
        {
            icon.innerHTML = `<i class="fas fa-smog"></i>`
        }
        else if(atm.innerHTML == "Rain")
        {
            icon.innerHTML = `<i class="fas fa-cloud-sun-rain"></i>`
        }
        else if(atm.innerHTML == "Snow")
        {
            icon.innerHTML = `<i class="fas fa-snowman"></i>`
        }
        else if(atm.innerHTML == "Drizzle")
        {
            icon.innerHTML = `<i class="fas fa-cloud-sun-rain"></i>`
        }
        else
        {
            icon.innerHTML = `<i class="fas fa-cloud"></i>`
        }
    } 
    catch (error) {
        alert("Please enter valid city name");
    }
}
}