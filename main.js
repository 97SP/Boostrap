let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Los Mejores Programadores')
  .pauseFor(200)
  .deleteChars(10)
  .start();