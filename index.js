/////////////////////////////////////////////////////
/////// Collect Data from the index.html Form ///////
/////////////////////////////////////////////////////

// references for the front-end form
const form = document.querySelector('form');
const name = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');

// attach an event listener for the form
form.addEventListener('submit', (e) => {
// type of event --------^       ^-----^
// callback w/ e = event data ---^

    // prevent submission from auto refereshing page
    e.preventDefault();

    // see if user has actually entered values
    if (name.value && cost.value) {
        // create a new document to save to Firestore
        const item = {
            name: name.value,
            cost: parseInt(cost.value)
            //       ^-- convert string --> number
        };
        // submit the item to Firestore
        db.collection('expenses').add(item).then(res => {
            // promise returned, so response() ---^
            // set the form fields
            name.value = '';
            cost.value = '';
            error.textContent = '';
        })

    // if not, show the user an error
    } else {
        error.textContent = 'Oops! No values were entered.';
    }
})

// retreive the submitted data
// if the user didn't enter data, show an error
// submit the data object as a document to the Firestore database