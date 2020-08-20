exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("made_recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("made_recipes").insert([
        {
          user_id: 1,
          title: `MUSHROOM AND SHREDDED CHICKEN SALAD`,
          href: `https://www.food.com/recipe/mushroom-and-shredded-chicken-salad-326636`,
          ingredients: `olive oil, chicken, mushrooms`,
          thumbnail: `https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/32/66/36/picCsLH6x.jpg`,
        },
        {
          user_id: 2,
          title: `CHICKEN, PEAR AND BLUE CHEESE SALAD`,
          href: `https://www.food.com/recipe/chicken-pear-and-blue-cheese-salad-92973`,
          ingredients: `mesclun, boneless skinless chicken breasts, pears, fresh ground black pepper`,
          thumbnail: `https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/92/97/3/picfIar5M.jpg`,
        },
        {
          user_id: 3,
          title: `EASTER EGGS/ CHRISTMAS EGGS.`,
          href: `https://www.food.com/recipe/easter-eggs-christmas-eggs-346112`,
          ingredients: `hard-boiled egg, mayonnaise, mustard, vinegar`,
          thumbnail: "",
        },
        {
          user_id: 4,
          title: `Hot Dogs Revisited (Glamour Dogs)`,
          href: `https://www.bigoven.com/recipe/hot-dogs-revisited-glamour-dogs/99024`,
          ingredients: `tomato sauce, cheddar cheese, Worchestershire sauce, onion, hot dogs,corn chips`,
          thumbnail: "",
        },
      ]);
    });
};
