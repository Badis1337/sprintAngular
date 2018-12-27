export class Conges {
  constructor(public idDemandeTimeOff: number,
              public DateBegin: Date,
              public DateEnd: Date,
              public StateDemande: string,
              public Duration?: number,
              public idresponsable?: number) {
  }
}
