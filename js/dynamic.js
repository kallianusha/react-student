var root=document.getElementById("main");

var div1=document.createElement("div");
div1.classList.add("sub")
root.appendChild(div1);

var image=document.createElement('img');
image.src="image/icon1.jpg";
image.alt="icon";
image.classList.add('img');
div1.appendChild(image);

var heading=document.createElement("h2"); 
heading.textContent="Anusha Kalli";
div1.appendChild(heading);

var para=document.createElement("p") ;
para.textContent="python developer";
div1.classList.add("p");
div1.appendChild(para);

var para1=document.createElement("p") ;
para1.textContent="kallianusha1266@gmail.com";
div1.classList.add("p");
div1.appendChild(para1);

var para2=document.createElement("p");
para2.textContent="8500693655";
div1.classList.add("p");
div1.appendChild(para2);

var anc =document.getElement("a");
anc.href="resume.html";
anc.textContent="view profile";
anc.classList.add("a");
div1.appendChild(anc);


var div2=document.createElement("div");
div2.classList.add("sub")
root.appendChild(div2);

var image=document.createElement('img');
image.src="image/icon1.jpg";
image.alt="icon";
image.classList.add('img');
div2.appendChild(image);

var heading=document.createElement("h2"); 
heading.textContent="Sunitha";
div2.appendChild(heading);

var para=document.createElement("p") ;
para.textContent="web developer";
para.classList.add("p")
div2.appendChild(para)

var para1=document.createElement("p") ;
para1.textContent="vsunitha500@gmail.com";
para1.classList.add("p")
div1.appendChild(para1)

var para2=document.createElement("p");
para2.textContent="8500693655";
para2.classList.add("p")
div2.appendChild(para2)

var anc =document.getElement("a");
anc.href="resume.html";
anc.textContent="view profile";
anc.classList.add("a")
div2.appendChild(anc)
