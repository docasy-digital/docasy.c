import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContactForm } from './useContactForm';

// Mock global fetch
global.fetch = vi.fn();

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle successful form submission via API', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const { result } = renderHook(() => useContactForm());

    // Fill form
    await act(async () => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' },
      } as any);
      result.current.handleChange({
        target: { name: 'email', value: 'john@example.com' },
      } as any);
      result.current.handleChange({
        target: { name: 'service', value: 'Web Design' },
      } as any);
      result.current.handleChange({
        target: { name: 'budget', value: '1000' },
      } as any);
      result.current.handleChange({
        target: { name: 'message', value: 'Hello, I want a website.' },
      } as any);
    });

    // Submit
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as any);
    });

    expect(global.fetch).toHaveBeenCalled();
    expect(result.current.isSuccess).toBe(true);
  });

  it('should handle submission failure', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
    });

    const { result } = renderHook(() => useContactForm());

    // Fill form with valid data
    await act(async () => {
      result.current.handleChange({ target: { name: 'name', value: 'John Doe' } } as any);
      result.current.handleChange({ target: { name: 'email', value: 'john@example.com' } } as any);
      result.current.handleChange({ target: { name: 'service', value: 'Web Design' } } as any);
      result.current.handleChange({ target: { name: 'budget', value: '1000' } } as any);
      result.current.handleChange({ target: { name: 'message', value: 'Hello' } } as any);
    });

    // Submit
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as any);
    });

    expect(result.current.status).toBe('error');
    expect(result.current.isSuccess).toBe(false);
  });
});
