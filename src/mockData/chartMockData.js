import optionsMockData from './optionsMockData'

const generateRandomPrice = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };
  
export const generateMockData = () => {
const weekData = [];
for (let i = 1; i <= 7; i++) {
    const date = new Date(2024, 1, 23 + i); // 29th Feb 2024 is the 24th, so start from 23rd
    const dayData = {
    date: date.toISOString().split('T')[0],
    options: optionsMockData.map(option => ({
        company: option.company,
        strikePrice: option.strikePrice,
        call_put: option.call_put,
        market_price: generateRandomPrice(50, 200), // Adjust min and max prices as needed
    })),
    };
    weekData.push(dayData);
}
return weekData;
};