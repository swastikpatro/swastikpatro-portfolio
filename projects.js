const projectsData = [
  {
    id: 1,
    heading: 'how well do you know me?',
    myDate: 'september, 2022',
    desc: 'A CLI app built with nodeJS. You can send this to your friends and find out who really knows you',
    live: 'https://replit.com/@SwastikPatro/Mark-1?embed=1&output=1',
    source: 'https://github.com/swastikpatro/neog-mark1_DO_YOU_KNOW_Swastik',
  },
  {
    id: 2,
    heading: 'are you a mahabharata fan?',
    myDate: 'september, 2022',
    desc: 'A CLI app built with nodeJS. You can send this to your friends and find out who really knows mahabharata.',
    live: 'https://replit.com/@SwastikPatro/Mark-2?embed=1&output=1',
    source: 'https://github.com/swastikpatro/neog-mark2_Mahabharata_Quiz',
  },
  {
    id: 3,
    heading: '"minions speak" App',
    myDate: 'september, 2022',
    desc: "This is a translator app which translates English to Minion's language or Banana language",
    live: 'https://swastik-banana-talk.netlify.app',
    source: 'https://github.com/swastikpatro/neog-mark6-Banana_Talk',
  },
  {
    id: 4,
    heading: '"swedish chef speak" App',
    myDate: 'september, 2022',
    desc: "This is a translation app which converts English language to Swedish Chef's language.",
    live: 'https://swastik-swedish-chef-speak.netlify.app/',
    source: 'https://github.com/swastikpatro/neog-mark7-Swedish_Chef_Speak',
  },
  {
    id: 5,
    heading: '"animal emoji interpreter" App',
    myDate: 'september, 2022',
    desc: 'I struggle with understanding the animal emojis. Do you too? If yes, then see this library of animal emojis with meaning (name)',
    live: 'https://neog-animal-emoji-interpreter.vercel.app/',
    source:
      'https://github.com/swastikpatro/neog-mark8-animalEmoji_interpreter',
  },
  {
    id: 6,
    heading: '"cocktails recommendation" App',
    myDate: 'september, 2022',
    desc: 'Do you drink cocktails? You would find some good recommendations for all the types of cocktails. Made using ReactJS with love 🧡',
    live: 'https://neog-mark9-cocktails-recommendation-app.vercel.app/',
    source:
      'https://github.com/swastikpatro/neog-mark9-cocktails-recommendation-app',
  },
  {
    id: 7,
    heading: '"cash register manager" App',
    myDate: 'september, 2022',
    desc: 'This is a cash register app which tells the cashier/user rto return the amount in change to the excess money given by the customer in minimum number of notes.',
    live: 'https://neog-mark10-cash-register-manager-app.vercel.app/',
    source:
      'https://github.com/swastikpatro/neog-mark10-Cash_Register_Manager_App',
  },
  {
    id: 8,
    heading: '"is your birthday lucky?" App',
    myDate: 'september, 2022',
    desc: 'A website which can help you to check whether your birthday is lucky or not. All you have to do is enter your bithdate and a number.',
    live: 'https://mark11-birthday-lucky-app.vercel.app/',
    source: 'https://github.com/swastikpatro/neog-mark11-birthday_lucky_app',
  },
  {
    id: 9,
    heading: '"fun with triangles" App',
    myDate: 'september, 2022',
    desc: 'A app which helps you to learn about triangles.',
    live: 'https://neog-fun-with-triangles.vercel.app/',
    source: 'https://github.com/swastikpatro/neog-mark12-Fun_With_Triangles',
  },
  {
    id: 10,
    heading: '"is your birthday palindrome?" App',
    myDate: 'september, 2022',
    desc: 'App which checks whether your birthday is a palindrome birthday or not.',
    live: 'https://neog-palindrome-birthdays.vercel.app/',
    source: 'https://github.com/swastikpatro/neog-mark13-palindrome_birthdays',
  },
  {
    id: 11,
    heading: '"profit & loss calculator" App',
    myDate: 'september, 2022',
    desc: 'A website which helps user how much profit or loss he/she is making in percentage & absolute value.',
    live: 'https://neog-profit-and-loss-calculator.vercel.app/',
    source: 'https://github.com/swastikpatro/neog-mark14-profit_or_loss',
  },
];

const projectsSection = document.querySelector('.projects-section');

function displayProjects(data) {
  data = data.sort((a, b) => b.id - a.id);
  projectsSection.innerHTML = data
    .map((project) => {
      return `
    <article class="single-project ${project.id % 2 && 'bcg-black'}">
        <h2 class="heading">${project.heading}</h2>
        <small class="date">${project.myDate}</small>
        <p>${project.desc}</p>
        <div class="btn-center">
          <a
            href="${project.live}"
            target="_blank"
            class="btn"
            >live project
          </a>
          <a
            href="${project.source}"
            target="_blank"
            class="btn btn-hipster"
            >view source
          </a>
        </div>
      </article>
    `;
    })
    .join("");
}

window.addEventListener('DOMContentLoaded', () => {
  displayProjects(projectsData);
});
