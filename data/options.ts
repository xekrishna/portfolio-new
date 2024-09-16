'use client'

export const getDefaultOptions = (back: () => void, forward: () => void, reload: () => void) => {
    // Ensure this code runs only on the client side
    const isClient = typeof window !== 'undefined';

    return [
        {
            label: "Back",
            onClick: back,  // Navigate to the previous page
        },
        {
            label: "Forward",
            onClick: forward,  // Navigate to the next page
            disabled: isClient ? window.history.length <= 1 : true,  // Disable if no forward history
        },
        {
            label: "Reload",
            onClick: reload,  // Reload the page
        },
    ];
};
