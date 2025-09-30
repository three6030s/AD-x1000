export const credits = {
  // Must be placed in the order it is desired they appear in the credits
  roles: {
    1: "Mod Creator",
    2: "Cool Nerds I Felt Like Adding To The Credits Because Why Not",
    3: "donaldino7712",
  },

  // Each person must have a name and at least one role (the index of the desired role in roles). They can also have a
  // second name, which will appear in parentheses besides their first.
  people: [
    {
      name: "6030",
      roles: 1
    },
    {
      name: "donaldino7712",
      roles: [2, 3]
    },
    {
      name: "Sa1To",
      name2: "Maia",
      roles: 2
    },
    {
      name: "no one",
      roles: 2
    },
    {
      name: "Qwer",
      roles: 2
    },
    {
      name: "the10thdimension",
      roles: 2
    },
    {
      name: "Sylvia",
      roles: 2
    }
  ]
};

credits.roles.count = Object.keys(credits.roles).length;
