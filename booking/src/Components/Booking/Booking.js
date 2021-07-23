import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2021-07-18';
const schedulerData = [
  { startDate: '2021-07-18T09:00', endDate: '2021-07-18T10:00', title: 'Meeting' },
  { startDate: '2021-07-18T12:00', endDate: '2021-07-18T14:00', title: 'Go to a gym' },
];

export default () => (
  <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={9}
        endDayHour={14}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);
