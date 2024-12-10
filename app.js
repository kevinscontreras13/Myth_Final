const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        window.location.href = 'index.html';
        alert(`Welcome, ${name}! You've signed up successfully.`);
    });
}

const profiles = [
  {
      name: "Odysseus",
      image: "images/Odysseus.jpg",
      bio: "🌊 Wanderer. 💡 Master strategist. 🏹 Archer",
      bio2: "“First I will tell my name, so we will be acquainted and if I survive, \
      you can be my guest in my distant home one day. I am Odysseus, Laertes son, 20 known for my many clever tricks and lies.\
       My fame extends to heaven, but I live in Ithaca, where shaking forest hides Mount Neriton.“(Od. 9.17-24)\n\n\
       Whether navigating storms or outsmarting Cyclopes, I find solutions. Homeward bound to Ithaca, but my journey has been...\
       eventful. I value resilience, intelligence, and companionship. Prefer smoke rising from my homeland to immortality with Calypso.\n\n\
       Looking For: Someone who understands the balance between adventure and homecoming. Must appreciate storytelling and a good disguise.",
      interests: ["Xenia", "Storytelling", "Exacting revenge on those who invade my home"]
  },
  {
      name: "Penelope",
      image: "images/penelope.jpg",
      bio: "🏡 Loyal wife. 🧵 Weaver. 🎭 Master of patience.",
      bio2: "“Well, stranger, the deathless gods destroyed my strength and beauty the day the Greeks went marching off to Troy,\
       and my Odysseus went off with them. If he came back and cared for me again, I would regain my beauty and my status.\
       But now I suffer dreadfully; some god has ruined me.”(Od. 19.124-30)\n \n I do not chase, I attract.\n\n\
       Looking For: A steady, reliable companion. ",
      interests: ["Weaving", "Weeping", "Waiting"]
  },
  {
      name: "Poseidon",
      image: "images/Poseidon.jpg",
      bio: "🌊 God of the seas. 🌪️ Unpredictable. ⚓ Not like other gods.",
      bio2: "“I always said Odysseus would reach home in the end. I did not take away that privilege from him,\
       no, not at all, since you had promised it with your own nod. ... But now, when that fine ship of those\
       Phaeacians comes back from helping him across, I want to smash it in the sea, and overwhelm their city with\
       a mountain, to prevent them from ever guiding travelers again.” (Od. 13.140-54) \n\n\
       I am the ocean's fury and its calm. Don't cross me. For those who earn my favor, I'm a force of abundance.\
       \n\n Looking For: Someone who respects the tides and knows how to navigate challenges with grace.",
      interests: ["Creating storms", "Aquatic sports", "Outwitting my enemies"]
  },
  {
      name: "Calypso",
      image: "images/Calypso.jpg",
      bio: "🏝️ Island enchantress. 🕊️ Eternal beauty. ✨ Independent.",
      bio2: "“You cruel, jealous gods! You bear a grudge whenever any goddess takes a man\
 to sleep with as a lover in her bed. Just so the gods who live at ease were angry when rosy-fingered Dawn took up Orion,\
 and from her golden throne, chaste Artemis attacked and killed him with her gentle arrows. Demeter with the cornrows in her hair indulged her own desire,\
  and she made love with Iasion in triple-furrowed fields— till Zeus found out, hurled flashing flame and killed him. So now, you male gods are upset with me \
  for living with a man. A man I saved!“ (Od. 5.118-30)\n\n I live to make every moment timeless. Seeking someone who understands the depth of my affection without being tied to the past.\
  \n\nLooking For: A partner unafraid to explore endless possibilities. Bonus points if you enjoy paradise.",
      interests: ["Stargazing", "Immortality", "Long-term relationships"]
  },
  {
      name: "Telemachus",
      image: "images/Telemachus.webp",
      bio: "🛶 On a journey of self-discovery. 💬 Loyal. 🌅 Optimist.",
      bio2: "“Go in and do your work. Stick to the loom and distaff. Tell your slaves to do their chores as well. It is for men to talk, especially me. I am the master.” (Od. 1.356-9) \
      \n\n Son of Odysseus, learning to be more than just a name. Navigating adulthood while seeking truth, purpose, and courage. \n\n Looking For: Friends to help me grow, mentors, and allies for the challenges ahead.",
      interests: ["Running", "Fighting", "Soul searching"]
  },
  {
      name: "Athena",
      image: "images/athena.jpg",
      bio: "🛡️ Goddess of wisdom. 🏛️ Strategist. 🕊️ Mentor.",
      bio2: "“Yes, both of us are smart. No man can plan and talk like you, and I am known among the gods for insight and craftiness.” (Od13.298-30)\n\n \
      I am the light that illuminates reason and justice. I stand with those who strive for excellence. \n\n\
      Looking For: Partners who prize intellect, justice, and creativity. Must embrace challenges.",
      interests: ["Strategic games (chess, anyone?)", "Mentoring heroes", "Wisdom"]
  }
];



let currentProfileIndex = 0;

// Function to update the displayed profile
function displayProfile(index) {
  const profile = profiles[index];
  document.getElementById("profile-name").innerText = profile.name;
  document.getElementById("profile-image").src = profile.image;
  document.getElementById("profile-bio").innerText = profile.bio;
  document.getElementById("profile-bio2").innerText = profile.bio2;
  const interestsList = document.getElementById("profile-interests");
  interestsList.innerHTML = ""; // Clear existing interests
  profile.interests.forEach(interest => {
      const li = document.createElement("li");
      li.innerText = interest;
      interestsList.appendChild(li);
  });
}

// Event listeners for navigation buttons
document.getElementById("prev-button").addEventListener("click", () => {
  currentProfileIndex = (currentProfileIndex - 1 + profiles.length) % profiles.length;
  displayProfile(currentProfileIndex);
});

document.getElementById("next-button").addEventListener("click", () => {
  currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
  displayProfile(currentProfileIndex);
});

// Initial display
displayProfile(currentProfileIndex);