/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = 'Benjamin Urquia';
myProfile.photo = 'images/ME.jpeg';
myProfile.favoriteFoods = [
  'Pizza',
  'Pasta',
  'Empanadas',
  'Burgers',
  'Ice Cream'
];
myProfile.hobbies = ['Play Videogames', 'Coding', 'Watch Movies'];
myProfile.placesLived = [];

myProfile.placesLived.push({
  place: 'Rosario, Santa Fe, Argentina',
  length: '22 year'
});

myProfile.placesLived.push({
  place: 'Buenos Aires, Buenos Aires, Argentina',
  length: '1 year'
});

myProfile.placesLived.push({
  place: 'Veracruz, Mexico',
  length: '1 year'
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});