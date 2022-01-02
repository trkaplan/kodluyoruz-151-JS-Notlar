const defaultSettings = {
  isVisible: true,
  isDisabled: true,
  colorMode: "dark",
};
const customSettings = {
  colorMode: "light",
};

const finalSettings1 = {
  ...defaultSettings,
  ...customSettings,
};

const finalSettings2 = {
  ...defaultSettings,
  colorMode: "light",
  isCollapsed: true,
};
console.log(finalSettings1);
console.log("------------");
console.log(finalSettings2);
