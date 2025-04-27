// Set target date (example: 3 days from now): for flash sale timer countdown
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Card Component to add Cards to cards-container without hard coding multiple cards

// function createCard(data) {
//   const card = document.createElement("div");
//   card.className = "card"; // you can style this with CSS later
//   card.innerHTML = `
//         <div class="flex-col"> <!-- Card ${data.id} -->
//           <div
//             class="w-[220px] h-[220px] rounded-sm dark:bg-zinc-800 bg-zinc-200 relative flex justify-center items-center"
//           >
//             <img
//               class="object-cover w-[70%] h-[70%]"
//               src="${data.image_source}"
//             />
//             <h6
//               class="absolute top-0 left-0 px-2 py-1 m-1.5 font-[Inter] text-xs text-white rounded-sm bg-violet-800"
//             >
//               -25%
//             </h6>
//             <a class="absolute top-0 right-0 m-1" href="">
//               <svg class="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
//               </svg>
//             </a>
            
//           </div>
//           <div class="flex-col mt-2 font-[Inter]">
//             <h1 class="font-bold dark:text-white">${data.title}</h1>
//             <div class="flex mt-1 gap-x-2">
//               <p class="text-violet-500 dark:text-violet-300${data.price}</p>
//               <s class="text-zinc-500">${data.discounted_price}</s>
//             </div>
//             <div class="flex items-center mt-1 gap-x-2">
//               <div class="flex ml-[-5px]">
//                 <svg
//                   class="w-4 h-4 text-yellow-300 ms-1"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 20"
//                 >
//                   <path
//                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                   />
//                 </svg>
//                 <svg
//                   class="w-4 h-4 text-yellow-300 ms-1"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 20"
//                 >
//                   <path
//                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                   />
//                 </svg>
//                 <svg
//                   class="w-4 h-4 text-yellow-300 ms-1"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 20"
//                 >
//                   <path
//                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                   />
//                 </svg>
//                 <svg
//                   class="w-4 h-4 text-yellow-300 ms-1"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 20"
//                 >
//                   <path
//                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                   />
//                 </svg>
//                 <svg
//                   class="w-4 h-4 text-yellow-300 ms-1"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 20"
//                 >
//                   <path
//                     d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                   />
//                 </svg>
//               </div>
//               <p class="text-zinc-500">(50)</p>
//             </div>
//             <a class="block px-2 py-1 mt-2 text-sm text-white rounded-md w-fit bg-violet-700">
//               Add to Cart
//             </a>
//           </div>
//         </div>
//   `;
//   return card;
// }

// // Your data
// const cardsData = [
//   { data_id: "1" ,title: "Nvidia RTX 5090", image_source: "assets/images/Product/Video_card/nvidia/RTX 5090.png", price: "$500", discounted_price: "$650" },
//   { data_id: "2",title: "Intel Core i9-285K", image_source: "assets\images\Product\processor\intel\core_9_285K.png", price: "", discounted_price: ""}
//   { data_id: "3",title: "", image_source: "assets\images\Product\keyboard\keychron\Keychron Q1 Max.png", price: "", discounted_price: ""}
//   { data_id: "4",title: "", image_source: "assets\images\Product\mouse\razer\Razer DeathAdder V3 Pro.png", price: "", discounted_price: ""}
//   { data_id: "5",title: "", image_source: "assets\images\Product\headphone\Sony\Sony WH-1000XM5.png", price: "", discounted_price: ""}
// ];

// // Loop to add cards
// const container = document.getElementById("cards-container");
// cardsData.forEach((data) => {
//   const cardElement = createCard(data);
//   container.appendChild(cardElement);
// });
