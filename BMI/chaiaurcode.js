const form = document.querySelector('form');
// console.log(form.childNodes);

//this usecase will give you empty

//const height = document.querySelector('#height')



form.addEventListener('submit',function(e){
    e.preventDefault();

    //height,weight,submit
    const height = parseInt(document.querySelector('#height').value);
    console.log(document.querySelector('#height'));
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(weight);
    const results = document.querySelector('#results');

    if(height < 0 || height ==='' || isNaN(height) ){
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight < 0 || weight ==='' || isNaN(weight) ){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        
        
        if(bmi<18.6){
            results.innerHTML = `<span>Result: ${bmi}  <h1>underWeight</h1></span>`;        }
        else if(bmi>=18.6 && bmi <=24.9){
            results.innerHTML = `<span>Result: ${bmi}  <h1>fit</h1></span>`;
        }
        else{
            results.innerHTML = `<span>Result: ${bmi}  <h1>overWeight</h1></span>`;
        }
        
    }

    


})

// const childre = form.children;

//When you use the parseInt function in JavaScript to convert a string 
//to an integer, it tries to parse the string from left to right until 
//it encounters a character that is not a valid part of an integer. 
//Once it encounters an invalid character, it stops parsing and 
//returns the integer value it has parsed up to that point.
//console.log(parseInt('8aaa'));
// console.log(parseInt('6a6aa'));