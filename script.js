// now we have to add the remaining items..
const menu = [
  {
    id: 1,
    title: 'Pan Cakes',
    category: 'Breakfast',
    price: 2.55,
    img: 'item-1.jpeg',
    desc: 'A vanilla flavoured pancakes where you can feel the taste of the most iconic and natural honey'
  },
  {
    id: 2,
    title: 'Grill Burger',
    category: 'Lunch',
    price: 6.55,
    img: 'item-2.jpeg',
    desc: "A juicy beef grill burger where we can serve the most iconic and juicy layers of beef and best in the town",
  },

  {
    id: 3,
    title: 'vanilla shake',
    category: 'shakes',
    price: 1.35,
    img: 'item-3.jpeg',
    desc: "A sweet and the most refreshing shakes in the USA",
  },
  
  {
     id: 4,
    title: 'fresh Toast',
    category: 'Breakfast',
    price: 3.99,
    img: 'item-4.jpeg',
    desc: "A healthy and most hygenic breakfast in the town with you can start your day with full energy",
  },
  
  {
    id: 5,
    title: 'Beef Binda',
    category: 'Lunch',
    price: 9.55,
    img: 'item-5.jpeg',
    desc: "A juicy beef burger where we can serve the most iconic and juicy layers of beef and best in the town",
  },
  {
    id: 6,
    title: 'Strawberry shake',
    category: 'shakes',
    price: 2.55,
    img: 'item-6.jpeg',
    desc: "A strawberry and the most refreshing and the most tastefull shake with fresh strawberry on top",
  },

  {
     id: 7,
    title: 'beef sausage meal',
    category: 'Breakfast',
    price: 12.55,
    img: 'item-7.jpeg',
    desc: "A fresh beef layered sandwich where you can enjoy the most juicy and the chessy sausage in it...!",
  },
  
  {
    id: 8,
    title: 'Student Burger',
    category: 'Lunch',
    price: 1.55,
    img: 'item-8.jpeg',
    desc: "A reasonable and enjoyable burger meal with fresh fries for our students...!",
  },
  
  {
    id: 9,
    title: 'Special shake',
    category: 'shakes',
    price: 7.55,
    img: 'item-9.jpeg',
    desc: "A two person shake meal specially for the couples who wants to enjoy shake in one glass...!",
  },
  {
    id: 10,
    title: 'Steak',
    category: 'Dinner',
    price: 30.55,
    img: 'item-7.jpeg',
    desc: "A wonderfull beef steak with some hot seazling sauce and cheesy mozeralla sticks in it which makes it more tastefull and mouth watering...!"
  }
]
// firstly selects the section center where we need to add the html in it..
const sectionCenter = document.querySelector('.section-center') 

// now i need to select the buttons...

// now we have to select the btn container to show the buttons...
const container = document.querySelector('.btn-container')
// now firsly we have to load the content in it then use map to iterate the array...!
window.addEventListener('DOMContentLoaded',function()
{
  displayAllData(menu);
  displayMenuButtons();
// to getting rid of the commas in we use join method to add the strings..


// now we have to use the map method so we can acccess the categories from the menu array..

});


// now i had to add the function where all data of the window is pasted..
function displayAllData(e)
{
   // now use the map method to iterate it with parameter..
  let displayMenu = e.map(function(p)
{
  // As you can see that everything we placed in return is displaying so we need to put the actual html in it and using template strings we have to change the content which is availabe in the menu array..!
  return ` <article class="menu-item">
        <img src="${p.img}" alt="${p.img}" class="photo">
        <div class="item-info">
          <header>
            <h4>${p.title}</h4>
            <h4 class="price">$${p.price}</h4>
          </header>
          <p class="item-text">
            ${p.desc}
          </p>
        </div>
      </article>`
})
displayMenu = displayMenu.join("");
// console.log(displayMenu)
// now we have to add the all of the items which are in display menu into the section header which is the parent of all of the content..
// so we need to access it direcly and put in its innerhtml i-e:
 sectionCenter.innerHTML = displayMenu;
}



// last function to reduce code load
function displayMenuButtons()
{
  const categories = menu.reduce(function(value,item)
{
  if(!value.includes(item.category))
  {
    value.push(item.category);
  }
  return value;
},["all"]
);
const categorybtns = categories.map(function(category)
{
  return `<button class="filter-btn" data-id=${category}>${category}</button>
`
})
  .join("");
  container.innerHTML = categorybtns;
  const filterbtns = container.querySelectorAll('.filter-btn');

  filterbtns.forEach(function(btn)
{
  btn.addEventListener('click',function(e)
{
  // here we have to add the dataset
  const category= e.currentTarget.dataset.id;
  const menuCategory = menu.filter(function(menuItem)
{
  if(menuItem.category === category)
  {
    return menuItem;
  }
});

  if(category === 'all')
  {
    displayAllData(menu)
  }
  else{
    displayAllData(menuCategory)
  }
}); 
});
}