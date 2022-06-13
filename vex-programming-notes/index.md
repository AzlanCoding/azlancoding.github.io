# Vex Programmming Notes
# Vex Programmming Notes
## Contents
1. [Initiating Motors](#initiating-motors) <br>
2. [Initiating Controllers](#initiating-controllers)
<br>


<h2 id="initiating-motors" name="initiating-motors">Initiating Motors</h2>

Motors are initiated in the following format:
``` c++
motor motorname = motor(PORT1, gearsetting::ratio18_1,false);
```
In the `motor()` function there are 3 arguments
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
controller controllername = controller(primary);
controller controllername = controller(partner);
```
In the `controller()` function there is 1 argument.
1. The controller types
   - primary (main controller or otherwise known as Horizontal controller)
   - partner (secondary controller or otherwise known as Vertical controller)
