// Data for generating profiles
const firstNames = ['John', 'Jane', 'Chris', 'Anna', 'Mike', 'Linda', 'Steve', 'Olivia'];

const lastNames = ['Smith', 'Doe', 'Brown', 'Wilson', 'Garcia', 'Martinez', 'Lee', 'Taylor'];

const jobTitles = ['Software Engineer', 'Product Manager', 'Account Executive', 'Product Designer', 'QA Engineer', 'Engineering Manager', 'CEO'];

const employers = ['Wonka Industries', 'ACME Industries', 'Hoover Dam Inc', 'Skynet', 'Duff Beer', 'Umbrella Corporation'];

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

function getRandomString(length) {
  const charCodes = [];
  while (length--) {
    charCodes[charCodes.length] = '' + getRandomInt(65, 90);
  }
  return String.fromCharCode(...charCodes);
}

function getAccountId() {
  const chars = getRandomString(4);
  return '' + getRandomInt(1000, 9999) + '-' + chars;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(array) {
  return array[getRandomInt(0, array.length)];
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getSalary() {
  return formatNumberWithCommas(
    getRandomInt(100000, 130000)
  );
}

// Function to generate random profile data
function generateProfile() {
  // Create random name
  const name = `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
  // Create random email
  const email = `${name.split(' ').join('.').toLowerCase()}@${getRandomItem(domains)}`;
  // Create random phone number (just a dummy format)
  const phone = `+1-${getRandomInt(100, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`;
  
  // Generate random address (very basic)
  const address = `${getRandomInt(100, 9999)} ${getRandomItem(lastNames)} St, ${getRandomItem(cities)}, ${getRandomItem(states)}, ${getRandomInt(10000, 99999)}`;

  const ssn = `${getRandomInt(100, 999)}-${getRandomInt(10, 99)}-${getRandomInt(1000, 9999)}`;

  // Set generated data to profile elements
  document.querySelector('#profileName .value').textContent = name;
  document.querySelector('#profileJobTitle').innerHTML = `<strong>Job Title</strong>: ${getRandomItem(jobTitles)}`;
  document.querySelector('#profileEmployer').innerHTML = `Employer: ${getRandomItem(employers)}`;
  document.querySelector('#profileAccountId').innerHTML = `<strong>Account ID</strong> ${getAccountId()}`;
  document.querySelector('#profileSalary .value').textContent = `USD $${getSalary()} annually`;
  document.querySelector('#profileEmail .value').textContent = email;
  document.querySelector('#profilePhone .value').textContent = phone;
  document.querySelector('#profileAddress .value').textContent = address;
  document.querySelector('#profileCollege .value').textContent = getRandomItem(collegeNames);
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
