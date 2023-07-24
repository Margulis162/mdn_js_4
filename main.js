//var

//ref to custom name
const customName = document.getElementById('customname');
//gen random btn
const randomize = document.querySelector('.randomize');
//story p 
const story = document.querySelector('.story');

const storyText ="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "John Doe", "Father Christmas"];

const insertY =["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];




//randomizer for pulling items out of arrays 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//event listeners 
randomize.addEventListener('click', result);

function result() {
  //local vars 
 
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX), yItem = randomValueFromArray(insertY), zItem = randomValueFromArray(insertZ); 
  
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)*5/9);
    newStory = newStory.replace('94 fahrenheit',`${temperature} centigrade`);
    newStory = newStory.replace('300 pounds',`${weight} stones`);
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}
