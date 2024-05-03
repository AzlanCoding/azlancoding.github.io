# My Programming Journey

<style>
  /*Base*/
/*body {
  background: #252827;
  font-size: 16px;
}
p {
  font-weight: 300;
}
a {
  color: #6c6d6d;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  letter-spacing: 0.3em;
  font-size: 0.6em;
  font-weight: 400;
  background: #252727;
  padding: 0.3rem 1rem;
  margin: 1.9rem 0 0 0;
  float: right;
}
a:hover {
  color: white;
  background: #b5e853;
  border-bottom: 0.35em solid black;
}*/
strong {
  font-weight: 600;
}
h1 {
  letter-spacing: 1.5px;
  color: white;
  font-weight: 400;
  font-size: 2.4em;
}
#timeline-content {
  margin-top: 50px;
  text-align: center;
}
/* Timeline */
.timeline {
  border-left: 4px solid #b5e853;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.8);
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  font-weight: 100;
  margin-left: 120px;
}
.timeline h1 {
  letter-spacing: 1.5px;
  font-weight: 100;
  font-size: 1.4em;
}
.timeline h2,
.timeline h3 {
  letter-spacing: 1.5px;
  font-weight: 400;
  font-size: 1.4em;
}
.timeline .event {
  border-bottom: 1px dashed #b5e853;
  padding-bottom: 25px;
  margin-bottom: 50px;
  position: relative;
}
.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}
.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}
.timeline .event:before {
  left: -217.5px;
  color: rgba(255, 255, 255, 0.4);
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  width: 120px;
}
.timeline .event:after {
  box-shadow: 0 0 0 4px #b5e853;
  left: -57.85px;
  background: #313534;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}

.divider{
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  margin-bottom: 25px;
  margin-top: 25px;
}

</style>

<div id="timeline-content">
  <h1>My Programming Journey</h1>
  <p>Original <a href="https://codepen.io/alanhouser/pen/aErrQJ">CSS Timeline</a> by Alan Houser</p>

  <ul class="timeline">
    <li class="event" data-date="2019">
      <h3><strong>Participated in Innovation Project (IVP)</strong></h3>
      <p>This is where I was first introduced to programming. I participated for the Innovation Project in Primary 5 and was shortlisted for the Booth Presentation. I programmed a Microbit to automatically close the prototype window when rain was detected. This project was programmed using block programming in the browser.</p>
    </li>
    
    <li class="event" data-date="2020">
      <h3>Started Learning Python</h3>
      <p>Immediately after I finished my Primary School Leaving Examination (PSLE), I learnt the Python Programming Language using a book my mum bought for me and a pygame tutorial from YouTube. Using the pygame tutorial, I made my first 2D game.</p>   
    </li>
    
    <li class="event" data-date="2021">
      <h3>Started Learning C++</h3>
      <p>After enrolling into Hai Sing Catholic School and their Robotics Club, I found out that they use C++ to program their robots and immediately started to learn it using W3Schools C++ tutorial and tried writing.</p>
      <div class="divider"></div>
      
      <h3>Started learning Autonomous Programming</h3>
      <p>As a member of the robotics Club, I played my part by learning how to program robots. My school taught me Lego Mindstorms Block Programming in block programming. Learning how to autonomously program lego constructed bots to complete tasks. I also wrote a lot of pseudo code in my robotics journal. </p>
      <div class="divider"></div>
      
      <h3><strong>Won 2nd Team Placing in CoderZ Competition</strong></h3>
      <p>Nearing the end of the year, I participated in an online team competition for CoderZ Competition and won 2nd team placing.</p>
      <div class="divider"></div>
      
      <h3>Continued Sharpening Programming Skills</h3>
      <p>Over the holidays, I got a new laptop and sharpened my Python and C++ skills and played around with PIP. Moreover, I learnt how to use the Chromebook I just got in october as I was to use it in school as my Personal Learning Device (PLD).</p>
    </li>
    
    <li class="event" data-date="2022">
      <h3>Started Learning HTML, JavaScript and CSS</h3>
      <p>As I got very vexed by the restrictions on my Chromebook controlled by Mobile Guardian, I started to look at Mobile Guardian's source code which was easy to access because it was a Chrome Extension. Through this, I discovered that Mobile Guardian did not check content in iframe elements, allowing blocked websites to be accessed through an Iframe. I thus set out to built my own website to test out this vulnerability. Soon I learnt restrictions like <code>X-Frame-Options</code> and <code>Content-Security-Policy</code> and how to get around them (through extensions). I developed the website into a Progressive Web App (for fun) and added the experimental tab strips for a more browser look. I also added full details of the exploit so that Mobile Guardian will hopefully find it and patch the vulnerability.</p>
      <div class="divider"></div>
      
      <h3>Started using C++ to Program VEX Robots</h3>
      <p>VEX Robots are made of aluminium with stronger and faster motors. Using C++, I learnt how to program robots to move both with dual controller input and autonomously.</p>
      <div class="divider"></div>
      
      <h3>Attempted to make new DMA</h3>
      <p>Both the students and the teachers got annoyed with various issues with my schools Device Management Application (DMA). Thus, during the June holidays, I was determined to make a new one that works better. I set off to learn socket programming, server-client connection, how to build a Python <code>Flask</code> Server (A web server), <code>PyQt</code> (a framework like Flutter to build Cross Platform Apps like VLC media player, Shotcut, Virtualbox and many more), proxy servers (for web filtering) and how <code>MITM</code> (Man In The Middle) attacks work (so that I can prevent the user from visiting a blocked site). There were just too many things to learn and it was very overwhelming for me at that time. I was not able to complete my goal in time but I learnt a lot of things along the way.</p>
      
      <h3>Created my First Discord Bot</h3>
      <p>After getting a Discord account earlier that year, I was fascinated by the various bots available and wanted to make my own for my class's notes server. I programmed a simple bot to notify classmates when a new note was released and play music from youtube into a voice channel (which often failed as it depended on <code>yt-dl</code>).</p>
      <div class="divider"></div>
      
      <h3>Learnt lots of other programming stuff</h3>
      <p>Apart from refining my C++ skills during the December holidays, I also explored other things like Emulation (Using RetroArch). I spent most of that holiday preparing a PowerPoint presentation to teach my juniors how to program C++ for VEX Robots. I also tried to make an Attendance Tracking System for my Robotics Club using QT to learn more about the framework so that I can use QT for the new DMA I wanted to make. However, I never completed it due to the lack of support, QT was just too complicated for me. Moreover, I repurposed my first discord bot for my new secondary 3 class. The new bot helps keep track of assignments that are yet to be due. Once they are due, they are automatically removed from the list. Through a command, I can also send this list to my class's WhatsApp group chat thanks to <a href="https://github.com/robvanderleek/mudslide">Mudslide</a>. Finally, I tried to compile and run OpenPose on my laptop. It didn't work because I did not have an NVIDIA GPU (Graphics Processing Unit). I wasted quite a bit of time installing <code>CUDA</code> and <code>PyTorch</code> libraries that were useless without the NVIDIA GPU. It was through this incident I learnt what a GPU is and the diffrence between an Integrated GPU and a Dedicated GPU.</p>
    </li>
  </ul>
</div>
