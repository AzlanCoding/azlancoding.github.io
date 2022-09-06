# Vex Programmming Notes
# Vex Programmming Notes
## Quicklinks
[Code Examples](Code-Examples)
[Vex Doccumentation (External link)](https://help.vexcodingstudio.com/#cpp) <br>


## Contents
1. [Initiating Motors](#initiating-motors) <br>
2. [Initiating Controllers](#initiating-controllers)<br>
3. [Spinning Motors](#spinning-motors)<br>
4. [Wait](#wait)<br>


<h2 id="initiating-motors" name="initiating-motors">Initiating Motors</h2>

Motors are initiated in the following format:
``` c++
motor motorname = motor(PORT1, gearsetting::ratio18_1,false);
```
In the `motor()` function there are 3 arguments.
1. port number
2. The gear setting

<table>
  <thead>
    <tr>
      <th>Gear</th>
       <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6:1</td>
      <td><pre><code class="language-c++">gearsetting::ratio6_1</code></pre></td>
      <td>(600 RPM) turbo motor</td>
    </tr>
    <tr>
      <td>18:1</td>
      <td><pre><code class="language-c++">gearsetting::ratio18_1</code></pre></td>
      <td>(200 RPM) speed motor</td>
    </tr>
    <tr>
      <td>36:1</td>
      <td><pre><code class="language-c++">gearsetting::ratio36_1</code></pre></td>
      <td>(100 RPM) strength motor</td>
    </tr>
  </tbody>
</table>

3. Wheather to reverse the motors
   - true (will reverse)
   - false (will not reverse)
<br>

<h2 id="initiating-controllers" name="initiating-controllers">Initiating Controllers</h2>

Controllers are initiated in the following format:
``` c++
vex::controller controllername1 = vex::controller(primary);
vex::controller controllername2 = vex::controller(partner);
```
In the `controller()` function there is 1 argument.
1. The controller types
   - primary (main controller or otherwise known as Horizontal controller)
   - partner (secondary controller or otherwise known as Vertical controller)
<br>

<h2 id="spinning-motors" name="spinning-motors">Spinning Motors</h2>
You can spin motors in the following format:
```c++
motorname.spin(vex::directionType::fwd,100,vex::velocityUnits::pct);
```
In the `motor.spin()` function there are 3 arguments.
1. The direction
   - `vex::directionType::fwd`(Forward)
   - `vex::directionType::rev`(Revese/Backward)
2. Speed
   - Any value between -100 to 100 (negative numbers go backwards)
3. The mesurement used in speed
   - `vex::velocityUnits::pct`(Percentage)
   - `vex::velocityUnits::rpm`(Rotations Per Minute)
   - `vex::velocityUnits::dps`(Degrees Per Second)
**Note:**
1. In the second arguement, Speed, if number exceeds the maximum capability of the motor (E.g. 110%), it will only go at the maximum speed (E.g, 100%).
2. Add `controlername1.axis1.value()` in the second arguement, Speed, if you want the motor to spin according to the movement of the joystick on the controller. `axis1` being the axis you want to control with the motor and `controlername1` being the name of the controller you initialised it with.
<br>

<h2 id="wait" name="wait">Wait</h2>
You can add a wait block using the following format:
```c++
vex::task::sleep(Time);
```
In the `sleep()` function there is 1 argument.
1. Time in miliseconds
  - Any number
<br>
