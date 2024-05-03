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
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
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

</style>

<div id="timeline-content">
  <h1>My Programming Journey</h1>
  <p>Original <a href="https://codepen.io/alanhouser/pen/aErrQJ">CSS Timeline</a> by Alan Houser</p>

  <ul class="timeline">
    <li class="event" data-date="Primary 5">
      <h3>Participated in Innovation Project (IVP) and was selected for Booth Presentation</h3>
      <p>This is where I was first introduced to programming. I programmed a Microbit to automatically close the prototype window when rain is detected. This project was programmed using block programming in the browser.</p>
    </li>
    <li class="event" data-date="Primary 6">
      <h3>Started Learning Python</h3>
      <p>Once I finished PSLE, I learnt python using a book my mum bought for me and a pygame tutorial in a youtube video. I learnt the Python Programming Language and made my first (very lame) game (using the tutorial)</p>   
    </li>
  </ul>
</div>
