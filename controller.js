export const usernameController = (req, res) => {
  const username = req.params.username;
  res.send(`Welcome ${username}`);
};

export const contactController = (req, res) => {
  res.send("This is the contact route");
};

export const aboutController = (req, res) => {
  res.send("This is the about route");
};

export const searchController = (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Search for ${keyword}`);
};
