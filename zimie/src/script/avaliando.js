// global var
let isVisible = false;

const hideOpt = () => {
  if (isVisible == true) {
    document.getElementById("opcao-pessoa").style = "display: none";
    isVisible = !isVisible;
  } else {
    document.getElementById("opcao-pessoa").style = "";
    isVisible = !isVisible;
  }
};

const removeOpt = (id) => {
  let pessoa = document.getElementById(id);
  addChildrenToSelect(id);
  pessoa.remove();
};

const addChildren = (id) => {
  let pessoa = document.getElementById(id);
  let nome = pessoa.textContent.split(" ").join("").split("\n").join("");
  let img = pessoa.innerHTML
    .split("img")[1]
    .split(" ")
    .join("")
    .split("class")[0];

  const loc = document.getElementsByClassName("amigos-list")[0];

  let idChar = Math.floor(Math.random() * (1000 - 10 + 1) + 10);

  const htmlValue = `
  <div id="${idChar}" class="amigo-component">
  <div  >
    <img ${String(img)} class="amigo-image"></img>
    <h3>${nome}</h3>
  </div>

  <div class="unfriend"  onclick="removeOpt('${idChar}')">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.36271 0.0160135C6.49253 0.0895735 5.54541 0.332519 4.77046 0.680903C2.93904 1.50425 1.43473 3.02546 0.658001 4.83953C-0.278607 7.0271 -0.213467 9.41405 0.841499 11.5608C1.84694 13.6068 3.77559 15.1792 5.98705 15.7559C6.6988 15.9415 7.16908 15.9984 8.00506 16C8.93713 16.0018 9.53178 15.9176 10.3357 15.67C12.4452 15.0203 14.2219 13.5033 15.1851 11.5293C15.5662 10.7484 15.7866 10.0523 15.9254 9.1919C16.0184 8.61501 16.0258 7.45205 15.94 6.89022C15.7327 5.53326 15.2196 4.29996 14.4122 3.21808C13.1183 1.48436 11.2202 0.367216 9.05055 0.0623604C8.64566 0.00549155 7.77138 -0.0185274 7.36271 0.0160135ZM8.5213 1.6136C9.93844 1.74243 11.2753 2.32709 12.307 3.26928C13.9943 4.81006 14.7372 7.08253 14.278 9.2986C13.5557 12.7851 10.0829 15.0403 6.62844 14.266C4.04601 13.6872 2.05328 11.5455 1.67314 8.94032C1.52221 7.90606 1.61163 6.94765 1.95316 5.93914C2.69663 3.74349 4.59738 2.11427 6.91002 1.69039C7.46455 1.58874 7.9785 1.56425 8.5213 1.6136ZM4.00033 8.01758V8.81612H8.00506H12.0098V8.01758V7.21903H8.00506H4.00033V8.01758Z"
        fill="#B62C2C"
      />
    </svg>
  </div>
</div>
  `;

  loc.insertAdjacentHTML("beforeend", htmlValue);

  removeChildrenFromSelect(id);
};

const removeChildrenFromSelect = (id) => {
  console.log(id);
  document.getElementById(id).remove();
};

const addChildrenToSelect = (id) => {
  let pessoaChild = document.getElementById(id);
  let nome = pessoaChild.innerHTML
    .split("h3")[1]
    .replace(">", "")
    .replace("</", "");

  let img = pessoaChild.innerHTML.split('<img src="')[1].split(" class")[0];

  let idChar = Math.floor(Math.random() * (1000 - 10 + 1) + 10);

  console.log({ nome, img });

  const htmlContent = `
    <div class="select option" id=${idChar} onclick="addChildren(${idChar})" >
    ${nome}
    <img src="${img}" class="optionimg" ></img>
  </div>
    `;

  const loc = document.getElementById("opcao-pessoa");

  loc.insertAdjacentHTML("beforeend", htmlContent);
};
