/**
 * Created by Stefan.
 */

function showPic(whichpic) {
    var titletext = whichpic.getAttribute("title");
    var description = document.getElementById('description');
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    description.firstChild.nodeValue = titletext;
}

//
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     // alert (body_element.childNodes.length);
//     alert(body_element.nodeType);
// }
//
// window.onload = countBodyChildren;

