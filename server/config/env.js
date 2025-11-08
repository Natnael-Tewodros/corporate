import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from project root
// Try multiple paths to ensure we find the .env file
const envPaths = [
  join(__dirname, '..', '..', '.env'),  // From server/config, go up two levels
  join(__dirname, '..', '.env'),        // From server/config, go up one level
  join(process.cwd(), '.env'),           // From current working directory
  '.env'                                 // Relative to current working directory
];

let envLoaded = false;
for (const envPath of envPaths) {
  try {
    const result = dotenv.config({ path: envPath, override: true });
    if (!result.error && result.parsed) {
      console.log('✅ .env file loaded from:', envPath);
      envLoaded = true;
      break;
    }
  } catch (err) {
    // Continue to next path
    continue;
  }
}

if (!envLoaded) {
  console.warn('⚠️  Warning: Could not load .env file from any of the attempted paths');
  console.warn('Attempted paths:', envPaths);
}

// Export environment variables
export const PORT = process.env.PORT || 3001;
export const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Log API key status (without exposing the key)
if (RESEND_API_KEY) {
  console.log('✅ Resend API key loaded successfully');
  console.log('✅ API key starts with:', RESEND_API_KEY.substring(0, 10) + '...');
} else {
  console.error('❌ RESEND_API_KEY is not configured in .env file');
  console.error('Current working directory:', process.cwd());
  console.error('Config directory:', __dirname);
  console.error('All env vars:', Object.keys(process.env).filter(k => k.includes('RESEND')));
}

