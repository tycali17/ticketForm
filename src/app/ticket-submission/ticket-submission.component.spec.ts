import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSubmissionComponent } from './ticket-submission.component';

describe('TicketSubmissionComponent', () => {
  let component: TicketSubmissionComponent;
  let fixture: ComponentFixture<TicketSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
