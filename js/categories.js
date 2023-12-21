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

    card.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'mb-4');

    card.innerHTML = `
    <div class="category-card">
        <div class="border-dashed">
            <div class="icon">
                ${category.icon}
            </div>
            <div class="mt-4">
                <h3 class="fs-4">${category.name}</h3>
                <p class="mb-0">${category.announcementsCount} Annunci</p>
            </div>
        </div>
    </div>
    `;

    categoryWrapper.appendChild(card)

}

categories.forEach(generateCategoryCard);


/* 
    | //
   ( @ @ )
ooO__(_)__Ooo
٩(͡๏̯͡๏)۶
*/