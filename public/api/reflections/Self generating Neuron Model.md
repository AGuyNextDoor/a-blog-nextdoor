Create a blueprint for a self generating model of neuron.

You give him questions, he tries answers and if he can't answer, he creates new neuronal networks to answers.
	-> There should be a mode when he fails, where he checks other of his networks and see which one would have been the closest. **Meditation**?
When a learning mode is activated, he asks for exercises and questions to solve to learn.

Questions : 
- How does he decide that he doesn't know how to solve a problem?
- How can he choose between his different networks?
	- Maybe create a first model with 3 type of networks
- How to combine network models between each other? there must be efficiency. 
	- Like when you understand that multiplication is the just summation, how do you utlize the network used for sums to help?
	- Use symbolic AI to choose the networks?
	- Graph neural network so that permutation helps?
- Prune networks?

Answers : 
- When doing backpropagation, if the cost is too high, create a new neuron instead. It is cheaper (energy/cost wise) to create a new neuron than completely rewriting a new neuon.
	- This allows to answer to [[Catastrophic Interference]] problem by not erasing past learning goals.

[[Symbolic AI]] [[Graph Neural Network (GNN)]] #Neural_Network [[Model]] #Blueprint 
[[Machine Learning]] 

---

Problem is divided in some sections such as : 
- Architecture
- Generation rule