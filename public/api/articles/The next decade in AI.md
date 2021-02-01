# The Next Decade in AI
[Arxiv: Gary Marcus. (2020)](https://arxiv.org/abs/2002.06177)
## Introduction

This article is a commentary and analysis on the following research paper form **Gary Marcus (2020)** : [[The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence]](https://arxiv.org/abs/2002.06177).
## Definitions

*Robust AI*: Intelligence that, while not necessarily superhuman or self-improving (AGI), can be counted on to apply what it knows to a wide range of problems in a **systematic** and **reliable** way, synthesizing knowledge from a variety of sources such that it can reason **flexibly** and **dynamically** about the world, **transferring** what it learns in one context to another, in a way that we would expect of an ordinary adult.

*Narrow AI*: Systems that perform a single narrow goal extremely well but often in ways that are extremely centered around a single task and not robust and **transferable** to even modestly different circumstances without extensive retraining.

*Degrees of Learning*: The different tools available to a system to input/infuse/induce knowledge (aka learn)

*Idiosyncrasy*: Systems that lack solid ways of generalizing beyond a space of training examples cannot be trusted in open-ended domains. If you think of each system as a function approximator, currently popular systems tend to be great at memorized examples, and good at many (though not all) examples near the training examples - which makes them useful for many applications revolving around classification. But they are poor when pushed beyond training distribution.

*NS-CL*: Neuro-Symbolic Concept Learner

*Knowledge Representation*: Field that aims to accumulate and represent abstract knowledge.

*Nativism*: The idea that some "knowledge" is innate. (not learned but there at the beginning)

*Cognitive Models*: "Knowledge that accumulates over time about particular states of affairs such as what we might learn about a friend in the course of a conversation, etc."

## Thoughts

### 1 Towards a robust artificial intelligence

#### What are the real differences between a **robust** and **AGI**?

*Robust AI*: Intelligence that, while not necessarily superhuman or self-improving (AGI), can be counted on to apply what it knows to a wide range of problems in a **systematic** and **reliable** way, synthesizing knowledge from a variety of sources such that it can reason **flexibly** and **dynamically** about the world, **transferring** what it learns in one context to another, in a way that we would expect of an ordinary adult.

The main differences between an AGI and a Robust AI, are in its resulting behaviors. While the robust AI is expected to have a confidence level in its behavior of an ordinary adult, the AGI is theoretically self-improving with little limits in its performance and memory. Even if a robust AI has impressive capacities, the AGI's features and capacities largely surpass those capacities the same way the amount of natural numbers between 0 and 1 million, is surpassed by the amount of natural numbers between 0 and positive infinity.

AGI's expectations are on another level. It will show us an understanding and intelligence that will be unreachable by humans just like a new color would be out of our reach to imagine. If the conditions are met, AGI is a potential candidate to succeed in the Turing test, as well as maybe showing us emotions and all the final pieces that we could think are unreachable to carbon and silicium. While a robust AI might fool us and get really close to a successful Turing test, it doesn't require to or necessarily demonstrate a "superhuman" intellect.

#### Is robust AI necessarily a step-way to AGI?

It is hard to say clearly what are the missing pieces, but a robust AI is simply not enough to be called an AGI.
Robust AI possesses all the necessary requirements for an AGI especially the **flexible reasoning** and the **transferability of knowledge across domains**. 

While it might not be a "necessity" to go through a complete robust AI before starting building an AGI, it surely is a good direction to work towards for researchers and companies.
Being so far off from knowing what an AGI would look like, our poor (but growing) understanding of the human brain and human intelligence, the machine learning technologies swiftly changing, it is very hard to have a clear picture of the necessary puzzle pieces of the AGI.

#### "If we cannot count on our AI to behave reliably, we should no trust it"

The keyword here is *reliability* and its comprehension.
Oxford dictionary's definition of reliability is :

*"The quality of being able to be trusted to do what somebody wants or needs."*

It is all about the ability/capacity to being trusted. In this scenario, we talk more about the trust in the functionalities rather than a more emotional or optimistic trust. 
Following the definition, it seems trivial that if something is not reliable, and therefore without the ability to be trusted, we should not trust it.

Today's most performant AIs are for the most case, single task-specific. Our trust in them can be directly attached to this functionality and therefore be relatively straight forward. As the number of tasks, a single AI can do increases, the more our trust is an average of our trust in every single task. They might not be equal as an AI may perform very well in certain tasks and yet not be reliable in functionalities they might propose.

![Trust](/api/articles/images/next_decade_in_ai/Trust_Issues.png)

Reliability is only one part of the definition of *Robust AI*. It is reinforced by the word **systematic** that is here to complete the needed requirement for a trusted AI. The good performance and results of a program need to be consistent and unquestioned by its users. Otherwise, trust cannot be built, results have to be questioned or thrown away sometimes and the program becomes unusable by other clients.

#### AI vs. Humans

AIs are often compared to Humans when talking about performance, robustness, skills, and so on.
In this paper's first section, an emphasis is made that the most performant modern ML programs that have been built still lack some basic human concepts that break most of the needed requirements of a robust system.
This allows the author to show that the models are mainly statistical and lack the abstract comprehension of what they are resulting. It is well illustrated with the GPT-2 examples:

***
  **Yesterday I dropped my clothes off at the dry cleaners and have yet to pick them up. Where are my clothes?** *at my mom's house.*
  **There are six frogs on a log. Two leave, but three joins. The number of frogs on the log is now** *seventeen.*
***

Human comparison is inevitable. It is very hard to know where we're going with AIs and the direction is not always clear as is often the case in research. ("*If I knew what I was doing, it wouldn't be called research*")
Human performance is a qualitative and quantitative error detection process that allows us to know what a model lacks. It is very similar to how an artist would draw a portrait from a model. A representation is made in the artist's mind of the model, but after every few scratch, he needs to peek a look at the model to know what is left, what is out of proportion, how the light is reflected, and so on... Building his drawing closer and closer to a realistic one-to-one copy of the model.

![AI Model](/api/articles/images/next_decade_in_ai/AI_Model.png)

Although, the reader must not interpret that models like GPT-2 are bad or worthless because they are not robust. A context must be understood to what those types of AIs "are" and "how" they learn.

1. **What are** complex neural networks like GPT-2?

More than a simple network of neuronal connections leveraged by weights and impulses, modern architectures have been boosted with specific types of network models that allow them much more powerful performance. This is probably best illustrated by the usage of convolution networks for images. They can still be reduced down to a "complex" network of perceptrons, but its the specific architecture that allows them to detect line, shapes, and process element recognition in pictures. This wouldn't be possible in a "trivial" straight forward deep neural network.
The same comparison can be made with brains' neural architecture. It's the architecture and the different neural types and their order that allows the general and robust intelligence that we experience.

This is precisely the aim of this illustration. GPT-2 and Convolution networks are advanced neural network architectures similar to those in certain layers of our brain, and they are performant ones. But yet they are alone. They're not connected to the rest of the brain, genes, prior knowledge, and experiences. If we isolated the brain's neural network responsible for human vision and asked it to "understand" what it sees, we might have poor results. But that doesn't take away the impressive abilities of this network.

**Note**: This does raise an interesting question: if we only had the full brain network responsible for vision, how would we test it?

2. **How** do they learn?

Humans take a long time to adapt and learn. The capacity to transverse knowledge from one discipline to another allows us to build upon previous knowledge and gain momentum as we go along.
This building is important and goes a long way back. It might be challenging to learn Shakespeare's theatre if we don't have any comprehension of time and space, no logic or mathematical tools, or no cultural appreciation. If we are very smart we might be able to see repetitions, patterns in the construction of sentences, associate them with other words but we would accept that the comprehension of the piece is shallow. 
Humans can ask questions, confront their comprehension with others, view the world in 3D, touch, smells, associate emotions to memories, fall upon different truths and lies, etc... All those **degrees of learning** contribute to our comprehension of the world.

What about AIs? How could we compare the images we give Convolutional Neural Networks (**CNN**) to a learning method given to humans with the same degrees of learning?
Neural networks are given large batches of images decomposed in pixels. Human eyes decompose electromagnetic radiations (*aka* light) through the photoreceptors at the back of the eye. Those signals are processed by the retinal ganglion cells (Visual cortex) acting as a feature detector (shapes, colors, directions of movement, ...). The signal is then distributed across the brain where visual signals take an important quantity of space in the brain.
CNN's learning can be compared to a person in a dark room, with one eye and a brain with only the visual pathways and an adaptive system capable of learning to classify the images and their labels. He is fed the first images he has ever seen in his life with labels and that is it. He never had communication with anyone, doesn't know the existence of language, and cannot appreciate time and space.
It is hard to see where the robustness could come from...

![Robustness](/api/articles/images/next_decade_in_ai/Robustness.png)

This comparison was opposed with CNNs but it is also true for other types of modern Machine Learning models where the input is similar to transmitting an electrical signal directly into brains with limited degrees of learning.
To complete the general direction of Gary Marcus in his paper, research needs to look at how we could **increase the number of degrees of learning**, AI possesses, to move towards robustness.

## A Hybrid, knowledge-driven, cognitive-model-based approach

#### The curse of conspiracy

*The same network that is able to predict complex mathematical schemes, cannot be trained to predict simple additions or even the identity rule.*

What is going on there? We have the right to be surprised here. It is hard to qualify this network as adaptive. Modern networks have a hard time being able to be specialized in predicting both complex models and simple ones. 

The syndrome of those NNs is **the curse of conspiracy**. The higher the number of connections, the harder a network can adapt to simple mathematical models. 
Even if the network is trained a long time, it will overfit in the training set but and won't be able to "generalize *outside* the training distribution" (See warm-up exercise page 10).

![Curse of conspiracy](/api/articles/images/next_decade_in_ai/Curse_of_conspiracy.png)

We might be tempted to say that modern machine learning models tend to adapt to the training data and that we should focus on finding the "logic rules" behind problems. But, ML models were not here to solve simple problems like the identity rule. Finding a code that solves both simple and hard problems is another job that we need to solve for robust AI.

*Idiosyncrasy*: Systems that lack solid ways of generalizing beyond a space of training examples cannot be trusted in open-ended domains. If you think of each individual system as a function approximator, currently popular systems tend to be great at memorized examples, and good at many (though not all) examples near the training examples - which makes them useful for many applications revolving around classification. But they are poor when pushed beyond training distribution.

**Notes and Thought**:
Over complex NN is a known problem in the community. Having too many nodes and variables makes training a real problem. Recent papers like the **[Lottery Ticket Hypothesis](https://arxiv.org/abs/1803.03635)** (Jonathan Frankle, Michael Carbin) try to solve this problem by removing useless nodes while still achieving similar performances.
We might want to think about the *minimal* amount of nodes/variables necessary to *solve* a problem.
Should NN be able to grow progressively? Start with simple connexions and grow their own nodes?

### 2.1 Hybrid Architecture

#### "What it lacks is a satisfactory framework for learning."

As discussed above about the *degrees of learning*, Gary Marcus here emphasizes the necessity to have a "minimal" set of tools available for programs to have multiple angles to approach a single piece of data.

For example, a picture could have the following degrees of learning available: 
- The pixels composing the image;
- A text describing the main subjects of the photo;
- A context around the photo;
- The AI would be able to ask questions to complete empty areas of his understanding and complete a cognitive model;
- He may ask for other pictures with similar elements present to increase prediction certainty;

To be able to wander with enough ease asks for an initial model with a "framework" close to what an 8-year-old child could use in a classroom when asked to describe a picture.
Having such a framework of course raises enough problems, questions, and design choices for a few years of work. But, in my opinion, it also shows us a direction research will have to look towards to be able to construct a more robust and complete cognitive model.  

### 2.2 Large-scale knowledge, some of which is abstract and causal

#### "Systematic ways to induce, represent, and manipulate large databases of structured, abstract knowledge, often in causal nature, are a prerequisite to robust intelligence."

This important claim made in this paper can also be supported by this other extract:

***
"*One problem with trying to build a system out of parts with such little reliability is that downstream will inevitably suffer. The whole point of knowledge is to use it in action and interpretation and decision-making.*"
***

Modern programs and AIs have done impressive work when it comes to language manipulation. From writing Shakesperian-like work to translating near real-time root-different languages, examples are not negligible.
Yet most of those models have worked without a complete data model structure, induced knowledge, or comprehension of concepts.
How can we write a theatre piece without understanding elemental notions? We can imitate a style, create jokes and cliffhangers via sheer statistical analysis, but the model is bound to hit a limit if it doesn't have basic principles of time, space, or objects (see *Framework for knowledge about containers*) to guide him into formulating a sentence.

![knowledge framework](/api/articles/images/next_decade_in_ai/knowledge_framework.jpeg)

#### Do we need to encode fundamental axioms of knowledge?

In Francois Chollet's paper [*On the Measure of Intelligence*](https://arxiv.org/abs/1911.01547) (Francois Chollet, 2019), we can read the following quote:

***
*Presumably the child brain is something like a notebook as one buys it from the stationer’s. Rather little mechanism, and lots of blank sheets.*
Alan Turing, 1950
***

Humans are born with much to learn. For such complex machines, we sure take many years to build our knowledge. We first spend the first years learning to use the tools we have access to (hands, voice, vision, ...) and then transform those tools intelligibly, permitting us to express our conscious mind.
Although, even if the sheets are blank, they are not empty of structure, or what Alan Turing calls "little mechanism". Neuronal structures are already a form of innate structure/writing (For example, our visual cortex possessing a neuronal structure similar to Convolutional Networks, convenient for edge detection). Our brains don't simply randomly develop and create complex areas with inputs as their only medium of development. Cognitive development is helped by the pre-existing structures and pathways of the brain, ready to be cultured.

But what and how much is innate in brains (especially humans' brains)?  
For information to be innate would be to observe a response or behavior before any dependant input.
We can regard the "information" present in the brain's structure as innate, but evolution theory tells us also that reflexes and some unconscious behavior are innate to humans and are not learned. Important innate cognitive skills allow us to retain information, analyze, search, retain, recall, compare, and so on...
Coding too much information might make it hard for models to explore, generalize properly, and find interesting results. Although, coding the right abilities might also help models explore generalize properly, and find interesting results. We need to be careful about what we exactly input in models, whether it is skill-oriented or abilities-oriented, whether it specializes or broadens capacities. This supports Gary Marcus's affirmation:

***
*The real question for AI should be not, **how small can we make our library of priors?**, but **what set of priors could most effectively set the stage for learning?**.*
(p. 33)
***

A clear metric or evaluation method for how code or abilities is yet unknown to my knowledge.

**Illustration**:
I once tried to build a reinforcement-learning model that learned how to play the game of "*2048*". While it was a fun project, the model had a hard time stabilizing in the late stages of the game where a single wrong input could easily cost you the game.
I decided to help it and changed some weights in its training so that it would learn a certain strategy more easily. While I had the feeling of being a teacher, I had influenced the model's learning into mastering a certain strategy, and its ability to generalize on this game was greatly reduced.
Trying this model on another game would be a great failure as the encoding strategy would certainly result in a great flop.

### 2.3 Reasoning

#### "*Reasoning per se is not necessarily the bottleneck towards robust AI; the real bottleneck may lie in having the right information accessible in the context of real-world inference.*"

(p. 39)

Should the model focus on having the right information/model given a certain context?
Could this be trained? Could we classify the most important information that a model should be "conscious" of and train the algorithm to achieve its goal in a real-world inference?

We could think of a model that is only allowed to use information in its conscious (I have no idea if the word *conscious* is appropriate here but I'll use it for now). The conscious would be limited to maybe 5 to 10 pieces of information at max. Although it might seem small and a limitation, the conscious would be allowed to change rapidly and the model would be forced to adapt quickly. It would also benefit from not being distracted by too much information and would not need to filter all the time. The filter would be done by the conscious cognitive model itself being responsible for a part of the conscious set of information changes.

**Note**: 
Is this too "human inspired"?
I've always had a little stress in my head that our models might be too much "human-inspired". We can only base a lot of our comprehension of intelligence on the one we experience ourselves, and even if it is unique and slightly different for each of us, our basis for education, language, logic, etc (that is more and more common with the spread of knowledge on the internet may be creating an averaged education), it is still human intelligence. Human intelligence is limited in front of the No-Free Lunch Theorem and might not be the best inspiration for building an AGI.

### 2.4 cognitive models

#### "Model-free solutions generalize poorly outside the exact environments in which they were induced"
"(...) lacking cognitive models they have no reliable foundation with which to reason over."
( p.41 )

On the quest of Robust AI, the ability to generalize rules and properties outside of the training set is going to be obligatory. It is emphasized in the definition of robustness but also in a large group of definitions of general intelligence. 
While some modern models allow forms of generalization, their generalization can be considered limited. While some progress has been made in recent years in reinforcement learning to make games an ability and not a specialized skill ([see article](https://www.technologyreview.com/2020/04/01/974997/deepminds-ai-57-atari-games-but-its-still-not-versatile-enough/)), versatility is far from being understood or achieved. 

Are cognitive models the answer? They seem to allow us a deeper understanding of information and therefore the impossibility to make the following sentence : 

***
**If you break a glass bottle of water, the water will probably** *flow out if it's full, it will make a splashing noise.* 
***

Gary Marcus gives us the following definition of a cognitive model :

***
*Consists of knowledge about some set of entities (e.g., the characters in a story and the objects they have available to them), some set of properties (e.g., the size and colors of the objects, the goals of the characters, etc), and information about time and events (at what time t did character **x** meet character **y**, and what did **x** know at time **t**).*
***

Cognitive models create boundaries around the information.  Our reality possesses many limits, forged by entropy and other laws of physics in which our universe has developed. Human cognitive models are modeled by a cultural understanding and habits that evolve along with our comprehension of reality.
The reason such sentences can make us tick is that they do not possess this basic structure and therefore sound like a child, learning a subject, or a scene coming straight out of a dream where logic and narration don't seem to need any bases of logic or physics law.

## 3 Discussion

### 3.1 Towards an intelligence framed around enduring, abstract knowledge

Four building prerequisites for building robust artificial intelligence:

1. Hybrid architectures that combine large-scale learning with the representational and computational powers of symbol-manipulation.
2. Large-scale knowledge bases (likely leveraging innate frameworks) that incorporate symbolic knowledge along with other forms of knowledge.
3. Reasoning mechanisms capable of leveraging those knowledge bases in tractable ways.
4. Rich cognitive models that work together with those mechanisms and knowledge bases.

## Quotes

- "A system that could generate representations of this sort automatically and reason at comparable levels would represent a major breakthrough."

- "Reasoning instead of memorizing by drawing inferences"

- "There is, by and large, not enough discussion about what the primitives for synthetic cognition need to be."

- Histon :
		"Max Planck said, 'Science progresses one funeral at a time.' The future depends on some graduate student who is deeply suspicious of everything I have said."

- "Robust AI necessarily will reside in the intersection depicted in Figure 4."

![Models and Architectures](/api/articles/images/next_decade_in_ai/models_and_architecture.jpeg)

![Reasoning Vein Diagram](/api/articles/images/next_decade_in_ai/reasoning_vein_diagram.jpeg)

V1 Date : 11/01/2021