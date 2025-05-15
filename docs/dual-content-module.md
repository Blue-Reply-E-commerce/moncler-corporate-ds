# Dual Content Module

The Dual Content Module is a responsive component designed to display HTML content in a two-column layout on desktop and a single column on mobile, with an optional title and notification banner.

## Features

- Responsive design with automatic column layout for desktop and single column for mobile
- HTML content support with automatic sanitization
- Optional title
- Optional notification banner with success styling
- Accessible markup with proper semantic HTML and ARIA attributes

## Usage

```tsx
import { DualContentModule } from "@/components/ui/atoms/dual-content-module";

export default function MyPage() {
  return (
    <DualContentModule
      title="Titles goes here"
      content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p><p>Second paragraph of content here...</p>"
      notification="Same as Moncler Next module"
    />
  );
}
```

## Props

| Prop           | Type   | Required | Description                                 |
| -------------- | ------ | -------- | ------------------------------------------- |
| `title`        | string | No       | Optional main heading text                  |
| `content`      | string | Yes      | HTML content to display in columns          |
| `notification` | string | No       | Notification message to display in a banner |
| `className`    | string | No       | Additional CSS classes                      |
| `id`           | string | No       | Optional ID for the component               |
| `ariaLabel`    | string | No       | Optional aria-label for accessibility       |

## HTML Content

The component accepts HTML content as a string and automatically formats it into two columns on desktop and a single column on mobile. The HTML is sanitized to prevent XSS attacks.

Example content:

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</p>
<p>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.
</p>
```

## Layouts

### Desktop Layout (md and above)

- Optional title at the top spanning the full width
- Content automatically formatted into two columns
- Notification banner positioned at the bottom left

### Mobile Layout (below md)

- Optional title at the top
- Content in a single column
- Notification banner spans full width at the bottom

## Accessibility

- Uses semantic HTML elements (`h2` for title)
- Proper ARIA attributes for notification banner
- Icons marked as decorative with `aria-hidden="true"`
- Support for custom `aria-label` and `id` attributes

## Examples

### Basic Usage

```tsx
<DualContentModule content="<p>Lorem ipsum dolor sit amet...</p><p>More content here...</p>" />
```

### With Title

```tsx
<DualContentModule
  title="Titles goes here"
  content="<p>Lorem ipsum dolor sit amet...</p><p>More content here...</p>"
/>
```

### With Notification

```tsx
<DualContentModule
  content="<p>Lorem ipsum dolor sit amet...</p><p>More content here...</p>"
  notification="Same as Moncler Next module"
/>
```

### Complete Example

```tsx
<DualContentModule
  title="Titles goes here"
  content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
  notification="Same as Moncler Next module"
  className="my-8"
  id="content-section"
  ariaLabel="Content section with two columns"
/>
```

## HTML Sanitization

The component uses a built-in sanitization utility to prevent XSS attacks. The utility removes potentially dangerous elements and attributes from the HTML content.
