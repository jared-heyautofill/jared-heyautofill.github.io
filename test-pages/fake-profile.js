// Data for generating profiles
const firstNames = ['John', 'Jane', 'Chris', 'Anna', 'Mike', 'Linda', 'Steve', 'Olivia'];
const lastNames = ['Smith', 'Doe', 'Brown', 'Wilson', 'Garcia', 'Martinez', 'Lee', 'Taylor'];
const domains = ['example.com', 'mail.com', 'inbox.com', 'email.com'];
const cities = [
  'New York',
  'Los Angeles',
  'London',
  'Paris',
  'Tokyo',
  'Sydney',
  'Berlin',
  'Rio de Janeiro',
  'Toronto',
  'Mumbai'
];
const states = [
  'Michigan',
  'Florida',
  'California',
  'New York',
  'New Jersey',
  'Idaho',
]
const collegePrefixes = ['Northern', 'Eastern', 'Western', 'Southern', 'Central', 'University of', '']
function combineCollegeNames(prefixes, states) {
  const combinedNames = [];

  prefixes.forEach(prefix => {
    states.forEach(state => {
      // If the prefix is not an empty string, combine it with the state, otherwise just use the state.
      let name = prefix ? `${prefix} ${state}` : `${state} State University`;
      if (!name.includes('University')) {
        name += ' University';
      }
      combinedNames.push(name);
    });
  });

  return combinedNames;
}

const collegeNames = combineCollegeNames(collegePrefixes, states);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random profile data
function generateProfile() {
  // Create random name
  const name = `${firstNames[getRandomInt(0, firstNames.length)]} ${lastNames[getRandomInt(0, lastNames.length)]}`;
  // Create random email
  const email = `${name.split(' ').join('.').toLowerCase()}@${domains[getRandomInt(0, domains.length)]}`;
  // Create random phone number (just a dummy format)
  const phone = `+1-${getRandomInt(100, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`;
  // Generate a placeholder image for the profile picture
  const placeholderImage = `https://via.placeholder.com/200?text=${name.split(' ').join('+')}`;
  
  // Generate random address (very basic)
  const address = `${getRandomInt(100, 9999)} ${lastNames[getRandomInt(0, lastNames.length)]} St, ${cities[getRandomInt(0, cities.length)]}, ${states[getRandomInt(0, states.length)]}, ${getRandomInt(10000, 99999)}`;

  const ssn = `${getRandomInt(100, 999)}-${getRandomInt(10, 99)}-${getRandomInt(1000, 9999)}`;

  // Set generated data to profile elements
  document.querySelector('#profileName .value').textContent = name;
  document.querySelector('#profileEmail .value').textContent = email;
  document.querySelector('#profilePhone .value').textContent = phone;
  document.querySelector('#profileAddress .value').textContent = address;
  document.querySelector('#profileCollege .value').textContent = collegeNames[getRandomInt(0, collegeNames.length)];
  document.querySelector('#profileSSN .value').textContent = ssn;
}

// Add event listener to generate button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateProfile);
const generateBtnNonStop = document.getElementById('generateNonStopBtn');
let rafId = 0;
generateBtnNonStop.addEventListener('click', function() {
  if (rafId) {
    return;
  }
  this.textContent = 'Stop Generating';
  generateBtnNonStop.addEventListener('click', function() {
    cancelAnimationFrame(rafId);
    rafId = 0;
    this.textContent = 'Generate Profiles Non-stop';
  }, { once: true });
  rafId = requestAnimationFrame(function rafCallback() {
    generateProfile();
    rafId = requestAnimationFrame(rafCallback);
  });
});
generateProfile();
