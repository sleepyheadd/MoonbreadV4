input_file = 'C:/Users/dbeck/Documents/GitHub/MoonbreadV4/the_museum/dialogue/original_text.txt'
output_file = 'C:/Users/dbeck/Documents/GitHub/MoonbreadV4/the_museum/dialogue/output_html.txt'
with open(input_file,'r') as file:
    content = file.read()

full_content = ""

for line in content.split(sep="\n"):
    section = line.split(sep="|")

    if len(section) > 2:
        time = section[0]
        speaker = section[1]
        content = section[2]

        base_html = "\n"

        if int(time) > 20:
                base_html = '\n<div style="height:' + time + 'px;"></div>\n'

        if speaker == 'IN':
            base_html += '''<div class="message_box" id="flower" data-minutes="''' + time + '''">
    <div></div>
    <div class="message"><div class="typewriter">''' + content + '''</div></div>
    <div class="context">
        <p class="sender">In</p>
        <p class="date"></p>
    </div>
</div>
                        '''
        elif speaker == 'OUT':
            base_html += '''<div class="message_box" id="unnamed" data-minutes="''' + time + '''">
    <div class="context">
        <p class="sender">Out</p>
        <p class="date"></p>
    </div>
    <div class="message"><div class="typewriter">''' + content + '''</div></div>
    <div></div>
</div>
                        '''
        full_content += base_html

with open(output_file,'w') as file:
    file.write(full_content)