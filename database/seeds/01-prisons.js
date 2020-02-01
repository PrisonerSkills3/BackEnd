exports.seed = function(knex) {
  return knex("prisons").insert([
    {
      username: "The Dean",
      password: "The Rock",
      email: "Alcatraz@yahoo.com",
      prison_name: "Alcatraz",
      number_of_prisoners: 369,
      prison_address: "San Fransisco Bay, California",
      image_url:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2396298%2Fimages%2Fo-ALCATRAZ-PRISON-facebook.jpg&f=1&nofb=1"
    },
    {
      username: "The Warden",
      password: "tupacsnotdead",
      email: "Rikes@gmail.com",
      prison_name: "Rikers Island",
      number_of_prisoners: 12000,
      prison_address: "Queens, New York",
      image_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcompote.slate.com%2Fimages%2F8a6d7b4d-22fd-4d99-87b8-b398a034fa92.jpeg%3Fwidth%3D780%26height%3D520%26rect%3D4368x2912%26offset%3D0x0&f=1&nofb=1"
    },
    {
      username: "JCash",
      password: "Mansondid911",
      email: "FState@hotmail.com",
      prison_name: "Folsom State Prison",
      number_of_prisoners: 1813,
      prison_address: "Folsom, California",
      image_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcaliforniathroughmylens.com%2Fwp-content%2Fuploads%2F2013%2F09%2FFolsom-Prison-Museum-1.jpg&f=1&nofb=1"
    }
  ]);
};
