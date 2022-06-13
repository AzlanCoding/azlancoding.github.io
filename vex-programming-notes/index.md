# Vex Programmming Notes
# Vex Programmming Notes
## Contents
[Initiating Motors](#Initiating-Motors) <br>
[Initiating Controllers](#Initiating-Controllers)
## Initiating Motors
Motors are initiated in the following format:
``` c++
motor motorname = motor(PORT1, gearsetting::ratio18_1,false);
```
In the `motor()` function there are 3 arguments
1. port number
2. The gear setting 
   - gearsetting::ratio6_1 (6:1 (600 RPM) turbo motor)
   - gearsetting::ratio18_1 (18:1 (200 RPM) speed motor which is the default)
   - gearsetting::ratio36_1 (36:1 (100 RPM) strength motor)
3. Wheather to reverse the motors
   - true (will reverse)
   - false (will not reverse)
<br>

## Initiating Controllers
Controllers are initiated in the following format:
``` c++
controller controllername = controller(primary);
controller controllername = controller(partner);
```
In the `controller()` function there is 1 argument.
1. The controller types
   - primary (main controller or otherwise known as Horizontal controller)
   - partner (secondary controller or otherwise known as Vertical controller)
