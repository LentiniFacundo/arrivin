import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        "id": 1,
        "name": "Classic Cheeseburger",
        "description": "Esta hamburguesa clásica cuenta con una jugosa carne de res, queso cheddar derretido, lechuga crujiente, rodajas de tomate, pepinillos y cebolla, todo en un pan de ajonjolí.",
        "image": "https://raw.githubusercontent.com/LentiniFacundo/arrivinAPI/main/burgers/classic-cheeseburger.webp",
        "category": "burgers",
        "stock": 236,
        "price": 5500
    },
    {
        "id": 2,
        "name": "Bacon BBQ Burger",
        "description": "Una delicia ahumada, la Bacon BBQ Burger incluye una jugosa carne de res bañada en salsa barbacoa, tiras crujientes de tocino, queso cheddar derretido, aros de cebolla crujientes y lechuga fresca. Todo servido en un pan brioche tostado.",
        "image": "https://raw.githubusercontent.com/LentiniFacundo/arrivinAPI/main/burgers/bacon-bbq-burger.webp",
        "category": "burgers",
        "stock": 126,
        "price": 5958
    },
    {
        "id": 3,
        "name": "Mushroom Swiss Burger",
        "description": "Esta hamburguesa gourmet presenta una carne de res cubierta con champiñones salteados y queso suizo cremoso. La adición de cebollas caramelizadas y un toque de alioli de ajo en un suave pan de papa eleva el perfil de sabor.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/burgers/mushroom-swiss-burger.webp",
        "category": "burgers",
        "stock": 327,
        "price": 6129
    },
    {
        "id": 4,
        "name": "Spicy Jalapeño Burger",
        "description": "Para los amantes del picante, la Spicy Jalapeño Burger incluye una carne de res con queso pepper jack, rodajas frescas de jalapeño, lechuga, tomate y mayonesa de chipotle picante. Todo en un pan de ajonjolí tostado.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/burgers/spicy-jalapeno-burger.webp",
        "category": "burgers",
        "stock": 201,
        "price": 4690
    },
    {
        "id": 5,
        "name": "Avocado Bacon Burger",
        "description": "Una deliciosa variante con carne de res, queso cheddar derretido, rodajas frescas de aguacate, tocino crujiente, lechuga, tomate y mayonesa de lima. Todo en un pan integral.",
        "image": "https://raw.githubusercontent.com/LentiniFacundo/arrivinAPI/main/burgers/avocado-bacon-burger.webp",
        "category": "burgers",
        "stock": 94,
        "price": 5125
    },
    {
        "id": 6,
        "name": "Blue Cheese Burger",
        "description": "Esta hamburguesa está pensada para los amantes del queso azul, con carne de res, queso azul desmenuzado, cebollas caramelizadas, lechuga, tomate y un toque de glaseado balsámico. Todo servido en un pan brioche tostado.",
        "image": "https://raw.githubusercontent.com/LentiniFacundo/arrivinAPI/main/burgers/blue-cheese-burger.webp",
        "category": "burgers",
        "stock": 370,
        "price": 4999
    },
    {
        "id": 7,
        "name": "BBQ Pulled Pork Burger",
        "description": "Una opción contundente, esta hamburguesa incluye una carne de res cubierta con cerdo desmenuzado en salsa barbacoa, ensalada de col, pepinillos y queso cheddar derretido. Todo en un pan de pretzel tostado.",
        "image": "https://raw.githubusercontent.com/LentiniFacundo/arrivinAPI/main/burgers/bbq-pulled-pork-burger.webp",
        "category": "burgers",
        "stock": 150,
        "price": 6200
    },
    {
        "id": 8,
        "name": "Veggie Burger",
        "description": "Una deliciosa opción a base de plantas con una carne de vegetales hecha de frijoles negros y quinoa, cubierta con lechuga fresca, tomate, rodajas de aguacate, pepinillos y una salsa cremosa de hierbas. Todo en un pan integral tostado.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/burgers/veggie-burger.webp",
        "category": "burgers",
        "stock": 100,
        "price": 6399
    },
    {
        "id": 9,
        "name": "Teriyaki Pineapple Burger",
        "description": "Una variante tropical con una carne de res glaseada en salsa teriyaki, rodaja de piña a la parrilla, lechuga, tomate y queso suizo. Terminada con un toque de mayonesa de wasabi en un suave pan de papa.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/burgers/teriyaki-pineapple-burger.webp",
        "category": "burgers",
        "stock": 320,
        "price": 5799
    },
    {
        "id": 10,
        "name": "Double Decker Burger",
        "description": "La máxima indulgencia, esta hamburguesa de doble nivel incluye dos carnes de res, doble queso cheddar, lechuga, tomate, pepinillos, cebolla y salsa especial. Todo servido en un pan de ajonjolí para una experiencia clásica.",
        "image": "https://raw.githubusercontent.com/LentiniFacundo/arrivinAPI/main/burgers/double-decker-burger.webp",
        "category": "burgers",
        "stock": 266,
        "price": 5999
    },
    {
        "id": 11,
        "name": "Pizza BBQ Chicken",
        "description": "Una pizza de pollo a la barbacoa con trozos de pollo a la parrilla, salsa barbacoa, cebolla roja, cilantro y queso mozzarella sobre una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-bbq-chicken.webp",
        "category": "pizzas",
        "stock": 159,
        "price": 2900
    },
    {
        "id": 12,
        "name": "Pizza Cuatro Quesos",
        "description": "Una pizza de cuatro quesos con una mezcla de mozzarella, cheddar, parmesano y queso azul sobre una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-cuatro-quesos.webp",
        "category": "pizzas",
        "stock": 197,
        "price": 3100
    },
    {
        "id": 13,
        "name": "Pizza de Espinacas y Feta",
        "description": "Una pizza de espinacas y feta con hojas frescas de espinaca, queso feta desmenuzado, queso mozzarella y una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-espinaca.webp",
        "category": "pizzas",
        "stock": 133,
        "price": 2600
    },
    {
        "id": 14,
        "name": "Pizza Hawaiana",
        "description": "Una pizza hawaiana con jamón, trozos de piña, queso mozzarella y una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-hawaiana.webp",
        "category": "pizzas",
        "stock": 250,
        "price": 2850
    },
    {
        "id": 15,
        "name": "Pizza Margherita",
        "description": "Una pizza clásica Margherita con queso mozzarella fresco, rodajas de tomate y hojas de albahaca fresca sobre una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-margherita.webp",
        "category": "pizzas",
        "stock": 400,
        "price": 2500
    },
    {
        "id": 16,
        "name": "Pizza de Mariscos",
        "description": "Una pizza de mariscos con camarones, calamares, mejillones, queso mozzarella y una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-mariscos.webp",
        "category": "pizzas",
        "stock": 145,
        "price": 4500
    },
    {
        "id": 17,
        "name": "Pizza Meat Lover's",
        "description": "Una pizza para los amantes de la carne con pepperoni, salchicha, jamón, tocino, carne molida, queso mozzarella y una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-meat-lovers.webp",
        "category": "pizzas",
        "stock": 260,
        "price": 3900
    },
    {
        "id": 18,
        "name": "Pizza Pepperoni",
        "description": "Una pizza de pepperoni con una generosa cantidad de rodajas de pepperoni, queso mozzarella derretido y una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-pepperoni.webp",
        "category": "pizzas",
        "stock": 290,
        "price": 2700
    },
    {
        "id": 19,
        "name": "Pizza Vegetariana",
        "description": "Una pizza vegetariana con una variedad de vegetales frescos, incluyendo pimientos, cebollas, champiñones, aceitunas y tomates, cubierta con queso mozzarella sobre una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-vegetariana.webp",
        "category": "pizzas",
        "stock": 100,
        "price": 3400
    },
    {
        "id": 20,
        "name": "Pizza de Pollo al Pesto",
        "description": "Una pizza de pollo al pesto con pollo a la parrilla, salsa pesto, tomates secos, queso mozzarella y una corteza delgada y crujiente.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/pizzas/pizza-pollo-pesto.webp",
        "category": "pizzas",
        "stock": 311,
        "price": 3720
    },
    {
        "id": 21,
        "name": "Cosmopolitan",
        "description": "Un cosmopolitan clásico con diseño de vaso elegante y moderno, lleno de un líquido rosado vibrante, adornado con una torcedura de lima.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/cosmopolitan.webp",
        "category": "drinks",
        "stock": 30,
        "price": 1520
    },
    {
        "id": 22,
        "name": "Daiquiri",
        "description": "Un daiquiri clásico con diseño de vaso elegante y moderno, lleno de un líquido rosado claro, adornado con una rueda de lima.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/daiquiri.webp",
        "category": "drinks",
        "stock": 25,
        "price": 1490
    },
    {
        "id": 23,
        "name": "Gin Tonic",
        "description": "Un gin tonic clásico con diseño de vaso elegante y moderno, lleno de ginebra clara, agua tónica, cubos de hielo y una rodaja de lima.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/gin-tonic.webp",
        "category": "drinks",
        "stock": 150,
        "price": 2100
    },
    {
        "id": 24,
        "name": "Margarita",
        "description": "Un margarita clásica con borde salado, una rodaja de lima y un color verde vibrante.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/margarita.webp",
        "category": "drinks",
        "stock": 80,
        "price": 1559
    },
    {
        "id": 25,
        "name": "Martini",
        "description": "Un martini clásico con un diseño de vaso elegante y moderno, lleno de líquido claro, adornado con una aceituna y una fina torcedura de limón.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/martini.webp",
        "category": "drinks",
        "stock": 80,
        "price": 1990
    },
    {
        "id": 26,
        "name": "Mojito",
        "description": "Un mojito clásico con hojas frescas de menta, rodajas de lima y un líquido claro y burbujeante.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/mojito.webp",
        "category": "drinks",
        "stock": 65,
        "price": 1847
    },
    {
        "id": 27,
        "name": "Piña Colada",
        "description": "Una piña colada clásica con diseño de vaso elegante y moderno, llena de una cremosa piña colada, adornada con una rodaja de piña y una cereza.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/pina-colada.webp",
        "category": "drinks",
        "stock": 101,
        "price": 1996
    },
    {
        "id": 28,
        "name": "Ron con Coca-Cola",
        "description": "Un ron con Coca-Cola clásico con diseño de vaso elegante y moderno, lleno de ron oscuro, cola, cubos de hielo y una rodaja de lima.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/ron-coca.webp",
        "category": "drinks",
        "stock": 160,
        "price": 2350
    },
    {
        "id": 29,
        "name": "Tequila Sunrise",
        "description": "Un tequila sunrise clásico con diseño de vaso elegante y moderno, lleno de un líquido vibrante naranja y rojo, adornado con una rodaja de naranja y una cereza.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/tequila-sunrise.webp",
        "category": "drinks",
        "stock": 56,
        "price": 1770
    },
    {
        "id": 30,
        "name": "Whisky en las Rocas",
        "description": "Un whisky en las rocas clásico con un diseño de vaso elegante y moderno, lleno de whisky ámbar y grandes cubos de hielo claros.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/drinks/whisky.webp",
        "category": "drinks",
        "stock": 100,
        "price": 2650
    },
    {
        "id": 31,
        "name": "Taco de Barbacoa",
        "description": "Un taco de barbacoa con carne de res cocida a fuego lento, cebolla picada, cilantro fresco y un toque de limón en una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-barbacoa.webp",
        "category": "tacos",
        "stock": 200,
        "price": 2900
    },
    {
        "id": 32,
        "name": "Taco de Camarones",
        "description": "Un taco de camarones a la parrilla con rodajas de aguacate, lechuga rallada y una salsa de mayonesa picante en una tortilla de harina suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-camarones.webp",
        "category": "tacos",
        "stock": 190,
        "price": 3100
    },
    {
        "id": 33,
        "name": "Taco de Carnitas",
        "description": "Un taco de carnitas con cerdo cocido a fuego lento, cebolla picada, cilantro fresco y un toque de limón en una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-carnitas.webp",
        "category": "tacos",
        "stock": 215,
        "price": 2910
    },
    {
        "id": 34,
        "name": "Taco de Chorizo",
        "description": "Un taco de chorizo con chorizo picante, cebolla picada, cilantro fresco y un toque de limón en una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-chorizo.webp",
        "category": "tacos",
        "stock": 210,
        "price": 2990
    },
    {
        "id": 35,
        "name": "Taco de Desayuno",
        "description": "Un taco de desayuno con huevos revueltos, tocino, queso y salsa fresca en una tortilla de harina suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-desayuno.webp",
        "category": "tacos",
        "stock": 217,
        "price": 2566
    },
    {
        "id": 36,
        "name": "Taco al Pastor",
        "description": "Un taco al pastor con cerdo marinado, trozos de piña, cebolla picada y cilantro fresco en una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-pastor.webp",
        "category": "tacos",
        "stock": 212,
        "price": 3112
    },
    {
        "id": 37,
        "name": "Taco de Pescado",
        "description": "Un taco de pescado con pescado empanizado y frito, col rallada, salsa cremosa y una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-pescado.webp",
        "category": "tacos",
        "stock": 195,
        "price": 2990
    },
    {
        "id": 38,
        "name": "Taco de Pollo",
        "description": "Un taco de pollo a la parrilla con pico de gallo, lechuga rallada, queso y una tortilla de harina suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-pollo.webp",
        "category": "tacos",
        "stock": 232,
        "price": 2799
    },
    {
        "id": 39,
        "name": "Taco de Carne de Res",
        "description": "Un taco clásico de carne de res con carne molida sazonada, lechuga, tomate, queso rallado y una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-res.webp",
        "category": "tacos",
        "stock": 200,
        "price": 3079
    },
    {
        "id": 40,
        "name": "Taco Vegetariano",
        "description": "Un taco vegetariano con vegetales a la parrilla, incluyendo pimientos, calabacín y maíz, cubierto con salsa fresca y cilantro en una tortilla de maíz suave.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/tacos/taco-vegetariano.webp",
        "category": "tacos",
        "stock": 113,
        "price": 2860
    },
    {
        "id": 41,
        "name": "California Roll",
        "description": " Un California roll con cangrejo imitación, aguacate, pepino y cubierto con semillas de sésamo.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/california-roll.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6000
    },
    {
        "id": 42,
        "name": "Cucumber Roll",
        "description": "Un cucumber roll con rodajas frescas de pepino, aguacate y cubierto con semillas de sésamo.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/cucumber-roll.webp",
        "category": "sushi",
        "stock": 300,
        "price": 5999
    },
    {
        "id": 43,
        "name": "Dragon Roll",
        "description": "Un dragon roll con anguila, aguacate, pepino, y cubierto con finas rodajas de aguacate y salsa de anguila.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/dragon-rull-sushi.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6300
    },
    {
        "id": 44,
        "name": "Maki Sushi",
        "description": "Una variedad de maki rolls, incluyendo California rolls, spicy tuna rolls y cucumber rolls, cada pieza perfectamente elaborada con ingredientes frescos.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/maki-sushi.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6600
    },
    {
        "id": 45,
        "name": "Nigiri Sushi",
        "description": "Una variedad de nigiri, incluyendo salmón, atún y camarón, cada pieza perfectamente elaborada con pescado fresco sobre arroz avinagrado.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/nigiri-sushi.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6320
    },
    {
        "id": 46,
        "name": "Philadelphia Roll",
        "description": "Un Philadelphia roll con salmón ahumado, queso crema, pepino y cubierto con semillas de sésamo.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/philadelphia-roll.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6600
    },
    {
        "id": 47,
        "name": "Rainbow Roll",
        "description": "Un rainbow roll con capas de atún, salmón, camarón y aguacate sobre un California roll.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/rainbow-sushi.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6450
    },
    {
        "id": 48,
        "name": "Soft Shell Crab Roll",
        "description": "Un soft shell crab roll con cangrejo de caparazón blando, aguacate, pepino y cubierto con masago.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/soft-shell-crab.webp",
        "category": "sushi",
        "stock": 300,
        "price": 6800
    },
    {
        "id": 49,
        "name": "Spicy Tuna Roll",
        "description": "Un spicy tuna roll con relleno de atún picante, pepino, y cubierto con mayonesa picante y semillas de sésamo.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/spicy-runa.webp",
        "category": "sushi",
        "stock": 300,
        "price": 5559
    },
    {
        "id": 50,
        "name": "Tempura Roll",
        "description": "Un tempura roll con camarón tempura, aguacate, pepino, y cubierto con salsa de anguila y semillas de sésamo.",
        "image": "https://github.com/LentiniFacundo/arrivinAPI/raw/main/sushi/tempura-roll.webp",
        "category": "sushi",
        "stock": 300,
        "price": 8100
    }
];

const seedProducts = () => {
    products.map(({id, ...prodRest}) => {
        const productsRef = collection(db, "products")
        addDoc(productsRef, prodRest)
    })
    return
};

seedProducts()