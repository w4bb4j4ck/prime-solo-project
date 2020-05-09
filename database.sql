CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "first_name" VARCHAR(80),
    "last_name" VARCHAR(80)
);

CREATE TABLE "recipes" (
    "id" SERIAL PRIMARY KEY,
    "recipe" VARCHAR(80) NOT NULL,
    "directions" VARCHAR(10000) NOT NULL,
    "calories" INT,
    "protein" INT,
    "sugar" INT,
    "avatar" VARCHAR(244),
    "image" VARCHAR(244),
    "created_at" DATE
);

CREATE TABLE "meal_plans" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "recipe_id" INT REFERENCES "recipes" ("id") ON DELETE CASCADE,
    "day" DATE
);

CREATE TABLE "units" (
    "id" SERIAL PRIMARY KEY,
    "unit" VARCHAR(80) NOT NULL
);

CREATE TABLE "ingredients" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "recipe_id" INT REFERENCES "recipes" ("id") ON DELETE CASCADE,
    "quantity" INT,
    "unit_id" INT REFERENCES "units"
);

CREATE TABLE "grocery_lists" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "status" BOOLEAN,
    "created_at" DATE
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "category" VARCHAR(80) NOT NULL
);

CREATE TABLE "list_items" (
    "id" SERIAL PRIMARY KEY,
    "list_id" INT REFERENCES "grocery_lists",
    "ingredient_id" INT REFERENCES "ingredients" ("id") ON DELETE CASCADE,
    "description" VARCHAR(244),
    "quantity" INT,
    "unit_id" INT REFERENCES "units",
    "category_id" INT REFERENCES "categories"
);

INSERT INTO "recipes" ("recipe", "directions", "calories", "protein", "sugar", "avatar", "image") 
VALUES ('Pozole', 'CHILI PASTE: 
Remove stems and seeds from chiles, put them in a bowl and pour boiling water over them. let them soak until they''re soft.
Transfer chiles into a blender with 1 1/2 cups of the water they soaked in. Sautee some garlic and half a chopped onion 
in a pan with oil. Add garlic and onion to blender and blend til smooth. Strain the mixture through a fine mesh sieve 
to remove skin and remaining seeds, you''ll probably end up with way more of the resulting chili paste than you need for the 
soup. Divide the extra into small portions and freeze(muffin tin works good for this). Now you have it ready for future cooking.
SOUP: 
Heat a couple Tbsp of oil in a big pot. Saute up some more garlic and the rest of the onion. Pour in 8 cups of broth and 2 of 
water and boil, stirring occasionally. Start adding chili paste until it''s as spicy as you like. Add salt, cumin, oregano 
to taste. Add beans, maiz blanco and shredded chicken, drop in epazote but don''t cut it, you need to take it out before 
eating. Simmer for 15 mins, and longer if you can', 100, 10, 1, '/avatar/orange.png', '/images/pozole-rojo.jpg'),
('Guacamole', 'Chop the onion and peppers in small pieces and put them in a big bowl. 
Add the juice of one lime and a pinch of salt and pepper. Dice the avocados and put them in the bowl(no need to smash them). 
Add the mayo and mustard and mix everything together. Dice the broiled eggs, throw them in and mix again adding salt, pepper, 
and more lime juice if needed. Finish with some chopped cilantro. Serve and enjoy.', 200, 20, 2, '/avatar/green.png', 
'/images/guacamole.jpg'),
('Thoman Salad', 'Slice the red onion in small strips and put them in a bowl, cook the bacon(make it crispy) and break it 
into little pieces. Pour the veggie mix into the bowl, add the bacon bits and the raisins. Stir in a separate small bowl the 
sugar, apple cider vinager and mayo and add it to the salad when uniform. Mix thoroughly and put in the fridge for 30 mins.', 
300, 30, 3, '/avatar/blue.png', '/images/thoman-salad.jpg'),
('Garbanzos', 'Cook the whole chicken using a pressure cooker or "InstaPot", add garlic, thyme, sage, oregano, salt and water.
When done, move the chicken to a bowl and use a strainer to filter the remaining chicken broth. Then, clean any remains 
in the pot, add the broth back in along with the chickpeas and cook for 20 mins. Dice the onion, red pepper, potatoes and 
carrots while you wait. After the 20 mins, carefully open pot and add the potatoes and carrots, and cook for another 10 mins. 
Finish by adding the shredded chicken and some cilantro', 400, 40, 4, '/avatar/green.png', '/images/garbanzos.jpg'),
('Skagen', 'Squeeze the moisture out of the shrimp, chop it as much as possible and put it in a bowl.
Add a red onion and a bunch of fresh dill very finely chopped, 3 tablespoons extra virgin olive oil, zest and juice of a lemon.
Add a bunch of a grated hard cheese(parmesan). Add mayo, season with sea salt and freshly ground black pepper.
Refrigerate for at least 30 minutes, eat with loaf of brioche or soft, white bread', 500, 50, 5, '/avatar/orange.png', 
'/images/skagen.jpg'),
('Chicken Coconut Curry', 'To a large skillet, add the oil, onion, 
and sauté over medium-high heat until the onion begins to soften(about 5 minutes); stir intermittently.
Add the chicken and cook for about 5 minutes, or until chicken is done; flip and stir often to ensure even cooking.
Add the garlic, ginger, coriander, and cook for about 1 minute, or until fragrant; stir frequently.
Add the coconut milk, carrots, Thai curry paste, salt, pepper, and stir to combine. 
Reduce the heat to medium, and allow mixture to gently boil for about 5 minutes, 
or until liquid volume has reduced as much as desired and thickens slightly.
Add the spinach, lime juice, and stir to combine. Cook until spinach has wilted and is tender, about 1 to 2 minutes. 
Taste and optionally add brown sugar, additional curry paste, salt, pepper, etc. to taste.
Evenly sprinkle with the cilantro and serve immediately. 
Curry is best warm and fresh but will keep airtight in the fridge for up to 1 week.', 600, 60, 6, '/avatar/blue.png', 
'/images/chicken-coconut-curry.jpg');

INSERT INTO "units" ("unit") 
VALUES ('unit(s)'), ('Tbsp'), ('tsp'), ('lbs'), ('oz'), ('cups'), ('kg'), ('mg'), ('liter'), ('ml'), ('pint'), 
('quart'), ('gallon'), ('pack(s)'), ('pinch'), ('bunch'), ('to taste'), ('cans');

INSERT INTO "ingredients" ("name", "recipe_id", "quantity", "unit_id") 
VALUES ('Dried chiles de arbol', 1, 4, 1),
('Ancho chiles', 1, 4, 1),
('Guajillo chiles', 1, 3, 1),
('Olive oil', 1, 1, 2),
('Garlic', 1, 1, 16),
('White onions', 1, 2, 1),
('Red onion', 1, 1, 1),
('Whole chicken', 1, 1, 1),
('Poultry bouquet', 1, 1, 14),
('Cumin', 1, 2, 2),
('Dried oregano', 1, 1, 17),
('Fresh bay leaves', 1, 5, 1),
('Maiz blanco', 1, 3, 18),
('Navy or cannelini beans', 1, 1, 18),
('Diced fresh radishes', 1, 1, 17),
('Sour cream', 1, 1, 17),
('Queso fresco', 1, 1, 17),
('Encurtido', 1, 1, 17),
('Tortilla chips', 1, 1, 17),
('Avocados', 2, 6, 1),
('Diced boiled eggs', 2, 3, 1),
('Finely chopped red onion', 2, 1, 1),
('Lime juice', 2, 2, 1),
('Mayo', 2, 1, 6),
('Mustard', 2, 0.5, 6),
('Chopped cilantro', 2, 1, 16),
('Salt', 2, 1, 17),
('Black pepper', 2, 1, 17),
('Crispy bacon bits', 3, 1, 6),
('Lunds & Byerlys power blend', 3, 1, 14),
('Red onion', 3, 1, 1),
('Golden raisins', 3, 1, 17),
('Mayo', 3, 0.5, 6),
('Apple cider vinager', 3, 2, 3),
('Sugar', 3, 2, 3),
('Garbanzo beans', 4, 2, 6),
('Whole chicken', 4, 1, 1),
('Poultry bouquet', 4, 1, 14),
('Potatoes', 4, 3, 1),
('Carrot', 4, 3, 1),
('Yellow onion', 4, 1, 1),
('Chopped cilantro', 4, 1, 16),
('Salt', 4, 1, 17),
('Black pepper', 4, 1, 17),
('Cooked peeled shrimp', 5, 1, 4),
('Finely chopped red onion', 5, 1, 1),
('Finely chopped fresh dill', 5, 1, 16),
('Olive oil', 5, 3, 2),
('Zest and juice of a lemon', 5, 1, 1),
('Parmesan', 5, 1, 16),
('Mayo', 5, 1, 17),
('Salt', 5, 1, 17),
('Black pepper', 5, 1, 17),
('Coconut or olive oil', 6, 3, 2),
('Diced yellow onion', 6, 1, 1),
('Boneless skinless chicken breast', 6, 1, 4),
('Minced garlic', 6, 2, 2),
('Ground ginger', 6, 3, 3),
('Ground coriander', 6, 2, 3),
('Coconut milk', 6, 1, 18),
('Shredded carrots', 6, 1, 6),
('Thai red curry', 6, 3, 2),
('Salt', 6, 1, 17),
('Black pepper', 6, 1, 17),
('Spinach leaves', 6, 3, 6),
('Lime juice', 6, 1, 1),
('Brown sugar', 6, 1.5, 2),
('Finely chopped basil', 6, 0.25, 6);

INSERT INTO "categories" ("category") 
VALUES ('Produce'), ('Gluten'), ('Gluten-Free'), ('Meat'), ('Canned Goods'), ('Snacks'), ('Cleaning Supplies'), 
('Toiletries'), ('Misc'), ('Spices'), ('Grains'), ('Beverage');