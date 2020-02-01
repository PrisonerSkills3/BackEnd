exports.seed = function(knex) {
  return knex("prisoners").insert([
    {
      prisoner_name: "Charles Bronson",
      prisoner_availability: false,
      prisoner_skills: "painting, weight training, creative writing"
    },
    {
      prisoner_name: "Ted Bundy",
      prisoner_availability: true,
      prisoner_skills: "motivational speaking, home cleaning, undertaking"
    },
    {
      prisoner_name: "John Wayne Gacy, Jr.",
      prisoner_availability: false,
      prisoner_skills: "painting, clown services, childcare"
    }
  ]);
};
