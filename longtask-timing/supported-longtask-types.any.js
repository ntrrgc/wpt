test(() => {
  if (typeof PerformanceObserver.supportedEntryTypes === "undefined")
    assert_unreached("supportedEntryTypes is not supported.");
  const types = PerformanceObserver.supportedEntryTypes;
  assert_greater_than(types.indexOf("longtask"), -1,
    "There should be 'longtask' in PerformanceObserver.supportedEntryTypes");
  assert_greater_than(types.indexOf("taskattribution"), -1,
    "There should be 'taskattribution' in PerformanceObserver.supportedEntryTypes");
  assert_greater_than(types.indexOf("taskattribution"), types.indexOf('longtask'),
    "The 'taskattribution' entry should appear after the 'longtask' entry");
}, "supportedEntryTypes contains 'longtask' and 'taskattribution'.");
