# New Types of Experiments Reveal that a Neuron Functions as Multiple Independent Threshold Units

[Nature - paper PDF](https://www.nature.com/articles/s41598-017-18363-1)

## Intro 

In this paper, the experimenters present three experiments that come questioning assumptions about "**neuronal functionalities** beyond the traditional framework, and the advanced computational capabilities and dynamical properties of such complex systems".

Neurons have long been assumed to compute by summing incoming electrical signals via their dendrites. If this summation reaches a certain threshold, the neuron can fire its spike onto the axon and transmit the signal along.
For the following experiments and model tested, experimenters, have represented the threshold unit as a spring where weight is added until it is heavy enough to cross *Th*, the threshold value. The spring analogy has degrees of freedom that describes well certain properties of the neuron :

- The threshold value *Th* is unique for each sping
- Each spring has its force constant *k*. This means that they are unique in how they deal with stretching. Essentially, two springs with the same added weight might not stretch the same length.
- Weights are independent of the string. Weights of different sources and magnitudes can be added. We can note that the synchronicity of signals is not well represented by this analogy. We assume here that they are simultaneous.

![Figure 1](/api/articles/images/neuron_functions_as_multiple_independent_threshold_units/figure1.png)

This "direct" behavior is represented in model 1 (figure **C1**) where the neuron threshold holds in the soma of the neuron, stretched by the weights of each dendrite's signal. The associated equation describes how the sum of the weights needs to be greater than *Th* for the transmission to apply.

Note: In the equations, **W** are functions of time, describing the time-dependent characteristics of signals in neurons and the need for weights to be synchronous to have a maximum weight.

Two other models are proposed with possible computation mechanics.

Model 2 (figure **C2**) adds individual springs and thresholds in each dendrite to the first model 1. "This means that a dendrite transmits its signal to the central spring in a nonlinear manner only if a threshold crossing occurs". In the image, we can see that the pink dendrite does not contribute any weight to the central spring because it has not crossed its own threshold **Th**i.
If we look at the equations we can see that a function **f**i transforms the summation of weights in a nonlinear way. 

Note: The functioning of the central spring is the same as in the model **C1**. Only the "way" weights are added on the central spring has been changed. 

Model 3 (figure **C3**) takes away the central spring and leaves only the independent excitable springs associated with each dendrite like in model 2. 

## First Experiment - Variability in the Spike Waveforms

The first experiment consisted of two extracellular electrodes, stimulating alternatively a neuron. The stimulation had a slow rate (0.5 Hz) to ensure that the cell had a resting time long enough to not accumulate any effects (depression, facilitation, resting, etc).

![Figure 3](/api/articles/images/neuron_functions_as_multiple_independent_threshold_units/figure3.png)

Results:
"The shape of the spikes originated from stimulations from either the 
green or the pink extracellular electrode have a well define reproducible waveform (see also Fig. 2D). However, the two stimulating electrodes generate two distinguishable sets of waveforms. (...) Results clearly indicate (see Statistical analysis in Methods) that for a given neuron the waveform of a spike is not independent of the origin of the stimulation (Fig. 2A4) and its relative direction (as illustrated in Fig. 3C and D)."

The set of graphs in the section **3D** shows for different neurons under the same constraints, how the final spike depends strongly on the origin of the input signal. This supports the idea that there isn't a "central" excitable mechanism within the neuron-like in models 1 and 2. 

## Second Experiment - The absence of Anisotropic Spatial Summation

*Anisotropic*: Having a physical property that has a different value when measured in different directions. An example is wood, which is stronger along the grain than across it.

*NRL*: Neuron Response Latency. The time-lag between the presynaptic stimulation and the postsynaptic evoked spike.

[Wikipedia definition](https://en.wikipedia.org/wiki/Anisotropy)

This second experiment is meant to test if the summation is computed isotropically or anisotropically inside the neuron. The setup is similar to experiment one, with two extracellular electrodes stimulating a neuron. The waveforms each electrode stimulates are different and are said to reliably generate spikes intracellularly.

![Figure 4](/api/articles/images/neuron_functions_as_multiple_independent_threshold_units/figure4.png)

By studying and calibrating the NRL between each electrode and the neuron, the experimenters played on the stimulation scheduling (see section **4E**) to see the intracellular response in the three different cases:

- Green before Pink
- Green and Pink simultaneously
- Green after Pink

The important factor here is that each input signal (Green and Pink) coming from the electrode had a smaller amplitude than their respective threshold value. This means that independently they were unable to stimulate an intracellular response but that their summation was theoretically superior to each of their threshold values.
For any of those cases, they were unable to observe an intracellular response. This goes again against the existence of a unique centralized excitable mechanism that does not fit the anisotropic spike waveforms.

## Third Experiment - the absence of intra and extra Summation and Subtraction

Where the second experiment focuses on extracellular stimulation and their summation, this experiment looks at the behavior of different scheduling of extra and intra stimulation. We now have two thresholds for each stimulation but their arithmetic sum is still above, exceeding 75%, of each threshold.
For all relative timing and stimulations, no evoked spikes were observed as shown in figure **5C**, indicating a lack of summation. In rare cases (1 out of 10) a spike was observed when a time-lag of several *ms* was orchestrated (see figure **5D** and **5E**). Note that the lack of summation between the intracellular and the extracellular stimulation (Fig. 5 and Statistical analysis in Methods), hints that a subtraction between the stimulations is also ineffective (as shown in figure 6). 

![Figure 5](/api/articles/images/neuron_functions_as_multiple_independent_threshold_units/figure5.png)

## Conclusion

New proposed computational scheme of a neuron: 

- A neuron consists of several independent threshold units.
- A neuron consists of a set of anisotropic threshold elements, transferring the incoming signals to its connected neuron via a single axon.
- Each threshold unit within the neuron collects its own anisotropic incoming signals; hence there is no direct spatial summation between incoming signals to different threshold units.
- Nevertheless, the resolution of the anisotropy of the neuron cannot be deduced from our experiments, as well as whether each sub-cellular threshold unit is coupled to a dendrite or to a bunch of adjacent dendrites.
