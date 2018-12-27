import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RessourcesCRUDComponent} from './ressources-crud.component';

describe('RessourcesCRUDComponent', () => {
  let component: RessourcesCRUDComponent;
  let fixture: ComponentFixture<RessourcesCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RessourcesCRUDComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
