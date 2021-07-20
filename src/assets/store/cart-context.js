import React from "react";

const cartContext = React.createContext({
  restaurantDescription: [
    {
      title: "Good Food",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "Good Drinks",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "Good mood",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "Enjoy a bay front moment",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 650-560-75644.",
    },
    {
      title: "Thank you!",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    },
  ],
  starters: [
    {
      title: "Avocado Toast",
      description: "Seasoned avocado on slice of cereal bread",
      price: "$10.00",
    },
    {
      title: "Tapas",
      description: "Varied choice of tapas to share with others",
      price: "$14.00",
    },
    {
      title: "Experience",
      description: "Mix of flavors and spices",
      price: "$10.00",
    },
    {
      title: "Sweety Salty",
      description: "Fresh cheese and kiwis on a slice of cereal bread",
      price: "$12.00",
    },
    {
      title: "Fajitas",
      description: "Fajitas to compose yourself with several ingredients",
      price: "$20.00",
    },
    {
      title: "Healthy Bowl",
      description: "Fresh fruits to pick to discover the season",
      price: "",
    },
    {
      title: "Pizzou",
      description: "Slices of gorgonzola pizza with fresh vegetables",
      price: "$15.00",
    },
    {
      title: "Purple Radish",
      description:
        "Sliced ​​radish with his seasoning of butter and coarse salt",
      price: "$8.00",
    },
  ],
  salads: [
    {
      title: "Fresh",
      description: "Strawberry, mint and feta salad",
      price: "$15.00",
    },
    {
      title: "Coriander",
      description: "Split peas, radish, mint and a touch of coriander",
      price: "$14.00",
    },
    {
      title: "Season Mix",
      description: "Pancetta, red cabbage, mozzarella and snow peas",
      price: "$18.00",
    },
    {
      title: "Spicy",
      description:
        "Squares of smoked chicken on a bed of eggplant and arugula salad",
      price: "$18.00",
    },
    {
      title: "César",
      description:
        "Iceberg salad with crispy chicken sprinkled with parmesan cheese",
      price: "$17.00",
    },
    {
      title: "Healthy",
      description:
        "Raw products, hard-boiled egg, aperges, tomatoes and fresh corn",
      price: "$17.00",
    },
    {
      title: "Romane",
      description: "Slices of red onion marinated in a bitter sauce, tomatoes",
      price: "$18.00",
    },
    {
      title: "Tomato Summer",
      description:
        "Salad composed of tomatoes, pieces of mozzarella and fresh basil from the garden",
      price: "$19.00",
    },
  ],
  main: [
    {
      title: "Pasta Del Arte",
      description: "Fresh pasta, candied tomatoes, truffle oil and parmesan",
      price: "$25.00",
    },
    {
      title: "Stuffed Eggplant",
      description: "Slice of eggplant stuffed with veal and mozzarella cheese",
      price: "",
    },
    {
      title: "Lemon Style",
      description: "Large spaghetti garnished with lemon and garlic",
      price: "$22.00",
    },
    {
      title: "Salmon Plancha",
      description:
        "Salmon cooked on a plank with its various cereal accompaniments",
      price: "$27.00",
    },
    {
      title: "Bowl",
      description: "Bulgur and guacamole with sliced ​​grilled peppers",
      price: "$21.00",
    },
    {
      title: "Chestnut Soup",
      description: "Chestnut soup with coriander and homemade cream",
      price: "$23.00",
    },
    {
      title: "Tender Ribs",
      description:
        "Slices of pork marinated in a Texan sauce served with potatoes",
      price: "$27.00",
    },
    {
      title: "Pizza Parmiggiana",
      description: "Tomato-based pizza with parmesan, mozzarella and truffle",
      price: "$24.00",
    },
  ],
  desserts: [
    {
      title: "Creamy Strawberry",
      description:
        "Bowl of strawberries on a bed of whipped cream and red fruit coulis",
      price: "$9.00",
    },
    {
      title: "Crispy Peach",
      description: "Muesli and peach wedges in a bowl of yogurt",
      price: "$9.00",
    },
    {
      title: "Passion Mango",
      description: "Flamed mango slice and iced sugar",
      price: "$9.00",
    },
    {
      title: "Myrtille Mix",
      description: "Blueberries mixed in sour cream and lemon",
      price: "$9.00",
    },
    {
      title: "Crêpe Suzette",
      description:
        "Thin pancakes wrapped around whipped cream and pieces of strawberry",
      price: "$9.00",
    },
    {
      title: "Tarte Tatin",
      description: "Slice of apple pie caramelized with sugar and butter",
      price: "$9.00",
    },
    {
      title: "Sweet Waffle",
      description: "Waffle with vanilla ice cream and pieces of fruit",
      price: "$9.00",
    },
    {
      title: "Panna Cotta",
      description:
        "Traditional dessert of Italian cuisine made with cream, milk, sugar, and strawberries",
      price: "$9.00",
    },
  ],
  brunch: [
    {
      title: "Honey Moon",
      description:
        "Complete brunch with hot chocolate, waffle, bowl of muesli and fresh fruit",
      price: "$20.00",
    },
    {
      title: "Cupcake Party",
      description: "Cupcakes of different fruity flavors to share",
      price: "$18.00",
    },
    {
      title: "Tangerine Tast",
      description:
        "Tangerine flamed and his fresh slices in pancakes with honey on top",
      price: "$15.00",
    },
    {
      title: "Yogourt Light",
      description:
        "Light yogurt mixed with fig, white grape, cherry, blueberry and lemon juice",
      price: "$12.00",
    },
    {
      title: "Banana Love",
      description: "Mountain of banana pancakes with maple syrup",
      price: "$15.00",
    },
    {
      title: "Sugar Power",
      description: "Donuts filled with applesauce with iced sugar",
      price: "$16.00",
    },
    {
      title: "Pistachio",
      description: "Pistachio yogurt with fig and crispy pistachios",
      price: "$13.00",
    },
    {
      title: "Fruits Salad",
      description:
        "Fruit salad with pomegranate, blueberries, orange and grapefruit",
      price: "$13.00",
    },
  ],
  drinks: [
    {
      title: "Old Fashioned",
      description: "Cocktail composed of a sugar soaked in bitter with whiskey",
      price: "$12.00",
    },
    {
      title: "Cosmopolitan",
      description:
        "Cocktail made with vodka, triple sec, lime, and cranberry juice",
      price: "$12.00",
    },
    {
      title: "Margarita",
      description: "Tequila and frozen lemonade cocktail",
      price: "$12.00",
    },
    {
      title: "Manhattan",
      description: "Cocktail made with whiskey, red vermouth, and bitter",
      price: "$12.00",
    },
    {
      title: "Mojito",
      description: "Cocktail made with rum, soda, lime, and fresh mint leaves",
      price: "$12.00",
    },
    {
      title: "Tequila Sunrise",
      description: "Cocktail made with tequila, orange juice, and grenadine",
      price: "$12.00",
    },
    {
      title: "Gin Tonic",
      description:
        "Cocktail made with gin and tonic water, accompanied by a slice of lime, and a slice of cucumber",
      price: "$12.00",
    },
    {
      title: "Frozen Gypsy",
      description: "Iced smoothie made with mixed red fruits and vodka",
      price: "$12.00",
    },
  ],
});

export default CartContext;
