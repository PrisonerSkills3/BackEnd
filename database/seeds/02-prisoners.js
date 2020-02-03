exports.seed = function(knex) {
  return knex("prisoners").insert([
    {
      prisoner_name: "Charles Bronson",
      prisoner_availability: false,
      prisoner_skills: "painting, weight training, creative writing",
      prison_id: 3
    },
    {
      prisoner_name: "Ted Bundy",
      prisoner_availability: true,
      prisoner_skills: "motivational speaking, home cleaning, undertaking",
      prison_id: 1
    },
    {
      prisoner_name: "John Wayne Gacy, Jr.",
      prisoner_availability: false,
      prisoner_skills: "painting, clown services, childcare",
      prison_id: 2
    },
    {
      prisoner_name: "Stewart Little",
      prisoner_availability: true,
      prisoner_skills: "fitting in small places, engineering, being cute",
      prison_id: 2
    }
  ]);
};
