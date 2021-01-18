# On the Measure of Intelligence (Ongoing Work)

## Definitions

Absence of generalization: Ai systems in which there is no uncertainty.

*Local generalization* (robustness): Adaptation to know n unknowns within a single task or well defined set of tasks. (Typical ML models)

*Broad Generalization* (flexibility): Adaptation to unknown unknowns across a broad category of related tasks. (self-driving vehicules)

*Extreme generalization*: Adaptation to unknown unknowns across an unknown range of tasks and domains. (Humans and some species)

*Broad abilities*: Cognitive abilities that lead to broad or extreme generaliation. Often meant in opposition to "local generalization".

*Psychometrics*: the field of study concerned with the theory and technique of psychological measurement, which includes the measurement of knowledge, abilities, attitudes, and personality traits. The field is primarily concerned with the study of differences between individuals.

*g factor*: A hypothetic single factor of general intelligence.

*ability*: Abstract construct (based on theory and statistical phenomena) as to a directly measurable, objectve property of an individual mind (such as a score on a specific test).

*Algorithmic Information Theory* (AIT): Computer science's extension of Information Theory. AIT concerns itself with formalizing useful computer science intuitions regarding complexity, randomness, information, and computation.

*Algorithmic Complexity*: A measure of the "information content* of mathematical objects. We can use Algorithmic Complexity to define the information content that a string *s2* possesses about a string *s1* (called “Relative Algorithmic Complexity” and noted H(s1|s2)), as the length of the shortest program that, taking s2 as input, produces s1.

## Thoughts

## 1 Context and History

### 1.1 Need for an actionable definition and measure of intelligence

### 1.2 Defining intelligence : two divergent visions

*Intelligence*: "Intelligence measures an agent's ability to achieve goals in a wide range of environments." Legg and Hutter, summarizing 70 scientists in the context of AI research.

Two characterizations :

- Task specific.
- Generality and adaptation.

### 1.3 AI Evaluation: from measuring kills to measuring broad abilities

"When we know how a machine does something intelligent, it ceases to be regarded as intelligent. If I beat the world's chess champion, I'd be regarded as highly bright."
(Reed)

The difference between the world chess player and the AI playing chess, is that we imagine that the chess player could use this intelligence to be super good in a lot of things (*Golden Hand* effect).

*Generalization*: The ability to handle situations (or tasks) that differ from previously encountered situations.

Two types of generalization:

- **System-centric generalization**: Ability of a learning system to handle situations it has not itself encountered before.
- **Developer-aware generalization**: The ability of a system, either learning or static, to handle situations that neither the system not the developer of the system have encountered before.

![cognitive_abilities_map](/api/articles/images/on_the_measure_of_intelligence/cognitive_abilities_map.jpeg)

## 2 A new Perspective

### 2.1 Critical Assessment

p.22
- Make a comment on the comparison with sports

p.22
- Can evolution be said to be the "training data set" of humans? 
  - "evolution optimizes for adaptability, wether cognitive adaptability or sensorimotor adaptability.

p.23
Humans are able to easily solve problems that overlap with evolutionnary familiar task
Comment if it is really "evolutionnary" or education?

p.24
Mini conclusion : Don't try to find a measure of general and universal intelligence but keep it to human intelligence

P.25
Comparing a system without knowledge priors, and a system with too much prior knowledge.

p.26
make a comparison between the **Core-Knowledge** list and the vein diagrams in the "next decade of AI" and how they overlap or not. (knowledge framework and vein diagrams)

Core Knowledge list :

- should this list be a minimal requirement for AIs to have before task and competition solving?
- Should it be a reasonnable skill list or test list for a Turing test?

### 2.2 Defining intelligence : a formal synthesis

Generalization difficulty
Compare the use of Relative Algorithmic Difficulty that uses the length of a program ( under the form of a binary string ) to solve a task and how it relates to my intuition of density
- A computer and a piece of wood might be of the same mass and the same volume (and therefor the same average density) but clearly, one is smarter than the other one. So there has to be a "intelligence density" that could be used as an intuition/metric in determining which of two system is "smarter" or generalize better. 


Make a recap of the different important notions to understand to follow the different equations?

Make a bunch of graphs (data visualization) for how intelligent modern models belong (for example a bar chart from 0-100 y axis, and "skill", "generability", etc on the x axis)
This could be a whole article by itself
- Make a link to this paper and do a little summary
- Propose a comparison of different model illustrated with examples and images
- The article could be a vulgarisation of modern models that should be looked at for everyone to read
- Maybe use the set of practical questions to ask about 
  – What is its scope?
  – What is its “potential” over this scope (maximum achievable skill)?
  – What priors does it possess?
  – What is its skill-acquisition efficiency (intelligence)?
  – What curricula would maximize its skill or skill-acquisition efficiency?

### 2.3 Evaluating intelligence in this light

## 3 A Benchmark proposal : the ARC dataset

### 3.1 Description and goals

p.53 
Talk about the hypothetical ARC Solver solving steps and strategy to solve/analyse them. (What does each step means, imply, etc ...)

How would the NS-CL model perform here? Links, similarities, etc. 
Maybe make a link with ARC and the necessity of symbol manipulative models like NS-CL.

### 3.2 Weaknesses and future refinements

### 3.3 Possible alternatives

## Conclusion 

make links with this paper and :
- The next decade of AI
- Atari openai game solver
