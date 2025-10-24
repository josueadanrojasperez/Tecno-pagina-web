// Partículas de fondo
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particlesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(){ this.x=Math.random()*canvas.width; this.y=Math.random()*canvas.height;
    this.size=Math.random()*3+1; this.speedX=Math.random()*1.5-0.75; this.speedY=Math.random()*1.5-0.75;}
  update(){ this.x+=this.speedX; this.y+=this.speedY;
    if(this.x<0||this.x>canvas.width)this.speedX*=-1;
    if(this.y<0||this.y>canvas.height)this.speedY*=-1;
  }
  draw(){ ctx.fillStyle="rgba(0,255,0,0.5)"; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill();}
}
function init(){ particlesArray=[]; for(let i=0;i<70;i++){ particlesArray.push(new Particle()); } }
function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height); particlesArray.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animate);}
init(); animate();
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight; init();});

// Mostrar secciones al hacer click
const cards = document.querySelectorAll(".materia-card");
const sections = document.querySelectorAll(".materia-seccion");
cards.forEach(card=>{
  card.addEventListener("click", ()=>{
    const target = card.getAttribute("data-target");
    sections.forEach(s=>s.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    document.getElementById(target).scrollIntoView({behavior:"smooth"});
  });
});
