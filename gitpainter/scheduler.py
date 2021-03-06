
#import schedule
import time
import os
import schedule

from os import environ as env

from dotenv import load_dotenv
load_dotenv()

pattern = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,0,0,0,3,0,0,3,0,0,0,0,3,0,0,3,0,0,0,3,0,3,0,0,0,0,3,0,3,0,0,0,3,0,0,0,3,3,3]
pattern_counter = 0
pattern_length = len(pattern)
general_counter = 0

def color_density(weight):
    print('### Colorify ###')
    if weight == 0:
        print('No commit today')
    for w in range(weight):
        print('Commit {number}'.format(number=w))
        # append new line to logs file
        with open('logs/painting.txt', 'a') as file:
            file.write(str(w) + '\n')
            os.system("git add * && git commit -m \"{}\" && git push -u origin main".format(str(w)))
            time.sleep(5)

def paint_pattern(shade):
    global pattern
    color_density(pattern[shade])

def paint_my_git():
    global pattern_counter
    global pattern_length
    if pattern_counter < pattern_length:
        paint_pattern(pattern_counter)
        pattern_counter = pattern_counter + 1
        return
    elif pattern_counter == pattern_length:
        pattern_counter = 0 # repeat pattern
        return


schedule.every().day.at("08:30").do(paint_my_git)

while True:
    schedule.run_pending()
    time.sleep(1)