# Code Examples
## Contents
1. [4-motor drivetrain initiazation](#4-motor-drivetrain-initiazation)
2. [Move Base Function](#move-base-function)

<h2 id="4-motor-drivetrain-initiazation" name="4-motor-drivetrain-initiazation">4-motor drivetrain initiazation</h2>

The following example is how to initalise motors for a 4 motor drivetrain
```c++
motor LF = motor(PORT1, gearsetting::ratio18_1, true);
motor LB = motor(PORT2, gearsetting::ratio18_1, true);
motor RF = motor(PORT3, gearsetting::ratio18_1, true);
motor RB = motor(PORT4, gearsetting::ratio18_1, true);
```
The last argument in the functions may vary based on how the robot is built

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
