/**
* Sanity CLI Configuration
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

// Use hardcoded values with environment variable fallbacks for reliability
// This prevents deployment issues when environment variables are not loaded
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8fax2jc9'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineCliConfig({ 
  api: { 
    projectId, 
    dataset 
  },
  
  // Deployment configuration
  // This prevents prompting for appId on each deploy
  deployment: {
    appId: 'sqk7m97v4io6s8xis1uzbrsb'
  }
})
