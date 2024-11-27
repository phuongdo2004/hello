// HTML


// 1. Element: id , classNAme , tag(ten the) , css selector , HTML colection 

// 2. Attribute
// 3. Text



// id nen dat duy nhat thoi ko dat trung nhau
        var headigNode = document.getElementById("heading");
        
        // thuc chat headigNode ko phai la the ma no la obj 
        // console.log({
        //   element: headigNode

        // });

// className 
// tra ve mang dung dc  vong lap de ung dung

          const headingNodes = document.getElementsByTagName("h1");
          // console.log(headingNodes)
// tagName 
          const tag = document.getElementsByTagName("p");
          // console.log(tag);


//css selector
          // var hass = document.querySelector('.box .heading-2:first-child');
          // // querySelectorAll 

          // console.log(hass);
// HTML collection 
                // lay tat ca cac form 
                        // console.log(document.forms);
                // lay tunng form 
                        // console.log(document.forms[0]);
                // lay qua id
                // khong the dat .form-1 vi sai cu phap ho tro dat ten bien cua js (document.forms.form-1)
                        // console.log(document.forms["form-1"]);

                //anchor tra ve tat ca cac the a co thuoc tinh name
                        // console.log(document.anchors);

                //


var box1 = document.querySelector(".box-1")
var listItemNode = box1.getElementsByTagName("li");

console.log(listItemNode);
// chu y 
// HTML collection => la 1 mang ca phan tu neu truy van bang the tra ve so nhieu
// nhu ( getElementsByTagname , getElementByClassname)

var headings = document.getElementsByTagName("h1");
console.log(headings);
// => la 1 HTML collection ko phai la 1 element ( nhu mang á)
// => neu muon lay element thi phai 
console.log(headings[0]);


// HTML collection 
        // cac the  img form a 
        console.log( document.forms); 










