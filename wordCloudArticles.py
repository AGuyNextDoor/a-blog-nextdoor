import matplotlib.pyplot as plt
import os

from os import path
from wordcloud import WordCloud

# get data directory (using getcwd() is needed to support running example in generated IPython notebook)
d = path.dirname(__file__) if "__file__" in locals() else os.getcwd()

text = ""

for file in os.listdir("./public/api/articles"):
    if file.endswith(".md"):
        text = text + open(os.path.join("./public/api/articles", file)).read()

# Read the whole text.
# text = open(path.join(d, './public/api/articles/The next decade in AI.md')).read()
# text2 = open(
#     path.join(d, './public/api/articles/On the measure of intelligence.md')).read()

# Generate a word cloud image
wordcloud = WordCloud(width=1200, height=600).generate(text)

# Display the generated image:
# the matplotlib way:
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")

# lower max_font_size
wordcloud = WordCloud(max_font_size=30).generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.show()

# The pil way (if you don't have matplotlib)
# image = wordcloud.to_image()
# image.show()
