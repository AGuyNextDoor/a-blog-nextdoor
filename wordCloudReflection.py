import matplotlib.pyplot as plt
import os

from os import path
from wordcloud import WordCloud

# get data directory (using getcwd() is needed to support running example in generated IPython notebook)
d = path.dirname(__file__) if "__file__" in locals() else os.getcwd()

text = ""

for file in os.listdir("./public/api/reflections"):
    print(file)
    if file.endswith(".md"):
        print(file)
        text = text + \
            open(os.path.join("./public/api/reflections", file)).read()

# Read the whole text.
# text = open(path.join(d, './public/api/articles/The next decade in AI.md')).read()
# text2 = open(
#     path.join(d, './public/api/articles/On the measure of intelligence.md')).read()
print(text)
# Generate a word cloud image
wordcloud = WordCloud().generate(text)

# Display the generated image:
# the matplotlib way:
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")

# lower max_font_size
wordcloud = WordCloud(max_font_size=40).generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.show()

# The pil way (if you don't have matplotlib)
# image = wordcloud.to_image()
# image.show()
