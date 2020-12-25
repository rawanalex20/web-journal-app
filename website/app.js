/* API credentials */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=';
const apiKey = '72265d737e3d151aa7160a92ffc0a15e';

/* eventlistner with function of series of actions*/
document.getElementById('generate').addEventListener('click', performAction);

/* perform a chain of get, post requests and update */
function performAction(){
  const zipCode = document.getElementById('zip').value;
  getWeather(baseURL, apiKey)
  .then(function(data){
    postData('/addData',{
      temperature: data.main.temp,
      date: new Date(),
      userResponse: zipCode})
    .then(updateUI('/getData'));
  })
}
  

/* get request function for weather data */
const getWeather = async (baseURL, apiKey)=>{
  const res = await fetch(baseURL + apiKey)
  try {
    const data = await res.json();
    return data;
  }
  catch(error) {
    console.log('get error ', error);
  }
}

/* post request function for weather data */
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },      
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("post error: ", error);
    }
}



// get request to update 
const updateUI = async (url) => {
  const request = await fetch(url);
  console.log('request', request)
  try{
    const allData = await request.json();
    const date = new Date();
    document.getElementById('temp').innerHTML = allData.temperature;
    document.getElementById('date').innerHTML = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    document.getElementById('content').innerHTML = allData.userResponse;
    console.log('try', allData)
  
  }catch(error){
    console.log("updateUI error", error);
  }
  }
