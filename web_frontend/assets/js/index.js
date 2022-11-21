document.addEventListener("DOMContentLoaded", () => {
    const sign_in_form = document.querySelector("#sign_in_form");
    const sign_up_form = document.querySelector("#sign_up_form");
    
    sign_in_form.addEventListener("submit", (event) => { submitSignInForm(event) });
    sign_up_form.addEventListener("submit", (event) => { submitSignUpForm(event) });
    selectAccessForm();
});

/**
 * DOCU: When Clicked. It will Show or Hide either Sign Up or Sign In Container <br>
 * Triggered: on page load <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function selectAccessForm(){
    const select_access_btn = document.querySelectorAll(".select_access_btn");

    for(let selected_btn of select_access_btn){
        selected_btn.addEventListener("click", (event) => {
            /* will remove hidden class on first element found */
            document.querySelectorAll(".container.hidden")[0].classList.remove("hidden");

            /* will add hidden class on nearest element */
            event.target.closest(".container").classList.add("hidden");
        });
    }
}

/**
 * DOCU: Checks if the username and password are correct then redirect to the wall, Otherwise will display an error <br>
 * Triggered: sign_in_form <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function submitSignInForm(event){
    const sign_in_fields = document.querySelectorAll("#sign_in_form .form_input_field");
    event.preventDefault();

    validateInput(sign_in_fields);

    if(!(document.querySelectorAll("#sign_in_form .input_error").length)){
        window.location.href = `${ window.location.origin }/views/timeline.html`
    }
}

/**
 * DOCU: Checks if signup fields are valid then redirect to the wall, Otherwise will display an error <br>
 * Triggered: sign_in_form <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function submitSignUpForm(event){
    const sign_up_fields = document.querySelectorAll("#sign_up_form .form_input_field");
    event.preventDefault();

    validateInput(sign_up_fields);

    if(!(document.querySelectorAll("#sign_up_form .input_error").length)){
        window.location.href = `${ window.location.origin }/views/timeline.html`
    }
}

/**
 * DOCU: Checks if the fields has value else will display an error <br>
 * Triggered: submitSignInForm(event)
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function validateInput(form_input_field){
    for(let field of form_input_field){
        field.addEventListener("focus", () => {
            field.classList.remove("input_error");
        })
        if(field.value){
            field.classList.remove("input_error");
        }else{
            field.classList.add("input_error")
        }
    }
}