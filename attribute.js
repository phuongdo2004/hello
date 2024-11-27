// DOM atribute
    var headingElement = document.querySelector("h1");
    // console.log( headingElement);
      // c1 lm cach nay cho theem attribute ddc khi js dc thuc thi chuw nguon code cua no thuc su ko dc them dc

              headingElement.title ="hello";

              // them class phai vs la className vi class no trung vs 1 tu khoa trong js nang cao 
                headingElement.className = "class";
    // c2 dung phg thuc 
          // headingElement.setAttribute("class" , "red");
          // headingElement.setAttribute("data" , "1");

          // lay ra gia tri getAttribute(name);
          // console.log(headingElement.getAttribute("class"));
          // console.log(headingElement.getAttribute("title"));
// innerText  , textContent 

// lay ra textNote cua element
var headingItem = document.querySelector(".class");
console.log(headingItem);
// 1 . innerText  , textContent lay ra text cua element
    console.log(headingItem.innerText);
    console.log(headingItem.textContent);
//  sua doi text 
    headingItem.innerText = "new heading";
    headingItem.textContent ="new ";
// geter lay ra 

// setter thay doi noi dung cua doi tg 

// khac nhau gia innerText va textContent 

// innerText trả lại những j mà bạn nhìn thấy 
//textContent trả lại tất acr những j có ở bên trong thẻ (vn khoảng cách giũa các thẻ con bên trong )




