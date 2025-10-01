import { Queue } from "bullmq";

const connection = { connection: { host: "localhost", port: 6379 } };

export const sslQueue = new Queue("ssl-scan", connection);
