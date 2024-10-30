let b=["hero",20,[1,2,3,4]]
console.log(b[2])
let a
a={name:"pavan",age:20,gender:"male",qualification:"Btech",
adress:{street:"BCcolony",pincode:523002}}
console.log(a['name'])
console.log(a.name)
console.log(a.adress.pincode)











<html>
    <head>
         <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="weather-container">
            <h1 class="heading-1">WEATHER APP</h1>
            <input id="user-input" class="input-1" type="text" placeholder="Enter a City">
            <br>
            <button class="btn-1" onclick="getWeather()">Get Weather</button>
            <h1 id="temperature" class="heading-2"></h1>
            <p id="description" class="para-1"></p>
        </div>

        <script src="script.js"></script>
    </body>
</html>










body{
    background-image: url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size: cover;
}

.weather-container{
    background-color:whitesmoke;
    width: 30vw;
    padding: 35px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0 10px gray;
}

.heading-1{
    font-family: 'Courier New', Courier, monospace;
    font-size: 45px;
}
.input-1{
    width: 390px;
    padding: 9px;
    color: gray;
    border-radius: 10px;
    border: 2px solid black;
    background-color: white;
    font-family: 'Lucida Sans';
    font-size: 23px;
}

.btn-1{
    width: 135px;
    padding: 10px;
    background-color:  #33b857;
    border-radius: 10px;
    border-width: 0px;
    color: white;
    font-family: roboto;
    margin-top: 20px;
}

.heading-2{
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;

}

.para-1{
    font-family: 'Courier New', Courier, monospace;
    font-size: 35px;

}


























let heading =  document.getElementById("temperature")
let paragraph = document.getElementById("description")



function process(data){

    let city = data.name 
    let temperature = data.main.temp 
    let description = data.weather[0].description
    
    heading.textContent = city 
    paragraph.textContent = `${temperature}, ${description}`

}


function getWeather(){

    let userInput = document.getElementById("user-input").value

    let cityName = userInput
    let apiKey = "48f6cea0227e31a5ce80bc6cecf376ca"
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;


    fetch(weatherUrl).then(response => response.json()).
    then(data => process(data)).
    catch(error => console.log("Error"))

}




