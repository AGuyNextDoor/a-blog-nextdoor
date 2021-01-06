# The Next Decade in AI

## Definitions

*Robust AI*: Intelligence that, while not necessarily superhuman or self-improving (AGI), can be counted on to apply what it knows to a wide range of problems in a **systematic** and **reliable** way, synthesizing knowledge fro; a variety of sources such that it can reason **flexibly** and **dynamically** about the world, **transferring** what it learns in one context to another, in a way that we would expect of an ordinary adult.

*Narrow AI*: Systems that perform a single narrow goal extremely well but often in ways that are extremely centered around a single task and not robust and **transferable** to even modestly different circumstances without extensive retraining. 

*Degrees of Learning*: The different tools available to a system to input/infuse/induce knowledge (aka learn)

*Idiosyncrasy*: Systems that lack solid ways of generalizing beyond a space of training examples cannot be trusted in open-ended domains. If you think of each system as a function approximator, currently popular systems tend to be great at memorized examples, and good at many (though not all) examples near the training examples - which makes them useful for many applications revolving around classification. But they are poor when pushed beyond training distribution.

*NS-CL*: Neuro-Symbolic Concept Learner

*knowledge representation*: Field that aims to accumulate and represent abstract knowledge.

*Nativism*: The idea that some "knowledge" is innate. (not learned but there at the beginning)

*cognitive models*: "Knowledge that accumulates over time about particular states of affairs such as what we might learn about a friend in the course of a conversation, etc."

## Thoughts

### 1 Towards a robust artificial intelligence

#### What are the real differences between a **robust** and **AGI**?

*Robust AI*: Intelligence that, while not necessarily superhuman or self-improving (AGI), can be counted on to apply what it knows to a wide range of problems in a **systematic** and **reliable** way, synthesizing knowledge from a variety of sources such that it can reason **flexibly** and **dynamically** about the world, **transferring** what it learns in one context to another, in a way that we would expect of an ordinary adult.

The main differences between an AGI and a Robust AI, are in its resulting behaviors. While the Robust Ai is expected to have a confidence level in its behavior of an ordinary adult, the AGI is theoretically self-improving with little limits in its performance and memory. Even if a Robust AI has impressive capacities, the AGI's features and capacities largely surpass those capacities the same way the amount of natural numbers between 0 and 1 million, is surpassed by the amount of natural numbers between 0 and positive infinity.

AGI's expectations are on another level. It will show us an understanding and intelligence that will be unreachable by humans just like a new color would be out of our reach to imagine. If the conditions are met, AGI is a potential candidate to succeed in the Turing test, as well as maybe showing us emotions and all the final pieces that we could think are unreachable to carbon and silicium. While a robust AI might fool us and get really close to a successful Turing test, it doesn't require or necessarily demonstrate a "superhuman" intellect.

#### Is robust AI necessarily a step-way to AGI?

It is hard to say clearly what are the missing pieces, but a Robust AI is simply not enough to be called an AGI.
Robust AI possesses all the necessary requirements for an AGI especially the **flexible reasoning** and the **transferability of knowledge across domains**. 

While it might not be a "necessity" to go through a complete Robust AI before starting building an AGI, it surely is a good direction to work towards for researchers and companies.
Being so far off from knowing what an AGI would look like, our poor (but growing) understanding of the human brain and human intelligence, the machine learning technologies swiftly changing, it is very hard to have a clear picture of the necessary puzzle pieces of the AGI.

#### "If we cannot count on our AI to behave reliably, we should no trust it"

The keyword here is *reliability* and its comprehension.
Oxford dictionary's definition of reliability is :

- *"The quality of being able to be trusted to do what somebody wants or needs."*

It is all about the ability/capacity to being trusted. In this scenario, we talk more about the trust in the functionalities rather than a more emotional or optimistic trust. 
Following the definition, it seems trivial that if something is not reliable, and therefore without the ability to be trusted, we should not trust it.

Today's most performant AIs are for the most case, single task-specific. Our trust in them can be directly attached to this functionality and therefore be relatively straight forward. As the number of tasks, a single AI can do increases, the more our trust is an average of our trust in every single task. They might not be equal as an AI may perform very well in certain tasks and yet not be reliable in functionalities they might propose. 

[ Add here a funny drawing of someone telling that he trusts his friend with almost anything but not the cooking ]

Reliability is only one part of the definition of *Robust AI*. It is reinforced but the word **systematic** that is here to complete the needed requirement for a trusted AI. The good performance and results of a program need to be consistent and unquestioned by its users. Otherwise, trust cannot be built, results have to be questioned or thrown away sometimes and the program becomes unusable by other clients.

----------------------------------------------------------------------------

#### AI vs. Humans

AIs are often compared to Humans when talking about performance, robustness, skills, and so on.
In this paper's first section, an emphasis is made that the most performant modern ML programs that have been built still lack some basic human concepts that break most of the needed requirements of a robust system.
This allows the author to show that the models are mainly statistical and lack the abstract comprehension of what they are resulting. It is well illustrated with the GPT-2 examples 

**Yesterday I dropped my clothes off at the dry cleaners and have yet to pick them up. Where are my clothes?** *at my mom's house.*
**There are six frogs on a log. Two leave, but three joins. The number of frogs on the log is now** *seventeen.*

Human comparison is inevitable. The direction of AI is not always clear as it is often the case in research. ("*If I knew what I was doing, it wouldn't be called research* " Einstein)
Human performance is a qualitative error detection process that allows us to know what a model lacks. It is very similar to how an artist would draw a portrait from a model. A representation is made in the artist's mind, but after every piece of carbon that is left on the paper, he needs to peek a look at the model to know what is left, what is out of proportion, how the light is reflected, and so on.

[Make a drawing of an artist drawing a brain that is a model]

Although, the reader must not interpret that models like GPT-2 are bad or worthless because they are not robust. A context must be understood to what those types of AIs "are" and "how" they learn. 

What **are** complex neural networks like GPT-2?
 
More than a simple network of neuronal connections leveraged by weights and impulses, modern architectures have been boosted with specific types of network models that allow them much more powerful types of performance. This is probably best illustrated by the usage of convolution networks for images. They can still be reduced down to a "complex" network of perceptrons, but its overall architecture allows them to achieve line, shapes, and element recognition in pictures. This wouldn't be possible in a "trivial" straight forward deep neural network. 
The same comparison can be made with brains' neural architecture. It's the architecture and the difference of neural types and their order that allows the general and robust intelligence that we experience. 

This is precisely the aim of this illustration. GPT-2 and Convolution networks are advanced neural network architectures similar to those in certain layers of our brain, and they are performant ones. But yet they are alone. They're not connected to the rest of the brain, genes, prior knowledge, and experiences. If we isolated the brain's neural network responsible for human vision and asked it to "understand" what it sees, we might have poor results. But that doesn't take away the impressive abilities of this network. 

Note: *This does raise an interesting question: if we only had the full brain network responsible for vision, how would we test it?*

	1. How do they learn?

Humans take a long time to adapt and learn. The capacity to transverse knowledge from one discipline to another allows us to build upon previous knowledge and gain momentum as we go along. 
This building is important and goes a long way back. It might be challenging to learn Shakespeare's theatre if we don't have any comprehension of time and space, no logic or mathematical tools, or no cultural appreciation. If we are very smart we might be able to see repetitions, patterns in the construction of sentences, associate them with other words but we would accept that the comprehension of the piece is shallow. 
Humans can ask questions, confront their comprehension with others, view the world in 3D, touch, smells, associate emotions to memories, fall upon different truths and lies, etc... All those **degrees of learning** contribute to our comprehension of the world. 

What about AIs? How could we compare the images we give Convolutional Neural Networks (**CNN**) to a learning method given to humans with the same degrees of learning? 
Neural networks are given large batches of images decomposed in pixels. Human eyes decompose electromagnetic radiations (*aka* light) through the photoreceptors at the back of the eye. Those signals are processed by the retinal ganglion cells (Visual cortex) acting as a feature detector (shapes, colors, directions of movement, ...). The signal is then distributed across the brain where visual signals take an important quantity of space in the brain. 
CNN's learning can be compared to a person in a dark room, with one eye and a brain with visual pathways and an adaptive system capable of learning to classify the images and their labels. He is fed the first images he has ever seen in his life with labels and that is it. He never had communication with anyone, doesn't know the existence of language, and cannot appreciate time and space. It is hard to see where the robustness could come from...

[illustrate it]

This example was compared with CNNs but it is also true for other types of modern Machine Learning models where the input is similar to transmitting an electrical signal directly into brains with limited degrees of learning.
To complete the general direction of Gary Marcus in his paper, research needs to look at how we could increase the number of degrees of learning AI possesses to move towards robustness.

## 2. A Hybrid, knowledge-driven, cognitive-model-based approach

#### The curse of conspiracy

*The same network that is able to predict complex mathematical schemes, cannot be trained to predict simple additions or even the identity rule.*

What is going on there? We have the right to be surprised here. It is hard to qualify this network as adaptive. Modern networks have a hard time being able to be specialized in predicting both complex models and simple ones. 

The syndrome of those NN is **the curse of conspiracy**. The higher the number of connections, the harder a network can adapt to simple mathematical models. 
Even if the network is trained a long time, it will overfit in the training set but and won't be able to "generalize *outside* the training distribution" (See warm-up exercise page 10).

[Illustration of the Doc and Dopey in front of the mirror]

We might be tempted to say that modern machine learning models tend to adapt to the training data and that we should focus on finding the "logic rules" behind problems. But, ML models were not here to solve simple problems like the identity rule. Finding a code that solves both simple and hard problems is another job that we need to solve for robust AI.

*Idiosyncrasy*: Systems that lack solid ways of generalizing beyond a space of training examples cannot be trusted in open-ended domains. If you think of each individual system as a function approximator, currently popular systems tend to be great at memorized examples, and good at many (though not all) examples near the training examples - which makes them useful for many applications revolving around classification. But they are poor when pushed beyond training distribution.

Note: Over complex NN is a known problem in the community. Having too many nodes and variables makes training a real problem. Recent papers like the **[Lottery Ticket Hypothesis](https://arxiv.org/abs/1803.03635)** (Jonathan Frankle, Michael Carbin) try to solve this problem by removing useless nodes while still achieving similar performances.
We might want to think about the *minimal* amount of nodes/variables necessary to *solve* a problem.
Should NN be able to grow progressively? Start with simple connexions and grow their own nodes?

### 2.1 Hybrid Architecture

- "In particular, four basic ideads undergrid virtually every compute program:
          - Variables (x and y)
          - Instances (specific numbers)
          - Bindings that tie variables to instances (connecting a variable to an instance)
          - Operations over variables (addition or multiplication)"

Are those the minimal knowledge pieces that a computer should build? (Could also include loops and control structures, comparisons, )
Machine Learning systems typically lean to approximate functions relating input to output (like curve fitting), programmers typically *define* their algorithms independently of training data, in terms of operations over variables.

- Implementing Neural networks that are compatible with symbol manipulation (*Implementational connectionism*)
- Implementing NN that operate without owing anything to the principles of symbol-manipulation (*Eliminative connectionism*)
Maybe make a set of problems that are heavily dependent on *implementational connectionism* (Identity finding) and others that are heavily dependent on *Eliminative connectionism* (image processing CNN, multi variable problems).
"Foundational work on neurosymbolic models is **D'Avila Garcez, Lamb, & Gabbay, 2009)**.

- "What it lacks is a satisfactory framework for learning."
  - Right about what would be needed, recommanded or unknown to develop this framework.

### 2.2 Large-scale knowledge, some which is abstract and causal

- Comments on GPT-2 are valid. Can it still be compared to how a small child would use words?
  - "**If you paint an airplane so that it looks like a dragon, it will be** *a dragon*."
  - Seems like how a child would complete the sentence.

- The comparison with Nigel Richards with the french scrabble tournament could also be made parallel with reinforcement learning which would beat the best players in the world in scrabbles without knowing how to use the language.

- "One problem with trying to build a system out of parts with such little realiability is that downstream will inevitably suffer. The whole point of knowledge is to use it in action and interpretation and decision-making."
  - Comments? 

- **Systematic ways to induce, represent, and manipulate large databases of structured, abstract knowledge, often in causal nature, are a prerequisite to robust intelligence.**

- Do we need fundamental axioms of knowledge? 
  - Do they need to be hardcoded or can they be learnt?
  - Should an AI that build knowledge need to start from the bottom up, by first understading the axiom rules and after only learn about cats and wikipedia?
  - Are there any research made on human brains about the large and necessary presence of axioms in the brain, needed and essential to the build up of semi complex knowledge
![knowledge framework](/api/articles/images/next_decade_in_ai/knowledge_framework.jpeg)

If the comparison is made between human and AIs, the basis of the framework can be "colored" by how the human access this knowledge and how AI lack the "degrees of learning".
    - Make a large comparison between AI and humans? (with the angle of the degrees of learning?)

- Have a discussion about innate knowledge. AIs are better if they are tuned primarly with a sens of innate knowledge/strategy, but that comes with the backslash that they have a harder time to generalize and they also seem less in capacity to learn (why couldn't they learn this native knowledge?). (give the example of my robot playing **2048**)
  - *The real question for AI should be not, **how small can we make our library of priors?**, but **what set of priors could most effectively set the stage for learning?**.*

- Arguemnt (page 33) about the genome and their expression in the development of the brain.
  - Yes the genome have to express a form of prior knowledge, helping the structuration of the brain. Not everything can be left to randomness.
  - But could this also be a reason of limitations in the development of human intelligence?
  - What is a good ratio of innate knowledge, versus generalization ability?

p. 36
    Discuss the final claim of this part about fundamental bricks of innate knowdege (space/time) and the fight that we shouldn't learn everything from scratch everytime.

### 2.3 Reasoning

p. 36
"Reasoning instead of memorizing by drawing inferences"

- A good comment p.38 about the level of hand to hand work made to turn Romeo and Juliet into formal logic. "A system that could generate representations of this sort automatically and reason at comparable levels would represent a major breakthrough."

p.39
"Reasoning per se is not necessarily the bottleneck towards robust AI; the real bottlenexk may lie in having the right information accessible in the context of real-world inference."

- Make a comment on this point.

### 2.4 cognitive models

p.41
"Model-free solutions generalize poorly outside the exact environments in which they were induced"
"lacking cognitive models they have no reliable foundation with which to reacon over."

- Discuss the necessary looking dependence of a cognitive model for robust AI.

Combining reasoning and cognitive models. 

## 3 Discussion

### 3.1 Towards an intelligence framed around enduring, abstract knowledge

- If not written already, search or write about the combination of symbolic and NN. 

Four building prerequisites for building robust artificial intelligence:

1. Hybrid architectures that combine large-scale learning with the representational and computational powers of symbol-manipulation.
2. Large-scale knowledge bases (likely leveraging innate frameworks) that incorporate symbolic knowlede along with others forms of knowledge
3. Reasoning mechanisms capable of leveraging those knowledge bases in tactable ways
4. Righ cognitive models that work together with those mechanism and knowledge bases.

"Robust AI necessarily will reside in the intersection depicted in Figure 4."

![Models and Architectures](/api/articles/images/next-decade_in_ai/models_and_architecture.jpeg)

![Reasoning Vein Diagram](/api/articles/images/next-decade_in_ai/reasoning_vein_diagram.jpeg)

- "There is, by and large, not enough discussion about what the pirmitives for synthetic cognition need to be."


### 3.2 Is there anything else we can do?

#### 3.2.1 Engineering practice

- Maybe read the book "Rebooting AI"

- AAAI Presidential Adress (Dietterich, 2017)
  - Eight suggestions about some techniques that should be emphasized.

#### 3.2.2 Culture

Histon :
"Max Planck said, 'Science progresses one funeral at a time.' The future depends on some graduate student who is deeply suspicious of everything I have said."

### 3.3 Seeing the whole elephant,m a little bit at a time

### Conclusions, prospects, and implications

Solving the current paradigm - Long on data, nut short on knowledge, reasoning and cognitive models.