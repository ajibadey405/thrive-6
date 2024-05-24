let modal = document.getElementById("parent-modal");
let role = document.getElementById("assign-role");
let exit = document.getElementsByClassName("close")[0];
role.onclick = () => {
  modal.style.display = "block";
}
exit.onclick = ()  => {
  modal.style.display = "none";
}
window.onclick = (event)  => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// window.onclick = (event) => {event.target == modal?modal.style.display='none':modal.style.display='block'};
let navigation_link = document.querySelectorAll('#menu li');
 navigation_link.forEach((link) => {
    link.addEventListener('click', () => {
        navigation_link.forEach((other_link)  => {
            other_link.classList.remove('active');
        });
        link.classList.add('active');
    });
 });


 /* const data = [
	{
		role: 'Developer',
		title: 'Software Engineer',
		team: 'Engineering',
		keywords: ['javascript', 'react', 'nodejs']
	},
	{
		role: 'Designer',
		title: 'UI/UX Designer',
		team: 'Design',
		keywords: ['design', 'ux', 'ui']
	},
	// ...
];

const searchInput = document.getElementById('search-input');
const searchableContent = document.getElementById('searchable-content');

searchInput.addEventListener('input', () => {
	const searchQuery = searchInput.value.toLowerCase();
	const filteredData = data.filter((item) => {
		return (
			item.role.includes(searchQuery) ||
			item.title.includes(searchQuery) ||
			item.team.includes(searchQuery) ||
			item.keywords.some((keyword) => keyword.includes(searchQuery))
		);
	});
	
	// update the searchable content with the filtered data
	searchableContent.innerHTML = '';
	filteredData.forEach((item) => {
		const element = document.createElement('div');
		element.textContent = `${item.name} - ${item.title} - ${item.team}`;
		searchableContent.appendChild(element);
	});
});
 */
function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('#card-container');
    let l = document.getElementsByTagName('h3');
    for (let i = 0; i < l.length; i++) {
        let a = item[i].getElementsByTagName('h3'[0]);
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display='';
            
        } else {
            item[i].style.display='none';

        }
        
    }
}