const dishes = [
    {
        name: 'Italian pasta',
        price: 9.55
    },
    {
        name: 'Rice with veggies',
        price: 8.65

    },
    {
        name: 'Chicken with potatoes',
        price: 15.55
    },
    {
        name: 'Vegetarian Pizza',
        price: 6.45
    }
]

function getPrice(isTaxed) {
    let label = isTaxed ? 'Prices with 20% tax:' :'Prices without tax:'
    let footNote = isTaxed ? '(incl.tax)' : '';
    console.log(label)
    dishes.forEach((dish) => {
        console.log(`Dish: ${dish.name} Price${footNote}: $ ${isTaxed? dish.price * 1.2 : dish.price}`)
    })
}

getPrice(true);
