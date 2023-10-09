const email = document.querySelector("#email") as HTMLInputElement;
const title = document.querySelector("#title") as HTMLInputElement;
const text = document.querySelector("#text") as HTMLTextAreaElement;
const submitButton = document.querySelector(".btn.btn-primary") as HTMLElement;
const checkbox = document.querySelector(".form-check-input") as HTMLInputElement;

const formData: {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
} = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
};

function validateFormData(data: typeof formData): boolean {
  if (!data.email || !data.title || !data.text || !data.checkbox) {
    console.log("Please, complete all fields");
    return false;
  }
  return true;
}

function checkFormData(data: typeof formData): void {
  const { email } = data;
  const emails: string[] = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

  if (emails.includes(email)) {
    console.log("This email is already in use");
  } else {
    console.log("Posting data...");
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); 
  formData.email = email.value;
  formData.title = title.value;
  formData.text = text.value;
  formData.checkbox = checkbox.checked;

  if (validateFormData(formData)) {
    checkFormData(formData);
  }
});


// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом






















