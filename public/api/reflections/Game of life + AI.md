Create a #GAN version of [[Game of Life]]. 

It gives the model a possibility to create shapes that survives.

One version could be to create a grid divided in 3 zones. 
- Right zone -> The architect : Generates shapes only on his zone.
- Left Zone -> The Demolisseur : Generate shapes only on his zone.
- Midde zone -> No man's land : Zone where points are counted.

The longer No-Man's land is empty, the more the demolisseur gains point.
The long No-Man's land is filled, the more the architect gains point.

Notes : 
- Should be optimized for a GAN like type of learning.
- Mixed with Reinforcement learning

 ![[IMG_2A1ED0B41FF4-1.jpeg]]
 
 #AI [[Model]] #Reinforcement_learning