const loading = document.querySelector(".loading");
const background = document.querySelector(".background");
const main = document.querySelector(".main");
const inputs = document.querySelectorAll(".code");

let load = 0;
const repeat = setInterval(handleBlur, 20); // create a handler for the setiinterval

//handleBlur
function handleBlur() {
  load++;

  if (load > 99) {
    clearInterval(repeat);
    main.style.display = "block";
    inputs[0].focus();
    handleKeyDown();
  }

  loading.innerText = load + "%";
  loading.style.opacity = (100 - load) / 100;

  background.style.filter = `blur(${10 - load + 60}px`;
  // background.style.filter = `blur(${100 - load}px`;
}



//handle keydown
function handleKeyDown() {
  inputs.forEach((input, index) => {
    input.addEventListener("keydown", (e) =>
      handleEventKeydown(e, index)
    );

    /* if (index === inputs.length - 1)
      input.addEventListener("change", handleSubmit); */
  });
}



// handle event keydown
function handleEventKeydown(e, idx) {
  if (e.key >= 0 && e.key <= 9) {
    if (idx === inputs.length - 1) {
      setTimeout(() => {
        inputs[0].focus();

        handleSubmit(); // send data to server
      });
    } else {
      setTimeout(() => {
        inputs[idx + 1].focus();
      }, 10);
    }
  }
}

// handle submit 

async function handleSubmit() {

  if (localStorage.getItem('completedTask') === '0') {
      console.log('The task has been completed alredy')
     // return
  }

  let code = "";
  inputs.forEach((item) => (code += item.value));

  console.log("code is : ", code);

  const url = "https://reqres.in/api/uers";

  const object = {
      classE06: code
  }

  const config = {
    method: "POST",
    body: JSON.stringify({object}),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      mode : 'no-cors'
    },
  };

  const response = await fetch(url, config);

  const data = await response.json()


  console.log(data)

  localStorage.setItem('completedTask', 0)

}