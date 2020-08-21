const db = require("../db");

function insert() {
  return db("starred_recipes").insert([
    {
      user_id: 1,
      title: `NONA'S SOY SAUCE EGGS - RAMEN EGGS`,
      href: `https://www.food.com/recipe/nonas-soy-sauce-eggs-ramen-eggs-315722`,
      ingredients: `eggs, rice vinegar, soy sauce, sugar, sesame oil`,
      thumbnail:
        "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/31/57/22/piclithdY.jpg",
    },
    {
      user_id: 1,
      title: `SCRAMBLED EGGS, NOT RUNNY, NOT WATERY, HARD SCRAMBLED EGGS`,
      href: `https://www.food.com/recipe/scrambled-eggs-not-runny-not-watery-hard-scrambled-eggs-13146`,
      ingredients: `milk, cornflour, Worcestershire sauce, Tabasco sauce, salt, pepper, grainy mustard, eggs, butter, cheese`,
      thumbnail:
        "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/13/14/6/picitwyTk.jpg",
    },
    {
      user_id: 2,
      title: `Twice As Nice Rice-Ideas For Leftover Rice Recipe`,
      href: `http://www.grouprecipes.com/47203/twice-as-nice-rice-ideas-for-leftover-rice.html`,
      ingredients: `cooked rice, celery, onion, raisins, boiling water, toasted almonds`,
      thumbnail: "http://s1.grouprecipes.com/images/recipes/200/3045149468.jpg",
    },
    {
      user_id: 2,
      title: `STICKY RICE (GLUTINOUS RICE / KOW NEYO)`,
      href: `https://www.food.com/recipe/sticky-rice-glutinous-rice-kow-neyo-10876`,
      ingredients: `glutinous sticky rice, water`,
      thumbnail: "",
    },
    {
      user_id: 3,
      title: `RED RICE (SALSA RICE)`,
      href: `https://www.food.com/recipe/red-rice-salsa-rice-211401`,
      ingredients: `salsa, kosher salt, long grain white rice, water`,
      thumbnail:
        "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/21/14/01/pic7i0VUb.jpg",
    },
    {
      user_id: 4,
      title: `Lunch Box Hot Hot Dogs`,
      href: `https://www.allrecipes.com/recipe/157173/lunch-box-hot-hot-dogs/`,
      ingredients: `all-beef hot dog, hot dog bun, ketchup, yellow mustard, cheddar cheese`,
      thumbnail:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F636390.jpg&q=85",
    },
    {
      user_id: 4,
      title: `RAMEN CHICKEN SOUP`,
      href: `https://www.food.com/recipe/ramen-chicken-soup-88037`,
      ingredients: `chicken broth, chicken-flavored ramen noodles, dried oregano, frozen chopped broccoli, cooked chicken, sliced almonds`,
      thumbnail:
        "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_721,h_406/v1/img/recipes/88/03/7/pic93LocK.jpg",
    },
  ]);
}
