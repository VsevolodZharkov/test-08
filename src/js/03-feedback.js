import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const inputHandler = e => {
  const { name, value } = e.target;

  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  const formData = {
    ...parsedData,
    [name]: value,
  };

  const serlizedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, serlizedData);
};

const rehydrateData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (!parsedData) {
    return;
  }

  const inputNames = Object.keys(parsedData);

  inputNames.forEach(inputName => {
    const input = formRef.elements[inputName];

    input.value = parsedData[inputName];
  });
};

rehydrateData();

const submitHandler = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const finalData = {};

  for (const [key, value] of formData.entries()) {
    if (!value) {
      alert('please fill in all the fields!');
      return;
    }
    finalData[key] = value;
  }

  console.log(finalData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
};

formRef.addEventListener('input', throttle((evt) => {
	inputHandler(evt)
}, 500)
);
formRef.addEventListener('submit', submitHandler);
