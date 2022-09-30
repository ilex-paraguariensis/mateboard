import os
import subprocess


class MateBoard:
    def __init__(self):
        pass

    def start(self):
        try:
            output = subprocess.check_output("deno" "-V", shell=True)                       
        except subprocess.CalledProcessError as grepexc:                                                                                                   
            print("Looks like you don't have deno installed")
        subprocess.Popen('deno task start'.split(), cwd=os.path.join(os.path.dirname(__file__), "mateboard"))

    def stop(self):
        pass
