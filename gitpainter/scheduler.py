
import schedule
import time

def paint_my_git():
    print('Github profile painter')

schedule.every(10).seconds.do(paint_my_git)

while True:
    schedule.run_pending()
    time.sleep(5)