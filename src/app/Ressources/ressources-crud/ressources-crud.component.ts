import {Component, OnInit, ViewChild} from '@angular/core';
import {RessourcesService} from '../ressources.service';
import {CalendarComponent} from 'ng-fullcalendar';
import {Options} from 'fullcalendar';
import {Conges} from '../../Models/Conges';
import {Events} from '../../Models/Event';

@Component({
  selector: 'app-ressources-crud',
  templateUrl: './ressources-crud.component.html',
  styleUrls: ['./ressources-crud.component.css']
})
export class RessourcesCRUDComponent implements OnInit {
  q: Conges[] = [];
  cooo: Events[] = [];
  conges: Events[] = [];
  date: Date;
  date2: Date;
  date3: Date;
  dateex;
  dateDebut;
  dateEnd;
  selected;
  selectedEvent: Events = null;

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private rs: RessourcesService) {
  }

  ngOnInit() {
    this.getListeConges();
    this.calendarOptions = {
      lazyFetching: false,
      editable: true,
      eventLimit: false,

      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      selectable: true,
      events: this.conges,
    };
  }

  clearEvents() {
    this.q = [];
  }

  loadEvents() {
    this.rs.getConges().subscribe(data => {
      this.q = data;
    });
  }

  getListeConges() {
    this.rs.getConges().subscribe(data => {
      this.q = data;
      let color;
      let tit;
      let click;
      let edit;
      for (let i = 0; i < this.q.length; i++) {
        if (this.q[i].StateDemande === 'Accepted') {
          click = false;
          edit = false;
          tit = 'Demande de congé acceptée';
          color = '#00FF00';
        } else if (this.q[i].StateDemande === 'Waiting') {
          tit = 'Demande de congé en attente';
          click = true;
          edit = true;

          color = '#FFFF00';
        } else {
          tit = 'Demande de congé refusée';
          click = false;
          edit = false;
          color = '#FF0000';
        }
        this.date = new Date(this.q[i].DateEnd);
        this.date.setDate(this.date.getDate() + 1);
        let event: Events = new Events(this.q[i].idDemandeTimeOff,
          tit,
          'Demande de congé',
          this.q[i].DateBegin
          , this.date,
          color,
          true,
          this.q[i].StateDemande, edit, click);
        this.conges.push(event);
      }
    });
    return this.conges;
  }

  EventClick(data) {
    this.selected = data;
    let ev: Events = new Events(data.detail.event.eventID, data.detail.event.title, data.detail.event.description,
      data.detail.event.start, data.detail.event.end, data.detail.event.color, data.detail.event.allDay, data.detail.event.state,
      data.detail.event.editable, data.detail.event.click);
    if (ev != null) {
      this.selectedEvent = ev;
      this.date2 = new Date(ev.start);
      this.date3 = new Date(ev.end);

      if (ev.state === 'Waiting') {
        let description = ' Start: ' + this.date2.toLocaleDateString() +
          '\n End: ' + this.date3.toLocaleDateString();
        document.getElementById('pDetails').textContent = '';
        document.getElementById('pDetails').textContent = description;

        document.getElementById('eventTitle').textContent = '';
        document.getElementById('eventTitle').textContent = ev.title;
        document.getElementById('btn').click();
      } else {
        return false;
      }
    } else {
      document.getElementById('btn2').click();
    }
  }

  render(data) {
    let event: Events = new Events(data.detail.event.eventID, data.detail.event.title, data.detail.event.description,
      data.detail.event.start, data.detail.event.end, data.detail.event.color,
      data.detail.event.allDay, data.detail.event.state, data.detail.event.editable, data.detail.event.click);
    if (event != null) {
      if (event.state === 'Accepted') {
        event.editable = false;
        event.click = true;
      } else if (event.state === 'Waiting') {
        event.editable = true;
      } else if (event.state === 'Denied') {
        event.editable = false;
        event.click = false;
      }
    }
  }


  Delete() {
    if (this.selectedEvent !== null) {
      console.log(this.selected);
      /*      console.log('l ');
            console.log(this.conges)
            for(let i = 0 ; i<this.conges.length ; i++){
              if(this.conges[i].eventID===this.selectedEvent.eventID){
                this.conges.splice(i , 1);


              }
            }
            console.log('l2 ');
            console.log(this.conges);
            document.getElementById('btn').click();
            console.log(this.selected._id);
            this.ucCalendar.fullCalendar('removeEvents',this.selected._id);*/

      // this.rs.DeleteConges(this.selectedEvent.eventID).subscribe();
      //   this.ucCalendar.fullCalendar('removeEventSources', this.conges, true);
      //  this.ucCalendar.fullCalendar('renderEvents' , this.conges , false);


    }
  }

  select(data) {

    let datee;
    datee = new Date(data.start);
    let event: Events = new Events(0, 'congé', 'demande',
      datee.toLocaleDateString(), datee.toLocaleDateString(), '',
      true, '', true, true);
    this.selectedEvent = event;
    this.openAddEditForm();

  }

  openAddEditForm() {

    document.getElementById('btn2').click();
  }

  ajouter(data) {
    this.dateDebut = this.formatDate(this.dateDebut);
    this.dateEnd = this.formatDate(this.dateEnd);
    let ev = new Conges(0, this.dateDebut, this.dateEnd, 'Waiting', 0, null);
    let event: Events = new Events(0, 'Demande de congé en atente', '',
      this.dateDebut, this.dateEnd, '#FFFF00',
      true, 'Waiting', true, true);
    this.ucCalendar.fullCalendar('renderEvent', event);
    document.getElementById('btn2').click();
    this.rs.AddConges(ev);
    this.ngOnInit();



  }

  formatDate(input) {
    let datePart = input.match(/\d+/g),
      year = datePart[0].substring(0, 4), // get only two digits
      month = datePart[1], day = datePart[2];

    return year + '-' + month + '-' + day;
  }

  updateEvent(data) {
    let datee;
    datee = new Date(data.detail.event.end);
    datee.setDate(datee.getDate() - 1);

    let ev = new Conges(data.detail.event.eventID, data.detail.event.start, datee, data.detail.event.state
    );
    console.log(ev);
    this.rs.PutConges(ev);

  }



}
