document.addEventListener("DOMContentLoaded", () => {
    const post_btn = document.querySelector(".post_btn");
    const timeline = document.querySelector("#timeline");

    timeline.addEventListener("click", (event) => { timelineActions(event) });              /* This will detect actions in timeline */
    post_btn.addEventListener("click", (event) => { createPost(event) });                   /* This will create a post */
});

/**
 * DOCU: This will detect actions in timeline <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function timelineActions(){
    focusPostField();
    focusTopicField();
    deleteButton();
    noButtonTopic();
    yesButtonTopic();
    editPostBtn();
    saveAction();
}

/**
 * DOCU: This will create a post <br>
 * Triggered: post_btn.addEventListener("click", (event) => { createPost(event) });<br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function createPost(event){
    const post_text_field = document.querySelector(".post_text_field");

    event.preventDefault();
    if(!(post_text_field.value.trim().length)){
        document.querySelector("#post_form").classList.add("input_error");
    }else{
        const timeline = document.getElementById("timeline");
        const topic_container = document.querySelector(".topic_container").cloneNode(true);

        topic_container.setAttribute("class", "topic_container");
        topic_container.querySelector(".topic_text_field.edit").innerHTML = post_text_field.value;
        topic_container.querySelector(".topic_text").innerHTML = post_text_field.value;
        post_text_field.value = "";

        timeline.appendChild(topic_container);
        document.querySelector("#no_post").classList.add("hidden");
    }
}

/**
 * DOCU: This will delete a post <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function deleteButton(){
    const delete_btns = document.querySelectorAll(".delete_btn");

    for(let delete_btn of delete_btns){
        delete_btn.addEventListener("click", () => {
            delete_btn.closest(".delete_btn_container").classList.add("active");
        });
    }
}

/**
 * DOCU: This will decline delete action <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function noButtonTopic(){
    const no_btns = document.querySelectorAll(".no_btn");

    for(let no_btn of no_btns){
        no_btn.addEventListener("click", () =>{
            no_btn.closest(".delete_btn_container").classList.remove("active");
        });
    }
}

/**
 * DOCU: This will confirm delete action <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function yesButtonTopic(){
    const yes_btns = document.querySelectorAll(".yes_btn");

    for(let yes_btn of yes_btns){
        yes_btn.addEventListener("click", () =>{
            yes_btn.closest(".topic_container").remove();
            if(document.querySelectorAll(".topic_container").length === 1){
                document.querySelector("#no_post").classList.remove("hidden");
            }
        });
    }
}

/**
 * DOCU: This will perform edit action <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function editPostBtn(){
    const edit_btns = document.querySelectorAll(".edit_btn");

    for(let edit_btn of edit_btns){
        edit_btn.addEventListener("click", () => {
            /* will find the nearest textarea then will focus */
            const edit_form = edit_btn.closest(".topic_container").children[2].children[0];
            const edit_text_field = edit_form.children[0];
            const last_character = edit_text_field.value.length;

            edit_form.classList.remove("hidden");
            edit_text_field.setSelectionRange(last_character, last_character);
            edit_text_field.focus();
        });
    }
}

/**
 * DOCU: This will save an action <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function saveAction(){
    const save_btns = document.querySelectorAll(".save_btn");

    for(let save_btn of save_btns){
        save_btn.addEventListener("click", (event) => {
            event.preventDefault();
            const text_field_edit = save_btn.closest(".topic_form_wrapper.edit").children[0];
            const topic_text = save_btn.closest(".topic_container").children[0];
        
            if(!(text_field_edit.value.trim().length)){
                text_field_edit.closest(".topic_form_wrapper.edit").classList.add("input_error");
            }else{
                topic_text.innerHTML = text_field_edit.value;
                text_field_edit.closest(".topic_form_wrapper.edit").classList.add("hidden");
            }
        });
    }
}

/**
 * DOCU: This will add class active on post field when focused <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function focusPostField(){
    const post_text_fields = document.querySelectorAll(".post_text_field");
    const post_form_wrapper = ".post_form_wrapper";

    detectFieldFocus(post_text_fields, post_form_wrapper);
}

/**
 * DOCU: This will add class active on topic field when focused <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function focusTopicField(){
    const topic_text_fields = document.querySelectorAll(".topic_text_field");
    const topic_form_wrapper = ".topic_form_wrapper";

    detectFieldFocus(topic_text_fields, topic_form_wrapper);
}

/**
 * DOCU: This will detect focused text fields <br>
 * Triggered: timeline.addEventListener("click", (event) => { timelineActions(event) }); <br>
 * Last Updated Date: November 21, 2022 
 * @author Harold
*/
function detectFieldFocus(text_fields, form_wrapper){
    for(let post_text_field of text_fields){
        post_text_field.addEventListener("focus", () => {
            post_text_field.closest(form_wrapper).classList.add("active");
        });
        post_text_field.addEventListener("input", () => {
            post_text_field.closest(form_wrapper).classList.remove("input_error");
        });
        post_text_field.addEventListener("blur", () => {
            post_text_field.closest(form_wrapper).classList.remove("active");
        });
    }
}
