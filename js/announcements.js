const categories = [
    {name: 'Auto', icon: `<i class="fa-solid fa-car-rear"></i>`, announcementsCount: 123},
    {name: 'Elettronica', icon: `<i class="fa-solid fa-laptop"></i>`, announcementsCount: 564},
    {name: 'Moto', icon: `<i class="fa-solid fa-motorcycle"></i>`, announcementsCount: 230},
    {name: 'Abbigliamento', icon: `<i class="fa-solid fa-shirt"></i>`, announcementsCount: 321},
    {name: 'Sport', icon: `<i class="fa-solid fa-person-running"></i>`, announcementsCount: 90},
    {name: 'Giardinaggio', icon: `<i class="fa-solid fa-leaf"></i>`, announcementsCount: 50},
    {name: 'Casa', icon: `<i class="fa-solid fa-house-chimney"></i>`, announcementsCount: 134},
    {name: 'Cucina', icon: `<i class="fa-solid fa-fire-burner"></i>`, announcementsCount: 176},
];

const categoryWrapper = document.getElementById('categoryCardWrapper');

const generateCategoryCard = (category) => {
    const card = document.createElement('div');

    card.classList.add('col', 'mb-4');

    card.innerHTML = `
    <div class="category-card mx-2">
        <div class="border-dashed">
            <div class="icon">
                ${category.icon}
            </div>
            <div class="mt-1">
                <h3 class="fs-5">${category.name}</h3>
                <p class="mb-0">${category.announcementsCount} Annunci</p>
            </div>
        </div>
    </div>
    `;

    categoryWrapper.appendChild(card)

}

categories.forEach(generateCategoryCard);


const announcements = [
    {id: 0, price: '1000', title: 'coso', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore eum assumenda natus qui eveniet!', category: 'articoli', date: '18/05/2023', state: 'Vendo'},
    {id: 1, price: '1500', title: 'aggeggio', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quidem aliquam explicabo impedit qui ad?', category: 'mercanzia', date: '21/01/2023', state: 'Vendo'},
    {id: 2, price: '1320', title: 'arnese', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, animi incidunt voluptates magni minus alias!', category: 'merce', date: '19/06/2023', state: 'Cerco'},
    {id: 3, price: '980', title: 'oggetto', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur. Lorem ipsum dolor sit amet.', category: 'roba', date: '31/12/2023', state: 'Vendo'},
    {id: 4, price: '730', title: 'robo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rerum. Explicabo, quibusdam ratione!', category: 'prodotti', date: '07/10/2023', state: 'Vendo'},
    {id: 5, price: '10.000', title: 'pezzo', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'preparati', date: '17/04/2023', state: 'Vendo'},
    {id: 6, price: '1000', title: 'coso', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid labore eum assumenda natus qui eveniet!', category: 'articoli', date: '18/05/2023', state: 'Cerco'},
    {id: 7, price: '1500', title: 'aggeggio', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quidem aliquam explicabo impedit qui ad?', category: 'mercanzia', date: '21/01/2023', state: 'Cerco'},
    {id: 8, price: '1320', title: 'arnese', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, animi incidunt voluptates magni minus alias!', category: 'merce', date: '19/06/2023', state: 'Vendo'},
    {id: 9, price: '980', title: 'oggetto', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur. Lorem ipsum dolor sit amet.', category: 'roba', date: '31/12/2023', state: 'Cerco'},
    {id: 10, price: '730', title: 'robo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rerum. Explicabo, quibusdam ratione!', category: 'prodotti', date: '07/10/2023', state: 'Vendo'},
    {id: 11, price: '10.000', title: 'pezzo', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'preparati', date: '17/04/2023', state: 'Cerco'},
]

const announcementsWrapper = document.getElementById('announcementsWrapper');
let count = 0;

const generateAnnouncementCard = (announcement) => {
    const cardAnnouncement = document.createElement('div');
    if (count < 9) {
        count++;
    } else {
        count = 0;
    }
    

    cardAnnouncement.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-5');

    cardAnnouncement.innerHTML = `
    <div class="card-announcement">
        <div class="image overflow-hidden position-relative">
            <img src="https://picsum.photos/560/34${count}" alt="" class="img-fluid">
            <p class="type-announcement ${announcement.state == 'Vendo' ? 'bg-main' : 'bg-dark'} text-white">${announcement.state}</p>
        </div>
        <div class="details">
            <p class="fs-3 c-main fw-semibold mb-1">${announcement.price} $</p>
            <h3 class="c-dark fw-semibold">${announcement.title.toUpperCase()}</h3>
            <p class="c-neutral mb-0">${announcement.description}</p>
        </div>
        <div class="footer bg-white d-flex">
            <div class="col text-center py-2 c-main">
                <i class="fa-solid fa-tag"></i>
                ${announcement.category}
            </div>
            <div class="col text-center py-2 c-main">
                <i class="fa-solid fa-calendar-day"></i>
                ${announcement.date}
            </div>
        </div>
    </div>
    `

    announcementsWrapper.appendChild(cardAnnouncement);
}

announcements.forEach(generateAnnouncementCard);


/* 
    | //
   ( @ @ )
ooO__(_)__Ooo
٩(͡๏̯͡๏)۶
*/