import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'D P System CMS',

  projectId: '8fax2jc9',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(), // Enable code blocks with syntax highlighting
  ],

  schema: {
    types: schemaTypes,
  },

  // Custom document actions (optional)
  document: {
    // Remove these actions for singleton documents like settings
    actions: (prev, context) => {
      // For settings document, only allow edit and publish
      if (context.schemaType === 'settings') {
        return prev.filter(
          ({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action || '')
        );
      }
      return prev;
    },
  },
});
