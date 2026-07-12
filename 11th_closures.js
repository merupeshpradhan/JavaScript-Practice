function closure() {
  function first() {
    function second() {
      function third() {
        function furth() {
          function five() {
            function six() {
              function seven() {
                return 7;
              }
              return seven();
            }
            return six();
          }
          return five();
        }
        return furth();
      }

      return third();
    }
    return second();
  }
  return first();
}

console.log(closure());
