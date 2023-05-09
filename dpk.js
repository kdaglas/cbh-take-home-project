import crypto from 'crypto';




export const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;


  // check if event is given
  candidate = checkEvent(event)


  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }


  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }




  return candidate;
};


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
