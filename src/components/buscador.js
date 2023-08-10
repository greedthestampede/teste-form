"use strict";
export async function buscador() {
    const fullName = document.querySelector("#fullName");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");
    const button = document.querySelector("#button");
    const form = document.querySelector("#form");
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/u/3/d/e/1FAIpQLScmCfYptBZk8VUjrXUk3qQ16TP-2-oHN6aT4DqeBzxxailBEw/formResponse"; // your google form response URL e.g https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfVQ2ycW2AROnbmCmVw8I8Uc7Z40BZtjleJ_-IQjgtznQ_4cJl/formResponse

      const [state, setState] = useState({
        "entry.184592984": "", 
        "entry.1775019266": "", 
        "entry.1874650118": "",
        "entry.1658217200": ""
        })
    
      const handleSubmit = async (event) => {
      event.preventDefault();
      const fullNameValue = fullName.value;
      const emailValue = email.value;
      const subjectValue = subject.value;
      const messageValue = message.value;
      const formData = {
        "entry.184592984": fullNameValue, 
        "entry.1775019266": emailValue, 
        "entry.1874650118": subjectValue,
        "entry.1658217200": messageValue, 
      };
      const appendedFormData = newFormData({ ...formData });

      try {
        button.disabled = true;
        button.textContent = "processing...";
        const response = await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: appendedFormData,
        });
        alert("Form submitted to google spreadsheet successfully!");
      } catch (error) {
        alert("Something went wrong, please try again");
        console.log(error);
      } finally {
        button.disabled = false;
        button.textContent = "Submit";
      }
    };

    form.addEventListener("submit", handleSubmit);

    // A helper function to help convert the data to FormData
    const newFormData = (inputs) => {
      const formData = new FormData();
      const newArr = Object.entries(inputs);
      newArr.map((item) => {
        return formData.append(`${item[0]}`, item[1]);
      });
      return formData;
    };

}