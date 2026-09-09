export const loadComponent = async (
  selector: string,
  importModule: () => Promise<{ default: () => void }>,
) => {
  const element = document.querySelector(selector);

  if (!element) return;

  try {
    const module = await importModule();
    module.default();
  } catch (error) {
    console.error(`Failed to load component for selector "${selector}".`, error);
  }
};

export default loadComponent;
