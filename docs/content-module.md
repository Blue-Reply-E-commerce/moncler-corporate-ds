# Content Module

The Content Module is a responsive component designed to display content in different layouts based on screen size, with an optional notification banner.

## Features

- Responsive design with different layouts for desktop and mobile
- Optional links with arrow icons
- Optional notification banner with success styling
- Accessible markup with proper semantic HTML

## Usage

```tsx
import { ContentModule } from "@/components/ui/atoms/content-module";

export default function MyPage() {
  return (
    <ContentModule
      title="Our Mission"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      links={[
        { label: "Learn More", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
      notification="New content available"
    />
  );
}
```

## Props

| Prop           | Type                | Required | Description                                 |
| -------------- | ------------------- | -------- | ------------------------------------------- |
| `title`        | string              | Yes      | The main heading text                       |
| `description`  | string              | Yes      | The descriptive text content                |
| `links`        | ContentModuleLink[] | No       | Array of links to display                   |
| `notification` | string              | No       | Notification message to display in a banner |
| `className`    | string              | No       | Additional CSS classes                      |

### ContentModuleLink

| Property | Type   | Required | Description                      |
| -------- | ------ | -------- | -------------------------------- |
| `label`  | string | Yes      | The text to display for the link |
| `href`   | string | Yes      | The URL the link points to       |

## Layouts

### Desktop Layout (md and above)

- Two-column layout
- Title on the left
- Description and links on the right
- Notification banner positioned at the bottom left

### Mobile Layout (below md)

- Stacked layout
- Title above description and links
- Notification banner spans full width at the bottom

## Accessibility

- Uses semantic HTML elements (`h2` for title, `p` for description)
- Proper ARIA attributes for notification banner
- Icons marked as decorative with `aria-hidden="true"`
- Links have appropriate `aria-label` attributes

## Examples

### Basic Usage

```tsx
<ContentModule title="Titles goes here" description="Lorem ipsum dolor sit amet..." />
```

### With Links

```tsx
<ContentModule
  title="Titles goes here"
  description="Lorem ipsum dolor sit amet..."
  links={[
    { label: "Link", href: "#" },
    { label: "Link", href: "#" },
  ]}
/>
```

### With Notification

```tsx
<ContentModule
  title="Titles goes here"
  description="Lorem ipsum dolor sit amet..."
  notification="Same as Moncler Next module"
/>
```

### Complete Example

```tsx
<ContentModule
  title="Titles goes here"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  links={[
    { label: "Link", href: "#" },
    { label: "Link", href: "#" },
  ]}
  notification="Same as Moncler Next module"
  className="my-8"
/>
```
