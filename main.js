//var
//ref to custom name
const customName = document.getElementById('customname');
//gen random btn
const randomize = document.querySelector('.randomize');
//story p 
const story = document.querySelector('.story');

storyText ="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

insertX = ["Willy the Goblin", "John Doe", "Father Christmas"];

insertY =["the soup kitchen", "Disneyland", "the White House"];

insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];




//some kinda function
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
