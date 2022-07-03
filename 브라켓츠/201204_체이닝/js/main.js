function Create(tag,num1,num2){ //,clas
    let element = document.createElement(tag);
    //element.className = clas;
     
    document.querySelector("body").appendChild(element);
    document.querySelector(tag).innerHTML+=`${num1}*${num2}=${num1*num2}`;
    return Create;
}

Create("div",2,2)("span",2,4)