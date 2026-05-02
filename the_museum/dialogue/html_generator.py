filename = 'C:/Users/dbeck/Documents/GitHub/MoonbreadV4/the_museum/dialogue/original_text.txt'
with open(filename,'r') as file:
    content = file.read()

for word in content.split(sep="\n"):
    print(word)