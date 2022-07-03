function action_click(element, action) {
    let i = 0;
    for(i = 0; i < element.length; ++i)
        {
            element.item(i).onclick = action;
        }   
}

for(let a = 2 ; a<10;a++)
{
    for(let b = 1; b<10 ; b++)
        {
            let c = a*b;
            document.querySelector("body").innerHTML+=
`<div><span class="dan">${a}</span>*<span class="times">${b}</span> = <span class="gop">${c}</span></div>`;
        }
}

/*action_click(document.querySelectorAll("div"), function(){
     
    let i;
    let data = document.querySelectorAll("div");
    
    for(i = 0; i< data.length; ++i)
    {
        if(this.querySelector(".gop") != null && data.item(i).querySelector(".gop") != null)
           {
           if(this.querySelector(".gop").innerHTML == data.item(i).querySelector(".gop").innerHTML)
               {
                   if(this != data.item(i))
                   {
                        data.item(i).innerHTML = "";
                   }
               }
           }
    }
    this.innerHTML="";
})*/ // gop 값이 같은 줄을 없애기

/*action_click(document.querySelectorAll("div"), function() {
    
    let i;
    let data = document.querySelectorAll("div");
    
    for(i = 0; i< data.length; ++i)
    {
        if(this.querySelector(".dan") != null && data.item(i).querySelector(".dan") != null)
           {
           if(this.querySelector(".dan").innerHTML == data.item(i).querySelector(".dan").innerHTML)
                {
                    if(this != data.item(i))
                    {
                        data.item(i).innerHTML = "";
                    }
                }
            }
    }
    this.innerHTML="";
    })*/ //dan 값이 같은 값 다 없애기

/*action_click(document.querySelectorAll("div"), function() {
    
    let i;
    let data = document.querySelectorAll("div");
    
    for(i = 0; i< data.length; ++i)
    {
        if(this.querySelector(".times") != null && data.item(i).querySelector(".times") != null)
           {
           if(this.querySelector(".times").innerHTML == data.item(i).querySelector(".times").innerHTML)
                {
                    if(this != data.item(i))
                    {
                        data.item(i).innerHTML = "";
                    }
                }
            }
    }
    this.innerHTML="";
    })*/ // times 값이 같은 값을 다 없애기

action_click(document.querySelectorAll(".dan"), function() {
    
    let i;
    let data = document.querySelectorAll("div");

    for(i = 0; i< data.length; ++i)
    {
        if(this != null && data.item(i).querySelector(".dan") != null)
           {
           if(this.innerHTML == data.item(i).querySelector(".dan").innerHTML)
                {
                    if(this != data.item(i))
                    {
                        data.item(i).innerHTML = "";
                    }
                }
            }
    }
    this.innerHTML="";
})

action_click(document.querySelectorAll(".times"), function() {
    
    let i;
    let data = document.querySelectorAll("div");

    for(i = 0; i< data.length; ++i)
    {
        if(this != null && data.item(i).querySelector(".times") != null)
           {
           if(this.innerHTML == data.item(i).querySelector(".times").innerHTML)
                {
                    if(this != data.item(i))
                    {
                        data.item(i).innerHTML = "";
                    }
                }
            }
    }
    this.innerHTML="";
})

action_click(document.querySelectorAll(".gop"), function() {
    
    let i;
    let data = document.querySelectorAll("div");

    for(i = 0; i< data.length; ++i)
    {
        if(this != null && data.item(i).querySelector(".gop") != null)
           {
           if(this.innerHTML == data.item(i).querySelector(".gop").innerHTML)
                {
                    if(this != data.item(i))
                    {
                        data.item(i).innerHTML = "";
                    }
                }
            }
    }
    this.innerHTML="";
})

// 1.태그 별로 클릭 가능하게하기
// 2. 태그 별 이벤트 생성
// 2-1. dan이 같으면 사라짐
// 2-2. times가 같으면 사라짐
// 2-3. gop이 같으면 사라짐