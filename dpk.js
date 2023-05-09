// change to ES6 import
import crypto from 'crypto';


/* helper method that checks if
* event is given and returns the
* partitionKey
*/
const checkEvent = (event) => {

  if (event) {
    if (event.partitionKey) {
      return event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      return crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

}

// change the export
export const deterministicPartitionKey = (event) => {

  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  /* use helper method to check if event 
  * is given and assign returned
  * data to candidate
  */
  candidate = checkEvent(event)

  if (candidate) {
    candidate = ((typeof candidate !== "string") ? JSON.stringify(candidate) : candidate)
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
