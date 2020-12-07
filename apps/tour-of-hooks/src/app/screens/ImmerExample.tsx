import React from 'react';
import produce from 'immer';

export type Shifts = {
  date: number;
  roomName: string;
  assignments: {
    staffId: number;
    staffName: string;
    occupation: string;
    time: [number, number];
  }[];
}[];

export const ImmerExample = () => {
  const base = {
    shifts: [
      {
        date: 1,
        roomName: 'Hello world',
        assignments: [
          {
            staffId: 1,
            staffName: 'Nic',
            occupation: 'Hello',
            time: [50, 100],
          },
          {
            staffId: 1,
            staffName: 'Nic',
            occupation: 'Hello',
            time: [50, 100],
          },
        ],
      },
      {
        date: 1,
        roomName: 'Hello world',
        assignments: [
          {
            staffId: 1,
            staffName: 'Nic',
            occupation: 'Hello',
            time: [50, 100],
          },
          {
            staffId: 1,
            staffName: 'Nic',
            occupation: 'Hello',
            time: [50, 100],
          },
        ],
      },
    ],
  };

  const result = produce(base, (draft) => {
    draft.shifts.forEach((s) =>
      s.assignments.forEach((a) => (a.time = a.time.map((t) => t * 100)))
    );
  });
  console.log(result);

  return <div>Immer Example</div>;
};
