---
layout: page
title: GenQ Hackathon - Calgary
description: Calgary and Switzerland!
img: assets/img/proj3/img1.jpg
importance: 3
category: Highlights
---

## Key Ideas
**Quantum Mechanics, Computring, and Algorithms, Python, Q#, Qiskit, QUBO, Pulser Studio**
<br> 
*Yes, unfortunately everything in this field has a Q in it...*


## Calgary - Hackathon 1

In the fall of 2024, a small group of my peers and I flew out to Calgary for a weekend to participate in the first ever QAI Ventures hosted hackathon, the GenQ Quantum Hackathon. Hosted in Calgary, and sponsered by the City of Calgary, University of Calgary Institute for Quantum Science and Technology, and the Swiss government. The winner of the weekend had the chance to earn an investment from QAI Ventures, for a startup implementing their prototype.

There were 4 different challenges, mostly Quandratic Unconstrained Binary Optimization problems, in different fields like finance and energy. For this hackathon, 6 of us formed a team to work on optimizing the placement of wind turbines in an offshore wind farm. This is a challenging problem due to the aerodynamics of wind tunnels: If turbines are placed in each others' vicinity, the upstream turbine creates a large wake that significantly harms the downstream turbine. 

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj3/img1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of wakes created in a simulated wind farm - Credit: UC San Diego
</div>

The placement of wind turbines, especially given dynamic and inhomogenous wind conditions, becomes one of trying to guess-and-check; in other words, **NP Hard**. This can be mapped to a generic **QUBO** problem, which can be solved through classical algorithms (with guess-and-check, polynomial time complexity), but it can solved much faster through quantum algorithms (exp(sqrt(n)) time complexity). Moreover, with some more involved processing, this problem can be solved through **quantum annealing**. Given all this, our team focused on writing the pre/post-processing python scripts as quickly as possible, and experimenting with the **quantum annealer** graciously made available to by Pasqal. Pulser Studio allowed us to simulate, in real time, up to 6 qubits, or submit to a HPC server the simulation of up to 20 qubits. The classical algorithms slowed rather quickly, but it was seamless to submit the jobs to a real Quantum Annealer with **140 qubits**!

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj3/img2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of the Pulser Studio interface. To this day, we can run local annealing simulations!
</div>

Our solution involved both the base implementation of the challenge, which was to find the most efficient placement of turbines in a discretized grid with homogenous, one-directional wind. To take it above and beyond, and demonstrate entrepreneurship mindset, we iterated on our solution further. The final solution was able to take in real historical wind data such as direction, intensity, and frequency, and place turbines as efficiently as possible given that the data is representative. Overall, we came 3rd place (out of 7) in our category, and had a strong fresh introduction to quantum computing!
