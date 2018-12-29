export class Events {
  constructor(public eventID: number,
              public title: string,
              public description: string,
              public start: Date,
              public end: Date,
              public color: string,
              public allDay: true,
              public state: string,
              public editable: boolean,
              public click: boolean) {

  }
}
