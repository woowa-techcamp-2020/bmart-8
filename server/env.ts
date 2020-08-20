import { config } from 'dotenv';
import { resolve } from 'path';
if (process.env.NODE_ENV === 'production') {
  config({ path: resolve(__dirname, '.prod.env') });
} else {
  config({ path: resolve(__dirname, '.dev.env') });
}
