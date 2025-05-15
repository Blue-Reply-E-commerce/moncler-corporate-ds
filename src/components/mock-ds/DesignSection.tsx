import { ActionLink } from "../ui/atoms/action-link";
import { Button } from "../ui/atoms/button";
import { Input } from "../ui/atoms/input";
import { Label, LabelWithCounter } from "../ui/atoms/label";
import { Link } from "../ui/atoms/link";
import Loader from "../ui/atoms/loader";
import { QuickLink } from "../ui/atoms/quick-link";
import { Text } from "../ui/atoms/text";
import VideoControls from "../ui/atoms/video-controls";
import VideoControlsBar from "../ui/atoms/video-controls-bar";
import { ChevronRightIcon, MailIcon, MonclerIcon } from "../ui/icons";
import { Main } from "../ui/Main";
import Accordion from "../ui/molecules/accordion";
import { ActionList } from "../ui/molecules/action-list";
import { FinancialCard } from "../ui/molecules/content-cards/financial-card";
import AccordionListRow from "../ui/molecules/listing-info/accordion-row";
import { FinancialCalendar } from "../ui/molecules/listing-info/calendar-list";
import { ResourcesList } from "../ui/molecules/listing-info/resource-list";
import { InfoRowList } from "../ui/molecules/listing-info/row-list";
import { TabLayout } from "../ui/molecules/tab-layout";
import ContentModuleSection from "./ContentModuleSection";
import SelectExample from "./SelectSection";

const actionListItems = [
  {
    href: "#",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien malesuada nec vivamus quis. Feugiat faucibus et",
  },
  {
    href: "#",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien malesuada nec vivamus quis. Feugiat faucibus et",
  },
  {
    href: "#",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien malesuada nec vivamus quis. Feugiat faucibus et",
  },
];

const infoRowListItems = [
  {
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    date: new Date(),
    hasCalendar: true,
    hasDownload: false,
    hasPreview: false,
  },
  {
    title: "Lorem ipsum",
    date: new Date(),
    hasCalendar: true,
    hasDownload: true,
    hasPreview: false,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant",
    date: new Date(),
    hasCalendar: true,
    hasDownload: false,
    hasPreview: true,
  },
  {
    title: "Lorem ipsum",
    date: new Date(),
    hasCalendar: false,
    hasDownload: true,
    hasPreview: true,
  },
];

const events = [
  {
    title: "Annual Shareholders’ Meeting for Approval of the Financial Statements at 31.12.25",
    date: new Date(),
  },
  {
    title: "Annual Shareholders’ Meeting for Approval of the Financial Statements at 31.12.25",
    date: new Date(),
  },
  {
    title: "Annual Shareholders’ Meeting for Approval of the Financial Statements at 31.12.25",
    date: new Date(),
  },
  {
    title: "Annual Shareholders’ Meeting for Approval of the Financial Statements at 31.12.25",
    date: new Date(),
  },
  {
    title: "Annual Shareholders’ Meeting for Approval of the Financial Statements at 31.12.25",
    date: new Date(),
  },
  {
    title: "Annual Shareholders’ Meeting for Approval of the Financial Statements at 31.12.25",
    date: new Date(),
  },
];

const tabsData = [
  {
    value: "tab1",
    label: "Tab-Title",
    count: 0,
    content: "This is the content for Tab 1",
  },
  {
    value: "tab2",
    label: "Tab-Title",
    count: 0,
    content: "This is the content for Tab 2",
  },
  {
    value: "tab3",
    label: "Tab-Title",
    count: 0,
    content: "This is the content for Tab 3",
  },
];

export default function DesignSection() {
  return (
    <Main className="px-4 flex flex-col gap-4 pb-20">
      <div className="flex flex-wrap gap-4 py-4">
        <Button variant="primary" aria-label="Primary Test">
          Primary test
        </Button>
        <Button variant="primary" result="99" aria-label="Primary Test">
          Primary test
        </Button>
        <Button variant="primary" aria-label="Primary Test Disabled" disabled>
          Primary test disabled
        </Button>
        <Button variant="primary" aria-label="Primary Test Disabled" disabled>
          <Loader trackColor="var(--color-secondary-200)" indicatorColor="white" />
        </Button>
        <Button variant="secondary" result="00">
          Secondary test
        </Button>
        <Button
          variant="secondary"
          icon={<ChevronRightIcon width={6.61} height={11.71} />}
          iconPosition="left"
        >
          Secondary test arrow left
        </Button>
        <Button
          variant="secondary"
          icon={<ChevronRightIcon width={6.61} height={11.71} />}
          iconPosition="right"
        >
          Secondary test arrow right
        </Button>
        <Button variant="secondary" disabled>
          Secondary test disabled
        </Button>

        <Button variant="tertiary">Tertiary test</Button>
        <Button
          variant="tertiary"
          icon={<ChevronRightIcon width={6.61} height={11.71} />}
          iconPosition="left"
        >
          Tertiary test Icon Left
        </Button>
        <Button
          variant="tertiary"
          icon={<ChevronRightIcon width={6.61} height={11.71} />}
          iconPosition="right"
        >
          Tertiary test Icon Right
        </Button>
      </div>

      <Loader width={40} height={40} showLabel />

      <div className="flex flex-wrap gap-y-4">
        <QuickLink icon={<MailIcon />} iconPosition="left">
          Quick Filter with icon{" "}
        </QuickLink>
        <QuickLink>Quick filter</QuickLink>
      </div>

      <ActionLink href="/">action link</ActionLink>
      <ActionLink href="/" stroke>
        action link with stroke
      </ActionLink>

      <ActionList items={actionListItems} />

      <SelectExample />

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:min-w-[1152px] lg:self-center">
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="draw" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="positive" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="negative" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="draw" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="positive" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="negative" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="draw" />
        <FinancialCard title="Share price" price={59.8} change={1.62} variant="positive" />
      </div>

      <FinancialCalendar
        title="Financial Calendar"
        events={events}
        footnote="(*) A conference call/meeting with institutional investors and equity research analysts will take place following the B.o.D.; details will be announced in due course."
      />

      <div className="flex flex-col gap-y-3">
        <Label size="xs" icon={<MonclerIcon />}>
          Label small
        </Label>
        <Label size="sm" icon={<MonclerIcon />}>
          Label normal
        </Label>
        <LabelWithCounter size="base" counter={10}>
          Label with counter
        </LabelWithCounter>
      </div>

      <div className="columns-2 break-inside-avoid">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
        ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I
        must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
        born and I will give you a complete account of the system, and expound the actual teachings
        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not
        know how to pursue pleasure rationally encounter consequences that are extremely painful.
        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil and pain can procure
        him some great pleasure. To take a trivial example, which of us ever undertakes laborious
        physical exercise, except to obtain some advantage from it? But who has any right to find
        fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one
        who avoids a pain that produces no resultant pleasure?
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mx-auto">
        <Input
          helperText="Insert password"
          type="password"
          error
          label="Label Error"
          defaultValue="text prova 1"
          value=""
          containerClassName="max-w-[343px]"
        />
        <Input
          helperText="Lorem ipsum"
          label="Label default"
          defaultValue="text prova 1"
          value=""
          containerClassName="max-w-[343px]"
        />
        <Input
          helperText="Lorem ipsum"
          disabled
          label="Label Disabled"
          value=""
          containerClassName="max-w-[343px]"
        />
        <Input
          helperText="Lorem ipsum"
          success
          label="Label Success"
          defaultValue="text prova 1"
          value=""
          containerClassName="max-w-[343px]"
        />
      </div>

      <div className="flex flex-wrap gap-4 items-center mx-auto">
        <VideoControls variant="light" />
        <VideoControls variant="dark" />
        <VideoControlsBar duration={480} />
        <VideoControlsBar variant="light" duration={480} />
      </div>

      <div className="p-4">
        <Text as="h2">Accordions</Text>
        <Accordion title="Title">content lorem ipsum sic dolor amet</Accordion>
        <Accordion title="Footer accordion" type="footer">
          <ul>
            <li>Test</li>
            <li>Link</li>
            <li>Test</li>
          </ul>
        </Accordion>
      </div>

      <div className="flex gap-4 justify-center">
        <div className="overflow-y-auto max-h-[100px] max-w-[720px] scrollbar-default">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
            fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
            quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
            a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>

      <InfoRowList items={infoRowListItems} />
      <ResourcesList
        title="Price Sensitive Press Release"
        items={infoRowListItems}
        viewAllLink="/resources-list"
      />

      <TabLayout tabs={tabsData} withBackground />
      <TabLayout tabs={tabsData} withBorder={false} />
      <TabLayout tabs={tabsData} />

      <ContentModuleSection />

      <div className="flex flex-col gap-y-4">
        <AccordionListRow title="shareholder infos" items={infoRowListItems} />
        <AccordionListRow title="shareholder infos" items={infoRowListItems} />
        <AccordionListRow title="shareholder infos" items={infoRowListItems} />
        <AccordionListRow title="shareholder infos" items={infoRowListItems} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/test">Link Test</Link>
        <Link href="#" priority="low" size="sm" variant="jump">
          Low Link
        </Link>
        <Link href="#" priority="high" size="sm" variant="jump">
          High Link
        </Link>

        <Link href="#" size="sm" variant="menu">
          Menu Link
        </Link>
        <Link href="#" size="sm" variant="footer">
          Footer Link
        </Link>

        <Link href="#" size="base" variant="menu">
          Menu Link
        </Link>
        <Link href="#" size="base" variant="footer">
          Footer Link
        </Link>
      </div>
    </Main>
  );
}
