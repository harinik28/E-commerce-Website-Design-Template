import React from 'react'
import Section from './Section';

const MainContent = () => {

  const electronics = [
    {
      id: 1,
      name: "Smartphone",
      description: "A high-performance device with a 6.5-inch display.",
      rate: 799.99
    },
    {
      id: 2,
      name: "Laptop",
      description: "A lightweight laptop with 16GB RAM and 512GB SSD.",
      rate: 1200.00
    },
    {
      id: 3,
      name: "Smart TV",
      description: "55-inch 4K Ultra HD LED Smart TV with built-in streaming.",
      rate: 499.99
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and 12-hour battery life.",
      rate: 49.99
    },
    {
      id: 5,
      name: "Wireless Headphones",
      description: "Noise-cancelling headphones with up to 20 hours of playtime.",
      rate: 199.99
    },
    {
      id: 6,
      name: "Smartwatch",
      description: "Fitness tracker with heart rate monitor and GPS.",
      rate: 149.99
    },
    {
      id: 7,
      name: "Tablet",
      description: "10.5-inch display with 128GB storage and stylus support.",
      rate: 349.99
    },
    { 
      id: 8, 
      name: "Gaming Console", 
      description: "Next-gen console with 4K gaming capabilities.", 
      rate: 499 },
    { 
      id: 9, 
      name: "Home Security Camera",
      description: "Wi-Fi enabled camera with night vision and motion detection.", 
      rate: 89 
    },
    { id: 10, 
      name: "Robot Vacuum", 
      description: "Self-charging vacuum cleaner with smart navigation.", 
      rate: 399 
    },
    {
      id: 1,
      name: "Smartphone",
      description: "A high-performance device with a 6.5-inch display.",
      rate: 799.99
    },
    {
      id: 2,
      name: "Laptop",
      description: "A lightweight laptop with 16GB RAM and 512GB SSD.",
      rate: 1200.00
    },
    {
      id: 3,
      name: "Smart TV",
      description: "55-inch 4K Ultra HD LED Smart TV with built-in streaming.",
      rate: 499.99
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and 12-hour battery life.",
      rate: 49.99
    },
    {
      id: 5,
      name: "Wireless Headphones",
      description: "Noise-cancelling headphones with up to 20 hours of playtime.",
      rate: 199.99
    },
    {
      id: 6,
      name: "Smartwatch",
      description: "Fitness tracker with heart rate monitor and GPS.",
      rate: 149.99
    },
    {
      id: 7,
      name: "Tablet",
      description: "10.5-inch display with 128GB storage and stylus support.",
      rate: 349.99
    },
    { 
      id: 8, 
      name: "Gaming Console", 
      description: "Next-gen console with 4K gaming capabilities.", 
      rate: 499 },
    { 
      id: 9, 
      name: "Home Security Camera",
      description: "Wi-Fi enabled camera with night vision and motion detection.", 
      rate: 89 
    },
    { id: 10, 
      name: "Robot Vacuum", 
      description: "Self-charging vacuum cleaner with smart navigation.", 
      rate: 399 
    }

  ];

  const homeKitchen = [
    {
      id: 1,
      name: "Refrigerator",
      description: "Double-door fridge with frost-free technology and 400L capacity.",
      rate: 999.99
    },
    {
      id: 2,
      name: "Microwave Oven",
      description: "1000W microwave with convection and grill functions.",
      rate: 249.99
    },
    {
      id: 3,
      name: "Air Conditioner",
      description: "1.5-ton inverter AC with energy-saving mode.",
      rate: 699.99
    },
    {
      id: 4,
      name: "Dishwasher",
      description: "12-place setting dishwasher with multiple wash programs.",
      rate: 599.99
    },
    {
      id: 5,
      name: "Vacuum Cleaner",
      description: "Bagless vacuum cleaner with HEPA filtration and powerful suction.",
      rate: 149.99
    },
    {
      id: 6,
      name: "Washing Machine",
      description: "Front-load washing machine with 8kg capacity and steam wash.",
      rate: 799.99
    },
    {
      id: 7,
      name: "Coffee Maker",
      description: "12-cup coffee maker with programmable timer and auto-shutoff.",
      rate: 79.99
    },
    {
      id: 8,
      name: "Blender",
      description: "High-speed blender with 1000W motor and multi-purpose jar.",
      rate: 99.99
    },
    {
      id: 9,
      name: "Toaster",
      description: "4-slice toaster with browning control and defrost function.",
      rate: 49.99
    },
    {
      id: 10,
      name: "Induction Cooktop",
      description: "Portable induction cooktop with 1800W power and digital controls.",
      rate: 129.99
    },
    {
      id: 1,
      name: "Refrigerator",
      description: "Double-door fridge with frost-free technology and 400L capacity.",
      rate: 999.99
    },
    {
      id: 2,
      name: "Microwave Oven",
      description: "1000W microwave with convection and grill functions.",
      rate: 249.99
    },
    {
      id: 3,
      name: "Air Conditioner",
      description: "1.5-ton inverter AC with energy-saving mode.",
      rate: 699.99
    },
    {
      id: 4,
      name: "Dishwasher",
      description: "12-place setting dishwasher with multiple wash programs.",
      rate: 599.99
    },
    {
      id: 5,
      name: "Vacuum Cleaner",
      description: "Bagless vacuum cleaner with HEPA filtration and powerful suction.",
      rate: 149.99
    },
    {
      id: 6,
      name: "Washing Machine",
      description: "Front-load washing machine with 8kg capacity and steam wash.",
      rate: 799.99
    },
    {
      id: 7,
      name: "Coffee Maker",
      description: "12-cup coffee maker with programmable timer and auto-shutoff.",
      rate: 79.99
    },
    {
      id: 8,
      name: "Blender",
      description: "High-speed blender with 1000W motor and multi-purpose jar.",
      rate: 99.99
    },
    {
      id: 9,
      name: "Toaster",
      description: "4-slice toaster with browning control and defrost function.",
      rate: 49.99
    },
    {
      id: 10,
      name: "Induction Cooktop",
      description: "Portable induction cooktop with 1800W power and digital controls.",
      rate: 129.99
    }
  ];
  

  return (
    <>
      <Section title="Electronics" product={electronics} />
      <Section title="Home & Kitchen" product={homeKitchen} />
    </>
  )
}

export default MainContent
