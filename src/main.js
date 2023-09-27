const jsonData = {
  "paragraphs": [
    "I'll tell you tomorrow. \"{BALL}\" and \"{BELL}\" aren't the same thing. One day, under the golden sun, an intriguing debate unfolded at a bustling street corner about the mystique of money. John, our protagonist, fascinated his friends with his knack for posing perplexing questions.Turning to his friends, John said, '[blip], have you ever considered that 90% of money could be merely 10%, yet still add up to a whopping 90%? The enigma of finance perplexes even the wisest.'Amidst laughter, 'MAN' responded, 'John, you amuse us with your riddles. But let me assure you, the arithmetic of money is not as whimsical.'MAN' revealed his need for 200,000 balls for a top-secret project. Inspired, John suggested a diversion. They recited the alphabet from A to Z and ventured into equations using symbols like /x/&Y#Z{+2}>>[Cc]=Y0.4 + @b, exploring squares and inequalities: 13579842 < 8 < R36.The following day, with newfound insights, they ordered $240,000 worth of 200,000 pink balls, each symbolizing their intellectual journey.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nostrum doloremque odit exercitationem iusto impedit minus voluptate culpa corrupti accusamus numquam, id, eos tenetur modi. Itaque quasi aperiam placeat excepturi! Eos officia quod sint dolores nulla iste numquam, odit, quasi dolore nisi, quam error impedit molestiae! Mollitia animi, totam impedit at iste deserunt, minima temporibus, aspernatur veritatis quo corrupti alias? Animi nam fugiat expedita, nihil veritatis quae sint aspernatur aliquam reiciendis aliquid repellat vero ratione, soluta perspiciatis? Soluta ex, nostrum unde quidem sapiente fuga incidunt aspernatur temporibus neque laudantium debitis? Delectus cum, sit quae quo asperiores nulla libero eveniet odio excepturi tempore totam eaque laboriosam. Est natus sunt ipsum nisi quae maiores officia dolores ratione! Voluptate repellendus tempora velit quas? Dolore suscipit asperiores ea mollitia molestias neque ipsam nulla dicta corrupti cupiditate quidem, harum minus totam explicabo, modi excepturi nesciunt. Eligendi soluta a veritatis repellendus quidem. Minima enim voluptatem distinctio! Excepturi accusantium nulla beatae quae, doloremque magnam? Neque adipisci distinctio quos eaque mollitia praesentium hic, repudiandae ab. Hic possimus repellat nostrum, minus aperiam fugit, illo perspiciatis dolorem quas quod at?",
    "In the realm of quantum mechanics, scientists grapple with the enigmatic behavior of particles. The superposition of states, entanglement, and wave-particle duality baffle even the brightest minds. As they peer into the abyss of the subatomic world, they encounter a tapestry of mathematical elegance and conceptual perplexity. The quest for a theory of everything persists, with physicists seeking to reconcile general relativity with quantum field theory. The intricacies of black holes, singularities, and the fabric of spacetime remain a cosmic puzzle. While they delve into the depths of cosmology, astronomers gaze at the cosmos through telescopes and observatories. They study distant galaxies, the cosmic microwave background, and the cosmic web, revealing the universe's vastness and its secrets. Meanwhile, biochemists decipher the genetic code, mapping the intricacies of DNA and RNA. CRISPR-Cas9, a revolutionary gene-editing tool, promises to unlock the potential for genetic engineering and disease eradication. In the world of artificial intelligence, machine learning algorithms process vast datasets, exhibiting feats of pattern recognition and problem-solving. Neural networks simulate the workings of the human brain, paving the way for autonomous vehicles, chatbots, and deep learning applications.",
    "She exclaimed, 'I'm thrilled to see you tomorow.' The words \"{CAR}\" and \"{CART}\" are often confused, but they have different meanings. Can 90% of a cake be 10% left? His friends grew increasingly frustrated with him. He asked, 'What's with all these #@^&% red balloons?' A voice replied, '[WOMAN] I need 200,000 balloons for a special project. My friends decided to recite the entire alphabet to pass the time: ABCDEFGHIJKLMNOPQRSTUVWXYZ. Then, they started writing equations: /x/&Y#Z{+2}>>[Cc]=Y0.4 + @b square ^ 64 + 13579842 < 8 <R36>. The following day, they ordered $240,000 worth of 200,000 red balloons.",
    "In the enchanted forest, she found a mysterious cave. Inside, she discovered glowing mushrooms and ancient artifacts. As she ventured deeper, the walls seemed to shimmer. She heard whispers, 'Find the key to unlock the secrets of this place.' She was determined to uncover the truth. The old bookstore on Maple Street held a treasure trove of forgotten stories. Dusty shelves lined with leather-bound books beckoned to her. She picked up a tome, its pages filled with faded ink and illustrations. 'These words,' she thought, 'hold the wisdom of ages.'",
    "Lost in a digital maze, he navigated through lines of code. Syntax errors blinked like neon signs. 'I must find the elusive bug,' he muttered. It was a race against time. The program's fate hung in the balance. With a triumphant shout, he conquered the bug and emerged victorious.",
    "The spaceship hurtled through the cosmos, its crew on a mission to explore distant planets. In the vast expanse of space, they encountered strange beings and unearthly landscapes. 'We are explorers,' they declared, 'and the universe is our canvas. Deep in the heart of the rainforest, a rare orchid bloomed. Its petals shimmered with iridescence, a sight few had witnessed. Biologists marveled at its beauty and studied its secrets. 'Nature,' they realized, 'holds the keys to countless mysteries.'",
    "In the bustling metropolis, a street artist painted a mural that captured the spirit of the city. Passersby paused to admire the vibrant colors and intricate details. 'Art,' he said, 'is a bridge between the ordinary and the extraordinary.'",
    "As the sun set over the tranquil lake, a solitary fisherman cast his line into the water. The ripples of the lake mirrored the colors of the evening sky. 'Here,' he whispered, 'the world finds its balance. In the distant future, robots and humans coexisted in harmony. Together, they built a world where technology and nature thrived side by side. 'Progress,' they agreed, 'should never come at the expense of our planet.'"
  ]
  
}


const p_tag = document.getElementById("paragraph");
const rand_index = Math.floor(Math.random() * jsonData.paragraphs.length);
p_tag.innerText = jsonData.paragraphs[rand_index];
const paragraph = jsonData.paragraphs[rand_index];

const words = jsonData.paragraphs[rand_index].split(" ");
let first=true;

let count=0;
let index=0;
count = words[0].length;
let first_paragraph = `<span id="highlight">${words[index]}</span>`+paragraph.substring(count);

p_tag.innerHTML=first_paragraph;


let i=0;

let lock=true;

document.addEventListener('keydown', (e)=>{
  let k = document.getElementById("highlight");
  //k.style.backgroundColor="#CBFFA9";
  
  
  
    if(e.key!==words[index][i]) {
      //avoid first (Shift + key)'s shift
      if(!(e.key==="Shift" || e.key==="CapsLock" ||e.key==="Backspace")) {
        k.style.backgroundColor="red";
        console.log(`${e.key} !== ${words[index][i]}`);
        //if wrong key is pressed then stop index to incress
        lock=false;
      }
    }else{
      console.log(`${e.key} === ${words[index][i]}`);
      k.style.backgroundColor="#CBFFA9";
      lock=true;
    }
    if(!(e.key==="Control" || e.key==="Shift" || e.key==="CapsLock" || e.key==="Tab"|| e.key==="Escape"|| e.key==="Backspace" || e.key==="Enter")) {
      if(lock) { 
        i++;
      }
    }
   
    if(first) {
      //p_tag.innerHTML = first_paragraph;
      first=false;
    }else{
      if(e.key.charCodeAt(0)==32) {
        if(index < words.length) {
          index++;
          count+=1; //for space
          let len = words[index].length;
          p_tag.innerHTML = paragraph.substring(0, count) + `<span id="highlight">${words[index]}</span>` + paragraph.substring(count+len);
          count+=len;
          i=0;
          
          //make the next word green
          let k = document.getElementById("highlight");
          k.style.backgroundColor="#CBFFA9";

          //clear input box after completing the word
          let kk = document.getElementById("input-box");
          kk.value='';
        }
      }
    }


});