# Creating Skill based database with LLM

Note : *The github repo is in private for now.*

## How to create the graph

> How to abuse the already existing structure in our world's text abondance

## Ideas

1. By Hand
	- Referencing skill dependencies by hand

2. Have a first graph of skills extracted from a database and then analyzing the graph to create meaningfull connexions or at least suggestions

3. From texte and/or the "knowledge" graph, find links from the text/sillabi structure
	1. Example : Find definitions of words in a dictionnary, create embeddings and use the embeddings to find or recommend those words to each other by embedding similarity

4. Fine tuning a model to create tags from text
5. A mix of GPT, langchain, vectorstores in order to process large files to embeddings and being able to discuss and manipulate them.

## Methods

### Retro linking in text

*Hypothesis* : Take a section of a sillabus, If a word is used in a section, then it must be already understood in order to be used. Therefor that word is a prerequisite of the section.

*Steps* :

1. Choose a text to analyze
2. Give a knowledge name to that text
	1. Check if a name already exists in the database
		- **How to do an efficient Node Comparison**
	1. If yes
		1. Link it to that knowledge node
		2. Create a new knowledge node
4. Extract all sub knowledge words in that text
5. Create links going downward

*Test* : Try with a dictionnary or with one syllabus to try the hypothesis.

### Node Comparison

*Problem* : Given two nodes, how to efficiently compare if they actually point to the same knowledge entity?

*Hypothesis* : Given an "existing node" and a "new node", regrouping all the information both possess, seeing if they are linked to the same skills or not


### Link prediction

*Problem* : Most methods of building graphs take time because they possess steps that are not automatisable

*Hypothesis* : After creating a small graph prototype, train [[Graph Neural Network (GNN)]] to predict in a semi-supervised way the links that are present. This can be done by hiding a good amount of the links. 
	*SubHypothesis* : Maybe this can be done in a [[Curriculum Learning]] way where the dissapearance of links become more and more frequent as the training goes on?


## Ressources 

### List of paper

- [Enhancing Knowledge Graph Construction Using Large Language Models - Milena Trajanoska](https://arxiv.org/abs/2305.04676)
- [Nougat : Neural Optical Understanding for Academic Documents](https://facebookresearch.github.io/nougat/)

### Librairies

- LangChain
- OpenAI API
- VectorDatabase

## Workflows

![png](/api/articles/images/creating_skill_based_database_with_llm/Alexandria.png)

<br>

<img src="/api/articles/images/creating_skill_based_database_with_llm/Knowledge Graph Steps.svg"/>

![png](/api/articles/images/creating_skill_based_database_with_llm/Workflow.png)
