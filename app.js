console.log ("build an app that fetches API")

const myForm =document.querySelector("form")

myForm.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();

    console.log ("handleSubmit has run");

    const data = new FormData (Data);

    console.log ("data", data);

    const formValues = Object.fromEntries (data);

    console.log ("form values are", formValues);

    
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
event.preventDefault();
const formData = new FormData(form);
console.log(formData); 
});

const jsObjectPlease = Object.fromEntries(formData);
console.log(jsObjectPlease);

console.log ("fetch a cup of coffee");
async function getCoffee() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log ("JSON Data:", json);




    console.log("data.image");
    const newImg = document.createElement("img");
    newImg.src = data.image;
newImg.width = 300;
document.getElementById("responseContainer").appendChild(newImg);
}
getCoffee();



async function getCupOfCoffee() {
    try {

    const response = await fetch('http://jsonplaceholder.typicode.com/todos/1');
    
    if (!response.ok) {
    throw new Error('Failed to fetch coffee: ' + response.status);
    }

    const coffee = await response.json();
    console.log("Here's your cup of coffee ☕️:", coffee);
    } catch (error) {
    console.error('Error fetching coffee:', error.message);
    }
}

getCupOfCoffee();
