const recipes = [
    {
        name: "Paneer Butter Masala",
        category: "Main Course",
        difficulty: 6,
        time: "Creamy, rich and one of my favourite comfort meals.",
        image: "images/paneer butter masala.jpeg",
    },

    {
        name: "Palak Paneer",
        category: "Main Course",
        difficulty: 7,
        time: "Palak and Paneer is usually considered as a bad combination but once in a while it won't hurt.",
        image: "images/palak paneer.jpeg",
    },

    {
        name: "Punjabi Style Paneer Masala",
        category: "Main Course",
        difficulty: 6,
        time: "It's so good, gives you a Pubjabi Dhaba Taste, Uses a lot of Ghee which makes it 10x better.",
        image:"images/punjabi style.jpeg",
    },

    {
        name: "Paneer Lababdaar",
        category: "Main Course",
        difficulty: 6,
        time: "Cooked in Luscious Tomato and Cashew Puree, a bit tangy.",
    },

    {
        name: "Paneer Biryani",
        category: "Main Course",
        difficulty: 8,
        time: "Pls don't curse me for calling it a Biryani.",
        image:"images/paneer biryani.jpeg",
    },

    {
        name: "White Sauce Pasta (Alfredo Pasta)",
        category: "Main Course",
        difficulty: 6,
        time: "Mamma mia!, Very Tasty and easy to make.",
    },

    {
        name: "Paneer Tikka Masala",
        category: "Main Course",
        difficulty: 8,
        time: "Too much work but it's worth it.",
    },

    {
        name: "Sev Tamatar",
        category: "Main Course",
        difficulty: 5,
        time: "There's barely any tomato, its just oil and sev. Unhealthy but tastyy.",
    },

    {
        name: "Pizza",
        category: "Main Course",
        difficulty: 5,
        time: "Once you make it theres no going back to pizza hut or dominos.",
    },

    {
        name: "Creamy Mushroom with Herbed Rice",
        category: "Main Course",
        difficulty: 8,
        time: "It's very easy to make, but cleaning the mushrooms is tiring.",
    },

    {
        name: "Veg Burger",
        category: "Main Course",
        difficulty: 6,
        time: "Tasty and easy af if you are getting a frozen patty."
    },

    {
        name: "Chilli Cheese Mushroom Toast",
        category: "Main Course",
        difficulty: 8,
        time: "Getting ghosted?, don't worry have mushroom on a bread which is toasted.",
    },

    {
        name: "Rasam Rice",
        category: "Main Course",
        difficulty: 6,
        time: "Popular South Indian Breakfast.",
    },

    {
        name: "Bisibele Bath",
        category: "Main Course",
        difficulty: 6,
        time: "Easily the best thing I found in Bangalore.",
    },

    {
        name: "Tomato Rice",
        category: "Main Course",
        difficulty: 6,
        time: "One pot dish, easy to make.",
    },

    {
        name: "Pav Bhaji",
        category: "Main Course",
        difficulty: 9,
        time: "Who doesn't like Pav Bhaji heh.",
        image:"images/pav bhaji.jpeg",
    },

    {
        name: "Misal Pav",
        category: "Main Course",
        difficulty: 8,
        time: "Unpopular opinion - misal pav is better than pav bhaji.",
    },

    {
        name: "Afghan Egg Curry",
        category: "Main Course",
        difficulty: 6,
        time: "अफ़गान egg curry, माशूक फ़रेबी घायल है तेरा दीवाना भाई वाह, भाई वाह|",
        image:"images/afgan egg curry.jpeg",
    },

    {
        name: "Egg Curry",
        category: "Main Course",
        difficulty: 6,
        time: "Goes with anything rice, roti or even with a spoon.",
    },

    {
        name: "Shakshuka",
        category: "Main Course",
        difficulty: 6,
        time: "Make it, if you wanna brag about being able to cook African dishes.",
        image:"images/shakshuka.jpeg",
    },

    {
        name: "Desi Shakshuka",
        category: "Main Course",
        difficulty: 6,
        time: "Og Shakshuka with a Desi twist.",
    },

    {
        name: "Egg Golden Coins",
        category: "Main Course",
        difficulty: 7,
        time: "Fancy ass name for chopped egg curry.",
    },

    {
        name: "Egg Biryani",
        category: "Main Course",
        difficulty: 8,
        time: "Takes a lot of time but it's worth it.",
        
    },

    {
        name: "Egg Bhurji",
        category: "Main Course",
        difficulty: 5,
        time: "Easy and Comforting, best answer to what can i do with these eggs",
        
    },

    {
        name: "Egg Ghotala",
        category: "Main Course",
        difficulty: 7,
        time: "A chaos on tawa, I love it cause of it's name.",
        
    },

    {
        name: "Lasagna",
        category: "Main Course",
        difficulty: 9,
        time: "I don't know why they call it a type of pasta LIKE HOW IS THIS PASTA?",
        
    },

    {
        name: "Jeera Aloo",
        category: "Main Course",
        difficulty: 4,
        time: "Takes literally 5 mins and tastes sooo gooood.",
        
    },

    

{
    name: "Gobi Manchurian",
    category: "Starters",
    difficulty: 7,
    time: "Crispy, spicy, saucy.",
},

{
    name: "Gobi Dry",
    category: "Starters",
    difficulty: 6,
    time: "No gravy, no problem. Crispy gobi with enough masala to keep things interesting.",
},

{
    name: "Mushroom Pepper Dry",
    category: "Starters",
    difficulty: 6,
    time: "Peppery & crispy.",
},

{
    name: "Mushroom Chilli",
    category: "Starters",
    difficulty: 6,
    time: "Mushrooms + chilli + Indo-Chinese flavours = can't really go wrong.",
},

{
    name: "Paneer Chilli",
    category: "Starters",
    difficulty: 7,
    time: "Paneer in its Indo-Chinese era.",
},

{
    name: "Honey Chilli Potato",
    category: "Starters",
    difficulty: 7,
    time: "Sweet, spicy and crispy.",
},

{
    name: "Babycorn Manchurian",
    category: "Starters",
    difficulty: 7,
    time: "Baby corn main sone di.",
},

{
    name: "Dhokla",
    category: "Snacks",
    difficulty: 7,
    time: "Soft & fluffy.",
},

{
    name: "Vada Pav",
    category: "Snacks",
    difficulty: 7,
    time: "Mumbai in a bun.",
},

{
    name: "Butter Garlic Maggi",
    category: "Snacks",
    difficulty: 3,
    time: "Maggi was already good. Adding butter and garlic was just unnecessary genius.",
},

{
    name: "Anda Maggi",
    category: "Snacks",
    difficulty: 4,
    time: "When regular Maggi isn't enough and you need to convince yourself you've made a proper meal.",
},

{
    name: "Sev Puri",
    category: "Snacks",
    difficulty: 6,
    time: "Crunchy, tangy, spicy and gone in approximately three minutes.",
    image: "images/sev puri.jpeg",
},

{
    name: "Pani Puri",
    category: "Snacks",
    difficulty: 8,
    time: "Bhaiya aur teekha banana.",
},

{
    name: "Dahi Puri",
    category: "Snacks",
    difficulty: 6,
    time: "Pani puri's calmer cousin. Same chaos, but with dahi.",
},

{
    name: "Bhajji (Pakora)",
    category: "Snacks",
    difficulty: 5,
    time: "Put almost anything in besan, fry it and suddenly it's a snack.",
},

{
    name: "Frankie / Roll",
    category: "Snacks",
    difficulty: 6,
    time: "Whatever is inside doesn't matter. Wrap it in a roti and call it a Frankie.",
},

{
    name: "Poha",
    category: "Snacks",
    difficulty: 4,
    time: "Quick, easy and somehow the perfect answer to 'what should I make for breakfast?",
},

{
    name: "Spring Roll",
    category: "Starters",
    difficulty: 8,
    time: "The filling is easy. Rolling them without making a mess is the actual challenge.",
},

{
    name: "Peri peri Fried Oyester Mushroom",
    category: "Starters",
    difficulty: 7,
    time: "Spicy, Crunchy and best alternative for fried chicken.",
    image: "images/oyester.jpeg",
},

{
    name: "Shahi Tukda",
    category: "Desserts",
    difficulty: 7,
    time: "Bread, milk, sugar and absolutely no reason for it to taste this luxurious.",
    images:"images/shahi tukda.jpeg",
},

{
    name: "Chocolate Pudding",
    category: "Desserts",
    difficulty: 5,
    time: "Chocolate fixes most problems.",
},

{
    name: "Milk Peda",
    category: "Desserts",
    difficulty: 7,
    time: "Tiny, sweet and way too easy to keep eating.",
},

{
    name: "Banana Cake",
    category: "Desserts",
    difficulty: 6,
    time: "The perfect excuse to finally use those bananas that have been sitting around for too long.",
},

{
    name: "Besan Laddu",
    category: "Desserts",
    difficulty: 8,
    time: "The roasting takes forever, but tastes soooo gooood.",
},

{
    name: "Rava Laddu",
    category: "Desserts",
    difficulty: 7,
    time: "Simple ingredients, a little patience.",
    image:"images/rava laddu.jpeg",
},

{
    name: "Rice Kheer",
    category: "Desserts",
    difficulty: 6,
    time: "Slow cooked, creamy and worth every minute of stirring.",
},

{
    name: "Seviyan",
    category: "Desserts",
    difficulty: 5,
    time: "Tastes like a celebration.",
}

    
];

const recipeGrid = document.getElementById("recipeGrid");

console.log(recipeGrid);
console.log(recipes);

recipes.forEach(function(recipe) {

    const recipeCard = document.createElement("article");

    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
    <img 
        src="${recipe.image}" 
        alt="${recipe.name}"
        class="recipe-image"
    >
        <div class="recipe-info">

            <p class="recipe-category">${recipe.category}</p>

            <h3>${recipe.name}</h3>

            <div class="recipe-details">
                <span>🍽️ ${recipe.time} </span>
            </div>

            <p>Difficulty: ${recipe.difficulty}/10</p>

        </div>
    `;

    recipeGrid.appendChild(recipeCard);

});