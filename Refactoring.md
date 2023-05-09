# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I changed the way the crypto package was being imported to match the latest ECMAScript 6 importing module criteria by using the import "module" from "package" statement. For the import module to work well without throwing a warning or error in the execution, I had to add the module type in the package.json. I also changed the way the `deterministicPartitionKey` module was being imported by using the ECMAScript 6 importing module criteria. I believe this is the best way to go as it follows the latest javascript ES6 syntax and is easily understandable by any onboarding developer.

I also changed the way the `deterministicPartitionKey` module was being exported to match the way functions are exported using the lastest Javascript ES6 syntax.

I reduced the number of if statements by creating a separate helper function that checks if the event is given and either returns the partitionKey if it exists or the encrypted data if not.
I utilised the use of the logical AND (`&&`) operator to reduce the number of if statements
