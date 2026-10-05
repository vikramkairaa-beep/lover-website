const musicButton=document.getElementById('musicButton');
const audio=document.createElement('audio');
audio.id='bgMusic'; audio.loop=true; audio.preload='auto'; audio.src='song.mp4'; document.body.appendChild(audio);
musicButton?.addEventListener('click',async()=>{try{if(audio.paused){await audio.play();musicButton.querySelector('span:last-child').textContent='Pause'}else{audio.pause();musicButton.querySelector('span:last-child').textContent='Music'}}catch(e){alert('Music file could not play in this browser.')}});
const revealMessage=document.getElementById('revealMessage'), hidden=document.getElementById('hiddenMessage');
revealMessage?.addEventListener('click',()=>{hidden?.classList.toggle('show');if(hidden?.classList.contains('show'))revealMessage.innerHTML='You found it ♡';});
const surprise=document.getElementById('surpriseButton'), modal=document.getElementById('surpriseModal'), close=document.getElementById('closeModal');
surprise?.addEventListener('click',()=>modal?.classList.add('active'));close?.addEventListener('click',()=>modal?.classList.remove('active'));
