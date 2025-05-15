/**
 * A simple HTML sanitization utility to help prevent XSS attacks
 *
 * Note: This is a basic implementation. For production applications with
 * high security requirements, consider using a more robust library like DOMPurify.
 *
 * @param html The HTML string to sanitize
 * @returns A sanitized version of the HTML string
 */
export function sanitizeHtml(html: string): string {
  if (!html) return "";

  // Create a new div element
  const tempElement = document.createElement("div");

  // Set the HTML content
  tempElement.innerHTML = html;

  // Remove potentially dangerous elements and attributes
  const scriptElements = tempElement.querySelectorAll("script");
  scriptElements.forEach((script) => script.remove());

  const elements = tempElement.querySelectorAll("*");
  elements.forEach((el) => {
    // Remove event handler attributes
    Array.from(el.attributes).forEach((attr) => {
      if (attr.name.startsWith("on")) {
        el.removeAttribute(attr.name);
      }

      // Remove javascript: URLs
      if (attr.name === "href" || attr.name === "src") {
        const value = attr.value.toLowerCase().trim();
        if (value.startsWith("javascript:") || value.startsWith("data:")) {
          el.removeAttribute(attr.name);
        }
      }
    });
  });

  return tempElement.innerHTML;
}
