
import schedule
import time

def project_check():
    print('project check is working')

def try_scheduler():
    print('try_scheduler is working')

schedule.every(10).seconds.do(try_scheduler)

while True:
    schedule.run_pending()
    time.sleep(5)
    print('ciao')