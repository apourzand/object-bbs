import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { owners } from './demo-data/tasks';
import { appointments, resourcesData } from './demo-data/resources';

export default (props) => {
  const [myData, setMyData] = useState({
    data: appointments,
    resources: [
      {
        fieldName: 'roomId',
        title: 'Room',
        instances: resourcesData,
      },
      {
        fieldName: 'members',
        title: 'Members',
        instances: owners,
        allowMultiple: true,
      },
    ],
  });

  const commitChanges = ({ added, changed, deleted }) => {
    let { data } = myData;

    console.log('added: ' + JSON.stringify(added));
    console.log('added: ' + JSON.stringify(changed));
    console.log('added: ' + JSON.stringify(deleted));

    return { data };
  }

  const { data, resources } = myData;

  return (
    <Paper>
      <Scheduler
        data={data}
      >
        <ViewState
          defaultCurrentDate="2017-05-25"
        />
        <EditingState
          onCommitChanges={commitChanges}
        />
        <EditRecurrenceMenu />

        <MonthView />
        <Appointments />
        <AppointmentTooltip
          showOpenButton
        />
        <AppointmentForm />

        <Resources
          data={resources}
          mainResourceName="roomId"
        />
        <DragDropProvider />
      </Scheduler>
    </Paper>
  );
}

