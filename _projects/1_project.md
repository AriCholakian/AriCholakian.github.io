---
layout: page
title: Autonomous Rescue Robot
description: The Infamous Robot Summer!
img: assets/img/proj1/cover.png
importance: 1
category: Highlights
related_publications: false
---

## Key Ideas
**Onshape CAD, shafts, DC motors, servos, 3DOF robot arm, LIDAR, 4-bar linkage, inverse kinematics, 3D Printing with PLA, PETG, TPU, springs, machining, waterjet, sand-blasting, fasteners, aluminum manufacturing, thread cutting, informal drawings, laser cutting, thread lock, modular design**

## Project

Note: You can explore the a retroactively made CAD document of the robot, with most of its details [here](https://cad.onshape.com/documents/c245893f23ffdafdd206e18e/w/b27f1635c596bf1bc8b0da2b/e/9505814e96886a7bf376a6a0?renderMode=0&uiState=697d279370347b9e6acbf886)!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img17.png" title="The Team" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left to Right: Ronny - Electrical and Software, Taiga - Mechanical, Yuvraj - Electrical and Software, Me - MechanicalSS
</div>

A core part of all 2nd-year Engineering Physics student's Undergraduate experience, almost a rite of passage, is Robot Summer. Students split into teams of 4 and are tasked to build an autonomous robot to complete some challenge only revealed to us with 6 weeks on the clock, creating the perfect environment for some very creative, robust, and forward-thinking problem solving. There is really no time to slowly explore options or test prototypes, and I believe this makes for a good analogue to engineering in real industry, where there has to be very intentional planning, time management, and execution (including some *very* late nights) to be successful in the competition.

We put together our team of 4, with 2 mechanical-focused members and 2 electrical/software-focused members. Meet the team:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img1.png" title="The Team" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left to Right: Ronny - Electrical and Software, Taiga - Mechanical, Yuvraj - Electrical and Software, Me - MechanicalSS
</div>


For my year of the competition, the scenario was fairly straightforward: **We had to create a 1 cu. ft autonomous robot, able to save as many plushies/pets as possible from a fictional fire in under 2 minutes, with several options of getting the pets to safety.** We could pick up the pets, carrying them back to the safe zone, release them on a zipline, or (most excitingly of all) throw them into a fictional construction chute to save them from the fire! Considering the design complexity of the two later strategies, we played it safe: er chose to pick up the pets in a basket and drive them back to the start.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img9.png" title="claw" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img2.png" title="robot concept" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img6.png" title="shoulder hinge" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Some early concepts/prototypes of how we started. Left to right: A claw prototype, the general layout of the robot, the "shoulder" of the 3DOF robot arm.
</div>


Within a week of design, we were off to building! From the shortcomings of teams from previous years, it was immediately clear that whatever we designed needed to be modular, and easily modifiable, to leave room to modify our strategy wherever needed. The Robot Lab was stocked with a wide variety of building options: A laser cutter could quickly cut pressed board, cardboard or PMMA parts or a row of Bambu printers could let you print an entire robot overnight. There was sheet metal, extruded aluminum, wood, plastic, all sorts of hardware. With weight not a concern, Taiga and I chose to build our chassis out of U-channel and bar aluminum stock, and 3D print major components of the arm. In hindsight, this gave us a few advantages over other teams, the majority of which designed their robots out of 1/8" pressed board. We could:
- Drop the robot and it would survive (our robot did indeed survive a rogue fall from the competition surface completely unscathed, and a few others' unfortunately did not).
- Attach things rigidly without needing to re-manufacture any parts. Need to hook up a small proto board? No worried, grab the handheld drill and a couple of fasteners!
- Provide a completely rigid foundation for the 3 DOF arm and the driver motors.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj1/img10-1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj1/img8.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    First few assemblies.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj1/img19.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/proj1/img18.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Some drawings, just for me and Taiga to be able to manufacture in parallel.
</div>


Here's some more photos and videos, of several robot arm tests, line following demonstrations, and pet pick ups!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/proj1/vid1.mov" title="working" class="img-fluid rounded z-depth-1" controls=false autoplay=true muted=true loop=true%}
    </div>    
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/proj1/vid4.mov" title="working" class="img-fluid rounded z-depth-1" controls=false autoplay=true muted=true loop=true%}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid loading="eager" path="assets/video/proj1/vid2.mp4" title="working" class="img-fluid rounded z-depth-1" controls=false autoplay=true muted=true loop=true%}
    </div>
</div>
<div class="caption">
    Early line following tests/tuning, and robot arm moving vertically with inverse kinematics.
</div>

The design and execution of the arm was one of the major challenges that I focused on. The basic concept agreed upon from the start was two motors at the "shoulder" joint (for azimuth and up/down rotation), one at the "elbow", and one at the "wrist" (for up and down rotation of the wrist). It was suggested by mentors to use a worm gear design at the shoulder, to apply a large gear reduction and passively "hold up" the shoulder instead of stalling the motor, but in the final design an off the shelf gearbox is used. The other major change was to switch to a 4-bar linkage to decrease the moment placed on the shoulder and elbow motors.

Somewhere around the 3 week point, the robot prototype was fully disassembled for me to sand-blast and spray paint the all-metal body. While obviously not a priority over the functionality of the robot, we were confident in its ability to perform very well at this point, and wanted to spend some time polishing its looks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img12.png" title="claw" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img16.png" title="robot concept" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1/img14.png" title="shoulder hinge" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sand-Blasting and spray painting the aluminum robot.
</div>

And without further ado, competition day, where we indeed picked up 5 out of 7 pets in throughout the entire bracket, and continued to place first in the overall competiton, ahead of 13 other teams!

<iframe width="100%" height="500" src="https://www.youtube.com/embed/kZz8G45xUVI?si=hQkykqICVyrvlM3T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# **Watch my interview with CTV Morning Live here!**

<iframe width="100%" height="550" src="https://embed.jasperplayer.com?brand=CTV_NEWS&destination=ctvnews_web&language=EN&contentId=3186451" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>