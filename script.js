const preloader=document.getElementById('preloader');
window.addEventListener('load',()=>setTimeout(()=>preloader.classList.add('hide'),500));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const target=new Date('2026-10-15T12:30:00+05:30').getTime();
function updateCountdown(){const diff=Math.max(0,target-Date.now()),s=Math.floor(diff/1000),days=Math.floor(s/86400),hours=Math.floor(s%86400/3600),mins=Math.floor(s%3600/60),secs=s%60;document.getElementById('days').textContent=String(days).padStart(2,'0');document.getElementById('hours').textContent=String(hours).padStart(2,'0');document.getElementById('minutes').textContent=String(mins).padStart(2,'0');document.getElementById('seconds').textContent=String(secs).padStart(2,'0')}
updateCountdown();setInterval(updateCountdown,1000);
const rsvpForm=document.getElementById('rsvpForm'),formNote=document.getElementById('formNote');
rsvpForm.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('guestName').value.trim(),attendance=document.getElementById('attendance').value;if(!name||!attendance)return;formNote.textContent=`Thank you, ${name}. Your RSVP has been recorded on this device.`;rsvpForm.reset()});
let musicPlayer=null,musicReady=false;
function onYouTubeIframeAPIReady(){musicPlayer=new YT.Player('youtubePlayer',{height:'1',width:'1',videoId:'BMn17DrSFuc',playerVars:{autoplay:0,controls:0,loop:1,playlist:'BMn17DrSFuc',playsinline:1},events:{onReady:()=>{musicReady=true}}})}
const ytApi=document.createElement('script');ytApi.src='https://www.youtube.com/iframe_api';document.head.appendChild(ytApi);
const musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',()=>{if(!musicReady||!musicPlayer)return;const state=musicPlayer.getPlayerState();if(state===YT.PlayerState.PLAYING){musicPlayer.pauseVideo();musicBtn.classList.remove('active')}else{musicPlayer.playVideo();musicBtn.classList.add('active')}});
