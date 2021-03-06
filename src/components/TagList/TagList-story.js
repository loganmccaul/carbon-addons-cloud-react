import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagList from '../TagList';

const tagListEvents = {
  className: 'some-class',
  tags: [
    { name: 'test:tag', type: 'functional' },
    { name: 'tag:test', type: 'functional' },
    { name: 'tag', type: 'functional' },
  ],
};

const tagListEventsWithTagProps = {
  className: 'some-class',
  tags: [
    { name: 'test:tag', type: 'functional', otherProps: { maxCharacters: 3 } },
    {
      name: 'tag:test',
      type: 'functional',
      otherProps: {
        className: 'bx--tag--functional__hovered bx--tag-list--tag',
      },
    },
    {
      name: 'really long tag',
      type: 'functional',
      otherProps: { maxCharacters: 5, isRemovable: true },
    },
  ],
};

const tagListEventsWithTagClassName = {
  className: 'some-class',
  tags: [
    {
      name: 'test:tag',
      type: 'functional',
      otherProps: {
        className: 'bx--tag--functional__hovered bx--tag-list--tag',
      },
    },
    {
      name: 'tag:test',
      type: 'functional',
      otherProps: {
        className: 'bx--tag--functional__hovered bx--tag-list--tag',
      },
    },
    {
      name: 'tag',
      type: 'functional',
      otherProps: {
        className: 'bx--tag--functional__hovered bx--tag-list--tag',
      },
    },
  ],
  counterTagClassName: 'bx--tag--functional__hovered',
};

storiesOf('TagList', module)
  .addWithInfo(
    'Default',
    `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component is displayed in a default state.
  `,
    () => <TagList {...tagListEvents} />
  )
  .addWithInfo(
    'Display All Editable',
    `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used in an editable state.
  `,
    () => <TagList {...tagListEvents} condense={0} isEditable />
  )
  .addWithInfo(
    'Condense 1 Editable',
    `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used to condense a list.
  `,
    () => <TagList {...tagListEvents} condense={1} isEditable />
  )
  .addWithInfo(
    'Fully Condensed',
    `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used in a fully condensed state.
  `,
    () => <TagList {...tagListEvents} condense={3} />
  )
  .addWithInfo(
    'Condense 1 Editable with Tag Properties Applied',
    `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used to condense a list.
    Custom Tag properties have also been applied.
  `,
    () => <TagList {...tagListEventsWithTagProps} />
  )
  .addWithInfo(
    'Default with Class Applied to all Tags',
    `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component is displayed in a default state with a class applied to all tags.
  `,
    () => <TagList {...tagListEventsWithTagClassName} condense={1} />
  );
