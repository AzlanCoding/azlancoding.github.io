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
  top: 0px;
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
  <h1 id="title">My Programming Journey</h1>
  <p id="credits">Original <a target="_blank" href="https://codepen.io/alanhouser/pen/aErrQJ">CSS Timeline</a> by Alan Houser<br>Modified and Animated by AzlanCoding</p>

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
      
      <h3>Attempted to Make My Own DMA</h3>
      <p>Both the students and the teachers got annoyed with various issues with my schools Device Management Application (DMA). Thus, during the June holidays, I was determined to make a new one that works better. I set off to learn socket programming, server-client connection, how to build a Python <code>Flask</code> Server (A web server), <code>Qt</code> for python (a.k.a <code>PyQt</code>, a UI framework like Flutter to build Cross Platform Apps like VLC media player, Shotcut, Virtualbox and many more! Learn more about it <a target="_blank" href="https://www.qt.io/product">here</a>.), proxy servers (for web filtering) and how <code>MITM</code> (Man In The Middle) attacks work (so that I can prevent the user from visiting a blocked site). There were just too many things to learn and it was very overwhelming for me at that time. I was not able to complete my goal in time but I learnt a lot of things along the way.</p>
      <div class="divider"></div>
      
      <h3><strong>Participated in First Vex Competition</strong></h3>
      <p>I participated in a friendly match with various secondary schools, and a primary school at Rulang Primary School. The competition is called Spin Up and you can watch a video about it <a target="_blank" href="https://www.youtube.com/watch?v=wIZgvVDZc2Y">here</a>. Even though my team didn't win, it gave me the opportunity to do autonomous programming at a competition level. I wrote and rewrote my code many many times. You can see them in the <code>VEXCODE</code> folder <a href="https://github.com/AzlanCoding/code-for-vex" target="_blank">here</a>. (This repository also consist of code for other competitions)</p>
      <div class="divider"></div>
      
      <h3>Created my First Discord Bot</h3>
      <p>After getting a Discord account earlier that year, I was fascinated by the various bots available and wanted to make my own for my class's notes server. I programmed a simple bot to notify classmates when a new note was released and play music from youtube into a voice channel (which often failed as it depended on <code>yt-dl</code>).</p>
      <div class="divider"></div>
      
      <h3>Learnt Lots of Other Programming Stuff</h3>
      <p>Apart from refining my C++ skills during the December holidays, I also explored other things like Emulation (Using RetroArch). I spent most of that holiday preparing a PowerPoint presentation to teach my juniors how to program C++ for VEX Robots. I also tried to make an Attendance Tracking System for my Robotics Club using QT to learn more about the framework so that I can use QT for the new DMA I wanted to make. However, I never completed it due to the lack of support, QT was just too complicated for me. Moreover, I repurposed my first discord bot for my new secondary 3 class. The new bot helps keep track of assignments that are yet to be due. Once they are due, they are automatically removed from the list. Through a command, I can also send this list to my class's WhatsApp group chat thanks to <a target="_blank" href="https://github.com/robvanderleek/mudslide">Mudslide</a>. Finally, I tried to compile and run <a target="_blank" href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">OpenPose</a> (Motion Capture) on my laptop. It didn't work because I did not have an NVIDIA GPU (Graphics Processing Unit). I wasted quite a bit of time installing <code>CUDA</code> and <code>PyTorch</code> libraries that were useless without the NVIDIA GPU. It was through this incident I learnt what a GPU is and the diffrence between an Integrated GPU and a Dedicated GPU.</p> 
    </li>
    
    <li class="event" data-date="2023">
      <h3><strong>Participated in Second Vex Competition (Nationals)</strong></h3>
      <p>Due to the lack of programmers, I was the programmer for two separate teams. Thus I had to program 2 Dual Controllet Driver control code and 4 Autonomous code as each bot can have two starting positions to choose from during the match. We played <a href="https://www.youtube.com/watch?v=wIZgvVDZc2Y" target="_blank">Spin Up</a> again but this time it was Nationals, the 1st placing would represent Singapore and travel overseas to play against other countries. I lost track of which team won what award but I think we did reasonably well.</p>
      <div class="divider"></div>
      
      <h3>Applied Python Skills to Math Modeling Projects</h3>
      <p>Using my knowledge on Python, I applied it to my Math Modeling Projects. The first one was a Beauty Rating Software. It determined which of my classmates were the most beautiful based on the golden ratio. You can find more about it <a href="https://github.com/AzlanCoding/Beauty-Rating-Software"  target="_blank">here</a> along with the code written for the project. The second one, which I did not upload as the sample data would contain most of my classmates faces, measured the angle in which the basketball was thrown at as well as create an quadratic equation to show the trajectory of the basket ball thrown, using a sample video. These projects gave me the chance to experiment with Artificial Intelligence using Python and allowed me to play around with various python packages such as <code>torchvision</code>, <code>matplotlib</code>, <code>numpy</code> and <code>opencv-contrib-python</code>. <br>*For the first project, when I was training the Facial Detection Model on my laptop, I was not aware that there was already a trained model (.pt file) in the project's repository.</p>
      <div class="divider"></div>
      
      <h3>Started Work on ScreenShare</h3>
      <p>ScreenShare is a simple browser to browser screen sharing application between 2 devices. It was initially intended to help my classmates and my Math teacher screen mirror our Chromebook and her iPad to the Projector but I later discovered that <code>WebRTC</code> (The technology used by ScreenShare) does not work on iPads. It then became a prototype for the Integrated Classroom Hub (Another prototype that I will talk about later). You can see the project and try it out yourself <a target="_blank" href="https://github.com/AzlanCoding/ScreenShare">here</a>.</p>
      <div class="divider"></div>
      
      <h3>Explored Virtual Machines and Other Stuff</h3>
      <p>During the June Holidays, I got a new, powerful laptop that had 64GB of RAM, 2TB of SSD Storage, NVIDIA RTX 3050 6GB Laptop GPU and a 13th Gen i7 13700H Intel Processor. This gave me enough resources to explore virtual machines. I experimented with Ubuntu LTS 22.04, Kali Linux and Android 6 and 13 (Android 6 was excessively slow and Android 13 did not work). This allowed me to learn linux commands and how to operate the command line interfaces in both Windows and Linux. During this holiday, I also finished up work for ScreenShare. It was here I discovered that there was no <code>Web-RTC</code> support for iPad and that the School's Internal Firewall does not allow WebRTC functionality. I think it is due to the blockage of the <code>UDP</code> Protocol and device to device communication (local network server hosting?). Either way, I concluded that the only way for ScreenShare to work was if I set up my own WIFI in my classroom, which I did. I now introduce to you the Integrated Classroom Hub (ICH), an all in one classroom manager. <br>The ICH fixes multiple ICT problems in my classroom such as poor WIFI connection that constantly disconnects. Using a spare Singtel Mesh Router I had lying around in my house, the ICH auto log in to the school WIFI and start a hotspot which goes out through the ethernet port of my laptop to the Singtel Mesh Router. The ICH is also supposed to come with a better web filtering system but it was never completed before Secondary 4. The proposed web filtering system uses a transparent proxy to monitor and block every single outgoing request to the internet from the students. This is better as the school would only need to maintain the ICH in each classroom rather than doing software checks on every students' laptop every semester. The ICH also starts 2 Python <code>Flask</code> Servers. The first one running at port 80 handles shortcuts. When connected to the Wifi, if you type <code>igc/</code> in a chrome browser, it will redirect you to Google Classroom (*IGC stands for ICON Google Classroom). It does this by DNS Hijacking the domain <code>igc</code> which works despite not being a valid domain name. The second one running at port 443 is a website that manages reminders, important dates, homework and overdue homework for my class. The website also comes with various tools such as an image to text converter and WebRTC Screen Sharing to screen mirror (Cast) the students Chromebook to the ICH (Which is also connected to the projector. DNS Hijacking also meant that I could get any domain I wanted for the website, except that the website would only be accessible when connected to the ICH's WIFI. This also meant the ICH was to replace the current discord bot which kept going offline (cause my free bot hosting was not very reliable).</p>
      <div class="divider"></div>
      
      <h3><strong>Won 3rd Team Placing for Friendly Over Under Competition</strong></h3>
      <p>We played a friendly tournament with many other secondary schools at Anglo-Chinese School (Independent). This season's game can be found <a href="https://www.youtube.com/watch?v=dvDqEI7qO34" target="_blank">here</a>. My team won 3rd team placing, there was other 2 teams in my school that also managed to get 2nd Team Placing (They allianced each other while we allianced with Futrun Robotics Academy). It was an interesting experience especially since the teammates in out alliance were significantly younger than us. My research on <strong>Odemetry</strong> also paid off. Odometry is the use of data from encoders/rotation sensors or motion sensors to estimate the change in position over time, it is often used in robotics to determine a robot’s position relative to a known starting location. The calculation is very complex and I had to figure all of it out myself. It made our autonomous task more consistent as our bot will not be affected if it hits another bot or goes off target. You can check out the code in the <code>PROS</code> folder <a href="https://github.com/AzlanCoding/code-for-vex" target="_blank">here</a>. I learnt and used the PROS API on my own just for this competition and it definitely paid off.</p>
      <div class="divider"></div>
      
      <h3>Finished ICH (except transparent proxy) and created Bootable Ubuntu Drive</h3>
      <p>During the December holidays, I finished the development for the Integrated Classroom Hub prototype except the transparent proxy. It was ready for my class to use in the upcoming year. I also converted my Ubuntu LTS 22.04 Virtual Machine into a bootable thumbdrive that My laptop booted from. It made my workflow faster as I had been using ubuntu everyday for most of my homework and revision and using a bootable thumbdrive meant faster performance and less graphic rendering errors along with access to the NVIDIA GPU.</p>
    </li>
    
    <li class="event" data-date="2024">
    <h3>Upgraded Ubuntu</h3>
    <p>I wanted to install <a href="https://hyprland.org/">Hyprland</a>. So I tried to update my ubuntu 22.04 to 23.04 but i broke it along the way. I backed up my files by mounting a thumb drive through tty and transferring my files to that thumb drive. Then I started with a fresh new installation of Ubuntu 23.10 and used this <a href="https://github.com/JaKooLit/Debian-Hyprland">install script</a> to help me install hyprland. Because the script was for debian (at the time I used it), I needed to find all my missing dependencies from the install log. I've since successfully installed hyprland.</p>
    </li>
  </ul>
</div>

<script>
  function setStyle(id, top, fontSize, bold, opacity, opacity2){
    return $("#event"+id+"style").html("#event"+id+"::before{top:"+top+"px;font-size:"+fontSize+"em;color: rgba(255, 255, 255, "+bold+");opacity:"+opacity+"}\n"+"#event"+id+"::after{top:"+((5*(fontSize-1+1.5))+top)+"px;opacity:"+opacity2+"}\n");
  }
  
  window.scrollTo(0, 0); //Reset Scroll
  
  $("#title").css('opacity',0);
  $("#credits").css('opacity',0);
  $('ul.timeline').css('opacity',0);
  $("li.event").css('opacity',0);
  $("li.event").each(function(i){
    $(this).css('top',(1+i)*100);
    $(this).attr('id','event'+i);
    $(this).append('<style id="event'+i+'style"></style>');
  });
  $(document).ready(function(){
    $("#title").animate({opacity:1}, 1000, function(){
      $("#credits").animate({opacity:1}, 1000, function(){
        $('ul.timeline').animate({opacity:1}, 1000);
        $("li.event").each(function(i){
          $(this).delay(i*200).animate({opacity:1,top:0}, 1500);
        });
      });
    });
  });
  
  $(document).on('scroll', function(){
    $("li.event").each(function(i){
      let clientRect = this.getBoundingClientRect()
      
      let x1 = clientRect.top; //Distance from top of view port to top of element
      
      if (x1 <= 250 && x1 >= 50){
        y1 = 1+((1-((x1-50)/200))*1); //font-size
        y2 = 0.4+((1-(x1/200))*0.6); //font-colour
        y3 = 0; //top
      }
      else if (x1 > 250){
        y1 = 1; //font-size
        y2 = 0.4; //font-colour
        y3 = 0; //top
      }
      else if (x1 < 50){
        y1 = 2; //font-size
        y2 = 1; //font-colour
        if (x1 < 0) {
          y3 = 50 + (x1*-1); //top
        }
        else{
          y3 = 50-x1; //top
        }
      }
      
      if (y3 > $(this).height()){
        y4 = (1-((y3-$(this).height())/115)); //Opacity
      }
      else{
        y4 = 1; //Opacity
      }
      
      //Prevent Last element from escaping timeline OR prevent events from deviating too far off
      if (($("li.event").length == (i+1) && y3 > $(this).height()) || (y3 > $(this).height()+115)){
        y3 = $(this).height();
      }
      
      
      setStyle(i,y3,y1,y2,y4,y4+1);
    });
  });
</script>
