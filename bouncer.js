function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isntFalsy(value) {
    if (Boolean(value) !== false) {
      return value;
    }
  }
  return arr.filter(isntFalsy);
}

bouncer([7, "ate", "", false, 9]);