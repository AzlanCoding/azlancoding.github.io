# Vex Programmming Notes
# Vex Programmming Notes
## Quicklinks
<a href="Code-Examples">Code Examples</a>
<a href="https://help.vexcodingstudio.com/#cpp" target="_blank">Vex Doccumentation (External link)</a><br>


## Contents
1. [Initiating Motors](#initiating-motors) <br>
2. [Initiating Controllers](#initiating-controllers)<br>
3. [Spinning Motors](#spinning-motors)<br>
4. [Stopping Motors](#stoping-motors)<br>
5. [Wait](#wait)<br>
6. [Printing](#printing)<br>
> 1. [Brain](#printingA)<br>
> 2. [Controller](#printingB)<br>
7. [Set Cursor](#set-cursor)<br>
> 1. [Brain](#set-cursorA)<br>
> 2. [Controller](#set-cursorB)<br>
8. [New Line](#new-line)<br>
> 1. [Brain](#new-lineA)<br>
> 2. [Controller](#new-lineB)<br>
9. [Clear Line](#clear-line)<br>
> 1. [Brain](#clear-lineA)<br>
> 2. [Controller](#clear-lineB)<br>
10. [New Line](#clear-screen)<br>
> 1. [Brain](#clear-screenA)<br>
> 2. [Controller](#clear-screenB)<br>
11. [Controller Input](#controller-input)<br>
> 1. [Axis](#controller-inputA)<br>
> 2. [Button](#controller-inputB)<br>
12. [Controller Vibration](#controller-vibration)


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
controller controllername1 = controller(primary);
controller controllername2 = controller(partner);
```
In the `controller()` function there is 1 argument.
1. The controller types
   - primary (main controller or otherwise known as Horizontal controller)
   - partner (secondary controller or otherwise known as Vertical controller)
<br>

<h2 id="spinning-motors" name="spinning-motors">Spinning Motors</h2>
You can spin motors in the following format:
``` c++
motorname.spin(directionType::fwd,100,velocityUnits::pct);
```
In the `motor.spin()` function there are 3 arguments.
1. The direction
   - `directionType::fwd`(Forward)
   - `directionType::rev`(Revese/Backward)
2. Speed
   - Any value between -100 to 100 (negative numbers go backwards)
3. The mesurement used in speed
   - `velocityUnits::pct`(Percentage)
   - `velocityUnits::rpm`(Rotations Per Minute)
   - `velocityUnits::dps`(Degrees Per Second)



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
       <th>brakeType</th>
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
task::sleep(Time);
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

<h2 id="set-cursor" name="set-cursor">Set Cursor</h2>
Setting cursor position for printing.<br><br>
Both functions for Brain and Controller below take in 2 arguments: <br>
1. Row <br>
 - As a 'int32_t ' (a.k.a integer) format. <br>
2. Column <br>
 - As a 'int32_t ' (a.k.a integer) format. <br>


<h3 id="set-cursorA" name="set-cursorA">Brain</h3>
```c++
Brain.Screen.setCursor(1, 1);
Brain.Screen.print("Autonomous code started");
Brain.Screen.setCursor(2, 2);
Brain.Screen.print("Turnning left");
Brain.Screen.setCursor(3, 2);
Brain.Screen.print("Going Straight");
//Turn left... Go Straight... Turn right...
```
Below is an image from <a href="https://codev5.vex.com/" target="_blank">codev5.vex.com</a> to explain the columns and rows in a Brain's screen.
![Image](https://codev5.vex.com/static/help/v5/blocks/en/set_cursor/v5_row_column_brain.jpg)
<h3 id="set-cursorB" name="set-cursorB">Controllers</h3>
```c++
Brain.Screen.setCursor(1, 1);
H.Screen.print("H Controller");
Brain.Screen.setCursor(2, 1);
H.Screen.print("Controller Ready");
```
Below is an image from <a href="https://codev5.vex.com/" target="_blank">codev5.vex.com</a> to explain the columns and rows in a controller screen.
![Image](https://codev5.vex.com/static/help/v5/blocks/en/set_cursor/v5_controller_rows_columns.jpg)
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
<h2 id="clear-line" name="clear-line">Clear Line</h2>
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
Image source:<a href="https://www.vexforum.com/t/holonomic-drive-train-code/89166/14" target="_blank">Holonomic drive train code - VEX Robotics Competition Discussion / VRC > Change Up (20/21) - VEX Forum</a>
<br>
There are 2 main types of inputs:<br>
1. Axis (joystick)
2. Button
<br>
<h3 id="controller-inputA" name="controller-inputA">Axis</h3>
In each controller there are 4 axis (2 joysticks). The axis range from -128 to 128. to get this value, call one the following functions based on the axis you want:
```c++
controller.axis1.value();
controller.axis2.value();
controller.axis3.value();
controller.axis4.value();
```
<h3 id="controller-inputB" name="controller-inputB">Button</h3>
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
<h2 id="controller-vibration" name="controller-vibration">Controller Vibration</h2>
Controller vibration allows you to get the attention of the controller if something happened or went wrong such as motor port disconnection. You can do so using the following function:
```c++
controller.rumble('-.-');
```
This function takes in 1 of the following arguments: <br>
1. const char *str (A string consisting of dots and dashes to represent a rumble pattern) The table below explains the dots and dashes:
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

<h2 id="motor-settings" name="motor-settings">Motor Settings</h2>
When you move motors but don't specify the settings, it relys on the default setting or the one it was set. For example if `motor.stop()` was called without the optional argument `breakType`, it will rely on the setting set by `motor.setStopping()`.<br>
There are many settings you can set: Below is a table of most common settings and uses:<br>
<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th>Use</th>
      <th>Description</th>
      <th>Arguements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stopping</td>
      <td><pre><code class="language-c++">motor.setStopping();</code></pre></td>
      <td>Sets the default <pre><code class="language-c++">breakType</code></pre></td>
      <td><ol><li><pre><code class="language-c++">breakType</code></pre> <ul><li><pre><code class="language-c++">breakType::coast</code></pre></li><li><pre><code class="language-c++">breakType::brake</code></pre></li><li><pre><code class="language-c++">brakeType::hold</code></pre></li></ul></li></ol></td>
    </tr>
    <tr>
      <td>Velocity</td>
      <td><pre><code class="language-c++">motor.setVelocity();</code></pre></td>
      <td>Sets the default <pre><code class="language-c++">velocityUnits</code></pre></td>
      <td><ol><li>Velocity (<pre><code class="language-c++">double</code></pre>)</li><li><pre><code class="language-c++">velocityUnits</code></pre> <ul><li><pre><code class="language-c++">velocityUnits::pct</code></pre> (Percentage)</li><li><pre><code class="language-c++">velocityUnits::rpm</code></pre> (Rotations per minute)</li><li><pre><code class="language-c++">velocityUnits::dps</code></pre> (Degrees per second)</li></ul></li></ol></td>
    </tr>
    <tr>
      <td>Rotation</td>
      <td><pre><code class="language-c++">motor.setRotation();</code></pre></td>
      <td>Sets the value of the motor's built-in encoder.</td>
      <td><ol><li>Rotation (<pre><code class="language-c++">double</code></pre>)</li><li><pre><code class="language-c++">rotationUnits</code></pre> <ul><li><pre><code class="language-c++">rotationUnits::deg</code></pre> (Degrees)</li><li><pre><code class="language-c++">rotationUnits::rev</code></pre> (Revolutions)</li><li><pre><code class="language-c++">rotationUnits::raw</code></pre> (Raw data format)</li></ul></li></ol></td>
    </tr>
    <tr>
      <td>Reset Rotation</td>
      <td><pre><code class="language-c++">motor.resetRotation();</code></pre></td>
      <td>Resets the motor's built-in encoder value to 0.</td>
      <td><pre><code class="language-c++">void</code></pre></td>
    </tr>
    <tr>
      <td>Timeout</td>
      <td><pre><code class="language-c++">motor.setTimeout();</code></pre></td>
      <td>Sets the timeout for the motor if it does not reach its commanded position prior to the completion of the timeout. The motor will then stop.</td>
      <td><ol><li>Time (<pre><code class="language-c++">int32_t</code></pre>)</li><li><pre><code class="language-c++">timeUnits</code></pre> <ul><li><pre><code class="language-c++">timeUnits::sec</code></pre> (Seconds)</li><li><pre><code class="language-c++">timeUnits::msec</code></pre> (milliseconds)</li></ul></li></ol></td>
    </tr>
    <tr>
      <td>Max Torque</td>
      <td><pre><code class="language-c++">motor.setMaxTorque();</code></pre></td>
      <td>Sets the max torque the motor is allowed to handle.</td>
      <td><ol><li>Torque (<pre><code class="language-c++">double</code></pre>)</li><li><pre><code class="language-c++">percentUnits</code></pre> <ul><li><pre><code class="language-c++">percentUnits::pct</code></pre> (Percentage)</li></ul></li></ol></td>
    </tr>
  </tbody>
</table>

<h2 id="motor-data" name="motor-data">Motor Data</h2>
You can get a motor's data to calciulate turns or detect if a motor has been disconnected. Below shows a table of the data you can get and the functions you can use to get that data.
<table>
  <thead>
    <tr>
      <th>Data</th>
      <th>Use</th>
      <th>Arguments</th>
      <th>Return Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Spinning</td>
      <td><pre><code class="language-c++">motor.isSpinning();</code></pre></td>
      <td><pre><code class="language-c++">void</code></pre></td>
      <td><pre><code class="language-c++">bool</code></pre></td>
    </tr>
    <tr>
      <td>Direction</td>
      <td><pre><code class="language-c++">motor.direction();</code></pre></td>
      <td><pre><code class="language-c++">void</code></pre></td>
      <td><pre><code class="language-c++">[object Object]</code></pre>(<pre><code class="language-c++">directionType</code></pre>)<lo><li><pre><code class="language-c++">directionType::fwd</code></pre></li><li><pre><code class="language-c++">directionType::rev</code></pre></li></lo></td>
    </tr>
    <tr>
      <td>Rotation</td>
      <td><pre><code class="language-c++">motor.rotation();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">rotationUnits</code></pre> <ul><li><pre><code class="language-c++">rotationUnits::deg</code></pre> (Degrees)</li><li><pre><code class="language-c++">rotationUnits::rev</code></pre> (Revolutions)</li><li><pre><code class="language-c++">rotationUnits::raw</code></pre> (Raw data format)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
    <tr>
      <td>Velocity</td>
      <td><pre><code class="language-c++">motor.velocity();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">velocityUnits</code></pre> <ul><li><pre><code class="language-c++">velocityUnits::pct</code></pre> (Percentage)</li><li><pre><code class="language-c++">velocityUnits::rpm</code></pre> (Rotations per minute)</li><li><pre><code class="language-c++">velocityUnits::dps</code></pre> (Degrees per second)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
     <tr>
      <td>Current</td>
      <td><pre><code class="language-c++">motor.current();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">currentUnits</code></pre> <ul><li><pre><code class="language-c++">currentUnits::amp</code></pre> (Ampere)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
     <tr>
      <td>Power</td>
      <td><pre><code class="language-c++">motor.power();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">powerUnits</code></pre> <ul><li><pre><code class="language-c++">powerUnits::watt</code></pre> (Watts)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
    <tr>
      <td>Torque</td>
      <td><pre><code class="language-c++">motor.torque();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">torqueUnits</code></pre> <ul><li><pre><code class="language-c++">torqueUnits::Nm</code></pre> (Newton Meters)</li><li><pre><code class="language-c++">torqueUnits::InLb</code></pre> (Inch Pounds)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
    <tr>
      <td>Efficiency</td>
      <td><pre><code class="language-c++">motor.efficiency();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">percentUnits</code></pre> <ul><li><pre><code class="language-c++">percentUnits::pct</code></pre> (Percentage)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
     <tr>
      <td>Temperature</td>
      <td><pre><code class="language-c++">motor.temperature();</code></pre></td>
      <td><ol><li><pre><code class="language-c++">percentUnits</code></pre> <ul><li><pre><code class="language-c++">percentUnits::pct</code></pre> (Percentage)</li></ul></li></ol></td>
      <td><pre><code class="language-c++">double</code></pre></td>
    </tr>
  </tbody>
</table>
<h2 id="digital-out" name="digital-out">Digital Out</h2>
Digital out is used for pistons in 3 wire ports.
<h3 id="digital-outA" name="digital-outA">Setting</h3>
The state of a Digital Out component can be set through `digital_out.set(bool value)`
It takes in 1 argument:
1. `bool` (State `true` or `false`) <br>
<h3 id="digital-outB" name="digital-outB">Getting Data</h3>
Getting the state of a Digital Out component can be obtain through `digital_out.value()`
It returns a `bool` (State `true` or `false`)
