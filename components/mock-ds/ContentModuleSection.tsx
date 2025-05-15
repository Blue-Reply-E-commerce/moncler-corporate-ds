"use client";

import { ContentModule } from "@/components/ui/atoms/content-module";
import { Text } from "@/components/ui/atoms/text";

export default function ContentModuleSection() {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const links = [
    { label: "Link", href: "#" },
    { label: "Link", href: "#" },
  ];

  return (
    <div className="space-y-12 mb-16">
      <div>
        <Text as="h2" size="xl" weight="medium" className="mb-4">
          Content Module
        </Text>
        <Text size="sm" color="secondary" className="mb-8">
          A responsive content display component with optional notification banner.
        </Text>
      </div>

      <div className="space-y-16">
        <div>
          <Text as="h3" size="lg" className="mb-4">
            Complete Example
          </Text>
          <ContentModule
            title="Titles goes here"
            description={loremIpsum}
            links={links}
            notification="Same as Moncler Next module"
          />
        </div>

        <div>
          <Text as="h3" size="lg" className="mb-4">
            Without Notification
          </Text>
          <ContentModule title="Titles goes here" description={loremIpsum} links={links} />
        </div>

        <div>
          <Text as="h3" size="lg" className="mb-4">
            Without Links
          </Text>
          <ContentModule title="Titles goes here" description={loremIpsum} />
        </div>
      </div>
    </div>
  );
}
