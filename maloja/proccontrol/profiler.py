import os

import cProfile, pstats


from doreah.logging import log
from doreah.timing import Clock

from ..globalconf import data_dir


profiler = cProfile.Profile()

def profile(func):
	def newfunc(*args,**kwargs):

		benchmarkfolder = data_dir['logs']("benchmarks")
		os.makedirs(benchmarkfolder,exist_ok=True)

		clock = Clock()
		clock.start()

		profiler.enable()
		result = func(*args,**kwargs)
		profiler.disable()
		try:
			pstats.Stats(profiler).dump_stats(os.path.join(benchmarkfolder,f"{func.__name__}.stats"))
		except:
			pass
		log(f"Executed {func.__name__} ({args}, {kwargs}) in {clock.stop():.5f}s",module="debug_performance")
		return result

	return newfunc