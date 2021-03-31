import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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
 
  constructor(private formBuilder: FormBuilder, private fs: AngularFirestore) {
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

    

    //add data to firestore (document name is user's email), then grab
    this.fs.collection('tickets').doc(data.email).set({
      first: data.first,
      last: data.last,
      email: data.email,
      job: data.job,
      workaround: data.workaround,
      people: strPeople,
      details: data.details
    })

    var docRef = this.fs.collection('tickets').doc(data.email)
    var info: any;
    docRef.get().subscribe((ss) => {
        info = ss.data();

        form!.style.display = "none"
        results!.style.display = "flex"

        var one = document.getElementById('one')
        one!.innerText = "First name: " + info.first

        var two = document.getElementById('two')
        two!.innerText = "Last name: " + info.last

        var three = document.getElementById('three')
        three!.innerText = "Email: " + info.email

        var four = document.getElementById('four')
        four!.innerText = "Can do job? " + info.job

        var five = document.getElementById('five')
        five!.innerText = "Any workarounds? " + info.workaround

        var six = document.getElementById('six')
        six!.innerText ="People affected: " + info.people

        var seven = document.getElementById('seven')
        seven!.innerText = "" + info.details
      });
  }
}
