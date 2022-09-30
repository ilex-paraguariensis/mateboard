import os
import subprocess


class MateBoard:
    def __init__(self):
        pass

    def start(self):
        subprocess.Popen('deno task start'.split(), cwd=os.path.join(os.path.dirname(__file__), "mateboard"))

    def stop(self):
        pass
