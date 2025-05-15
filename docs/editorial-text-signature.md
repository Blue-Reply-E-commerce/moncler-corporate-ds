# Editorial Text Signature Component

The Editorial Text Signature component is designed to display a title, description, and signature. It's ideal for official documents, letters, or any content that requires a personal signature.

## Signature Component

The Signature component (`signature.tsx`) is part of the Editorial Text module. It displays a title, description, and signature that can be provided either as HTML content or as an image.

### Features

- Displays a title and description
- Supports signatures as HTML content (via dangerouslySetInnerHTML)
- Supports signatures as images
- Fully responsive design
- Consistent styling with other Editorial Text components

### Props

| Prop             | Type     | Description                             |
| ---------------- | -------- | --------------------------------------- |
| `title`          | `string` | Optional title text                     |
| `description`    | `string` | Optional description text               |
| `signatureHtml`  | `string` | Optional HTML content for the signature |
| `signatureImage` | `string` | Optional image URL for the signature    |
| `className`      | `string` | Optional additional CSS class names     |

### Usage Example

```tsx
import { EditorialTextSignature } from "@/components/ui/molecules/editorial-text/signature";

export default function Page() {
  return (
    <EditorialTextSignature
      title="Remo Ruffini"
      description="Chairman and Chief Executive Officer"
      signatureImage="https://example.com/signature.png"
    />
  );
}
```

### Using HTML Signature

The component supports HTML signatures by passing HTML markup directly to the `signatureHtml` prop:

```tsx
import { EditorialTextSignature } from "@/components/ui/molecules/editorial-text/signature";

export default function Page() {
  return (
    <EditorialTextSignature
      title="Remo Ruffini"
      description="Chairman and Chief Executive Officer"
      signatureHtml={`<svg width="170" height="64" viewBox="0 0 170 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG path data here -->
      </svg>`}
    />
  );
}
```

## Accessibility Considerations

The Signature component follows these accessibility best practices:

- Uses semantic HTML elements for proper document structure
- Provides alt text for signature images
- Ensures adequate color contrast for text content

## Styling

The component uses Tailwind CSS for styling and is designed to be responsive across different screen sizes. The default styling includes:

- Light background color (#F7F8F3)
- Proper text sizing and spacing
- Responsive padding and margins
- Consistent typography using the Moncler Gothic Web font family

## Integration with Other Components

The Signature component is designed to be used alongside other Editorial Text components such as Copy Block and Notes. Together, these components provide a comprehensive solution for displaying formatted text content with signatures and notes.
