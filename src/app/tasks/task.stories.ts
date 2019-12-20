import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};
/*
storiesOf('Task', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task,
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  })
  .add('pinned', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  })
  .add('archived', () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask,
      },
    };
  }); */

// initial code simple component
/* storiesOf('Task', module)
  .add('default', () => {
    return {
      component: TaskComponent,
      props: {
        task,
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add('pinned', () => {
    return {
      component: TaskComponent,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add('archived', () => {
    return {
      component: TaskComponent,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  }); */

// updated code for using addons section

// tslint:disable-next-line: max-line-length
const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .addParameters({
    assets: ['assets/image_1.jpg', 'assets/image_2.jpg', 'assets/image_3.jpg']
  })
  .add('default', () => {
    return {
      component: TaskComponent,
      props: {
        task: object('task', { ...task }),
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add('pinned', () => {
    return {
      component: TaskComponent,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add('archived', () => {
    return {
      component: TaskComponent,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add('longTitle', () => {
    return {
      component: TaskComponent,
      props: {
        task: { ...task, title: longTitle },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  });
