import { Worker } from "bullmq";
import axios from "axios";

const connection = { connection: { host: "localhost", port: 6379 } };

export const sslWorker = new Worker(
  "ssl-scan",
  async (job) => {
    const domain = job.data.domain;
    const res = await axios.get(`${process.env.SSL_LABS_API}/analyze?host=${domain}`);
    return res.data;
  },
  connection
);

sslWorker.on("completed", (job, result) => {
  console.log(`SSL Scan terminé pour ${job.data.domain}`, result);
});
