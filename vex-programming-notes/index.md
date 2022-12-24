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
      <td><pre><code class="language-c++">gearSetting::ratio6_1</code></pre></td>
      <td>(600 RPM) turbo motor</td>
    </tr>
    <tr>
      <td>18:1</td>
      <td><pre><code class="language-c++">gearSetting::ratio18_1</code></pre></td>
      <td>(200 RPM) speed motor</td>
    </tr>
    <tr>
      <td>36:1</td>
      <td><pre><code class="language-c++">gearSetting::ratio36_1</code></pre></td>
      <td>(100 RPM) strength motor</td>
    </tr>
  </tbody>
</table>

3. Wheather to reverse the motors
   - `true` (will reverse)
   - `false` (will not reverse)
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
``` c++
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

<br>

**Note:**
1. In the second arguement, Speed, if number exceeds the maximum capability of the motor (E.g. 110%), it will only go at the maximum speed (E.g, 100%).
2. Add `controlername1.axis1.value()` in the second arguement, Speed, if you want the motor to spin according to the movement of the joystick on the controller. `axis1` being the axis you want to control with the motor and `controlername1` being the name of the controller you initialised it with.
<br>
<h2 id="stoping-motors" name="stoping-motors">Stoping Motors</h2>
If your motor spins indefinitely due to functions like `motor.spin(directionType::fwd)`, you will eventually need the motor to stop. You can do so like this:
```c++
motor.stop();
```
Alternatively, you can also specify the way you want it to stop:
```c++
motor1.stop(brakeType::coast);
motor2.stop(brakeType::brake);
motor3.stop(brakeType::hold);
```
`motor.stop()` takes 1 **optional** argument:
1. `brakeType` (How you want the motor to stop.
There are 3 types of `brakeType`:
<table>
  <thead>
    <tr>
       <th>BrakeType</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre><code class="language-c++">brakeType::coast</code></pre></td>
      <td>Motor stop accelerating, slowly coming to a stop. Motor is still movable by external forces.</td>
    </tr>
    <tr>
      <td><pre><code class="language-c++">brakeType::brake</code></pre></td>
      <td>Stops motor completely. Does not return to original position (when braking was called) if moved.</td>
    </tr>
    <tr>
      <td><pre><code class="language-c++">brakeType::hold</code></pre></td>
      <td>Stops motor completely and returns to original position (when braking was called) if moved.</td>
    </tr>
  </tbody>
</table>
<h2 id="wait" name="wait">Wait</h2>
You can add a wait block using the following format:
```c++
vex::task::sleep(Time);
```
In the `sleep()` function there is 1 argument.
1. Time in miliseconds
  - Any number
<br>

<h2 id="printing" name="printing">Printing</h2>
Printing things on the controllers and brains help make it easier to test things out.<br><br>
Both functions below take in 1 argument:
1. Message
 - As a 'Const Char' (a.k.a String) format
<h3 id="printingA" name="printingA">Brain</h3>
```c++
Brain.Screen.print("Autonomous code started");
Brain.Screen.print("Turnning left");
//Turn left... Go Straight... Turn right...
```
<h3 id="printingB" name="printingB">Controllers</h3>
```c++
H.Screen.print("H Controller");
V.Screen.print("V Controller");
```

<h2 id="set-cursor" name="set-cursor">set Cursor</h2>
Setting cursor position for printing.<br><br>
Both functions for Brain and Controller below take in 2 arguments: <br>
1. Row <br>
 - As a 'int32_t ' (a.k.a integer) format. <br>
2. Column <br>
 - As a 'int32_t ' (a.k.a integer) format. <br>
 <br>
Below is an image from <a href="https://codev5.vex.com/" target="_blank">codev5.vex.com</a> to explain the columns and rows.
<h3 id="set-cursorA" name="set-cursorA">Brain</h3>
![Image](https://codev5.vex.com/static/help/v5/blocks/en/set_cursor/v5_row_column_brain.jpg)
![Image](https://codev5.vex.com/static/help/v5/blocks/en/set_cursor/v5_controller_rows_columns.jpg)
```c++
Brain.Screen.setCursor(1, 1);
Brain.Screen.print("Autonomous code started");
Brain.Screen.setCursor(2, 2);
Brain.Screen.print("Turnning left");
Brain.Screen.setCursor(3, 2);
Brain.Screen.print("Going Straight");
//Turn left... Go Straight... Turn right...
```
<h3 id="set-cursorB" name="set-cursorB">Controllers</h3>
```c++
Brain.Screen.setCursor(1, 1);
H.Screen.print("H Controller");
Brain.Screen.setCursor(2, 1);
H.Screen.print("Controller Ready");
```
<h2 id="new-line" name="new-line">New Line</h2>
Sets cursor to the next line.<br><br>
Both functions below don't take arguments.
<h3 id="new-lineA" name="new-lineA">Brain</h3>
```c++
Brain.Screen.print("Autonomous code started");
Brain.Screen.newLine();
Brain.Screen.print("Turnning left");
//Turn left... Go Straight... Turn right...
```
<h3 id="new-lineB" name="new-lineB">Controllers</h3>
```c++
H.Screen.print("H Controller");
Brain.Screen.newLine();
H.Screen.print("Controller Ready");
```
<h2 id="clear-line" name="clear-line">clear Line</h2>
Clears the line/row the cursor is currently on.<br><br>
Both functions below don't take in arguments.
<h3 id="clear-lineA" name="clear-lineA">Brain</h3>
```c++
Brain.Screen.print("Autonomous code started");
Brain.Screen.cleatLine();
Brain.Screen.print("Turnning left");
Brain.Screen.cleatLine();
Brain.Screen.print("Going Straight");
Brain.Screen.cleatLine();
//Turn left... Go Straight... Turn right...
```
<h3 id="clear-lineB" name="clear-lineB">Controllers</h3>
```c++
H.Screen.print("H Controller");
Brain.Screen.cleatLine();
H.Screen.print("Controller Ready");
```
<h2 id="clear-screen" name="clear-screen">Clear Screen</h2>
Clears the screen of all printing.<br><br>
Both functions below don't take in arguments.
<h3 id="clear-screenA" name="clear-screenA">Brain</h3>
```c++
Brain.Screen.print("Autonomous code started");
Brain.Screen.print("Turnning left");
//Turns left... Go Straight... Turns right...
Brain.Screen.print("Autonomous complete!");
Brain.Screen.clearScreen();
```
<h3 id="clear-screenB" name="clear-screenB">Controllers</h3>
```c++
H.Screen.print("H Controller");
H.Screen.clearScreen();
H.Screen.print("Controller Ready");
```
<h2 id="controller-input" name="controller-input">Controller Input</h2>
Controller input is the most important as it allows you to control your robot based on controller inputs. Below showcases a controller and all it's input methods.<br>
![!Image](https://www.vexforum.com/uploads/default/original/3X/6/f/6f270188ac61c5b23087b2cb871029427e00790e.jpeg)
Image source:<a href="https://www.vexforum.com/t/holonomic-drive-train-code/89166/14">Holonomic drive train code - VEX Robotics Competition Discussion / VRC > Change Up (20/21) - VEX Forum</a>
<br>
There are 2 main types of inputs:<br>
1. Axis (joystick)
2. Button
<br>
<h3 id="axis" name="axis">Axis</h3>
In each controller there are 4 axis (2 joysticks). The axis range from -128 to 128. to get this value, call one the following functions based on the axis you want:
```c++
controller.axis1.value();
controller.axis2.value();
controller.axis3.value();
controller.axis4.value();
```
<h3 id="button" name="button">Button</h3>
In each controller there are 12 buttons (not including power button and hidden reset button):
1. ButtonR1
2. ButtonR2
3. ButtonL1
4. ButtonL2
5. ButtonUp
6. ButtonDown
7. ButtonLeft
8. ButtonRight
9. ButtonB
10. ButtonA
11. ButtonX
12. ButtonY
<br>
Based on the button that you want, you can call the following function which will return a bool (true or false):
```c++
controller.buttonR1.pressing();
controller.buttonR2.pressing();
controller.ButtonL1.pressing();
controller.buttonL2.pressing();
controller.ButtonUp.pressing();
controller.ButtonDown.pressing();
controller.ButtonLeft.pressing();
controller.ButtonRight.pressing();
controller.buttonA.pressing();
controller.ButtonB.pressing();
controller.ButtonX.pressing();
controller.buttonY.pressing();
```
<h2 id="controller-vibrate" name="controller-vibrate">Controller Vibration</h2>
Controller vibration allows you to get the attention of the controller if something happened or went wrong such as motor port disconnection. You can do so using the following function:
```c++
controller.rumble('-.-');
```
This function takes in 1 of the following arguments: <br>
1. const char *str (A string consisting of dots and dashes to represent a rumble pattern)
<br>
The table below explains the dots and dashes.<br>
	<table>
  <thead>
    <tr>
      <th>Type</th>
       <th>Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre><code class="language-c++">-</code></pre></td>
      <td>Long Rumble</td>
    </tr>
    <tr>
      <td><pre><code class="language-c++">.</code></pre></td>
      <td>Short Rumble</td>
    </tr>
  </tbody>
</table>
2. predefined rumble options:
	- `rumbleLong` (Same as `----`)
	- `rumbleShort` (Same as `....`)
	- `rumblePulse` (Same as `-.-.`)
