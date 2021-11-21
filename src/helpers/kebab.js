const kebabCase = string => {
  const x = string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
  return x;
};

export default kebabCase;
