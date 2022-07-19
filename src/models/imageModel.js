const imageModel = (name, url,Title,desc) => {
  const model = {
    name,
    url,
    Title,
    desc,
    createdAt: new Date(),
  };
  return model;
};

export default imageModel;
