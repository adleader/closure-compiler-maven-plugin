'use strict';function inline(a){return a+1}function unused(){return helper(999999)}function helper(a){return 1>a?1:a*helper(a-1)}(function(){const a={foo:99,bar:helper(20),inline1:inline(1),inline2:inline(2)};console.log(a.foo);console.log(a.helper);console.log(a.inline1)})();

