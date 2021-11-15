exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          nickname: "Croton",
          species: "Codiaeum spp",
          h2oFrequency: 3,
          image:
            "https://www.costafarms.com/CostaFarms/Croton-Header-Costa-Farms-Indoor-Plant.jpg",
          user_id: 2,
        },
        {
          nickname: "Red Hot Poker",
          species: "Kniphofia spp",
          h2oFrequency: 3,
          image:
            "https://www.costafarms.com/CostaFarms/Kniphofia-Costa-Farms-Perennial-Hero.jpg",
          user_id: 3,
        },
        {
          nickname: "Blue Fescue",
          species: "Festuca glauca",
          h2oFrequency: 4,
          image:
            "https://www.costafarms.com/CostaFarms/Blue-Fescue-Costa-Farms-Perennial.jpg",
          user_id: 8,
        },
        {
          nickname: "Purple Pleasure Plant",
          species: "Mikania ternata",
          h2oFrequency: 3,
          image:
            "https://www.costafarms.com/CostaFarms/Mikania-Purple-Pleasure-Houseplant-Costa-Farms.jpg",
          user_id: 5,
        },
        {
          nickname: "Pothos",
          species: "Epipremnum aureum",
          h2oFrequency: 2,
          image:
            "https://www.costafarms.com/CostaFarms/Pothos-1-Hero-Costa-Farms-Houseplant.jpg",
          user_id: 4,
        },
        {
          nickname: "Ivy",
          species: "Hedera spp",
          h2oFrequency: 3,
          image:
            "https://www.costafarms.com/CostaFarms/English-Ivy-Costa-Farms-Houseplant-Hero-2.jpg",
          user_id: 1,
        },
        {
          nickname: "Elephant's Ear",
          species: "Alocasia spp",
          h2oFrequency: 3,
          image:
            "https://www.costafarms.com/CostaFarms/African-Mask-Plant-Costa-Farms-Houseplant.jpg",
          user_id: 6,
        },
        {
          nickname: "Fleabane",
          species: "Erigeron spp",
          h2oFrequency: 4,
          image:
            "https://www.costafarms.com/CostaFarms/Erigeron-Costa-Farms-Perennial-Hero.jpg",
          user_id: 5,
        },
        {
          nickname: "ZZ Plant",
          species: "Cryptocereus anthonyanus",
          h2oFrequency: 1,
          image:
            "https://www.costafarms.com/CostaFarms/ZZ-Plant-Costa-Farms-Houseplant.jpg",
          user_id: 7,
        },
        {
          nickname: "Purple Waffle Plant",
          species: "Zamioculcas zamiifolia",
          h2oFrequency: 5,
          image:
            "https://www.costafarms.com/CostaFarms/Costa-Farms-Purple-Waffle-Plant-Houseplant.jpg",
          user_id: 2,
        },
      ]);
    });
};
