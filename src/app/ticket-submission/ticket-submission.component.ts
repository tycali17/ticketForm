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

    form!.style.display = "none"
    results!.style.display = "flex"

    sessionStorage.setItem('first',data.first)
    sessionStorage.setItem('last',data.last)
    sessionStorage.setItem('email',data.email)
    sessionStorage.setItem('job',data.job)
    sessionStorage.setItem('workaround',data.workaround)
    sessionStorage.setItem('people',strPeople)
    sessionStorage.setItem('details',data.details)

    var result1 = sessionStorage.getItem('first');
    var result2 = sessionStorage.getItem('last');
    var result3 = sessionStorage.getItem('email');
    var result4 = sessionStorage.getItem('job');
    var result5 = sessionStorage.getItem('workaround');
    var result6 = sessionStorage.getItem('people');
    var result7 = sessionStorage.getItem('details');
    
    var one = document.getElementById('one')
    one!.innerText = "First name: " + result1

    var two = document.getElementById('two')
    two!.innerText = "Last name: " + result2

    var three = document.getElementById('three')
    three!.innerText = "Email: " + result3

    var four = document.getElementById('four')
    four!.innerText = "Can do job? " + result4

    var five = document.getElementById('five')
    five!.innerText = "Any workarounds? " + result5

    var six = document.getElementById('six')
    six!.innerText ="People affected: " + result6

    var seven = document.getElementById('seven')
    seven!.innerText = "" + result7

  }

}
