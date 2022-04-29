# PUI Assignment 8: Final Project
### The Alphabet Drill

### Links
* [Video](https://drive.google.com/file/d/1ycsPKnN2bT7yVk5k3GqJ-mRl5yxxwvtQ/view?usp=sharing)
* [Figma](https://www.figma.com/proto/MmtECgfe78p4qtwz4UaN0Z/PUI-Final-Project?page-id=0%3A1&node-id=7%3A382&viewport=241%2C48%2C0.15&scaling=min-zoom&starting-point-node-id=7%3A382&hide-ui=1)
* [Website](https://sunbitterns.github.io/jeremial_pui_hw8_spring2022/index.html)

### Description
The purpose of my website is to showcase an old poem I wrote in a visual and interactive way (I apologize in advance for subjecting y'all to my high school poetry haha). The information conveyed is the body of the poem, which slowly reveals itself as the user hovers over the alphabet. I hoped to add to interest and engagement via the animations on the alphabet and poem lines. The target audience is anyone who might be interested in reading the text. 

### Using Website
Hover over the alphabet to display the poem. To reset, click on the reset button on the top right. To see the history behind the poem, click on the learn more button. 

### External Libraries
I used Animate.css and jQuery. Animate.css was utilized so I could quickly apply the bounce animation to the instructional text at the beginning. I added this animation to draw the user's attention to the instructions on the right hand side of the screen. I chose to use jQuery to easily show and hide the poem lines when the user hovered over the letters, as well as style the first word of each line in the color associated with its respective color. This allows the user to slowly reveal the poem as they interact with the alphbaet. 

### Iteration from HW7
My HW7 mockups were mid-fi and only captured the basic idea of how I wanted the interaction to be displayed. The main changes I made was to the color palette, adding a title, and adding a reset button. 

### Major Challenges
The main challenge was figuring out how to simplify my JS code because there was a lot of repetitive code for applying colors and changing letter of the alphabet. I managed to condense the functions for the permahover state and applying color to the first word of each line in the poem, but the function for linking each letter to its respective line is still implemented one by one. 

### Next Steps 
1. Make Lines appear in set position.
2. Reverse animations on reset. 
3. Remove color when you move to next line. 
