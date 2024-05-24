/* let list_items = document.querySelectorAll('#menu li');
list_items.forEach((item) => {
    item.addEventListener('mouseover', () => {item.classList.add('active');});
item.addEventListener('mouseout',() => {item.classList.remove('active');});
}); */


let employees_list_item = document.querySelector('#active');
let employees_children_list = document.querySelector('#employ-child');
employees_list_item.addEventListener('click', () => {
    employees_children_list.style.display = employees_children_list.style.display === 'none' ? 'block' : 'none';
    employees_children_list.style.padding = 'unset';
 });

 let navigation_link = document.querySelectorAll('#menu li');
 navigation_link.forEach((link) => {
    link.addEventListener('click', () => {
        navigation_link.forEach((other_link)  => {
            other_link.classList.remove('active');
        });
        link.classList.add('active');
    });
 });