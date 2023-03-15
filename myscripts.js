let data = {
    Name: "Naveen",
    Gender: "Male",
    State: "Delhi"
};

console.log(data);

let stringConvertion = JSON.stringify(data);

console.log(stringConvertion);

localStorage.setItem("myProfile", stringConvertion);

let getting = localStorage.getItem("myProfile");

let parsing = JSON.parse(getting);

console.log(parsing);
console.log(typeof(parsing));

//if we publish this then we can get the output in the console and in the inspect we can see the data in the local storage.