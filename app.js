let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let baseURL = '';
let apiKey = '';

document.getElementById('zip').addEventListener('click', performAction);

function performAction(e){
const newData =  document.getElementById('').value;
getAnimal(baseURL,newData, apiKey)

}
const getAnimal = async (baseURL, weatherData, key)=>{

  const res = await fetch(baseURL+weatherData+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}

const postData = async ( url = '', data = {})=>{
  console.log(data);
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
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

postData('/add', {});