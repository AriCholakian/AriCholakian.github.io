---
layout: page
title: GenQ Hackathon - Switzerland
description: Calgary and Switzerland!
img: assets/img/proj4/img1.jpg
importance: 3
category: Highlights
---

## Key Ideas
**Quantum Mechanics, Computring, and Algorithms, Python, Q#, Qiskit, QUBO, Pulser Studio, Protien Folding**
<br> 
*Yes, unfortunately everything in this field has a Q in it...*


## Switzerland - Hackathon 2

With the amount of fun we had in the first year of the GenQ series (you can read about it [here](https://aricholakian.github.io/projects/3_project/)), we were really excited to hear that QAI ventures was continuing the series, bigger than ever! 

The 2025 GenQ hackathon had expanded to multiple locations across the world, based on the field of study. In the fall, Calgary was hosting *energy*, Switzerland was hosting *biology/medicine*, and Singapore was hosting *finance*. When the team from the previous year heard that the Switzerland hackathon was happening on the **CERN** campus, we couldn't resist organizing a trip within the Engineering Physics third year cohort. With the help of our department, the university's Professional Activities Fund, and the generous folks at QAI Ventures, we put aside a weekend in the middle of the fall semester to visit CERN and compete in the hackathon.

To build on our learning from the previous year, we chose a challenge solvable through **Quadratic Unconstrained Binary Optimazation (QUBO)**. With the theme being biology and medicine, the QUBO challenge that my team chose was related to **protien folding**. Without going into too much detail here (you can read about RNA folding [here](https://www.math.clemson.edu/~macaule/classes/f16_math4500/slides/f16_math4500_rna-basics_handout.pdf)), the process of folding an entire RNA chain is a "guess-and-check" combanitorics problem that is slow to solve classically, but much easier to solve through quantum algorithms, like QAOA or VRE.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj4/img1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of what a specific RNA folding can look like
</div>

We implemented a solution to transcribe the protein sequences into sparse **Pauli Z matrices**, and used them as an input to qiskit algorithm library's built-in Quantum Approximate Optimization Algorithm (QAOA). In the classical sense, qiskit solves this problem through gradient descent. In a quantum computer, this would be implemented physically through a phase-flip gate (Pauli Z gate) and would skip the combinatoric computational complexity of the problem. Of course, we could have arrived at solution by implementing a quantum annealer once more, but given that we didn't have access to a real physical quantum annealer, we chose instead to take advantage of the High Performance Computing access we were provided. 

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj4/img3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj4/img4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Not only did our implementation win 2nd place overall (out of 15 teams), we spent a relaxing day exploring CERN and Geneva as a reward the day after!
