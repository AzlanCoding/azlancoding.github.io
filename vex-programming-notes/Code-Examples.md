# Code Examples
## Contents
1. [4-motor drivetrain initialization](#4-motor-drivetrain-initiazation)
2. [Move Base Function](#move-base-function)
3. [2 controller initialization](#2-controller-initialization)
4. [Control Motor Via Controller Axsis](#control-motor-via-controller-axsis)
5. [Check Button Pressed](#Check-Button-Pressed)

<h2 id="4-motor-drivetrain-initialization" name="4-motor-drivetrain-initialization">4-motor drivetrain initialization</h2>

The following example is how to initalise motors for a 4 motor drivetrain
```c++
vex::motor LF = vex::motor(PORT1, gearSetting::ratio18_1, true);
vex::motor LB = vex::motor(PORT2, gearSetting::ratio18_1, true);
vex::motor RF = vex::motor(PORT3, gearSetting::ratio18_1, true);
vex::motor RB = vex::motor(PORT4, gearSetting::ratio18_1, true);
```
The last argument in the functions may vary based on how the robot is built

<h2 id="2-controller-initialization" name="2-controller-initialization">2-controller-initialization</h2>

The following is the default method to initialise Horizontal and Vertical (Primary and Secondary) controllers.
```c++
vex::controller H = vex::controller(primary);
vex::controller V = vex::controller(partner);
```

<h2 id="move-base-function" name="move-base-function">Move Base Function</h2>

The following example is a function that will make the robot move based on a specified speed and duration.
```c++
void moveBase(int speed, int duration)
{
  LF.spin(directionType::fwd, speed, velocityUnits::pct);
  LB.spin(directionType::fwd, speed, velocityUnits::pct);
  RF.spin(directionType::fwd, speed, velocityUnits::pct);
  RB.spin(directionType::fwd, speed, velocityUnits::pct);
  task::sleep(duration);
  LF.stop();
  LB.stop();
  RF.stop();
  RB.stop();
}
```

To run the function, just call it in the `main()` as shown below
```c++
int main()
{
  moveBase(100, 500);
}
```
take note that `task::sleep(duration)` is in milliseconds so... <br>
1 second = 1000 milliseconds

<h2 id="control-motor-via-controller-axsis" name="control-motor-via-controller-axsis">Control Motor Via Controller Axsis</h2>

The following code is usually put in the `main()` function during user-control period
```c++
LF.spin(directionType::fwd, H.Axis3.value(), velocityUnits::pct);
LB.spin(directionType::fwd, H.Axis3.value(), velocityUnits::pct);
RF.spin(directionType::fwd, H.Axis2.value(), velocityUnits::pct);
RB.spin(directionType::fwd, H.Axis2.value(), velocityUnits::pct);
```
The image below is for reference
![Image](https://raw.githubusercontent.com/AzlanCoding/azlancoding.github.io/main/images/controller.jpg)
Image source:<a href="https://www.vexforum.com/t/holonomic-drive-train-code/89166/14">Holonomic drive train code - VEX Robotics Competition Discussion / VRC > Change Up (20/21) - VEX Forum</a>
<br>

<h2 id="Check-Button-Pressed" name="Check-Button-Pressed">Check Button Pressed</h2>

The following code moves an arm motor when L1 or L2 is pressed. <br>
It is usually placed in the `main()` function.
```c++
if (V.ButtonL1.pressing)
{
  arm.spin(directionType::fwd, 100, velocityUnits::pct);
}
else
{
  arm.stop();
  // alternatively you could do the following
  arm.spin(directionType::fwd, 0, velocityUnits::pct);
}
```
