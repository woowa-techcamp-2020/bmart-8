import { Client } from '@elastic/elasticsearch';
if (!process.env.ELASTICSEARCH_URL)
  throw new Error('ELASTICSEARCH_URL is missing in .env');
const {
  ELASTICSEARCH_URL,
  ELASTICSEARCH_USERNAME,
  ELASTICSEARCH_PASSWORD,
} = process.env;
const elasticsearchClient = new Client({
  node: ELASTICSEARCH_URL,
  auth: {
    username: ELASTICSEARCH_USERNAME!,
    password: ELASTICSEARCH_PASSWORD!,
  },
});

export default elasticsearchClient;
