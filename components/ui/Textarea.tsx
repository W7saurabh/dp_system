// Reusable Textarea Component
// Multi-line text input with label and error message

import React from 'react';
import { TextareaProps } from '@/types';

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = '',
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary-900 mb-2">
          {label}
          {props.required && <span className="text-primary ml-1">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full px-4 py-3 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Textarea;

