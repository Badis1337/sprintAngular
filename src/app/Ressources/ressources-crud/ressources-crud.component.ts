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
  conges: Events[] = [];
  date: Date;
  date2: Date;
  date3: Date;

  selectedEvent: Events = null;

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private rs: RessourcesService) {
  }

  ngOnInit() {
    this.getListeConges();
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      eventRender: function (event) {
        if (event.state === 'Accepted') {
          event.editable = false;
          event.click = true;
        } else if (event.state === 'Waiting') {
          event.editable = true;
        } else if (event.state === 'Denied') {
          event.editable = false;
          event.click = false;
        }
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      selectable: true,
      events: this.conges
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
      for (let i = 0; i < this.q.length; i++) {
        if (this.q[i].StateDemande === 'Accepted') {
          tit = 'Demande de congé acceptée';
          color = '#00FF00';
        } else if (this.q[i].StateDemande === 'Waiting') {
          tit = 'Demande de congé en attente';

          color = '#FFFF00';
        } else {
          tit = 'Demande de congé refusée';

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
          this.q[i].StateDemande);
        this.conges.push(event);
      }
    });
  }

  EventClick(data) {

    let ev: Events = new Events(data.detail.event.eventID, data.detail.event.title, data.detail.event.description,
      data.detail.event.start, data.detail.event.end, data.detail.event.color, data.detail.event.allDay, data.detail.event.state);
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
      return false;
    }


  }

  Delete() {
    console.log(this.selectedEvent);
    if (this.selectedEvent !== null) {
      this.rs.DeleteConges(this.selectedEvent.eventID).subscribe();
      document.getElementById('btn').click();
      for (let i = 0; i < this.conges.length; i++) {
        if (this.conges[i].eventID === this.selectedEvent.eventID) {
          this.conges.splice(i, 1);
        }
      }
      console.log('aaaaaaa' + this.conges);
      this.getListeConges();
      this.ucCalendar.fullCalendar('rerenderEvents');
    }


  }
}
