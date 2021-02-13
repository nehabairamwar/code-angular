import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from '../api.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  fileToUpload: any;
  imageUrl: any;
  base64textString: String = "";
  closeResult = '';
  states: any[] = [
    {
      "name": "Dhaka"
    },
    {
      "name": "Chiba"
    },
    {
      "name": "Maharashtra"
    },
    {
      "name": "Azerbaijan"
    },
    {
      "name": "Darwin"
    }
  ];
  state1 = 'us';
  addForm = new FormGroup({
    state: new FormControl(this.state1)
  });
  countrys1 = 'uk';
  addForm1 = new FormGroup({
    country: new FormControl(this.countrys1)
  });
  countrys: any[] = [
    {
      "name1": "Bangladesh"
    },
    {
      "name1": "Japan"
    },
    {
      "name1": "India"
    },
    {
      "name1": "Armenia"
    },
    {
      "name1": "Australia"
    }
  ];
  allusers: object;
  data: object;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  submitted = false;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      tags: ['', Validators.required],
      states: ['', Validators.required],
      countrys: ['', Validators.required],

    }, {

    });
  }
  get f() { return this.addForm.controls; }
  open(content, data) {
    this.api.createusers(this.addForm.value).subscribe(data => {
      this.aallusers
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value, null, 4));

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = "data:image/png;base64," + btoa(binaryString);
    console.log(btoa(binaryString));
  }
  aallusers() {
    debugger
    this.api.getallusers().subscribe(responce => {
    });

  }
  onSubmit() {

  }

}
