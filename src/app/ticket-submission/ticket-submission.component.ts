import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticket-submission',
  templateUrl: './ticket-submission.component.html',
  styleUrls: ['./ticket-submission.component.css'],
})

export class TicketSubmissionComponent implements OnInit {

  peopleVal = 0;
  
  ticketForm = this.formBuilder.group({
    first: new FormControl('', [Validators.required]),
    last: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    job: new FormControl('', [Validators.required]),
    workaround: new FormControl('', [Validators.required]),
    people: new FormControl('', [Validators.required]),
    details: new FormControl('')
  })
 
  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
  }
  
  // errors for inputs
  firstError() {
    if (this.ticketForm.controls.first.hasError('required')) {
      return 'You must enter a value.';
    } else {
      return
    }
  }

  lastError() {
    if (this.ticketForm.controls.last.hasError('required')) {
      return 'You must enter a value.';
    } else {return}
  }
  
  emailError() {
    if (this.ticketForm.controls.email.hasError('required')) {
      return 'You must enter a value.';
    }
    return this.ticketForm.controls.email.hasError('email') ? 'Please enter a valid email.' : '';
  }

  jobError() {
    if (this.ticketForm.controls.job.hasError('required')) {
      return 'You must enter a value.';
    } else {return}
  }

  workaroundError() {
    if (this.ticketForm.controls.workaround.hasError('required')) {
      return 'You must enter a value.';
    } else {return}
  }

  peopleError() {
    if (this.ticketForm.controls.people.hasError('required')) {
      return 'Please use slider.';
    } else {return}
  }

  // for people slider
  updateCount(event:any) {
    this.peopleVal = event.value;
  }
  
  // persist data, hide form, display results
  onSubmit(data:any) {
    var strPeople = this.peopleVal.toString();
    var form = document.getElementById("content")
    var results = document.getElementById("results")
    sessionStorage.setItem('first',data.first)
    sessionStorage.setItem('last',data.last)
    sessionStorage.setItem('email',data.email)
    sessionStorage.setItem('job',data.job)
    sessionStorage.setItem('workaround',data.workaround)
    sessionStorage.setItem('people',strPeople)
    sessionStorage.setItem('details',data.details)

    form!.style.display = "none"

    results!.style.display = "flex"
    
    var one = document.getElementById('one')
    one!.innerText = "First name: " + data.first

    var two = document.getElementById('two')
    two!.innerText = "Last name: " + data.last

    var three = document.getElementById('three')
    three!.innerText = "Email: " + data.email

    var four = document.getElementById('four')
    four!.innerText = "Can do job? " + data.job

    var five = document.getElementById('five')
    five!.innerText = "Any workarounds? " + data.workaround

    var six = document.getElementById('six')
    six!.innerText ="People affected: " + strPeople

    var seven = document.getElementById('seven')
    seven!.innerText = data.details

  }

}
