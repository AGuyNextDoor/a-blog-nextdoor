# On the Measure of Intelligence
[Arxiv: Francois Chollet. (2019)](https://arxiv.org/abs/1911.01547)
## Definitions

*Absence of generalization*: Ai systems in which there is no uncertainty.

*Local generalization* (robustness): Adaptation to know n unknowns within a single task or well-defined set of tasks. (Typical ML models)

*Broad Generalization* (flexibility): Adaptation to unknown unknowns across a broad category of related tasks. (self-driving vehicles)

*Extreme generalization*: Adaptation to unknown unknowns across an unknown range of tasks and domains. (Humans and some species)

*Broad abilities*: Cognitive abilities that lead to broad or extreme generalization. Often meant in opposition to "local generalization".

*Psychometrics*: the field of study concerned with the theory and technique of psychological measurement, which includes the measurement of knowledge, abilities, attitudes, and personality traits. The field is primarily concerned with the study of differences between individuals.

*g factor*: A hypothetic single factor of general intelligence.

*Ability*: Abstract construct (based on theory and statistical phenomena) as to a directly measurable, objective property of an individual mind (such as a score on a specific test).

*Algorithmic Information Theory* (AIT): Computer science's extension of Information Theory. AIT concerns itself with formalizing useful computer science intuitions regarding complexity, randomness, information, and computation.

*Algorithmic Complexity*: A measure of the "information content* of mathematical objects. We can use Algorithmic Complexity to define the information content that a string *s2* possesses about a string *s1* (called “Relative Algorithmic Complexity” and noted H(s1|s2)), as the length of the shortest program that, taking s2 as input, produces s1.

## Thoughts

## 1. Context and History

### 1.1 Need for an actionable definition and measure of intelligence

### 1.2 Defining intelligence : two divergent visions

*Intelligence* : "Intelligence measures an agent's ability to achieve goals in a wide range of environments." Legg and Hutter, summarizing 70 scientists in the context of AI research.

### 1.3 AI Evaluation: from measuring kills to measuring broad abilities

#### Generalization comment

---
"When we know how a machine does something intelligent, it ceases to be regarded as intelligent. If I beat the world's chess champion, I'd be regarded as highly bright."
(Reed)

---

The difference between the world chess player and the AI playing chess is that we imagine that the chess player could use this intelligence to be super good in a lot of things. If we imagine a person, a world chess player but unable to solve a simple math equation or memorize a sentence, the super-intelligence property quickly fades away because of its inability to generalize properly.
The *Golden Hand* effect is an effect often attributed to high-potential personality that could be summarized as "whatever you want to do, you will do it well".  This summarizes the ability to grasp a good level in many different subjects and to learn them "relatively" fast.

*Generalization*: The ability to handle situations (or tasks) that differ from previously encountered situations.

Two types of generalization:

- **System-centric generalization**: Ability of a learning system to handle situations it has not itself encountered before.
- **Developer-aware generalization**: The ability of a system, either learning or static, to handle situations that neither the system nor the developer of the system has encountered before.

![cognitive_abilities_map](/api/articles/images/on_the_measure_of_intelligence/cognitive_abilities_map.jpeg)

## 2. A new Perspective

### 2.1 Critical Assessment
#### Comment on the comparison with sports (p.22)

*g factor*: A hypothetic single factor of general intelligence.

To have a better grasp of what the **g factor** for general intelligence could look like, Francois Chollet uses a popular cross-domain analogy with sports and the concept of "physical fitness".  Even though we could test humans on a variety of sports, seeing much prowess, data analysis would correlate certain "physical abilities" that would be considered *physical g factor corresponding to the general intuitive construct of "physical fitness"*.

But, as pointed out, this comparison with sports is still blurred from a certain conception of the g factor. Humans are not capable of "general physical fitness". The set of physical tests that would be done on humans would be very far from the *every possible problem* required by the **No Free Lunch Theorem**. The physical fitness comparison is already harder to grasp when having to imagine the abilities that an agent capable of learning every possible physical fitness problem would need to possess. What elements or ability would correlate for such situations?
It is safe to assume that humans' intelligence is not capable of solving every possible problem, therefore far from having or from being able to acquire the general intelligence. The same blur occurs when having to start imagining or describing which ability would be good candidates for general intelligence and the g factor.
#### Can evolution be said to be the "training data set" of humans? 

For anyone interested in comparisons between DNA evolution algorithm and AI, I invite you to read about [**evolutionary algorithm**](https://en.wikipedia.org/wiki/Evolutionary_algorithm) (EA). Its mechanism for learning is inspired by biological evolution, "such as reproduction algorithm, recombination, and selection".

"*evolution optimizes for adaptability, whether cognitive adaptability or sensorimotor adaptability.*"

We can make a general comparison that the last millions of years have been a constant training and validation data set for species' survivability. DNA has a special way to share its code across many and many specimens, each developing and testing unique abilities, surviving, transferring, and finding a way to mix its genetic pool to ensure a certain alignment. 

#### Humans can easily solve problems that overlap with an evolutionary familiar task. (p. 23)

Why is it so? Can humans be considered to possess certain algorithms that are more optimized? How innate are they and can a new one learn or is set in out DNA/genes/brain due to evolution?

Can we make a general comparison between intelligence and algorithmic complexity? I know this paper already makes extensive use of algorithms complexity, information, and entropy but here are two points.

The [**sorting algorithm**](https://en.wikipedia.org/wiki/Sorting_algorithm) is a good example of how an algorithm evolves and the importance of the famous **P=NP**.
Researching an efficient sorting algorithm has quite a history despite its simple appearance. As an evaluation metric, the algorithmic complexity (or the measure of "how long an algorithm would take to complete given an input of size n" [**devopedia**](https://devopedia.org/algorithmic-complexity#:~:text=Algorithmic%20complexity%20is%20a%20measure,asymptotically%20as%20n%20approaches%20infinity.) is a good weight to judge how "smart" an algorithm is. The faster it can solve a given problem, the better right? Evolution might have granted us certain ways to *efficiently* solve certain problems (those that overlap with the evolutionary familiar task) and we might lack the innate efficient algorithmic structure in the brain to solve others. 
Can they be learned? Do we have the capacity to influence our neuronal structure to optimize it over certain tasks?

The structure (or "preparation") a machine is based on influences a lot over its performance. While it's already a largely discussed subject with space complexity and preparation time for computers and machines, the "type" or "nature" of calculation a machine inherits is important.
It is a pretty modern topic with the evolution of performant quantum computers and their natural probabilistic type of computation they offer capable of reducing the algorithmic complexity of some essential algorithms such as the [*search algorithm*](https://en.wikipedia.org/wiki/Search_algorithm). 

A more extensive discussion is needed to fully explore the open topics here but one blog is not enough for such. This paragraph was simply for the reader to question the nature of our intelligence, and explore briefly its possible boundaries and capabilities.


#### Comparing a system without knowledge priors, and a system with too much prior knowledge. (p.25)

*"A system that does not possess human innate knowledge priors would be at a critical disadvantage compared to humans when it comes to efficiently turn a given experience curriculum into skill at a given human task. Inversely, a system that has access to more extensive hard-coded knowledge about the task at hand could not be fairly compared to human intelligence"*

For those who wish a more intensive discussion on **core-knowledge**, consider giving a read [**The next decade in AI**](https://arxiv.org/abs/2002.06177) paper from Gary Marcus (2020), where innate and core-knowledge are an important part of his argument on robust AI.

On page 26, Francois Chollet draws a list from Core Knowledge theory of the general priors that humans are born with and that are essential to the very early stages of our development.
This list is divided into 4 broad categories: 
Objectness and elementary physics, 
Agentness and goal-directedness, 
Natural numbers and elementary arithmetic, 
Elementary geometry and topology.

At the end of section II.1, he concludes that a general AI system should hard-code as fundamentals priors these core knowledge principles.
In his paper [**The next decade in AI**](https://arxiv.org/abs/2002.06177), Gary Marcus defines a framework for innate knowledge that would be needed for robust AI to achieve simple tasks as understanding the alpha and omega of pushing a glass of water over a table. 

![knowledge framework](/api/articles/images/next_decade_in_ai/knowledge_framework.jpeg)

We can see that this framework only answers the first and last element of the earlier list, considering physics, time, actions, and some dynamics. This list was only supposed to explain what a framework for knowledge would look like for *containers* and is therefore not broad enough (compared to what would be required for AGI) but still well illustrates a distinct example. 

### 2.2 Defining intelligence : a formal synthesis

Generalization difficulty
Compare the use of Relative Algorithmic Difficulty that uses the length of a program ( under the form of a binary string ) to solve a task and how it relates to my intuition of density
- A computer and a piece of wood might be of the same mass and the same volume (and therefore the same average density) but clearly, one is smarter than the other one. So there has to be an "intelligence density" that could be used as an intuition/metric in determining which of the two systems is "smarter" or generalize better. 

*Algorithmic Complexity*: A measure of the *information content* of mathematical objects. 

*Relative Algorithmic Complexity*: The information content that a string *s2* possesses about a string *s1* (noted **H(s1|s2)**), as the length of the shortest program that, taking *s2* as input, produces *s1*.

An analogy to algorithmic complexity is to try and define the "*complexity density*" of physical objects. 
Consider a small log of wood and a GameBoy console that have the same mass, volume, and density. Without much difficulty, we could consider the GameBoy as more "complex" than the piece of wood. By **complex** here is understood the total quantities of functions and utilities that are possible with the object. We can describe with extensive hours, the years of work that have made possible the electric circuits, the synthesizing of materials, the ability to write logic on transistors, or the laws of physics that keeps all this together. Such flattery we can't really tell the log... 
But the log does possess complexity. The atoms it is constituted of can be regarded as highly complex objects, and both of the two objects possess (more or less) the same quantity. This means that the "intelligence" is not innate to their direct components but is a complete function of their structure/architecture/design. 
