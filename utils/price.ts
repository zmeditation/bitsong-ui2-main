export const formatPrice = (price: number) => {
  const newPrice = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price / 10 ** 6);

  return newPrice.split(".");
};

export const splitAndFormatPrice = (value: number) => {
  const [price, decimals] = formatPrice(value);
  return { price, decimals };
};
