# Editorial Text Component

The Editorial Text component is designed to display formatted text content with optional document listings and notes. It's ideal for content-heavy pages such as articles, press releases, or policy documents.

## Copy Block Component

The Copy Block component (`copy-block.tsx`) is the main component in the Editorial Text module. It displays formatted text content with an optional list of downloadable documents.

### Features

- Displays a subheading, introduction copy, and main body text
- Supports HTML content via dangerouslySetInnerHTML
- Integrates with the InfoRowList component to display downloadable documents
- Fully responsive design
- Accessible structure

### Props

| Prop         | Type             | Description                                        |
| ------------ | ---------------- | -------------------------------------------------- |
| `subheading` | `string`         | Optional subheading text                           |
| `introCopy`  | `string`         | Optional HTML content for the introduction section |
| `mainBody`   | `string`         | Optional HTML content for the main body section    |
| `documents`  | `DocumentItem[]` | Optional array of documents to display             |
| `className`  | `string`         | Optional additional CSS class names                |

### DocumentItem Interface

```typescript
interface DocumentItem {
  title: string;
  hasDownload?: boolean;
}
```

### Usage Example

```tsx
import { EditorialTextCopyBlock } from "@/components/ui/molecules/editorial-text/copy-block";

export default function Page() {
  return (
    <EditorialTextCopyBlock
      subheading="Lorem ipsum dolor sit amet,"
      introCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      mainBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /><br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      documents={[
        { title: "Code of Ethics of Moncler S.p.A.", hasDownload: true },
        { title: "Code of Ethics of Sportswear Company S.p.A.", hasDownload: true },
      ]}
    />
  );
}
```

## Accessibility Considerations

The Editorial Text component follows these accessibility best practices:

- Uses semantic HTML elements for proper document structure
- Maintains proper heading hierarchy
- Ensures adequate color contrast for text content
- Provides accessible document downloads

## Styling

The component uses Tailwind CSS for styling and is designed to be responsive across different screen sizes. The default styling includes:

- Light background color (#F7F8F3)
- Proper text sizing and spacing
- Responsive padding and margins
- Consistent typography using the Moncler Gothic Web font family

## Integration with Other Components

The Copy Block component integrates with the InfoRowList component to display downloadable documents. This integration ensures a consistent UI for document listings across the application.

## Notes Component

The Notes component (`notes.tsx`) is a supplementary component in the Editorial Text module. It displays formatted notes or footnotes with a title.

### Features

- Displays a title (default: "Note") and formatted content
- Supports HTML content via dangerouslySetInnerHTML
- Fully responsive design
- Consistent styling with other Editorial Text components

### Props

| Prop        | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| `title`     | `string` | Optional title text (defaults to "Note") |
| `content`   | `string` | HTML content for the notes section       |
| `className` | `string` | Optional additional CSS class names      |

### Usage Example

```tsx
import { EditorialTextNotes } from "@/components/ui/molecules/editorial-text/notes";

export default function Page() {
  return (
    <EditorialTextNotes
      title="Note"
      content='* Change in share capital following the issue of new shares by virtue
          of the escercise of stock options according to the "2014-2018 Stock
          Option Plan Corporate Structures Italy"<br /><br />
          ** Change in share capital following the issue of new shares by virtue
          of the escercise of stock options according to the "2014-2018 Stock
          Option Plan Corporate Structures Italy" and "2014-2018 Stock Option
          Plan Top Management &amp; Key People"'
    />
  );
}
```

### Styling

The component uses Tailwind CSS for styling and is designed to be responsive across different screen sizes. The default styling includes:

- Semi-transparent background color (rgba(238, 236, 228, 0.60))
- Backdrop blur effect
- Proper text sizing and spacing
- Responsive padding and margins
- Consistent typography using the Moncler Gothic Web font family
